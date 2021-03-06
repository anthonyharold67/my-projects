let guessNumber = document.querySelector("input[type=text]");
let guessCheck = document.querySelector("#check");
let result = document.getElementById("result");
let right = document.getElementById("right");
let arr = document.getElementById("arr");
let tryAgain = document.getElementById("reset");
const form = document.querySelector("#form");
let headerColor = document.getElementById("header");
let footerColor = document.getElementById("footer");
let images = document.querySelector(".image")
let again = document.getElementById("again");

tryAgain.style.display ="none";
again.style.display ="none";
guessNumber.addEventListener("change",myGuessNumber);

let num = Math.round(Math.random() * 100);
let myArray = [];
again.addEventListener("click", ()=>{
    window.location.reload();
})
guessCheck.addEventListener("click",(e)=>{
    e.preventDefault();
    myCounter();
    form.reset();
});
function myGuessNumber() {
    let guess = guessNumber.value;
    myArray.push(guess);
    
    if (guess>100 || guess<0 || isNaN(guess)) {
        result.innerHTML = "The number you entered must be between 1 and 100 please try again";
    }else{
        
        if(guess == num){
            result.innerHTML = "Conguralations on your win!"
            guessCheck.style.display = "none";
            document.body.style.backgroundImage = "url('https://st3.depositphotos.com/5504648/13900/v/600/depositphotos_139000460-stock-illustration-congratulations-calligraphy-greeting-card.jpg')";
            header.style.color = "black";
            footer.style.color = "black";
            footer.style.marginTop = "88px";
            again.style.display ="block";
        }else if(guess<num){
            result.innerHTML = `Enter the ${guess} between 100`;
        }else if(guess>num){
            result.innerHTML = `Enter the 1 between ${guess}`;
        }
    }
    arr.innerHTML = myArray;
    guessNumber.value = "";
    
}

let counter = 10;
function myCounter() {
    counter--;
    right.innerHTML = counter;
    if (counter<=0) {
        guessCheck.style.display = "none";
        result.innerHTML = "Game over!\nTry Again!"
        tryAgain.style.display= "inline";
        images.style.display="flex";
    }
}
tryAgain.addEventListener("click",()=>{
    window.location.reload();
})