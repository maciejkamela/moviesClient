/**
 * Created by camel on 2015-10-14.
 */
'use strict';
/*global window */
var app = app || {};
app.mainView = (function () {
    return {
        init: function
            () {
            this.getAllMovies();
            var slider = new app.Slider(this.data.$slider, this.data.movies, this.data.imgPath, this.data.currentMovie);
            slider.createSlider();
            slider.createArrows();

            //var sliderek = new app.Slider(this.data2.$slider, this.data2.movies, this.data2.imgPath, this.data2.currentMovie);
            //sliderek.createSlider();
            //sliderek.createArrows();
        },
        data: {
            $slider: $('.slider'),
            imgPath: './assets/_images/',
            currentMovie: 0,
            movies: ['brasco.jpg', 'avengers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg', 'goodFellas.jpg']
        },
        getAllMovies: function () {
            var displayMoviesBtn = $('.display-all-movies-btn');
            displayMoviesBtn.on('click', function () {
                app.apiCalls.getAllData();
            });
        },
        data2: {
            $slider: $('.small-slider'),
            imgPath: './assets/_images/',
            currentMovie: 0,
            movies: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
        }
    };
}());