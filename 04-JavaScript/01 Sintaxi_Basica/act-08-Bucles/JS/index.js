// 1. Identifica si un número és parell o imparell amb un for...
let numero = 5;

for (let i=0; i <= numero; i++){
    if (i % 2 == 0) {
        console.log("Numero" + i + "Es par");
    }else{
        console.log(`Numero ${i} Es impar`);
    }
}

/* 2. Crear un programa que lea un número entero y a partir de él cree un cuadrado de asteriscos con ese tamaño. ( fem servir el debugger ), exemple, numero=5

*****
*****
*****
*****
***** */

let requiredNum = 5;

for (let i=0; i < requiredNum; i++){

    for (var j=0; j < requiredNum; j++){
        document.write('*');
    }
    document.write('<br>')
}

/* 3. El mateix que l’anterior exercici, però aquesta vegada el numero de files es diferent que al de les columnes. Exemple, files=2, columnes=7

*******
******* */

let columnes = 2;
let files = 7;

for (let i=0; i < columnes; i++){

    for (var j=0; j < files; j++){
        document.write('*');
    }
    document.write('<br>')
}

/* 4. Fes un programa que demani un número i calculo la seva taula de multiplicar */

var num = window.prompt('Insereix un numero');
var multiplicar = 10;

for (var i=0; i <=multiplicar; i++){
        console.log(num + 'x' + i + '=' + num*i);
} 

/* 5. Codifiqueu un programa que permeti carregar una frase per teclat. Mostra per pantalla cada paraula de la frase en una línia diferent. Per exemple si introduim: El matí és fred.

Ha d'aparèixer:
El
matí
és
fred. */

let text = window.prompt('Escriu una frase:');

for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == ' ') {
        document.write('<br>');
    } else {
        document.write(text.charAt(i));
    }
}

document.write('<br><br>Ho podem fer amb split ....<br>');
let paraules = text.split(" ");
        
for (let j = 0; j < paraules.length; j++) {
    document.write(paraules[j] + "<br>" );
}


/* 6. Recorre el següent objecte, mostrant per pantalla el nom del producte
const carrito = [{
id: 1,
producto: 'Libro'
},
{
id: 2,
producto: 'Camisa'
},
{
id: 3,
producto: 'Disco'
} */



