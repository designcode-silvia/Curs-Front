/* Exercici 4: QuerySelector
Mostra per consola:
• La primera .card
• L’element de la classe info del contenidor premium
• La segona card de hospedaje
• El formulari per id
• El primer menú de navegació <nav> */

let element4

console.log('primera card')
element4 = document.querySelector('.card');
console.log(element4);

console.log('element de la classe info del contenidor premium')
element4 = document.querySelector('.premium .info');
console.log(element4);

console.log('segona card de hospedaje')
//querySelectorAll --> se li té que posar all, encara que només volguém accedir a aquell element en particular.
element4 = document.querySelectorAll('.hospedaje .card')[2];
console.log(element4);

console.log('formulari per id')
element4 = document.querySelector('#formulario');
console.log(element4);

console.log('primer menu de navegació')
element4 = document.querySelector('.navegacion');
console.log(element4);