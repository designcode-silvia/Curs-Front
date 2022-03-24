// Printar la card segons un template
// Crear un element DOM de manera dinàmica

const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () =>{
  pintarCardsProducts()
})
// Pintar tots els productes
function pintarCardsProducts() {
  products.forEach(element => {
    // const card = document.getElementById('card').textContent = 'card'+item.id

    templateCard.querySelector('img').setAttribute('src', element.img)
    templateCard.querySelector('.h3').textContent = element.name
    templateCard.querySelector('p').textContent = element.price
    templateCard.querySelector('.card-body i').textContent = element.type
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  cards.appendChild(fragment)
}