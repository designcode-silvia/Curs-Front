/* 1. Funció que rebi dos nombres i retorni un array amb tots els nombres
compresos entre ells. El programa principal ha de mostrar aquest array per
consola. */
function nombres(a,b) {
    var newArray = [];
    var inici = a;
    var fin = b;

    if (a>b) {
        inici = b;
        fin=a;
        }
    for (let i = inici + 1; i < fin; i++) {
        
        newArray.push(i);
    }
    return newArray;
}

a = 15;
b = 8;
var retorn = nombres(a,b);
console.log(retorn);

a = 6;
b = 10;
var retorn = nombres(a,b);
console.log(retorn);

/* 2. Crea una funció que rebi un array de 5 noms com a paràmetre i retorni un nou array amb el número de caràcters de cada nom. */
function noms(parametres) {
    var numCaracters = [];
    for (let i = 0; i < parametres.length; i++) {
        numCaracters.push(parametres[i].length);
        numCaracters.push(parametres[i]);
    }
    return numCaracters;
}

var parametres = ['hola','aixo','es','una','prova'];
var caractersTotal = noms(parametres);
console.log(caractersTotal);  

/* 3. Donat el següent array d’objectes: */
const carrito = [{
nombre: 'Monitor 20 Pulgadas',
precio: 500
},
{
nombre: 'Televisión 50 Pulgadas',
precio: 700
},
{
nombre: 'Tablet',
precio: 300
},
{
nombre: 'Audifonos',
precio: 200
},
{
nombre: 'Teclado',
precio: 50
},
{
nombre: 'Celular',
precio: 500
},
{
nombre: 'Bocinas',
precio: 300
},
{
nombre: 'Laptop',
precio: 800
},
];

// a) Mostrar els productes de més de 300€.
for(i = 0; i < carrito.length; i++ ){
    if (carrito[i].precio > 300){
        console.log(carrito[i].nombre + " - Precio: " + carrito[i].precio)
    }
} 

// b) Mostrar el total a pagar del carrito. (hem de sumar tots els preus.)
var total = 0;
for(i = 0; i < carrito.length; i++ ){
    total = carrito[i].precio + total;
}
console.log("Precio total:" + total);

// c) Obtenir nous carritos, tenint en compte les següents condicions:
    // a. Carrito con Productos con precio > 400
    // b. Carrito con Productos con el nombre ‘Celular'
    // c. Carrito con todos los excepto ‘Laptop'
var carrito1 = [];
var carrito2 = [];
var carrito3 = [];
for(i = 0; i < carrito.length; i++ ){
    if (carrito[i].precio > 400){
        carrito1.push(carrito[i]);
    }
    if (carrito[i].nombre == 'Celular'){
        carrito2.push(carrito[i]);
    }
    if (carrito[i].nombre !== 'Laptop'){
        carrito3.push(carrito[i]);
    }
}
console.log(carrito1);
console.log(carrito2);
console.log(carrito3);


// d) Comprova que en el carrito no hi hagi algun preu = 0 
for(i = 0; i < carrito.length; i++ ){
    if (carrito[i].precio == 0){
        console.log(carrito[i].nombre + " tiene un precio de 0")
    }
} 


/*4. Donat un array de números, el programa ha de mostrar per pantalla, l’array amb els nombres ordenats de menor a major*/


/*5. Crea una funció que rebi un array de 5 noms com a paràmetre i retoni l’índex del nom més llarg (el programa “principal” haurà d’imprimir per consola el nom). */