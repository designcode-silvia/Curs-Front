/* 1. Crea una funció que es digui Saludar, que tingui tres argument: nom, cognom, sexe. Crida a aquesta funció amb diferents escenaris, per tal d’escriure per pantalla:
Benvinguda [nom] [Cognoms] si és dona.
Benvingut [nom] [Cognoms] si és home.

També, tingues en compte un escenari, per quan no passis a la funció el paràmetre sexe. */
/* function saludar (nom, cognom, sexe){
    if (sexe == 'dona') {
        window.alert('Benvinguda' + nom + cognom)
    }else if (sexe =='home') {
        window.alert('Benvingut' + nom + cognom) 
    }else {
        window.alert('Hola')
    }
}

saludar('Sonia','Lopez','dona');
saludar('Juan','Lopez','home');
saludar('','',''); */

/* 2. Crea una funció que es calculi l’edat d’un gos. Quin parametre podries fer servir?*/
/* function edatGos(data) {
    var avui = 2022;
    var edat = avui - data;
    
console.log('El gos té' + edat + 'anys')

if (edat < 5) {
        return true;
    } else {
        return false;
    }
}
var esJove = false;                                   

esJove = edatGos(1990);
console.log(esJove)
esJove = edatGos(2020);
console.log(esJove) */


// 3. Crea una funció on se li pasa 2 números. I que retorni el menor.
function numeroMenor(a,b) {
    
    if (a < b) {
        return a;
      } else if (a == b) {
        return 'son iguals';
      } else {
        return b;
      }
}

var a=10;
var b=5;
var c;
c= numeroMenor(a,b) 
console.log(c)

var a=20;
var b=40;
var c;
c= numeroMenor(a,b) 
console.log(c)

var a=33;
var b=33;
var c;
c= numeroMenor(a,b) 
console.log(c)

/* 4. Programa en JavaScript una funció on se li passi dos arguments: string1 -frase- i string2-frase-, i retorna quants caràcters hi ha en total = string1 + string2. */
function caracters(palabra1,palabra2) {
    
    var sumaTotal = palabra1.length + palabra2.length;
    return sumaTotal;
}

var palabra1 = 'aigua'
var palabra2 = 'foc'
var caractersTotal = caracters(palabra1,palabra2);
console.log(caractersTotal);

var palabra1 = 'hola'
var palabra2 = 'bon dia'
var caractersTotal = caracters(palabra1,palabra2)
console.log(caractersTotal);


/* 5. Analitza e investiga les diferencies entre les següents funcions. Aquesta és una pregunta d’entrevista com a JS Developer. (Hoisting) */
/* sumar();
function sumar() {
console.log(2 + 2);
} 

sumar2();
const sumar2 = function() {
console.log(3 + 3);
}  */

/* 6. Donada una adreça de correu, implementa una funció que verifiqui si el email té carregat el caràcter @. */


// 7. Defineix una frase e implementar les funcions següents:
// a. Funció per Imprimir la primera meitat dels caràcters de la cadena.
// b. Funció per Imprimir el darrer caràcter.
// c. Funció per Imprimir-ho en forma inversa.
// d. Funció per Imprimir cada caràcter del String separat amb un guió.
/* e. Funció per Imprimir la quantitat de vocals sense accents emmagatzemades. */


/* 8. Fes una funció que donat un número de DNI, calculi si la lletra és correcta. Tingues present que la lletra del DNI es calcula en dos passos: */

//a. Calcular el mòdul del número del DNI respecte 23
/* b. El resultat de l’operació anterior ha de correspondre a la posició del següent string:

var lletres =”TRWAGMYFPDXBNJZSQVHLCKE”; */



/* 9. Fes un programa amb les seves funcions que determini si un password és segur. Per exemple, un password segur ha de complir les següents condicions:
● Ha de contenir almenys 8 números.
● Ha de contenir almenys una majúscula.
● Ha de contenir almenys una minúscula.
● Ha de contenir un número.
● Almenys ha de contenir un caràcter especial.
Pots fer servir una funció per cada comprovació. */



/* 10. Simula un Captcha senzill de 5 caràcters ( amb lletres minúscules i números ) amb JAVASCRIPT. El captcha el pots generar fent ús random i de la següent variable:

var captchaChars = "1234567890abcdefghijklmnopqrst";
// Random captchaChars.length
Pots implementar una funció que generi el captcha i un altre que el validi. */
