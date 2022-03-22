function addToCart(id) {
    alert("add to cart")
 }
 
 
 function removeFromCart(id) {
     alert("remove to cart")
 }

document.querySelectorAll('.cardProduct').forEach(function (element) {
    element.addEventListener('click', function (e){
        var dataId = element.getAttribute('data-id');
        if (e.target.classList.contains('cardAdd')) {
          addToCart(dataId);
        }
        alert(e.target.classList);
        if (e.target.classList.contains('cardRemove')) {
          removeFromCart(dataId);
        }
    })
});

//una altra manera de poder fer-ho 

/* document.querySelectorAll('.cardAdd').forEach(function (element) {
    element.addEventListener('click', function (e){
        var dataId = element.getAttribute('data-id');
        if (e.target.classList.contains('cardAdd')) {
          addToCart(dataId);
        }
    })
});

document.querySelectorAll('.cardRemove').forEach(function (element) {
    element.addEventListener('click', function (e){
        var dataId = element.getAttribute('data-id');
        alert(e.target.classList);
        if (e.target.classList.contains('cardRemove')) {
          removeFromCart(dataId);
        }
    })
}); */