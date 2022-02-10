let birthdayYear = document.getElementById('years');
let birthdayPicker = document.querySelector("input[name=birthday]");
let resets = document.getElementById("reset");
let birthdayMonths = document.getElementById("months");
let birthdayDays = document.getElementById("days");
let birthdayHours = document.getElementById("hours");
let birthdayMinutes = document.getElementById("minutes");
let birthdaySeconds = document.getElementById("seconds");
let images = document.getElementById("loading");
let happy = document.getElementById("happy");

myDate.max = new Date().toLocaleDateString('en-ca');//maksimum seçilecek tarihi güncel tarih olarak ayarladım

birthdayPicker.addEventListener("click",()=>{
    document.body.style.backgroundImage = "url('https://picsum.photos/id/1063/1368/920')";
})
resets.addEventListener("click",()=>{
    window.location.reload(false);
})
birthdayPicker.addEventListener("change",exactAgeCalc);
function exactAgeCalc(){
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    
    let months = new Date().getMonth()-new Date(birthdayPicker.value).getMonth();
    
    if (months<0){
        months +=11;
        year -= 1;
    }
    months = (months<10) ? "0"+months : months;
    let days = new Date().getDate()-new Date(birthdayPicker.value).getDate();
    
    if (days<0){
        days +=31;
    }
    days = (days<10) ? "0"+days : days;
    
    let hours = new Date().getHours();
    hours = (hours<10) ? "0"+hours : hours;
    let minutes = new Date().getMinutes();
    minutes = (minutes<10) ? "0"+minutes : minutes;
    let seconds = new Date().getSeconds(); 
    seconds = (seconds<10) ? "0"+seconds : seconds;
    year = (year<10) ? "0"+year : year;
    if(months ==00 && days ==00){
        happy.style.display='flex';
        setTimeout("birth.style.visibility = 'hidden'",10000);
        setTimeout("window.location.reload(false)",10000)
    }
    birthdayYear.innerHTML = year;
    birthdayMonths.innerHTML = months;
    birthdayDays.innerHTML = days;
    birthdayHours.innerHTML = hours;
    birthdayMinutes.innerHTML = minutes;
    birthdaySeconds.innerHTML = seconds;
    setTimeout(exactAgeCalc, 1000); 
};

function imagesHidden() {
    setTimeout("images.style.visibility = 'hidden'",1000)
}
images.addEventListener("load",imagesHidden());

