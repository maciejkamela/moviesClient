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

            var gallery = new app.Gallery(this.gallerySettings.$galleryContainer, this.gallerySettings.galleryCollection, this.gallerySettings.galleryPath, this.gallerySettings.backgrounds);
            gallery.createGallery();
            gallery.animateGalleryDetails();
            //gallery.toggleGalleryDetails();
        },
        sliderSettings: {
            $slider: $('.slider'),
            imgPath: './assets/_images/',
            currentMovie: 0,
            movies: ['postersilence.jpg', 'avengers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg', 'goodFellas.jpg']
        },
        posterSettings: {
            $posterContainer: $('.recommended-movies'),
            posterPath: './assets/_posters/',
            postersCollection: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
            rating: '5.0'
        },
        gallerySettings: {
            $galleryContainer: $('.gallery-container'),
            galleryPath: './assets/_gallery/',
            galleryCollection: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
            backgrounds: ['rgba(255, 193, 102, 0.85)','rgba(144, 96, 148, 0.85)', 'rgba(0, 177, 225, 0.85)','rgba(10, 205, 199, 0.85)','rgba(239, 97, 122, 0.85)','rgba(0, 0, 0, 0.85)']
        },
        getAllMovies: function () {
            var displayMoviesBtn = $('.display-all-movies-btn');
            displayMoviesBtn.on('click', function () {
                app.apiCalls.getAllData();
            });
        }

    };
}());