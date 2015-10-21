'use strict';
var app = app || {};
app.headerSlider = (function () {
        return {

            init: function () {
                this.slideMovie(this.properties.$leftArrow);
                this.previousMovie(this.properties.$rightArrow);
            },
            properties: {
                imgPath: './assets/_images/',
                movies: ['avangers.jpg', 'carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg', 'kamel.jpg'],
                counter: 0,
                $leftArrow: $('.poster-nav-left-arrow'),
                $rightArrow: $('.poster-nav-right-arrow'),
                currentMovie: 0
            },
            slideMovie: function (arrow) {
                var mainPoster = $('.main-poster'),
                    self = this,
                    moviesAmount = self.properties.movies.length;
                arrow.on('click', function () {
                    if(arrow.selector === '.poster-nav-left-arrow') {
                        self.properties.counter++;
                        self.properties.currentMovie = self.properties.counter;
                        console.log(self.properties.currentMovie, self.properties.counter);
                        if (self.properties.currentMovie === self.properties.counter) {
                            mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.counter] + ')'});
                        }
                        else if (self.properties.currentMovie < self.properties.counter) {
                            mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie +1] + ')'});
                        }
                    }
                });
            },
            previousMovie: function (arrow) {
                var mainPoster = $('.main-poster'),
                    self = this,
                    moviesAmount = self.properties.movies.length;
                arrow.on('click', function () {
                    self.properties.currentMovie--;

                    console.log('right' + self.properties.currentMovie,self.properties.counter);
                    if(self.properties.currentMovie > 0) {
                    mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.currentMovie] + ')'});
                    } else {
                        self.properties.currentMovie <= 0;
                        mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[moviesAmount - 1] + ')'});
                    }
                });
            }





            //previousMovie: function (arrow) {
            //    var mainPoster = $('.main-poster'),
            //        self = this,
            //        moviesAmount = self.properties.movies.length;
            //    arrow.on('click', function () {
            //    console.log(self.properties.currentMovie);
            //        if(arrow.selector === '.poster-nav-right-arrow') {
            //            moviesAmount--;
            //            if (moviesAmount >= self.properties.counter) {
            //                mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[moviesAmount] + ')'});
            //            } else {
            //                moviesAmount = self.properties.movies.length;
            //                mainPoster.css({backgroundImage: 'url(' + self.properties.imgPath + self.properties.movies[self.properties.counter] + ')'});
            //            }
            //        }
            //    });
            //}
        };
    }()
);