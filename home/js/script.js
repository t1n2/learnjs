'use strict';

const personaMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function () {
		this.count = +prompt('Сколько фильмов вы посмотрели?', '');

		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (var i = 0; i < 2; i++) {
			let a = prompt('Один из последних фильмов?', ''),
			b = prompt('На сколько оцените его?', '');
			if ((a || b !== '') && (a || b !== null) && (a.length < 50)) {
				personaMovieDB.movies[a] = b;
			} else i--;
		}
	},
	detectPErsonalLevel: function () {
		let checkCount = (personaMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов') : 
	   (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) ? alert('Вы классический зритель') :
	   (personaMovieDB.count > 30) ? alert('Вы киноман') :
	   alert ('Произошла ошибка');
	},
	writeYourGenres: function () {
		for (var i = 0; i < 3; i++) {
			personaMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '')
			if (personaMovieDB.genres[i] === '' || personaMovieDB.genres[i] === null) {
				i--;
			}
		}
		this.genres.forEach(function (item, i) {
			console.log(`Любимый жанр #${i + 1} - это ${item}`)
		});
	},
	toggleVisibleMyDB: function () {
		let checkHidden = !(this.privat);
		this.privat = checkHidden;
	},
	showDB: function (hidden) {
		if (!hidden) {
			console.log(personaMovieDB)
		} 
	}
}

personaMovieDB.start();
personaMovieDB.rememberMyFilms();
personaMovieDB.detectPErsonalLevel();
personaMovieDB.writeYourGenres();
personaMovieDB.toggleVisibleMyDB();
personaMovieDB.showDB(personaMovieDB.privat);
