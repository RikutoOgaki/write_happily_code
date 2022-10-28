const btn =  document.getElementById("btn");
const tet = document.getElementById("text");
const clo = document.querySelector(".wrap")
console.log(btn);
console.log(tet);
console.log(clo);
let flg = true;
btn.addEventListener('click' , () => {
    if(flg == true){
        tet.innerHTML = "押された";
        tet.style.color = "white"
        clo.style.backgroundColor = "blue";
        flg = false
    }
    else if(flg == false){
        tet.innerHTML = "もっかい押された";
        clo.style.backgroundColor = "tomato";
        flg = true
    }
});