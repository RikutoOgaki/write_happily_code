const tab = document.getElementById("reversi");
console.log(tab);
let tbody = document.createElement("tbody");
tab.appendChild(tbody);
for(let i=1; i<9; i++){
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for(let j=1; j<9; j++){
        let td = document.createElement("td");
        tr.appendChild(td);
        if(i===4&&j===4){
            td.textContent = "●";
        }
        else if(i===5&&j===5){
            td.textContent = "●";
        }
        else if(i===5&&j===4){
            td.textContent = "○";
        }
        else if(i===4&&j===5){
            td.textContent = "○";
        }
        console.log(td);
            td.addEventListener("click",()=>{
                console.log("発火");
                if(td.textContent == ""){
                    td.textContent = "●";
                }
                else if(td.textContent == "○"){
                    td.textContent = "";
                }
                else{
                    td.textContent = "○"
                }
        });
    }
}