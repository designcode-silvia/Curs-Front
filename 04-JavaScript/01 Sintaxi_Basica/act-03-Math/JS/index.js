/* 1. Donat un número: arrodoneix, arrodoneix cap abaix i cap adalt, arrel cuadrada, absolut, potencia, minim, maxim, aleatori, aleatori dins d’un rang. */
var a = 3.2;
var b = 3.8;
var c = -4.3;
var d = 4;

let number = Math.round(a);
console.log(number);

let number1 = Math.round(b);
console.log(number1);

let number2 = Math.ceil(a);
console.log(number2);

let number3 = Math.floor(b);
console.log(number3);

let number4 = Math.floor(c);
console.log(number4);

let number5 = Math.sqrt(d);
console.log(number5);

// let number6 = Math.PI(d);
// console.log(number6);

let number7 = Math.abs(c);
console.log(number7);

let number8 = Math.pow(c);
console.log(number8);

let number9 = Math.max(c);
console.log(number9);

let number10 = Math.min(c);
console.log(number10);

let number11 = Math.random(c);
console.log(number11);

// Aleatorio dentro de un rango:
let number12 = Math.floor(Math.random() * 10);
console.log(number12);


/* 2. Fes un programa que demani dos números a l’usuari i retorni un valor aleatori enter comprès entre aquests dos números, ambdós inclosos */
let first_number = parseInt(prompt("Insereix el PRIMER nombre"));
let second_number = parseInt(prompt ("Insereix el SEGON nombre"));
let random_number = 0;

// Math.floor(Math.random() * (max - min)) + min; --> Generates a random number between two.
let min_number = Math.min (first_number, second_number);
let max_number = Math.max (first_number,second_number);
random_number = Math.floor (Math.random() * (max_number - min_number)) + min_number;
console.log("manera + eficient.... Primer = " + min_number + "\nSegon = " + max_number + "\nNumeroaleatori = " + random_number);
