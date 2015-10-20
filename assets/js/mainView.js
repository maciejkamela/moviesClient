/**
 * Created by camel on 2015-10-14.
 */
'use strict';
var app = app || {};
app.mainView = (function () {
        return {
            init: function () {
                this.getAllMovies();
            },
            getAllMovies: function () {
                var displayMoviesBtn = $('.display-all-movies-btn');
                displayMoviesBtn.on('click', function () {
                    app.apiCalls.getAllData();
                });
            }
        };
    //var path = '../_images/';
    var movies =[ 'avangers.jpg','carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg'];


    nextMovie: function () {
        currentIndex++;

        el.css(background, path + movie[currentIndex]);

    }

    }()
);