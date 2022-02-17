/* 1. Donat el següent string:
const producto = ' Monitor 20 Pulgadas ';
Elimina tots els espais en blanc de l’inici i del final */

const producto = '       Monitor 29 pulgadas    ';
console.log (producto);
console.log(producto.length);

// Eliminar el inicio
producto.trimStart().length; //Length es una propietat i ens diu la longitud de la cadena de text
console.log(producto.trimStart()); //Elimina todos los espacios en blanco del inicio
console.log(producto.trimEnd()); //Elimina todos los espacios en blanco del final

var nuevoProducto = '     Quitar los espacios al principio y final    ';
console.log(nuevoProducto.trim());

/* 2. Practicarem amb els mètodes: .replace , .slice, i typeof
Donada la següent declaració: const producto = 'Monitor 20 Pulgadas'; 
a. Reemplaça Pulgadas per ‘. Reemplaça 20 per 40.*/
var producto1 = 'Monitor 20 Pulgadas';
producto1 = producto1.replace(20,40).replace("Pulgadas", " ' ");
console.log(producto1);

/* b. Extreu en una nova variable la següent part de la frase: 40'.*/
var producto2 = "Monitor 40'";
console.log("producto2" + producto2);
var posicioBuscada = (producto2.indexOf(40))
var pulgadas = producto2.slice(posicioBuscada)
console.log(pulgadas);

// c. Extreu en una nova variable la següent part de la farase: nitor 20.
var producto3 = "Monitor 20'";
console.log("producto3" + producto3);
var posicioBuscada1 = (producto3.indexOf('nitor'));
var pulgadas1 = producto3.slice(posicioBuscada1);
console.log(pulgadas1);

/* d. Declara una variable i assignali el teu Nom. Mostra la primer lletra d’aquesta variable.*/
var nom = 'Silvia';
console.log(nom);
var posicioNom = (nom.indexOf('S'))
var lletra = nom.slice(posicioNom);
console.log(lletra);

/* 3. Practicarem amb Split

let actividad = 'Estoy aprendiendo Javascript Moderno';
Separa variable actividad, tenint en compte espai en blanc.

let hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
Ara fes-ho tenint en compte la coma.*/
let actividad = 'Estoy aprendiendo Javascript Moderno'
console.log(actividad.split(" ")); //Separa segons l'espai que troba en blanc per fer una llista

let hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar'
console.log(hobbies.split(", "));

/* 4. Canvia el següent text tot a majúscula.
const producto = 'Monitor 24 pulgadas '; */
const texto2 = 'Monitor 24 pulgadas';
console.log(texto2.toUpperCase());

//convertir el text tot en minuscula
console.log(texto2.toLowerCase());

//.toString
const cantidad = 200;
console.log(cantidad);
console.log(cantidad.toString());

/* 5. Realitzar la cerca d'un string en un string origen. Per fer-ho cal demanar per pantalla una frase o text (la font) i després una paraula a cercar. En cas de trobar-la, imprimir la posició, sinó un missatge que indiqui que no hi és. Quina es la longitud de la Frase? */
let frase = prompt ('Ingrese una frase: ');
document.write(frase + '<br><br>');
let palabra = prompt ('Ingrese una palabra: ');
document.write(palabra + '<br><br>');
let dondeEstaPalabra = frase.indexOf(palabra);
document.write ("donde esta" + dondeEstaPalabra);

if(dondeEstaPalabra == -1){
    document.write("No encontrado")
}else {
    document.write("Encontrado"); 
}
