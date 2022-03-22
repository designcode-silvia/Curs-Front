function addToCart(id) {
    alert("add to cart")
 }
 
 function removeFromCart(id) {
     alert("remove to cart")
 } 


let card1 = document.getElementById('card1');
var cardId1 = card1.getAttribute('data-id');
console.log(cardId1);

card1.addEventListener('click', (e) =>{
    console.log(e);
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId1);
      }
    //contains es una funció que només llegeix arrays per això li especifiquem que vagi a la classList
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId1);
    }
});

let card2 = document.getElementById('card2');
var cardId2 = card2.getAttribute('data-id');

card2.addEventListener('click', (e) =>{
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId2);
      }
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId2);
    }
});

let card3 = document.getElementById('card3');
var cardId3 = card3.getAttribute('data-id');

card3.addEventListener('click', (e) =>{
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId3);
      }
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId3);
    }
});

let card4 = document.getElementById('card4');
var cardId4 = card4.getAttribute('data-id');

card4.addEventListener('click', (e) =>{
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId4);
      }
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId4);
    }
});

let card5 = document.getElementById('card5');
var cardId5 = card5.getAttribute('data-id');

card5.addEventListener('click', (e) =>{
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId5);
      }
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId5);
    }
});

let card6 = document.getElementById('card6');
var cardId6 = card6.getAttribute('data-id');

card6.addEventListener('click', (e) =>{
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId6);
      }
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId6);
    }
});

let card7 = document.getElementById('card7');
var cardId7 = card7.getAttribute('data-id');

card7.addEventListener('click', (e) =>{
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId7);
      }
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId7);
    }
});

let card8 = document.getElementById('card8');
var cardId8 = card8.getAttribute('data-id');

card8.addEventListener('click', (e) =>{
      if (e.target.className == ('btn btn-success text-white mt-2 cardAdd')) {
        addToCart(cardId8);
      }
      if (e.target.classList.contains ('cardRemove')){
        removeFromCart(cardId8);
    }
});
