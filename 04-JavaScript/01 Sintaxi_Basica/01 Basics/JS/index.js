/* ACT - 1 Declara dues variables numèriques i assigna dos números, suma'ls i mostra el valor per consola */

// Declarar dues variables
let numeroUno, numeroDos;

// Assignació de les variables
numeroUno = 25;
numeroDos = 5;

// sumar les variables
let total = numeroUno + numeroDos;
console.log(total);

/* ACT - 2 Utilitzant tant les cometes simples com les dobles per a inicialitzar la variable, crea un programa que mostri en una finestra: I'm = Iam
You're = You are */
let textoUno= "I'm = I am";
let textoDos= "You're = You are";
 
window.alert(textoUno + "\n" +textoDos); // "\n" es un salt de línea

/* ACT - 3 Implementa un programa que comprovi que les dades introduïdes són números */
let dades = window.prompt("Introdueix un numero");
let num = parseInt(dades); 
console.log(num);

/* ACT - 4 Fes un programa que demani dos números a l'usuari i informi per pantalla de quin és el menor i el major, o si són iguals */
let primerNumero = window.prompt("Introdueix un numero: ");
let segonNumero = window.prompt("Introdueix el següent numero: ");

if (primerNumero > segonNumero) {
    window.alert (primerNumero + "es un numero major")
} else if(segonNumero > primerNumero){
    window.alert (segonNumero + "es un numero menor")
}
// ACT- 4 ----------------???

/* ACT - 5 Fes un programa que demani un número al usuari i calculi si és parell o senar */
let numeroNecesari = prompt ("Introdueix algún número: ");
let total2 = numeroNecesari % 2;

if (total2 == 0){
    window.alert(numeroNecesari + " " + "és un número parell")
} else {
    window.alert(numeroNecesari + " " + "és un número senar")
}

/* ACT - 6 Fes un programa que demani a l'usuari l'altura i el pes i mostri per pantalla el deu índex de massa corporal (IMC) */
let altura = prompt("Introdueix la teva altura: ");
let pes = prompt("Introdueix el teu pes: ");
// Calcular i veure el IMC
window.alert ("IMC" + pes / Math.pow(altura,2));

/* ACT - 7 Considerant la seguent assignació: let marca="total"+16+4 s'obtindrà per consola el total de 20 */
let marca1 = "total" + 16 + 4; //concatena tot sense calcular els números

let marca2 = "total" + (16+4); /* s'ha de posar entre parentesis perque et fagi el calcul de dins primer */
console.log(marca1);
console.log(marca2);

