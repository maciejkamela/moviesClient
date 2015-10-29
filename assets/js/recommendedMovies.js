'use strict';
var app = app || {};
app.Slider = function ($posterContainer) {
    this.$posterContainer = $posterContainer;
    this.$posters = $('<ul>').addClass('image-slider');// czy to jest OK
};

app.Slider.prototype.createPosterContainer = function () {
    var img;
    this.$posterContainer.append(this.$posters);
};
app.Slider.prototype.slideNext = function () {
    if (this.currentMovie < (this.imgAmount - 1)) {
        this.currentMovie++;
        this.$imageSlider.css({
            left: -this.width * this.currentMovie + 'px'
        });
    } else if (this.currentMovie === this.imgAmount - 1) {
        this.$imageSlider.css({
            left: 0 + 'px'
        });
        this.currentMovie = 0;
    }
};
app.Slider.prototype.slidePrevious = function () {
    if (this.currentMovie === 0) {
        this.currentMovie = this.imgAmount - 1;
        this.$imageSlider.css({
            left: -this.width * this.currentMovie + 'px'
        });
    } else {
        this.currentMovie--;
        this.$imageSlider.css({left: -this.width * this.currentMovie + 'px'});
    }
};
app.Slider.prototype.createArrows = function () {
    var arrowContainer = $('<div>').addClass('poster-nav-arrow'),
        self = this,
        leftArrow = $('<div>').addClass('glyphicon glyphicon-chevron-left poster-nav-left-arrow'),
        rightArrow = $('<div>').addClass('glyphicon glyphicon-chevron-right poster-nav-right-arrow');
    this.$sliderContainer.append(arrowContainer);
    arrowContainer.append(leftArrow, rightArrow);
    leftArrow.on('click', function () {
        self.slidePrevious();
    });
    rightArrow.on('click', function () {
        self.slideNext();
    });
};






















