let result = document.querySelector(".result");
let sevenNum = document.querySelector(".seven");
let eightNum = document.querySelector(".eight");
let nineNum = document.querySelector(".nine");
let sixNum = document.querySelector(".six");
let fiveNum = document.querySelector(".five");
let fourNum = document.querySelector(".four");
let threeNum = document.querySelector(".three");
let twoNum = document.querySelector(".two");
let oneNum = document.querySelector(".one");
let zeroNum = document.querySelector(".zero");
let operator = document.getElementsByClassName("operator");
let number = document.getElementsByClassName("number");
let resetButton = document.querySelector(".reset");
let delButton = document.querySelector(".del");
let plusMinus = document.querySelector(".plus-minus");
let math = document.getElementsByClassName("math");
delButton.style.display ="none";


let a ="";
for(let i=0; i<number.length; i++){
    number[i].addEventListener("click", (e) => {
        delButton.style.display ="inline";
        resetButton.style.display ="none";
        if(e.target.innerHTML==","){
            a +=".";
        }else{
            a += e.target.innerHTML;
        }
        
        result.innerHTML=a;
    });
}

let b="";
let total ="";

resetButton.addEventListener("click",()=>{
    result.innerHTML="0";
})
for(let i=0;i<math.length;i++){
    math[i].addEventListener("click",()=>{
        math[i].style.backgroundColor="azure";
        math[i].style.color="black";
    })
}
for(let i=0; i<operator.length; i++){
    operator[i].addEventListener("click",myFunction2)
}
let x = "";
function myFunction2(e){
    if(e.target.innerHTML=="±"){
        a = -1*a;
        b=a;
        result.innerText=a;
    }
    if(e.target.innerHTML == "/"){
        myFunction();
        x = "/";
    }else if(e.target.innerHTML == "="){
        myCalculator();
        for(let i=0;i<math.length;i++){
            if(i!=0){
                math[i].style.backgroundColor="#FFA000";
                math[i].style.color="white";
            }else{
                math[0].style.backgroundColor="#BDBDBD";
                math[0].style.color="black";
            }
            
        }
    }else if (e.target.innerHTML == "+"){
        myFunction();
        x = "+";
    }else if(e.target.innerHTML == "-"){
        myFunction();
        x = "-";
    }else if(e.target.innerHTML =="x"){
        myFunction();
        x = "*";
    }else if(e.target.innerHTML == "%"){
        myFunction();
        x ="%";
    }else if(e.target.innerHTML =="C"){
        myDel();
    }
    
}
let myPlusMinus = ()=>{
    a = -1*a;
    result.innerHTML=a;
};

function myFunction(){
    b = a;
    a="";
    result.innerHTML=b;
}

function myCalculator(){
    if (x == "/"){
        if(b=="0"){
            total = (+b) / (+a);
        }else if(a=="0"){
            total="Error";
        }else{
            total = (+b) / (+a);
        }
        result.innerHTML=total;
    }else if(x =="+"){
        total = (+b) + (+a);
        result.innerHTML=total;
    }else if(x =="-"){
        total = (+b) - (+a);
        result.innerHTML=total;
    }else if(x =="%"){
        total = ((+b) /100)*(+a);
        result.innerHTML=total;
    }else if(x =="*"){
        total = (+b) * (+a);
        result.innerHTML=total;
    }
}


let myDel = () =>{
    a = "";
    result.innerHTML=a;
    delButton.style.display ="none";
    resetButton.style.display ="inline";
}
