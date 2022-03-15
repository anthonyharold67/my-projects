const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".container .seat");
const notOccupiedSeats = document.querySelectorAll(".container .seat:not(.occupied)")
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const video = document.getElementById("video");
const movieSelectBox = document.getElementById("movie");

let currentMovieIndex = localStorage.getItem("selectedMovie") ? localStorage.getItem("selectedMovie") : movieSelectBox.selectedIndex;
let currentTicketPrice = localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice") : movieSelectBox.value;
window.addEventListener("load",()=>{
    movieSelectBox.selectedIndex = currentMovieIndex;
    displaySeats();
    updateMovieInfo();
    updateMovieVideo();
    
});
movieSelectBox.addEventListener("change",(e)=>{
    let ticketPrice = e.target.value;
    let movieIndex = e.target.selectedIndex;
    setMovieDataToLocalStorage(ticketPrice,movieIndex);
    updateMovieInfo();
    updateMovieVideo();
});

const setMovieDataToLocalStorage = (ticketPrice,movieIndex)=>{
    localStorage.setItem("selectedMovie",movieIndex);
    localStorage.setItem("selectedMoviePrice",ticketPrice);
    
    currentTicketPrice = localStorage.getItem("selectedMoviePrice"); 
    currentMovieIndex = localStorage.getItem("selectedMovie");
};

container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");//toggle hem ekler hem siler
    }
    updateMovieInfo();

});

const updateMovieInfo = () => {
    let selectedSeats = document.querySelectorAll(".row .seat.selected");

    let selectedSeatsIndexArray = [...selectedSeats].map(seat => [...allSeats].indexOf(seat));
    localStorage.setItem("selectedSeats",JSON.stringify(selectedSeatsIndexArray));
    count.innerText = selectedSeatsIndexArray.length;
    film.innerText = movieSelectBox.options[currentMovieIndex].innerText.split("(")[0];
    total.innerText = selectedSeatsIndexArray.length * currentTicketPrice;
    
}
const updateMovieVideo = ()=>{
    if(currentMovieIndex == 0){
        video.src="https://www.youtube.com/embed/5EiV_HXIIGs";
    }else if(currentMovieIndex == 1){
        video.src="https://www.youtube.com/embed/vVJeYMRam0o";
    }else if(currentMovieIndex == 2){
        video.src="https://www.youtube.com/embed/Xey1oYCWbV4";
    }else if(currentMovieIndex == 3){
        video.src="https://www.youtube.com/embed/UcmZN0Mbl04";
    }
}

const displaySeats = () => {
    let selectedSeatsFromStorage = JSON.parse(localStorage.getItem("selectedSeats"));
    if(selectedSeatsFromStorage != null && selectedSeatsFromStorage.length > 0){
        allSeats.forEach((seat,index)=>{
            if(selectedSeatsFromStorage.indexOf(index) != -1){
                seat.classList.add("selected");
            }
        })
    }
} 
