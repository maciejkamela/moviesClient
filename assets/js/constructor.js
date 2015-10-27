'use strict';

app.Slider = function ($sliderContainer, imgCollection, imgPath) {
    this.$sliderContainer = $sliderContainer,
        this.imgCollection = imgCollection,
        this.imgAmount = imgCollection.length,
        this.imgPath = imgPath,
        this.width = $sliderContainer.width();
};

app.Slider.prototype.createImageLiElement = function () {
    var img;
    this.$sliderContainer.width($(window).width() * this.imgAmount);
    for (var i = 0; i < this.imgAmount; i++) {
        img = $('<li>').css({
            backgroundImage: 'url(' + this.imgPath + this.imgCollection[i] + ')',
            width: $(window).width(), backgroundSize: 'cover'
        }).addClass('poster');
        this.$sliderContainer.append(img);
    }
};
app.Slider.prototype.slideNext = function () {
    var $windowWidth = $(window).width();
};


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
}
























