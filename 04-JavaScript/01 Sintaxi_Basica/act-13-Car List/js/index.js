// logica negoci
function buy(id){
    console.table(products[id-1]);
    cartList.push(products[id-1]);
    console.log(cartList)
}

function cleanCart() {
    cartList = [];
    console.log(cartList);
}