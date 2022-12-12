const btn = document.getElementById("btn");
const box = document.querySelectorAll(".box");
console.log(box);
console.log(btn);

box.forEach((e)=>{
    btn.addEventListener("click", () =>{
        if(e.style.backgroundColor == ""){
            e.style.backgroundColor = "tomato";
        }
        else if(e.style.backgroundColor == "blue"){
            e.style.backgroundColor = "tomato";
        }
        else{
            e.style.backgroundColor = "blue";
        }
    })
})