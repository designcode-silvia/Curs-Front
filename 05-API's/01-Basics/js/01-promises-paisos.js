/* 1. Donada la següent promesa.
const paises = [];
const nuevoPais = pais => new Promise( resolve => {
setTimeout(() => {
paises.push(pais);
resolve(`Agregado: ${pais}`)
}, 3000);
});
Fent servir promeses, agrega cada 3 segons un país: Alemania, Francia, Inglaterra, Italia. Capturar errors no controlats. */

const paises = [];
const nuevoPais = pais => new Promise( resolve => {
setTimeout(() => {
paises.push(pais);
resolve(`Agregado: ${pais}`)
}, 3000);
});

nuevoPais('Alemania')
    .then(result => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Francia');
    })

    .then(result => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })

    .then(result => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Portugal');
    })

    /* .then(result => {
        console.log(result);
        console.log(paises);
        return nuevoPai();
    }) */

    .then(result => {
        console.log(result);
        console.log(paises);
        return nuevoPais('Italia');
    })

    .then(result => {
        console.log(result);
        console.log(paises);
    })

    /* .catch (error =>{
        console.log('Hi ha hagut un error no controlat:' + error)
    }) */