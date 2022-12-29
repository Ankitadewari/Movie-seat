const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied');
const count= document.getElementById('count');
const total= document.getElementById('total');
const movieselect= document.getElementById('movie');

const ticketprice = +movieselect.value;

//function to calculate price
function updatedselectedcount(){
    const selectedseats = document.querySelectorAll('.row.seat.selected');
    const selectedseatscount = selectedseats.length;
    count.innerText = selectedseatscount;
    total.innerText = selectedseatscount * ticketprice;
}

container.addEventListener('click',e=>{
   if
   (e.target.classList.contains('seat')&&
   !e.target.classList.contains('occupied'))
   {
    e.target.classList.toggle('selected');

    updatedselectedcount();
   }
});


