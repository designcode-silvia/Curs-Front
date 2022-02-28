// 1. Fes un programa on es forci el resultat NaN i es mostri per pantalla.
let a = "text";
let b = 3;
let total = a * b;
console.log(total);

if (isNaN(total)){
    console.log("error")
}else{
    console.log(total);
}
document.write(total);

// 2. Fes un programa per convertir un String nombre a nombre.
let a2 = parseInt("99");
console.log(a2);

// 3. Fes un programa per validar que no es un número.
var numero = "3";
var numero2 = "A";

if (isNaN(numero)){
    window.alert(numero + " no es un nombre")
} else{
    window.alert(numero + " és un nombre")
}

if (isNaN(numero2)){
    window.alert(numero2 + " no es un nombre")
} else{
    window.alert(numero2 + " és un nombre")
}
