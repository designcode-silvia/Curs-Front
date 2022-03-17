/* Exercici 8: Crear un nou link en el menú de Navegació principal.
Amb appendChild crearem una nova opció de navegació en el menú principal */

// Creem un link nou
var nouLink = document.createElement('a');
// Li posem contingut al link
nouLink.href ='#';
nouLink.textContent = 'text del nou link';
// Seleccionem a on vol anar el nou link
var navegacioPrincipal = document.getElementsByClassName('navegacion')[0];
// Afegim l'element que hem creat a on el redirigim
navegacioPrincipal.appendChild(nouLink);

