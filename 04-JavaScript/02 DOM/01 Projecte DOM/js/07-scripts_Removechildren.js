/* Exercici 7: Eliminar elements, removeChild
a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender
b) Accedir a la class="navegacion" y eliminem la opció de menú Registro ́. Eliminem a
partir del pare. */

let element7;

console.log('Eliminem el primer link')
element7 = document.getElementsByClassName('navegacion')[0].children[0];
console.log(element7);
element7.removeChild(children[0]);
