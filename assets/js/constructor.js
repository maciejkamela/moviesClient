'use strict';

app.Slider = function ($sliderContainer, imgCollection, imgPath, currentMovie) {
    this.$sliderContainer = $sliderContainer,
        this.imgCollection = imgCollection,
        this.imgAmount = imgCollection.length,
        this.imgPath = imgPath,
        this.currentMovie = currentMovie,
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
    if (this.currentMovie < (this.imgAmount - 1)) {
        this.currentMovie++;
        this.$sliderContainer.css({
            left: -$windowWidth * this.currentMovie + 'px'
        });
    } else if (this.currentMovie === this.imgAmount - 1) {
        this.$sliderContainer.css({
            left: 0 + 'px'
        });
        this.currentMovie = 0;
    }
};
app.Slider.prototype.slidePrevious = function () {
    var $windowWidth = $(window).width();
    if (this.currentMovie === 0) {
        this.currentMovie = this.imgAmount - 1;
        this.$sliderContainer.css({
            left: -$windowWidth * this.currentMovie + 'px'
        });
    } else {
        this.currentMovie--;
        this.$sliderContainer.css({left: -$windowWidth * this.currentMovie + 'px'});
    }
};
app.Slider.prototype.createArrows = function () {
    var arrowContainer = $('<div>').addClass('poster-nav-arrow'),
        self = this,
        leftArrow = $('<div>').addClass('glyphicon glyphicon-chevron-left poster-nav-left-arrow'),
        rightArrow = $('<div>').addClass('glyphicon glyphicon-chevron-right poster-nav-right-arrow');
    $('body').append(arrowContainer);
    arrowContainer.append(leftArrow, rightArrow);
    leftArrow.on('click', function () {
        self.slideNext();
    });
    rightArrow.on('click', function () {
        self.slidePrevious();
    })
};






















