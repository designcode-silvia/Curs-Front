/* 1. Utilitzant el Bucle while, demana un número per pantalla i calcula el seu factorial. */

var numPantalla = window.prompt('Escriu un numero:');
var factorial = 1;

while (numPantalla > 1){
    if (factorial = factorial*numPantalla);
    numPantalla--;
} console.log('El numero factorial es:' + factorial);  

/* 2. A) Utilitza la declaració do while de JavaScript per programar un simple joc d'endevinar un número del 1 al 10. Segueix el següent passos:

a. El teu programa calcularà un número secret (pots fer servir l’objecte Math) i no l’ha de mostrar per pantalla, ja que l’hauràs d’endevinar. */

let numeroAleatori = Math.random();
let resultatNum = numeroAleatori * 9 + 1;
let numSecret = Math.ceil(resultatNum);
console.log(numSecret);  

/* b. Demana el número que has d’endevinar per pantalla entre 1 i 10 (fent servir el prompt). */
let numEndevinar;

/* c. Repeteix el punt anterior, fins que no donis amb el número secret */
let contador = 5;

do { 
    numEndevinar = window.prompt ('Endevina el numero del 1 al 10. Et queden:' + contador + 'intent/s');
    
} while (numEndevinar != numSecret && --contador > 0);  */

/* d. Quan el trobis mostra un missatge per pantalla amb el número d’intents que has fet. */
let contadorFinal = 6 - contador;

if (numEndevinar==numSecret) {
    window.alert('Enhorabona, el número és el:' + numSecret + 'i has necessitat' + contadorFinal + 'intents per encertar-lo')
} else {
    window.alert('Has utilitzat massa intents! El número és el' + numSecret)
}   

/* e) Modificar el programa. En aquest cas, a més, s’estableix un número màxim de 5 intents. Si l’usuari encerta el número escollit pel programa en aquests 5 intents, el programa mostra el següent missatge per pantalla: “Enhorabona, el número és X i has necessitat Y intents per encertar-lo”. Si no encerta el número amb els 5 intents, el programa mostra per pentalla: "Has utilitzat massa intents!

El número és X " */ 



/* 3. Fes un programa que vagi demanant diferents paraules per pantalla ( fes us del prompt ), quan introdueixis la paraula Fi, deixaràs de demanar més paraules. I mostraràs per pantalla el número de paraules que has introduït. */
let paraules;
let paraulaFinal = 'fi';
let contador = 0;

do {
    paraules = window.prompt('Escriu la paraula que vulguis');
    contador ++;
} while (paraules != paraulaFinal);
    console.log('has introduit' + contador + 'paraules');