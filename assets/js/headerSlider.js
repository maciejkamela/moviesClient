'use strict';
var app = app || {};
app.headerSlider = (function () {
    return {

        init: function () {
            this.slideMovie(this.properties.$leftArrow);
            this.previousMovie(this.properties.$rightArrow);
            this.properties.moviesAmount = this.properties.movies.length;
            this.createImageLiElement();
        },
        properties: {
            imgPath: './assets/_images/',
            movies: ['avangers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg'],
            currentMovie: 0,
            $leftArrow: $('.poster-nav-left-arrow'),
            $rightArrow: $('.poster-nav-right-arrow')
        },

        slideMovie: function (arrow) {
            var mainPoster = $('.main-poster'),
                self = this,
                moviesAmount = self.properties.movies.length;
            arrow.on('click', function () {
                if (self.properties.currentMovie < (moviesAmount - 1)) {
                    self.properties.currentMovie++;
                    mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
                } else {
                    self.properties.currentMovie = 0;
                    mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
                }
            });
        },
        previousMovie: function (arrow) {
            var mainPoster = $('.main-poster'),
                self = this,
                moviesAmount = self.properties.movies.length;
            arrow.on('click', function () {
                if (self.properties.currentMovie === 0) {
                    self.properties.currentMovie = moviesAmount - 1;
                    mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
                } else {
                    self.properties.currentMovie--;
                    mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
                }
            });
        },
        createImageLiElement: function () {
            var self = this,
                $imageSlider,
                $li;

            $imageSlider = $('.image-slider').detach();
            $imageSlider.width($(window).width() * this.properties.moviesAmount);
            for (var i = 0; i < this.properties.moviesAmount; i++) {
                $li = $('<li>').css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[i] + ')',
                    width: $(window).width()} );
                $imageSlider.append($li);

                console.log("created" + i + "element", this.properties.movies[i]);
            }
            $('.slider').append($imageSlider);
        }
    };
}()
);

























