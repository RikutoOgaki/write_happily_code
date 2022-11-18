const en = document.getElementById("en");
const link = document.querySelectorAll("a");
console.log(en);
console.log(link);
let flg = false;
window.addEventListener("mousemove",(evt) =>{
    console.log(evt.clientX,evt.clientY);
    // en.style.top = evt.clientY + "px";
    // en.style.left = evt.clientX + "px";
    flg = true;
    if(flg){
        en.style.transform = 
        'translate(' + evt.clientX  + 'px,' + evt.clientY  + 'px)';
    }
});
link.forEach((e)=>{
    e.addEventListener("mouseover",(evt) =>{
        en.classList.add("maru");
    });
    e.addEventListener("mouseleave",()=>{
        en.classList.remove("maru");
    })
})

// if (!hovFlag) {
//     stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
//     }

