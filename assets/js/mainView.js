/**
 * Created by camel on 2015-10-14.
 */
'use strict';
var app = app || {};
app.mainView = (function () {
    return {
        init: function () {
            this.getAllMovies();
            this.getNextMovie();
        },
        properties: {
            imgPath: './assets/_images/',
            movies: ['avangers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg'],
            counter: 0
        },
        getAllMovies: function () {
            var displayMoviesBtn = $('.display-all-movies-btn');
            displayMoviesBtn.on('click', function () {
                app.apiCalls.getAllData();
            });
        },
        getNextMovie: function () {
            var nextMovieArrow = $('.poster-nav-left-arrow'),
                mainPoster = $('.main-poster'),
                self = this;
            nextMovieArrow.on('click', function () {
                self.properties.counter++;
                mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.counter] + ')'});

            });
        }
    };

}()
);