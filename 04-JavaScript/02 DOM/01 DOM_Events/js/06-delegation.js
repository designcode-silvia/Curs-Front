/* Exercici 6: textContent
Modificarem el següent text: 
Encuentra hospedaje para tus próximas vacaciones */

let element6;

console.log('Modificació del text')
element6 = document.querySelectorAll("#formulario")[0];
element6.textContent = 'Modificació del text'  
console.log(element6);

// Modifiquem la imatge
let element;

console.log('Modificació del text')
element = document.querySelectorAll(".card img")[0];
element.src = 'img/hacer2.jpg'  
console.log(element);