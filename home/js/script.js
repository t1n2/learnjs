'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
	}
}

start();

const personaMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}


function rememberMyFilms () {
	for (var i = 0; i < 2; i++) {
	let a = prompt('Один из последних фильмов?', ''),
	    b = prompt('На сколько оцените его?', '');
	if ((a || b !== '') && (a || b !== null) && (a.length < 50)) {
		personaMovieDB.movies[a] = b;
	} else i--;
	}
}

rememberMyFilms();

function detectPErsonalLevel() {
	let checkCount = (personaMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов') : 
   (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) ? alert('Вы классический зритель') :
   (personaMovieDB.count > 30) ? alert('Вы киноман') :
   alert ('Произошла ошибка');
}

detectPErsonalLevel();

function writeYourGenres() {
	for (var i = 0; i < 3; i++) {
		personaMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '')
	}
}

writeYourGenres();

function showDB() {
	if (!personaMovieDB.privat) {
		console.log(personaMovieDB)
	} 
}

showDB();
