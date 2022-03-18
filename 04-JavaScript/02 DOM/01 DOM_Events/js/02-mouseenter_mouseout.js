// Exercici 2, mouseenter, mouseout
// a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White
var canviEstil = document.getElementsByClassName('navegacion')[0];
console.log(canviEstil);

canviEstil.addEventListener ("mouseenter", canviFondo);


function canviFondo() {
    alert('hola que tal');
} 



// b) Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor=transparent)

