// Your code here
const moviePic = document.querySelector("#poster");
const buyTicketButton = document.querySelector("#buy-ticket");
const movieTitle = document.getElementById("title");
const movieDuration = document.querySelector("#runtime");
const movieDescription = document.querySelector("#film-info");
const movieShowTime = document.querySelector("#showtime");
const movieList = document.querySelector(".film.item");
const availableTickets = document.getElementById("ticket-num");
const capacity = document.getElementById("capacity")

// RUN MAIN FUNCTIONS AND GET DATA FROM
document.addEventListener('DOMContentLoaded', () =>{


    fetch('http://localhost:3000/films')
     .then((response) => response.json())
     .then(renderFlatDango);

    function renderFlatDango(movieData){
        movieData.forEach((movie) => {
            const newLi = document.createElement("li");
            newLi.textContent = movie.title;
            movieList.appendChild(newLi);

            newLi.addEventListener('click', (e) =>{
                e.preventDefault(onclick)
                movieTitle.textContent = movie.title
                movieDuration.textContent = movie.runtime +  "  minutes"
                movieDescription.textContent = movie.description
                movieShowTime.textContent = movie.showtime
                moviePic.src = movie.poster
                availableTickets.textContent= movie.capacity-movie.tickets_sold
                capacity.textContent ="Capacity  "  +movie.capacity

            })
        });
    }
    buyTicketButton.addEventListener('click', () =>{
      const buyTickets = parseInt(availableTickets.textContent)

      if (buyTickets > 0) {
        availableTickets.textContent =buyTickets-1

      }else if (buyTickets===0) {
        alert("SOLD OUT!")
      }

    })

});


