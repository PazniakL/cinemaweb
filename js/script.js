let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);

const personalMovieDB = {

    count: numberOfFilms,
    movies:{},
    actors: {}, 
    genres:[], 
    private: false
};