const btn = document.getElementById("btn");
const box = document.getElementById("box");
let add = document.createElement('p');
let text = true;
btn.addEventListener('click',()=>{
    if(text == true){
        // add.textContent = '追加された';
        // document.body.insertBefore(add,btn.nextSibling);
        // text = false;
        // console.log(text);
        box.innerHTML = '<p>追加された</p>';
        text = false;
        let tet  = '<p>追加された</p>';
    }
    else if(text == false){
        // add.textContent = '追加された';
        // document.body.insertBefore(add,add.nextSibling);
        // console.log(text);
        // box.innerHTML = '<p>追加された</p>';
        text = true;
    }
})