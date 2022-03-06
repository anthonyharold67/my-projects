let innerMinutes = document.getElementById("minutes");
let innerSeconds = document.getElementById("seconds");
let pomodoro = document.querySelector(".pomodoro");
let btn = document.getElementById("start");
let btnAgain = document.getElementById("again");
let audio = document.getElementById("play");
let audio2 = document.getElementById("play2");
audio.style.display="none";
audio2.style.display="none";
btnAgain.style.display = "none";
let seconds = 00;
let minutes = 00;
let counter=0;
let counter1=0;
btn.addEventListener("click",()=>{
    pomodoro.innerHTML =`<p>1. step started</p>`;
    exactPomodorCalc();
});
function exactPomodorCalc(e){
    let id=setTimeout(exactPomodorCalc,1000);

    btn.style.display = "none";
    seconds++;
    if(innerSeconds.textContent==59){
        minutes++;
        seconds = 00;
    }
    if(innerMinutes.textContent==25){
        audio.play();
        counter++;
        counter1++;
        minutes=00;
        seconds=00;
        console.log("counter",counter)
        if(counter<4){
            pomodoro.innerHTML =`<p>${counter}.step is over.5 minutes of break!</p>`;
        }else{
            pomodoro.innerHTML =`<p>Congratulations!4.step is over!</p>`;
        }      
    }
    if(minutes==5 && 2>counter>=1 && counter1==1){
        counter1++;
        audio2.play();
        pomodoro.innerHTML =`<p>${counter+1}.step started!</p>`;
        minutes=00;
        seconds =00;
    }
    if(minutes==5 && counter==2 && counter1==3){
        counter1++;
        audio2.play();
        pomodoro.innerHTML =`<p>${counter+1}.step started!</p>`;
        minutes=00;
        seconds =00;
    }
    if(minutes==5 && counter==3 && counter1==5){
        audio2.play();
        pomodoro.innerHTML =`<p>${counter+1}.step started!</p>`;
        minutes=00;
        seconds =00;
    }
    
    if(counter == 4){
        minutes=00;
        seconds=00;
        btnAgain.style.display = "inline";
        btn.style.display = "none"; 
        clearTimeout(id);
    }
    innerSeconds.innerHTML = (seconds<10) ? "0"+seconds : seconds;
    innerMinutes.innerHTML = (minutes<10) ? `0${minutes}`: minutes;
}

btnAgain.addEventListener("click",()=>{
    counter=0;
    seconds = 57;
    minutes = 24;
    btnAgain.style.display = "none";
    btn.style.display = "inline";
    pomodoro.innerHTML ="";
    exactPomodorCalc();
});


