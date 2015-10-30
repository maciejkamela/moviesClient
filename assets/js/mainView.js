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
            var slider = new app.Slider(this.sliderSettings.$slider, this.sliderSettings.movies, this.sliderSettings.imgPath, this.sliderSettings.currentMovie);
            slider.createSlider();
            slider.createArrows();
            var poster = new app.Poster(this.posterSettings.$posterContainer, this.posterSettings.postersCollection, this.posterSettings.posterPath, this.posterSettings.rating);
            poster.createPosterContainer();
            poster.zoomMovieRating();
            poster.toggleMovieDetails();
        },
        sliderSettings: {
            $slider: $('.slider'),
            imgPath: './assets/_images/',
            currentMovie: 0,
            movies: ['brasco.jpg', 'avengers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg', 'goodFellas.jpg']
        },
        posterSettings: {
            $posterContainer: $('.recommended-movies'),
            posterPath: './assets/_posters/',
            currentMovie: 0,
            postersCollection: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
            rating: '5.0'
        },
        getAllMovies: function () {
            var displayMoviesBtn = $('.display-all-movies-btn');
            displayMoviesBtn.on('click', function () {
                app.apiCalls.getAllData();
            });
        }

    };
}());