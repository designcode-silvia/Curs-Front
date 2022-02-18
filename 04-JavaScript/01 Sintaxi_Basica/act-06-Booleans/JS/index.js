/* 1. Declara una variables anomenada esCorrecte, assigna-li true o false. Utilitza un condicional per veure el seu valor. */
var esCorrecte = true;
console.log(esCorrecte);

if (esCorrecte){
    console.log("es true");
}else{
    console.log("es false");
}

/* 2. Declara i assigna dos valors booleans. Programa els següent escenaris: */
var boolean1 = true;
var boolean2 = false;

/* a. Escenari 1: Si tots dos valors són certs, el resultat hauria de ser cert. En la resta de casos ha de ser Fals. */

if (boolean1 && boolean2){
    console.log("es true");
}else{
    console.log("es false");
}

/* b. Escenari 2: Si un dels dos valors és certs, el resultat hauria de ser cert. En la resta de casos ha de ser Fals. */

if (boolean1 || boolean2){
    console.log("es true");
}else{
    console.log("es false");
}

/* 3. Analitza les següents expressions lògiques. Mostra per pantalla el seu valor i raona el seu resultat. */

// a) 2 < 12

a = 2 < 12
console.log(a); //es true perque el 2 es mes petit que 12

// b) 2 < "12"

b = 2 < "12"
console.log(b); //es true perque el string el converteix en numero

// c) "2" < "12"

c = "2" < "12"
console.log(c); //Es false perque ho interpreta com lletres i ho ordena alfabeticament llavors el 2 es més gran que el 1

c = "02555" < "12"
console.log(c); //Es true perque ho interpreta com lletres i ho ordena alfabeticament llavors el 0 es més petit que el 1, com si el 0 fos A i el 1 la B

// d) !("2" < "12")

d = !("2" < "12")
console.log(d); //Es true perque está negant que el 2 sigui mes petit que 12. Com es veritat es true.

// e) ((2 < "12") && (2 == "2"))

e = ((2 < "12") && (2 == "2"))
console.log(e); //Es true perque els dos es compleixen, 2 és més petit que 12 (el converteix en numero) i el 2 es igual a 2

// f) (("2" < "12") || (2 < 12))

f = (("2" < "12") || (2 < 12))
console.log(f); //Es true perque el 2 es més gran que el 12 i com estém dient que un dels dos es compleixi ja no cal que es compleixi el seguent.

// g) (("2" < "12") && (2 < 12))

g = (("2" < "12") && (2 < 12))
console.log(g); //Es false perque no es compleixen els 2 casos conjuntament.