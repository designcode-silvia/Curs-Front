/* Exercici 9: Crear una Nova card
Amb appendChild crearem una nova card, amb el següent contingut html:
<div class="card">
<img src="img/hacer2.jpg">
<div class="info">
<p class="categoria concierto">concierto</p>
<p class="titulo">Concierto de Rock</p>
<p class="precio">$800 por persona</p>
</div>
</div> */

// Creem el div.card i diem on ha d'anar
var nuevaCard = document.createElement('div');
nuevaCard.className = 'card';
var contenedorCards = document.getElementsByClassName('contenedor-cards')[0];
contenedorCards.appendChild(nuevaCard);

// Creem tots els elements de la nova card

