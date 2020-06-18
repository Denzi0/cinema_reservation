const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const movieSelect = document.getElementById("movie");
const total = document.getElementById("total");
let ticketPrice = +movieSelect.value;
const container = document.querySelector(".container");

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    selectedSeatsCount = selectedSeats.length;
    total.innerText = ticketPrice * selectedSeatsCount;
    count.innerText = selectedSeats.length;
}
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount()
})
container.addEventListener('click', e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})