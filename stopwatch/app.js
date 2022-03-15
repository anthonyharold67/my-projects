const timesContent = document.getElementById("times")
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const millisecondEl = document.getElementById("millisecond");
const start = document.getElementById("start-stop");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const finishBtn = document.querySelector(".finish");
const ulEl = document.querySelector("#ul");
const dateHeader = document.querySelector("#date");
let newDate=new Date().toLocaleDateString('tr-ca');
let newHour;
setInterval(()=>{
    newHour=`${new Date().getHours().toString().padStart(2, "0")}:${new Date().getMinutes().toString().padStart(2, "0")}:${new Date().getSeconds().toString().padStart(2, "0")}`;
},1000)
dateHeader.textContent = newDate;
let [hours,minutes,seconds,milliseconds,counters] = [0,0,0,0,0];
let timer;
stopBtn.style.display = 'none';

start.addEventListener("click",(e)=>{
    if(e.target.classList.contains("start") || e.target.classList.contains("fa-play")){
        timer = setInterval(stopWatch,10);
        startBtn.style.display = "none";
        stopBtn.style.display = 'inline';
    }else if(e.target.classList.contains("stop") || e.target.classList.contains("fa-pause")){
        startBtn.style.display = "inline";
        stopBtn.style.display = 'none'
        clearInterval(timer);
    }else if(e.target.classList.contains("finish") || e.target.classList.contains("fa-stop")){
        clearInterval(timer);
        startBtn.style.display = "inline";
        stopBtn.style.display = 'none'
        counters++;
        ulEl.innerHTML +=`<li>${counters}.Period Times → ${timesContent.textContent}<small> Time→${newHour}</small></li>`
        hours=0;
        minutes=0;
        seconds=0;
        milliseconds=0;
        hourEl.textContent = hours.toString().padStart(2, "0");
        minuteEl.textContent = minutes.toString().padStart(2, "0");
        secondEl.textContent = seconds.toString().padStart(2, "0");
        millisecondEl.textContent = milliseconds.toString().padStart(2, "0");
    }
})

const stopWatch = ()=>{
    milliseconds++;
    if(milliseconds >99){
        milliseconds =0;
        seconds++;
    }
    if(seconds>59){
        seconds=0;
        minutes++;
    }
    if(minutes>59){
        minutes=0;
        hours++;
    } 
    if(hours == 24){
        clearInterval(timer);
    }   
    
    hourEl.textContent = hours.toString().padStart(2, "0");
    minuteEl.textContent = minutes.toString().padStart(2, "0");
    secondEl.textContent = seconds.toString().padStart(2, "0");
    millisecondEl.textContent = milliseconds.toString().padStart(2, "0");
    

}