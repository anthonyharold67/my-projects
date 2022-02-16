let lotteryNum = document.querySelector("input[type=number]");
// console.log(lotteryNum);
let startButton = document.getElementById("start");
// console.log(startButton);
let luckyNumbers = document.querySelector(".output");
// console.log(luckyNumbers);

startButton.addEventListener("click",myLotteryNum);

function myLotteryNum() {
    luckyNumbers.innerHTML="";
    let n = lotteryNum.value;
    let myArray = [];
    if(n==""){
        alert("Please enter a number");
    }else if(n>8){
        alert("Your number must be between 1 and 8!")
    }else{
        for (let i = 0; i <n;i++){
            myArray = [];
            while (true){
                let number = Math.round(Math.random()*90);
                if(!myArray.includes(number) && number!=0){
                    myArray.push(number);
                    if(myArray.length == 7){
                        break;
                    }
                }
            }
            myArray.push(Math.round(Math.random()*90));
            let newArray = myArray.slice(0,6).sort(function(a, b){return a - b}).join("-");
            let secondArray = myArray.slice(6,8).join("|");
            let result = newArray + "|"+ secondArray;
            let luckyNum = document.createElement("p");
            luckyNumbers.appendChild(luckyNum);
            luckyNum.innerHTML = result;
        }
    }
    
}

