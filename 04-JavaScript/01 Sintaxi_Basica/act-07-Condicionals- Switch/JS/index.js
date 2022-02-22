/* 1. Imagina’t que vols fer el pagament del carrito de la compra. Donades 2 variables totalCarrito, cashDisponible, comprova si tens prou cash per pagar el total del carret. */
var totalCarrito = 150;
var cashDisponible = 120; 

/* var totalCarrito = 80;
var cashDisponible = 120;

var totalCarrito = 150;
var cashDisponible = 150; */

if (cashDisponible >= totalCarrito){
    console.log("si puede pagar");   
} else{
    console.log("no puede pagar");
}

/* 2. Imagina’t que en la teva botiga els usuaris poden tenir 3 roles:

• ADMIN: El Usuario puede editar, eliminar y ver toda la información
• EDITOR: El usuario solo puede editar sus registros
• AUTOR: El usuario solo puede registrar usuarios
• ANONYMOUS: El Usuario es visitante, solo puede ver la información

Controla les accions que poden fer cadascún d’ells amb un if */
var rol = "Editor"; //var rol = "Admin"; "Editor"; "Autor"; "Anonymous";

if (rol == "Admin") {
    console.log("El Usuario puede editar, eliminar y ver toda la información");
} else if (rol == "Editor"){
    console.log("El usuario solo puede editar sus registros");
} else if (rol == "Autor"){
    console.log("El usuario solo puede registrar usuarios");
} else if (rol == "Anonymous"){
    console.log("El Usuario es visitante, solo puede ver la información");
}

/* 3. Quina és la millor estructura de control per diferenciar les funcionalitats de les formes de pagament d’una compra, tenint les següents opcions: efectiu, codi promocional, tarjeta. Escriu la estructura de control més adecuada. */
var metodoPago = 'tarjeta';

switch (metodoPago){
    case 'efectivo':
        console.log('pagament en efectiu');
        break;
    case 'codiPromocional' :
        console.log('pagament amb codi');
        break;
    case 'tarjeta':
        console.log('pagament en tarjeta');
        break;
    default:
        console.log('aún no has pagado');
} 


/* 4. Per un pagament s’han de donar TOTES les opcions:
a. Que tingui cash
b. Que la compra sigui més gran que 100€ */
var queTinguiCash = true;
var queSiguiMesGran = 150;

if (queTinguiCash && queSiguiMesGran>=100) {
    console.log("tiene cash y puede pagar");
} else if (queTinguiCash && queSiguiMesGran <= 100){
    console.log("tiene cash suficiente pero no mayor que 100")
} else {
    console.log("no tiene cash")
} 

// 5. Fes l’anterior exercici fent servir l’operador ternari 

(queTinguiCash && queSiguiMesGran>=100) ? console.log('tiene cash y puede pagar'): console.log('no tiene cash');

/* 6. Demana una nota (número). Mostra qualificació segons nota:

0-3: Mol deficient
3-5: Insufficient
5-6: Sufficient
6-7: Bé
7-9: Notable
9-10: Excel·lent */

var nota = parseInt(window.prompt('Escribe una nota'));

switch (nota){
    case 0 :        
    case 1 :
    case 2 :
        console.log('Mol deficient');
        break;
    case 3:
    case 4:
        console.log('Insuficient');
        break;
    case 5:
        console.log('Suficient');
        break;
    case 6:
    case 7:
        console.log('Bé');
        break;
    case 8:
    case 9:
        console.log('Notable');
        break;
    case 10:
        console.log('Excel·lent');
        break;
    default:
        console.log('no cualificado');
}

/* 7. Compara aquests dos condicionals ... quina és la diferencia?
const age = '18';
if (age === 18) console.log('You just became an adult :D ');
if (age == 18) console.log('You just became an adult :D '); */

const age = 18;
//const age = '18';
if (age === 18) console.log('aqui comprovem el tipus i el numero ');
if (age == 18) console.log('aqui solament comprovem el numero');

/* 8. Imagina’t que en la teva botiga tens les següents variables:

let efectivo;
let credito;
let disponible = efectivo + credito;
let totalCarrito;

Programa un codi, que mostri als clients un missatge amb les formes de pagament que té disponibles en funció dels següents escenaris: */

// escenari 1: “Pots comprar en efectiu o amb crèdit”
let efectivo1 = 1000;
let credito = 1000;
let disponible = efectivo1 + credito;
let totalCarrito1 = 700;

if (efectivo1 >= totalCarrito1 || credito > totalCarrito1) {
    console.log('Puedes pagar con efectivo o credito');
} else if (disponible >= totalCarrito1){
    console.log('Paga con ambos');
}else {
    console.log('No puedes pagar')
}

// escenari 2: “Pots comprar fent us d’efectiu i crèdit”
let efectivo2 = 300;
let credito2 = 400;
let disponible2 = efectivo2 + credito2;
let totalCarrito2 = 700;

if (efectivo2 >= totalCarrito2 || credito2 > totalCarrito2) {
    console.log('Puedes pagar con efectivo o credito');
} else if (disponible2 >= totalCarrito2){
    console.log('Paga con ambos');
}else {
    console.log('No puedes pagar')
}

// escenari 3: “No disposes de saldo disponible per fer la compra”
let efectivo3 = 300;
let credito3 = 400;
let disponible3 = efectivo3 + credito3;
let totalCarrito3 = 900;

if (efectivo3 >= totalCarrito3 || credito3 > totalCarrito3) {
    console.log('Puedes pagar con efectivo o credito');
} else if (disponible3 >= totalCarrito3){
    console.log('Paga con ambos');
}else {
    console.log('No puedes pagar')
}