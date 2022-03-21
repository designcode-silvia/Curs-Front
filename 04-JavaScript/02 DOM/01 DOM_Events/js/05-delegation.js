/* Exercici 5: delegation
Com hem vist, la següent variable recull información de la primera card
const cardDiv = document.querySelector('.card');
Captura l’event click, per cada una de les classes: categoria concierto, titulo, precio.
Fes servir les delegacions, per controlar els events de cada categoría. */

/* const cardDiv = document.querySelector('.card');
console.log(cardDiv);

// Arrow function - no declaramos el nombre de la función, solo le especificamos el parametro.
let concierto = document.querySelector('.concierto');
concierto.addEventListener('click', (event) => {
console.log('item "concierto" was clicked');
});

let musica = document.querySelector('.titulo');
musica.addEventListener('click', (event) => {
console.log('item "titulo" was clicked');
});

let precio = document.querySelector('.precio');
precio.addEventListener('click', (event) => {
console.log('item "precio" was clicked');
}); */ 


const classInfoCard = document.querySelector('.info');
console.log(classInfoCard);

classInfoCard.addEventListener('click', (event) =>{
    console.log(event);
    let element=event.target.className;
    switch (element) {
        case 'categoria concierto':
        console.log('categoria concierto');
        break;
        case 'titulo':
        console.log('titulo');
        break;
        case 'precio':
        console.log('precio');
        break;
}
}); 
