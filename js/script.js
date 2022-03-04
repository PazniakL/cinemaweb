'use strict';
const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }



    },
    rememberMyFilms: function () {
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

    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Вы посмотрели довольно мало фильмов');



        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');

        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');

        } else {
            console.log('Произошла ошибка');
        }


    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
           let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                i--;
            } else {

                personalMovieDB.genres[i - 1] = genre;
                
            }
           
        }
        personalMovieDB.genres.forEach(function(item, index){
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log('Database is private');
        }
    }

};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.private);