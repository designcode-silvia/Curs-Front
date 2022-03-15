// LOGICA DE NEGOCI

// Total de la compra
var total = 0;

// Mostrar carList
function showCartList(){
    console.table(cartList);
}

function showPrices(){
    console.table(subtotal);
}

function showCart(){
    console.table(cart);
}

// Agregar productes a la CarList
function buy(id){
    /* cartList.push(products[id-1]);
    console.log("element afegit");
} */

    productBuy = products.find(function(element){
        if (element.id ==id){
            return element;
        }
    })

cartList.push(productBuy);
}


// Eliminem tots els productes de la CartList
function cleanCart() {
    console.log(cartList.length);
    cartList.splice(0, cartList.length);
    console.log(cartList);
}


// Calculem el subtotal
function calculSubtotal() {
    // VERSIÓ ESTÀTICA

    /* for(i = 0; i < cartList.length; i++){
        if (cartList[i].type == 'grocery'){
            subtotal.grocery.value = cartList[i].price + subtotal.grocery.value;
        } 
        if (cartList[i].type == 'beauty'){
            subtotal.beauty.value = cartList[i].price + subtotal.beauty.value;
        }
        if (cartList[i].type == 'clothes'){
            subtotal.clothes.value = cartList[i].price + subtotal.clothes.value;
        }
    } */


    // Per agafar dinamicament els tipus de productes (VERSIÓ DINÀMICA)
    // calculem els subtotals depenent el tipus de compra
    // a la variable tipus tenim les categories: groocery, clothes, beauty

    // nos devolverá un array con los keys del objeto
    console.log('Keys');
    console.log(Object.keys(subtotal));
    // nos devolverá un array con los valores del objeto
    console.log('Values')
    console.log(Object.values(subtotal));
    // Entries nos va a retornar una matriz de llaves y valores
    console.log('entries');
    console.log(Object.entries(subtotal));

    var tipus = Object.keys(subtotal);
    // Ojo, tenim un for dins d'un for
    // El primer recorre tota la cartList
    for (i = 0; i < cartList.length; i++) {
        // El segon recorre tots els tipus
        tipus.forEach(element => {
            // Si el tipus del producte de la cistella, és la mateixa que la del tipus, aleshores sumem.
            // Ojo toFixed retorna string.. per això abans de tornar  a sumar hem de passar a float.
            if (cartList[i].type == element) {
                total2 = subtotal[element].value + cartList[i].price;
                subtotal[element].value = parseFloat(total2.toFixed(2));
            }
        });
    }
} 

// Calculem el preu total de la CartList
/* function calculateTotal(){
    var total = 0;
    for (i = 0; i < cartList.length; i++) {

    }
}*/ 