const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row.seat:not(.occupied');
const count= document.getElementsById('count');
const total= document.getElementsById('total');
const movieselect= document.getElementsById('movie');

const ticketprice = +movieselect.value;

container.addEventListener('click',(e)=>{
    console.log(e.target);
})
