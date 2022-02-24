const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);



const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько его оцените?', '');

    if (a != '' && b != '' && a.length < 50 && a != null && b != null) {
        personalMovieDB.movies[a] = b;
        console.log('done');

    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Вы посмотрели довольно мало фильмов');



} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');

} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');

} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);