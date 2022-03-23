// Construim la card1, card2, card3... 9 de manera dinàmica al carregar la plana

document.addEventListener('DOMContentLoaded', () =>{
  pintarCards();
})

// Pintem tots els productes
function pintarCards() {
  for (let i = 1; i < 10; i++) {
    const card = document.getElementById('card' + i)
    card.querySelector('img').setAttribute('src', './assets/img/shop_0'+i + '.jpg');
    card.querySelector('.h3').textContent = 'cafe'
    card.querySelector('p').textContent = '20$'
    card.querySelector('.card-body i').textContent = 'grocery'
  }
}