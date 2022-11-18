const btn = document.querySelectorAll(".btn");
const text = document.querySelector(".text");
const divi = document.getElementById("divi");
const mult = document.getElementById("mult");
const minus = document.getElementById("minus");
const prasu = document.getElementById("prasu");
const icoll = document.getElementById("icoll");
console.log(text);
console.log(btn);
btn.forEach((e,i)=>{
    e.addEventListener('click',(evt) =>{
        console.log(e.value);
        text.value = e.value;
        text.style.color = "white";
        console.log(evt.target);
        if(e.value == "="){
        }
        else if(e.value == "c"){
            text.value = "";
        }
        text.value += e.value;
    })
    e.addEventListener('mousedown', ()=>{
        e.style.backgroundColor = "white";
        e.style.color = "black";
    })
    e.addEventListener('mouseup', ()=>{
        e.style.backgroundColor = "";
        e.style.color = "";
    })
})