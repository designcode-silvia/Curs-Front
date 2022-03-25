/* 2. Donada la següent promesa.
function calculDescuento() {
console.log('Aplicando el Descuento...');
return true;
}
const aplicarDescuento = new Promise((resolve, reject) => {
if(calculDescuento()) {
resolve('Descuento Aplicado');
} else {
reject('No se pudo aplicar el descuento'); 
}
});
Crida a la promesa aplicarDescuento.
Recordar capturar l’error dins de la promesa: 'No se pudo aplicar el descuento' */

function calculDescuento(valor) {
    console.log('Aplicando el Descuento...' + valor);
    return false;
}

const aplicarDescuento = (valor) => new Promise((resolve, reject) => {
    if(calculDescuento(valor)) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicar el descuento'); 
    }
});

// En los promises hay 3 valores posibles,
// 1) pendiente, no se ha cumplido o rechazado...esperando
// 2) Fullfilled - se ha cumplido
// 3) Rejected - se ha rechazado o no se pudo cumplir

aplicarDescuento(10)
    .then(resolve =>{
        console.log(resolve);
    }).catch(error => {
        console.log('error capturado:' + error);
    })


