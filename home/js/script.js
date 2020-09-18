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


/* 3 */
let movies = {};

let a = prompt('Один из последних фильмов?', '');
let b = prompt('На сколько оцените его?', '');
let c = prompt('Один из последних фильмов?', '');
let d = prompt('На сколько оцените его?', '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB)
