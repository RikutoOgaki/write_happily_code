const con = document.querySelectorAll(".con");
console.log(con);
window.addEventListener('scroll', () =>{
    console.log(window.scrollY);
    con.forEach((e,i) => {
        if(window.scrollY>= 200+i*200){
            e.classList.add("npm");
        }
    })
})