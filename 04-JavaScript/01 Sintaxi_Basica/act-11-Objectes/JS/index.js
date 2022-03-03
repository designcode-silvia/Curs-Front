/* 1. Defineix un objecte producte, amb els següents atributs: id, name, price, type i assignalis valors.
• Ojo amb el valor id
• El type seria el tipus de producte, per exemple si estem a una botiga podria ser: clothes, beauty, mejar...

Crea diferents objectes amb valors diferents. Accedeix a la propietat name del objecte1, fes el mateix amb l’objecte2.... */
const producte1 = {
    id: 1,
    name: 'jeans',
    price: 37.5,
    type: 'clothe'
}

const producte2 = {
    id: 2,
    name: 'makeUp',
    price: 20,
    type: 'beauty'
}

console.log(producte1.name);
console.log(producte2.name);

/* 2. Defineix l’objecte subTotal, amb un únic atribut que serà el type del objecte producte. Aquest tipus tindrà un objecte aniuat que tindrà els atributs value, quantitat i discount. Assignali valors.

Accedeix als atributs value, quantitat i discount, per un tipus concret. */
const subTotal = {
    type: 'producte',
    objecteAniuat: {
        value: 19,
        quantitat: 7,
        discount: 0.5,
    }
}
console.log(subTotal.objecteAniuat.value);
console.log(subTotal.objecteAniuat.quantitat);
console.log(subTotal.objecteAniuat.discount);

/* 3. Crea l’objecte carList, que per defecte està buit.
Accedeix a l’objecte. */
const carList = {

}
console.log(carList);