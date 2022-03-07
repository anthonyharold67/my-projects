const minute= document.getElementById("minute");
const hour= document.getElementById("hour");
const second= document.getElementById("second");
const date= document.getElementById("date");

window.addEventListener("load",()=>{
    dateClock();
    
})
function dateClock(){
    let newHour=new Date().getHours();
    let newMinute=new Date().getMinutes();
    let newSecond=new Date().getSeconds();
    let newDate=new Date().toLocaleDateString('tr-ca');
    minute.innerHTML = newMinute.toString().padStart(2, "0");
    hour.innerHTML = newHour.toString().padStart(2, "0");
    second.innerHTML = newSecond.toString().padStart(2, "0");
    date.innerHTML=newDate;
    setInterval(dateClock,1000);
}