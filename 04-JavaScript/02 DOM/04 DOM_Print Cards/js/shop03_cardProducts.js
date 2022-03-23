//Printem cards de manera dinàmica sobre l'objecte products (data.js)
//Fem servir el foreach

document.addEventListener('DOMContentLoaded', () =>{
  pintarCardsProducts();
});

// Pintem tots els productes
function pintarCardsProducts() {
  products.forEach(element => {
    const card = document.getElementById('card' + element.id);
    card.querySelector('img').setAttribute('src', element.img);
    card.querySelector('.h3').textContent = element.name
    card.querySelector('p').textContent = element.price
    card.querySelector('.card-body i').textContent = element.type
  })
}