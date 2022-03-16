//Activitat 1: Accedint al document
/* Mostra per consola els següent element DOM:
• document
• body
• id del formulari
• el links
• el className d’algun dels links
• totes les imatges */

let element1

console.log('Documento')
element1 = document;
console.log(element1);

console.log('Body')
element1 = document.body;
console.log(element1);

console.log('Form')
element1 = document.forms[0].id;
console.log(element1);

console.log('Links')
element1 = document.links;
console.log(element1);

console.log('Classname 4t Link')
element1 = document.links[4].className;
console.log(element1);

console.log('Images')
element1 = document.images;
console.log(element1);
