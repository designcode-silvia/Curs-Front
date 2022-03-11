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
    for(i = 0; i < cartList.length; i++){
        if (products[i].type == 'grocery') {
            subtotal.grocery.value = cartList[i].price + subtotal.grocery.value;
        } 
        if (products[i].type == 'beauty') {
            subtotal.beauty.value = cartList[i].price + subtotal.beauty.value;
        }
        if (products[i].type == 'clothes'){
            subtotal.clothes.value = cartList[i].price + subtotal.clothes.value;
        }
    }
}

            
        