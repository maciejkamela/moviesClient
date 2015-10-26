'use strict';
var app = app || {};
app.headerSlider = (function () {
        return {

            init: function () {
                //this.slideMovie(this.properties.$leftArrow);
                //this.previousMovie(this.properties.$rightArrow);
                this.properties.moviesAmount = this.properties.movies.length;
                this.createImageLiElement();
                this.slideNext();
                this.slidePrevious();
                //this.showSliderArrows();
                //this.hideSlideArrow();
                this.toggleSliding();
            },
            properties: {
                imgPath: './assets/_images/',
                movies: ['brasco.jpg','avengers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg', 'goodFellas.jpg'],
                currentMovie: 0,
                $leftArrow: $('.poster-nav-left-arrow'),
                $rightArrow: $('.poster-nav-right-arrow')
            },

            //slideMovie: function (arrow) {
            //    var mainPoster = $('.main-poster'),
            //        self = this,
            //        moviesAmount = self.properties.movies.length;
            //    arrow.on('click', function () {
            //        if (self.properties.currentMovie < (moviesAmount - 1)) {
            //            self.properties.currentMovie++;
            //            mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
            //        } else {
            //            self.properties.currentMovie = 0;
            //            mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
            //        }
            //    });
            //},
            slideNext: function () {
                var $slider = $('.image-slider'),
                    liItems = $slider.children(),
                    self = this,
                    moviesAmount = this.properties.movies.length,
                    $windowWidth = $(window).width();
                this.properties.$leftArrow.on('click', function () {
                    if (self.properties.currentMovie < (moviesAmount - 1)) {
                        $slider.css({
                            left: -$windowWidth * (self.properties.currentMovie + 1) + 'px'
                        });
                        self.properties.currentMovie++;
                    } else if (self.properties.currentMovie === moviesAmount - 1) {
                        //for (var i = 0; i < moviesAmount; i++) {
                        //    $(liItems[i]).css({left: 0 + 'px', width: $windowWidth + 'px'});
                        //}
                        $slider.css({
                            left: 0 + 'px'
                        });
                        self.properties.currentMovie = 0;
                    }
                })
            },
            slidePrevious: function () {
                var $slider = $('.image-slider'),
                    liItems = $slider.children(),
                    self = this,
                    moviesAmount = this.properties.movies.length,
                    $windowWidth = $(window).width();
                this.properties.$rightArrow.on('click', function () {
                    console.log(self.properties.currentMovie);
                    if (self.properties.currentMovie === 0) {
                        self.properties.currentMovie = moviesAmount - 1;
                        for (var i = 0; i < moviesAmount; i++) {
                            $(liItems[i]).css({left: $windowWidth * (moviesAmount - i) + 'px', width: 0 + 'px'});
                        }
                        $(liItems[self.properties.currentMovie]).css({
                            left: 0 + 'px',
                            width: $windowWidth + 'px',
                            backgroundSize: 'cover'
                        });
                    } else {
                        console.log('else' + self.properties.currentMovie);
                        self.properties.currentMovie--;
                        $(liItems[self.properties.currentMovie]).css({left: 0 + 'px', width: $windowWidth + 'px'});
                    }
                })
            },
            //previousMovie: function (arrow) {
            //    var mainPoster = $('.main-poster'),
            //        self = this,
            //        moviesAmount = self.properties.movies.length;
            //    arrow.on('click', function () {
            //        if (self.properties.currentMovie === 0) {
            //            self.properties.currentMovie = moviesAmount - 1;
            //            mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
            //        } else {
            //            self.properties.currentMovie--;
            //            mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
            //        }
            //    });
            //},
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
            showliderArrows: function () {
                $('.slider').on('mouseenter',function (event) {
                    event.stopPropagation();
                    $('.poster-nav-arrow').css({display:"block"});
                })
            },
            hidelideArrow: function () {
                $('.slider').mouseleave(function () {
                    $('.poster-nav-arrow').css({display:"none"});
                })
            },
            toggleSliding: function () {
                $('.slider').hover(function () {
                   $('.poster').css("-webkit-animation-play-state", "paused");
                }, function () {
                    $('.poster').css("-webkit-animation-play-state", "running");
                })
            }
        };
    }()
);

























