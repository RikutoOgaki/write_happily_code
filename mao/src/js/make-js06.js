const btn =  document.getElementById("btn");
const tet = document.getElementById("text");
console.log(btn);
console.log(tet);
let flg = true;
btn.addEventListener('click' , () => {
    tet.innerHTML = "ここにでてくるよ";
    if(flg == true){
        tet.innerHTML = "押された";
        flg = false
    }
    else if(flg == false){
        tet.innerHTML = "もっかい押された";
        flg = true
    }
});