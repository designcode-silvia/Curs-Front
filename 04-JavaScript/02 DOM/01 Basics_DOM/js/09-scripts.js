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

// Creem el div.card, li diem on ha d'anar i l'afegim amb appendChild
var nuevaCard = document.createElement('div');
nuevaCard.className = 'card';
var contenedorCards = document.getElementsByClassName('contenedor-cards')[0];
contenedorCards.appendChild(nuevaCard);

// Creem tots els elements de la nova card
// Creem el element img, li afegim la imatge (contingut), anem a buscar on anirà aquest element i l'afegim.
var elementImg = document.createElement('img');
elementImg.src = 'img/hacer2.jpg';
var contenedorImg = document.getElementsByClassName('card')[4];
contenedorImg.appendChild(elementImg);

// Creem el element div, li afegim la classe "info", anem a buscar on anirà aquest element i l'afegim.
var info = document.createElement('div');
info.className = 'info';
var contenedorInfo = document.getElementsByClassName('card')[4];
contenedorInfo.appendChild(info);

// Creem el element p, li afegim la classe i el contingut que tindrà aquest parraf, anem a buscar on anirà aquest element i l'afegim.
var parrafo1 = document.createElement('p');
parrafo1.className = 'categoria concierto';
parrafo1.textContent = 'concierto';
var contenedorParrafo1 = document.getElementsByClassName('info')[4];
contenedorParrafo1.appendChild(parrafo1);

// Creem el element p, li afegim la classe i el contingut que tindrà aquest parraf, anem a buscar on anirà aquest element i l'afegim.
var parrafo2 = document.createElement('p');
parrafo2.className = 'titulo';
parrafo2.textContent = 'Concierto de Rock';
var contenedorParrafo2 = document.getElementsByClassName('info')[4];
contenedorParrafo2.appendChild(parrafo2);

// Creem el element p, li afegim la classe i el contingut que tindrà aquest parraf, anem a buscar on anirà aquest element i l'afegim.
var parrafo3 = document.createElement('p');
parrafo3.className = 'precio';
parrafo3.textContent = '$800 por persona';
var contenedorParrafo3 = document.getElementsByClassName('info')[4];
contenedorParrafo3.appendChild(parrafo3);