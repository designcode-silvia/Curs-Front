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
var efectiu = 40;
var codiPromocional = "ER34";
var tarjeta = 34562812;

if (efectiu==0) {
    console.log("no puede pagar")
} else {
    
}

/* 4. Per un pagament s’han de donar TOTES les opcions:
a. Que tingui cash
b. Que la compra sigui més gran que 100€ */
var queTinguiCash = true;
var queSiguiMesGran = false;


// 5. Fes l’anterior exercici fent servir l’operador ternari 

/* 6. Demana una nota (número). Mostra qualificació segons nota:

0-3: Mol deficient
3-5: Insufficient
5-6: Sufficient
6-7: Bé
7-9: Notable
9-10: Excel·lent */


/* 7. Compara aquests dos condicionals ... quina és la diferencia?
const age = '18';
if (age === 18) console.log('You just became an adult :D ');
if (age == 18) console.log('You just became an adult :D '); */

/* 8. Imagina’t que en la teva botiga tens les següents variables:

let efectivo;
let credito;
let disponible = efectivo + credito;
let totalCarrito;

Programa un codi, que mostri als clients un missatge amb les formes de
pagament que té disponibles en funció dels següents escenaris:

escenari 1: “Pots comprar en efectiu o amb crèdit”
let efectivo = 1000;
let credito = 1000;
let disponible = efectivo + credito;
let totalCarrito = 700;

escenari 2: “Pots comprar fent us d’efectiu i crèdit”
let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

escenari 3: “No disposes de saldo disponible per fer la compra”
let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 900; */