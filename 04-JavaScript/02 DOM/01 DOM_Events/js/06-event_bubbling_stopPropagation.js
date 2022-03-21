/* Exercici 6: Event Bubbling: stopPropagation
Les següents variables recullen información de la primera card
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');
Afegeix un eventListener, per tal de que capturi el click en cada un d’ells. Escriu en consola un missatge corresponent a cada event.
Que pasa?, com ho podem evitar? */

/* const cardDiv = document.querySelector('.card');
console.log(cardDiv);
cardDiv.addEventListener('click', clickCard);

function clickCard(event) {
    console.log('cardDiv');
    event.stopPropagation();
}

const infoDiv = document.querySelector('.info');
console.log(infoDiv);
infoDiv.addEventListener('click', clickCard2);

function clickCard2(event) {
    console.log('infoDiv');
    event.stopPropagation();
}

const titulo = document.querySelector('.titulo');
console.log(cardDiv);
titulo.addEventListener('click', clickCard3);

function clickCard3(event) {
    console.log('titulo');
    event.stopPropagation();
} */

// switch case - metodo switch

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (event) =>{
    let element = event.target.className;
    console.log(event);
    switch (element){
        case 'card':
            console.log('clickCard');
            event.stopPropagation();
            break;
    
        case 'info':
            console.log('info');
            event.stopPropagation();
            break;

        case 'titulo':
            console.log('titulo');
            event.stopPropagation();
            break;
    }
});

    



