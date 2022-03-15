// Exercici 1: Fem un array amb tots els directors.
function getAllDirectors(array) {
  let result = [];
  result = array.map(function director(movie){
    return movie.director
  })
  console.table(result);
}

// Exercici 2: Fem un array de les pel·lícules que ha dirigit un determinat director.
function getPelisFromDirector(nomDirector){
  const films = movies.filter(film => film.director == nomDirector);
  console.table(films);
  return films;
}

// Exercise 3: Calculem la mitjana de les puntuacions de les seves pel·lícules.
function pelisAverage(films) {
  // acumulem a la variable score = la puntuacio de cada pelicula
  // a la varaible contador anem guardant el que anem sumant ... en aquest cas film.score
  // El 0 serveix per incialitzar la variable contador = 0
  let scoreReal;

  const scores = films.reduce((contador, film) => {
    scoreReal = film.score
    scoreTotal = parseFloat(contador) + parseFloat(scoreReal)
    console.log("film: " + film.title + " Score: " + scoreReal + " sumatori score: " + scoreTotal);
    return scoreTotal;
  }, 0);

  // Calculem la mitja... deixem a dos decimals
  const mitja = (scores / parseInt(films.length)).toFixed(2);
  console.log("-----------------------------");
  console.log("Total Scores " + scores + " Numero pelis " + films.length);
  console.log("Mitja Scores: " + mitja);
  return parseFloat(mitja);
}


function pelisAverageDirector(array, director) {

  // Filtrem totes les pelis del Director seleccionat
  const films = array.filter(movie => movie.director == director);
  console.log("Director: " + director);
  return parseFloat(pelisAverageDirector(films));
}  


// Exercici 4: Ordenar les pel·lícules per alfabèticament per títol
function orderAlphabetically(array) {
  let result = [];

  result = array.map(movie => {    
    return movie.title;
  });

  result.sort();
  const vintPrimers = result.slice(0, 20);
  console.table(vintPrimers);
  return vintPrimers;
}


// Exercici 5: Ordernar per any ascendent
function orderByYear(array) {
  let result = [];

  result = array.map(movie => ({
    year: movie.year,
    title: movie.title
  }
  ));

  // Primer ho endreçem per titol pq així quedarà endreçat alfabeticament. 
  
  // manera optimitzada
  // result.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);

  result.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  // ara ho endreçem per any
  result.sort((a, b) => a.year - b.year);
  
  const vintPrimers = result.slice(0, 20);
  console.table(vintPrimers);
  return vintPrimers;
}


// Exercise 6: Visualitza la millor pel·lícula d'aquest any
function bestFilmOfYear(array, year) {
  if (array.length === 0) return undefined;
  if (year === undefined) return 'Undefined value!'

  // Filtro per any
  let films = array.filter(movie => movie.year == year);

  if (films.length === 0) {
    console.log("En " + year + " no hay pelis")
    return "No hay pelis en este año";
  }


  // endreço per score   
  let arrayMillorPeli = [];
  
  const millorPeli= films.reduce(function (prev, current) {
    return (prev.score > current.score ? prev : current)
  }) 

  
  // Millor peli del any
  console.log("Millor peli del any " + year + "-> " + millorPeli.title + " - director: " + millorPeli.director + " --> puntuació: " + millorPeli.score);
  /* arrayMillorPeli.push(millorPeli)
  console.log(year)
  console.table(arrayMillorPeli)  */
  return arrayMillorPeli;
} 

function ordr_by_score(movies) {
  let result = [];

  result = movies.map(movie => ({
    title: movie.title,
    year: movie.year,
    score: movie.score
  }
  ));

  result.sort((a, b) => b.score - a.score);
  console.table(result.slice(0,3));
}