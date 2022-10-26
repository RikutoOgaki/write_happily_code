const box = document.querySelectorAll(".box");
console.log(box);
let flg = false
box.forEach((e,i) => {
    console.log(e,i);
    e.addEventListener('mousedown', () => {
        e.style.backgroundColor="skyblue"
        flg = true
        window.addEventListener('mousemove', (evt) => {
            if(flg){
                e.style.left = evt.clientX-62.5 + "px"
                e.style.top = evt.clientY-62.5 + "px"
            }
        })
    e.addEventListener('mouseup', () =>{
            e.style.backgroundColor=""
            flg = false
    })
    })
})