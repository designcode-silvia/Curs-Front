// Exercici 3, Event al formulari: input
// a) Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al buscador
var formulari = document.querySelector('.busqueda');
console.log(formulari);

// formulari.addEventListener('keydown', lletra);
formulari.addEventListener('input', lletra);

function lletra() {
    alert("S'està escrivint en el buscador");
} 
// b) Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra a al buscador
formulari.addEventListener('input', tecla =>{
    console.log('data');
    if (tecla.data=='a'){
        alert('Has escrit a...');
    }
})

// c) El mateix que l'exercici 2, però ara fes servir una funció.

// fem el mateix pero amb keypress
/* formulari.addEventListener('keypress', lletra_especial);

function lletra_especial(tecla) {
    console.log(tecla);
    if (tecla.key=="a") {
        alert("S'ha escrit una a")
    }
} */

formulari.addEventListener('input', lletra_especial);
// anem a buscar dintre de l'objecte on està la 'a', en aquest cas posant input es data. 
function lletra_especial(tecla) {
    console.log(tecla);
    // if (tecla.taget.value=="a") --> una altra manera d'anar a buscar la lletra però en aquest cas et fa una alert la primera vegada i després t'ho converteix en un string
    if (tecla.data=="a") {
        alert("S'ha escrit una a")
    }
}