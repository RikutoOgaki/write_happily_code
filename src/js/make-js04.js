const box = document.querySelectorAll(".box");
let tBox ;
let num = 10;
console.log(box);
let flg = false
box.forEach((e,i) => {
    console.log(e,i);
    e.addEventListener('mousedown', (evt) => {
        console.log(evt.target);
        tBox = evt.target;
        e.style.backgroundColor="skyblue"
        num = num+=1;
        e.style.zIndex = num ;
        flg = true;     
    e.addEventListener('mouseup', () =>{
            e.style.backgroundColor=""
            flg = false
    })
    })
})

window.addEventListener('mousemove', (evt) => {
    console.log(evt);
    if(flg){
        tBox.style.left = evt.clientX-62.5 + "px"
        tBox.style.top = evt.clientY-62.5 + "px"
    }
})