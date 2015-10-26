'use strict';
var app = app || {};
app.createSlider = (function () {
    return {
        init: function () {
            var properties = {
                    imgPath: './assets/_images/',
                    movies: ['carlitosway.jpg', 'godfather.jpg', 'scareface.jpg', 'serpico.jpg'],
                    currentMovie: 0
                },
                $slider = $('.image-slider'),
                slider = new app.createSlider.Slider();
            slider.createImageLiElement($slider, 4, properties.imgPath, properties.movies);
        },
        Slider: function () {
            this.createImageLiElement = function (slider, imgAmount, imgPath, imgCollection) {
                this.imageSlider = slider,
                    this.imgAmount = imgAmount,
                    this.imgPath = imgPath,
                    this.imgCollection = imgCollection,
                    this.img;
                //this.imageSlider = slider.detach();
                this.imageSlider.width($(window).width() * this.imgAmount);
                for (var i = 0; i < this.imgAmount; i++) {
                    this.img = $('<li>').css({
                        backgroundImage: 'url(' + this.imgPath + this.imgCollection[i] + ')',
                        width: $(window).width(), backgroundSize: 'cover'
                    }).addClass('poster');
                    this.imageSlider.append(this.img);
                }
            }
            //    ,
            //    this.slideNext = function (slider, imgAmount) {
            //        this.imageSlider = slider,
            //            this.imgAmount = imgAmount,
            //        this.windowWidth = $(window).width();
            //    this.properties.$leftArrow.on('click', function () {
            //        if (self.properties.currentMovie < (moviesAmount - 1)) {
            //            self.properties.currentMovie++;
            //            $slider.css({
            //                left: -this.windowWidth * self.properties.currentMovie + 'px'
            //            });
            //        } else if (self.properties.currentMovie === moviesAmount - 1) {
            //            $slider.css({
            //                left: 0 + 'px'
            //            });
            //            self.properties.currentMovie = 0;
            //        }
            //    });
            //}

        }

    }
}());

































