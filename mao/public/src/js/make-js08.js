const box = document.querySelectorAll(".box");
console.log(box);
let flg = false;
let tBox;
let num = 10
box.forEach((e,i) => {
    e.addEventListener('mousedown',(evt)=>{
        console.log(evt.target);
        tBox = evt.target;
        e.style.backgroundColor = "blue";
        num = num += 1;
        e.style.zIndex = num;
        flg = true;
    })
    e.addEventListener('mouseup',()=>{
        e.style.backgroundColor = "";
        flg = false;
    })
})
window.addEventListener('mousemove', (evt)=>{
    if(flg){
        tBox.style.left = evt.clientX-62.5 + "px";
        tBox.style.top = evt.clientY-62.5 + "px";
    }
})