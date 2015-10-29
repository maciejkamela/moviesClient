'use strict';
var app = app || {};
app.Poster = function ($posterContainer, postersCollection, postersPath,rating) {
    this.$posterContainer = $posterContainer;
    this.$posters = $('<ul>').addClass('recommended-movies-items');// czy to jest OK
    this.postersCollection = postersCollection;
    this.postersAmount = postersCollection.length;
    this.postersPath = postersPath;
    this.width = $posterContainer.width();
    this.rating = rating;
};

app.Poster.prototype.createPosterContainer = function () {
    this.$posterContainer.append(this.$posters);
    var poster;
    var $rating;
    for (var i = 0; i < this.postersAmount; i++) {
        poster =  $('<li>').css({
            backgroundImage: 'url(' + this.postersPath + this.postersCollection[i] + ')',
            width: Math.ceil(this.width/this.postersAmount),
            backgroundSize: 'cover'
        }).addClass('recommended-poster');
        $rating = $('<div>').addClass('movie-rating').text(this.rating);
        poster.append($rating);
        this.$posters.append(poster);
    }
};
app.Poster.prototype.zoomMovieRating = function () {
    $(this.$posters, 'li').hover(function () {
        $('.movie-rating').fadeTo('fast', '0.8');
    }, function() {
        $('.movie-rating').fadeTo('fast', '0.4');
    } )
};



















