const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 1; i < 3; i++) {
    const lastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
        scoreOfLastFilm1 = prompt('На сколько его оцените?', '');
        personalMovieDB.movies[lastFilm1] = scoreOfLastFilm1;
}


console.log(personalMovieDB);