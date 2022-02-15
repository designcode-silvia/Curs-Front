let a = 17;
console.log(typeof a);

let b = 0.17;
console.log(typeof b);

let c = 17e3;
console.log(c);

let num1 = 10;
let num2 = "A";

let total = num1 * num2;

let esNumero = !isNaN(total);
let noEsNumero = isNaN(total);
console.log("No es numero" + esNumero);

let b2 = parseInt(b);
let b3 = Number (b);

console.log("b2" + b2);
console.log("b" + b3);