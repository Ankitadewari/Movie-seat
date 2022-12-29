const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied');
const count= document.getElementById('count');
const total= document.getElementById('total');
const movieselect= document.getElementById('movie');

let ticketprice = +movieselect.value;

//function to calculate price
function updatedselectedcount(){
    const selectedseats = document.querySelectorAll('.row.seat.selected');

    //copy selected seats
    //map thru array
    //return new array indexes

    const seatindex = [...selectedseats].map(function(seat){
        return[...seat].indexOf(seat)
    });
   localStorage.setItem('selectedseats',JSON.stringify(seatindex));
    const selectedseatscount = selectedseats.length;
    count.innerText = selectedseatscount;
    total.innerText = selectedseatscount * ticketprice;
    
}
//movie select
movieselect.addEventListener('change', e=>{
    ticketprice= +e.target.value;
    updatedselectedcount();
});


container.addEventListener('click',e=>{
   if
   (e.target.classList.contains('seat')&&
   !e.target.classList.contains('occupied'))
   {
    e.target.classList.toggle('selected');

    updatedselectedcount();
   }
});

updatedselectedcount();


