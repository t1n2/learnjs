'use strict';

/* 1 */ 

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');


/* 2 */

let personaMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

let checkCount = (personaMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов') : 
   (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) ? alert('Вы классический зритель') :
   (personaMovieDB.count > 30) ? alert('Вы киноман') :
   alert ('Произошла ошибка');


/* 3 */

for (var i = 0; i < 2; i++) {
	let a = prompt('Один из последних фильмов?', ''),
	    b = prompt('На сколько оцените его?', '');
	if ((a || b !== '') && (a || b !== null) && (a.length < 50)) {
		personaMovieDB.movies[a] = b;
	} else i--;
}

console.log(personaMovieDB.movies)
