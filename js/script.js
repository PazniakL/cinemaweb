const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

const personalMovieDB = {

    count: numberOfFilms,
    movies:{},
    actors: {}, 
    genres:[], 
    private: false
};

const lastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
      scoreOfLastFilm1 = prompt('На сколько его оцените?', ''),
      lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      scoreOfLastFilm2 = prompt('На сколько его оцените?', '');


personalMovieDB.movies[lastFilm1] = scoreOfLastFilm1;
personalMovieDB.movies[lastFilm2] = scoreOfLastFilm2;
console.log(personalMovieDB);
