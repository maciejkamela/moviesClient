'use strict';
var app = app || {};
app.Poster = function ($posterContainer, postersCollection, postersPath, rating) {
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
    var poster,
        $rating;
    for (var i = 0; i < this.postersAmount; i++) {
        poster = $('<li>').css({
            backgroundImage: 'url(' + this.postersPath + this.postersCollection[i] + ')',
            width: this.width / this.postersAmount,
            backgroundSize: 'cover'
        }).addClass('recommended-poster');
        $rating = $('<div>').addClass('movie-rating').text(this.rating);
        poster.append($rating, this.createMovieDetails());
        this.$posters.append(poster);
    }
};
app.Poster.prototype.zoomMovieRating = function () {
    this.$posters.find('li').hover(function () {
        $(this).addClass('zoom-movie');
        $(this).find('.movie-rating').fadeTo('fast', '0.8');
    }, function () {
        $(this).removeClass('zoom-movie');
        $(this).find('.movie-rating').fadeTo('fast', '0.4');
    })
};
app.Poster.prototype.createMovieDetails = function () {
    var $detailsContainer = $('<div>').addClass('movie-details'),
        $duration = $('<div>').addClass('movie-duration'),
        $category = $('<div>').addClass('movie-category'),
        $comments = $('<div>').addClass('movie-comments ');
    $duration.text('169 min');
    $category.text('Adventure | Fantasy | Drama | Horror');
    $comments.text('35 comments');
    $detailsContainer.append($duration, $category, $comments);
    return $detailsContainer;
};

app.Poster.prototype.toggleMovieDetails = function () {
    this.$posters.find('li').hover(function () {
        $(this).find('.movie-details').slideToggle('fast');
    })
};

















