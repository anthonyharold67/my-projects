let guessNumber = document.querySelector("input[type=number]");
let guessCheck = document.querySelector("input[type=button]");
let result = document.getElementById("result");
let right = document.getElementById("right");
let arr = document.getElementById("arr");
let tryAgain = document.getElementById("reset");
tryAgain.style.display ="none";
let headerColor = document.getElementById("header");
let footerColor = document.getElementById("footer");
let images = document.querySelector(".image")
let again = document.getElementById("again");
again.style.display ="none";
guessNumber.addEventListener("change",myGuessNumber);
guessCheck.addEventListener("click",myCounter);
let num = Math.round(Math.random() * 100);
let myArray = [];
// let counter = 10;
function myGuessNumber() {
    let guess = guessNumber.value;
   /*  let text;
    switch (guess){
        case (guess== num):
            text = `Conguralations on your win!`
            result.innerHTML = text;
            guessCheck.style.display = "none";
            break;
        case (guess<num):
            text = `Enter the ${guess} between 100`;
            result.innerHTML = text;
        case (guess>num):
            text = `Enter the 0 between ${guess}`;
            result.innerHTML = text;
        default:
            text = "No value found";
            result.innerHTML = text;
    } */
    
    myArray.push(guess);
    if (guess>100){
        alert("The number you entered must be between 1 and 100 please try again");
        window.location.reload();
    }else if(guess == num){
        result.innerHTML = "Conguralations on your win!"
        guessCheck.style.display = "none";
        document.body.style.backgroundImage = "url('https://st3.depositphotos.com/5504648/13900/v/600/depositphotos_139000460-stock-illustration-congratulations-calligraphy-greeting-card.jpg')";
        header.style.color = "black";
        footer.style.color = "black";
        footer.style.marginTop = "88px";
        again.style.display ="block";
    }else if(guess<num){
        result.innerHTML = `Enter the ${guess} between 100`;
        // myArray.push(guess);
        // arr.innerHTML = myArray;
    }else if(guess>num){
        result.innerHTML = `Enter the 1 between ${guess}`;
        // myArray.push(guess);
        // arr.innerHTML = myArray;
    }
    
    arr.innerHTML = myArray;
    
}

let counter = 5;
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