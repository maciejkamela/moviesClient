/**
 * Created by camel on 2015-10-14.
 */
'use strict';
var app = app || {};
app.mainView = (function () {
    return {
        init: function
            () {
            this.getAllMovies();
            var slider = new app.Slider(this.data.$slider, this.data.movies, this.data.imgPath);
            slider.createImageLiElement();
            slider.createArrows();
        },
        data: {
            $slider: $('.image-slider'),
            imgAmount: 4,
            imgPath: './assets/_images/',
            movies: ['brasco.jpg', 'avengers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg', 'goodFellas.jpg']
        },
        getAllMovies: function () {
            var displayMoviesBtn = $('.display-all-movies-btn');
            displayMoviesBtn.on('click', function () {
                app.apiCalls.getAllData();
            });
        }
    }
}());