// 1. Calcula els milisegons que falten fins al dia del teu aniversari.
var birthday = new Date("11/21/2022 15:00:00");
var avui = Date.now();

var milliseconds = birthday.getTime() - avui;

console.log(birthday)
console.log(avui)
console.log(milliseconds)

/* 2. Crea un objecte de tipus Date amb la data i hora actual. Què passa si s’assigna amb el mètode setHours el valor 26? Què passa si s’assigna amb el mètode setMinutes el valor 65? Què passa si s’assigna com a dia de mes 35? */

// El nombre de minuts, hores o dies que supera el màxim es suma i s'avança "el temps"
var dataAvui = new Date();
console.log(dataAvui);

var metode1 = dataAvui.setHours(26);
console.log(metode1);

var metode2 = dataAvui.setMinutes(65);
console.log(metode2);

var metode3 = dataAvui.setDate(35);
console.log(metode3);


/* 3. Demana la data de naixement a un usuari, i mostra l’edat en anys, mesos, dies, segons i milisegons. */

var usuariBirth = window.prompt("Introdueix la data de naixement (YYYY-MM-DD): ")
usuariBirth = new Date (usuariBirth);

var totalms = Date.now() - usuariBirth.getTime();

var years = totalms / (365 * 24 * 3600 * 1000)
var months = years * 12;
var days = totalms / (24 * 3600 * 1000);
var seconds = totalms / 1000;
window.alert ("Tens " + years + "anys\n" + months + "mesos\n" + days + "dies\n" + seconds + "segons\n" + totalms + "milisegons");

/* 4. Crea un programa que mostri per pantalla la data en format català. Per exemple: 11 de setembre de 1714. */

var fecha = new Date("1714/09/11");
var dia = fecha.getDate();
var any = fecha.getFullYear();
var mes = fecha.getMonth();
nomMes = "";

if (mes=='0') {nomMes = "Gener"};
if (mes=='1') {nomMes = "Febrer"};
if (mes=='2') {nomMes = "Març"};
if (mes=='3') {nomMes = "Abril"};
if (mes=='4') {nomMes = "Maig"};
if (mes=='5') {nomMes = "Juny"};
if (mes=='6') {nomMes = "Juliol"};
if (mes=='7') {nomMes = "Agost"};
if (mes=='8') {nomMes = "Setembre"};
if (mes=='9') {nomMes = "Octubre"};
if (mes=='10') {nomMes = "Novembre"};
if (mes=='11') {nomMes = "Desembre"};

console.log(dia + nomMes + any);
console.log("MES\n" + nomMes);


