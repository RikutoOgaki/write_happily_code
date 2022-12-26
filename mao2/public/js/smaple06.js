const timertext = document.getElementById("btn_text");
const stratBtn = document.getElementById("strat_btn");
const stopBtn = document.getElementById("stop_btn");
console.log(timertext);
console.log(stratBtn);
console.log(stopBtn);

let strattime;
let el_time;
let timer_id;

stopBtn.disabled = true;

stratBtn.addEventListener("click",() =>{
    strattime = Date.now();
    stratBtn.disabled = true;
    stopBtn.disabled = false;
    timer_id = setInterval(go_timer,10);
});

stopBtn.addEventListener("click", () =>{
    stratBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timer_id);
});

function add_zero(value){
    if(value<10){
        value = "0" + value
    }
    return value
}

function arr_timer(){
    let sec = Math.floor(el_time%60000/1000);
    let min = Math.floor(el_time%3600000/60000);
    let hour =Math.floor(el_time/3600000);

    sec = add_zero(sec);
    min = add_zero(min);
    hour = add_zero(hour);

    timertext.innerHTML = `${hour}:${min}:${sec}`;
};

let go_timer = () =>{
    let time_now = Date.now();
    el_time = time_now - strattime;
    arr_timer();
}