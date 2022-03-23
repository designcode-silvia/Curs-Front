//PRINTEM CARDS
//COMENCEM PER PRINTAR LA card1
//1 Event, LOAD DOMContentLoad
//2 Com construim la card1
//3 Com modifiquem contingut dinàmicament

const card = document.getElementById('card1')

document.addEventListener('DOMcontentLoaded', () =>{
  firstCard();
});

// Printar el primer producte
const firstCard = function firstCard() {
  card.querySelector('img').setAttribute('src', './assets/img/shop_01.jpg');
  card.querySelector('.h3').textContent = 'cafe'
  card.querySelector('p').textContent = '20$'
  card.querySelector('.card-body i').textContent = 'grocery'
};