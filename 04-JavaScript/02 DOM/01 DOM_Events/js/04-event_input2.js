/* Exercici 4, Event al formulari: input
    <form action="/buscador" method="POST" class="formulario " id="formulario" >
    <input type="text" name="busqueda" class="busqueda" placeholder=" ">
    <input type="submit" value="Buscar" id="btn-submit">
    </form>
Si li donem a Buscar intentará enviar el Formulari al servidor.
Però hem d'evitar enviar-ho si no està validat, per això fem servir preventDefault. Fes que al clickar buscar, no envii el formulari */
var formulari = document.querySelector('#btn-submit');
console.log(formulari);

// en aquest cas només estem desavilitant el botó
formulari.addEventListener('click', validacio);

function validacio(e) {
    e.preventDefault();
}

// capturar el event amb el submit i deshabilitar la validació del formulari
/* var formulari = document.querySelector('#formulario');

formulari.addEventListener('submit', validacio);

function validacio(e) {
    e.preventDefault();
} */