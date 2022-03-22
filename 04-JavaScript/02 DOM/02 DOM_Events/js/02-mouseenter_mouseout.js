// Exercici 2, mouseenter, mouseout
// a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White
var canviEstil = document.getElementsByClassName('navegacion')[0];
console.log(canviEstil);

canviEstil.addEventListener("mouseenter", canviFondo);


function canviFondo() {
    canviEstil.style.backgroundColor='white';
} 


// b) Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor=transparent)
canviEstil.addEventListener("mouseout", canviFondo2);

function canviFondo2() {
    canviEstil.style.backgroundColor='transparent';
} 