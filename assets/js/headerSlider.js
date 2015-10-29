'use strict';
/*global window */
var app = app || {};
app.headerSlider = (function () {
        return {

            init: function () {
                this.properties.moviesAmount = this.properties.movies.length;
                this.createImageLiElement();
                this.slideNext();
                this.slidePrevious();
                this.toggleSliding();
            },
            properties: {
                imgPath: './assets/_images/',
                movies: ['brasco.jpg', 'avengers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg', 'goodFellas.jpg'],
                currentMovie: 0,
                $leftArrow: $('.poster-nav-left-arrow'),
                $rightArrow: $('.poster-nav-right-arrow')
            },
            slideNext: function () {
                var $slider = $('.image-slider'),
                    self = this,
                    moviesAmount = this.properties.movies.length,
                    $windowWidth = $(window).width();
                this.properties.$leftArrow.on('click', function () {
                    if (self.properties.currentMovie < (moviesAmount - 1)) {
                        self.properties.currentMovie++;
                        $slider.css({
                            left: -$windowWidth * self.properties.currentMovie + 'px'
                        });
                    } else if (self.properties.currentMovie === moviesAmount - 1) {
                        $slider.css({
                            left: 0 + 'px'
                        });
                        self.properties.currentMovie = 0;
                    }
                });
            },
            slidePrevious: function () {
                var $slider = $('.image-slider'),
                    self = this,
                    moviesAmount = this.properties.movies.length,
                    $windowWidth = $(window).width();
                this.properties.$rightArrow.on('click', function () {
                    if (self.properties.currentMovie === 0) {
                        self.properties.currentMovie = moviesAmount - 1;
                        $slider.css({
                            left: -$windowWidth * self.properties.currentMovie + 'px'
                        });
                    } else {
                        self.properties.currentMovie--;
                        $slider.css({left: -$windowWidth * self.properties.currentMovie + 'px'});
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
                    $li = $('<li>').css({
                        backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[i] + ')',
                        width: $(window).width(), backgroundSize: 'cover'
                    }).addClass('poster');
                    $imageSlider.append($li);
                }
                $('.slider').append($imageSlider);
            },
            toggleSliding: function () {
                $('.slider').hover(function () {
                    $('.poster').css("-webkit-animation-play-state", "paused");
                }, function () {
                    $('.poster').css("-webkit-animation-play-state", "running");
                });
            }
        };
    }()
);

























