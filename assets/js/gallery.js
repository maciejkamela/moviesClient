'use strict';
var app = app || {};
app.Gallery = function ($galleryContainer, galleryCollection, galleryPath, detailsBackground) {
    this.$galleryContainer = $galleryContainer;
    this.$galleryWrapper = $('<div>').addClass('gallery-wrapper');
    this.$galleryContainer.append(this.$galleryWrapper);
    this.$galleryIsotop = $('<ul>').addClass('row gallery-isotop');
    this.$galleryWrapper.append(this.$galleryIsotop);
    this.galleryCollection = galleryCollection;
    this.galleryAmount = galleryCollection.length;
    this.galleryPath = galleryPath;
    this.background = detailsBackground;
};

app.Gallery.prototype.createGallery = function () {
    var $galleryItem,
        $figureItem,
        $figcaption,
        $galleryItemText;
    for (var i = 0; i < this.galleryAmount; i++) {
        $figcaption = $('<figcaption>');
        $galleryItemText = $('<div>').addClass('gallery-item-text').text('Movie title');
        $galleryItem = $('<li>').addClass('col-xs-12 col-sm-6 col-md-4 gallery-item');
        $figcaption.append($galleryItemText);
        $figureItem = $('<figure>').addClass('figure-item').append('<img src =' + this.galleryPath + this.galleryCollection[i] + ' />', $figcaption);
        $galleryItem.append(this.createDetails(i),$figureItem);
        this.$galleryIsotop.append($galleryItem);
    }
};

app.Gallery.prototype.createDetails = function (index) {
    var $movieDetails = $('<div>').addClass('gallery-item-details');
    var $textSpan = $('<span>');
    $textSpan.text('jakis demo text');
    $movieDetails.append($textSpan);
    $movieDetails.css({
        display: "block",
        backgroundColor: this.background[index]
    });
    return $movieDetails;

};

app.Poster.prototype.toggleGalleryDetails = function (index) {
    this.$galleryIsotop.find('li').hover(function () {
        $(this).find('.gallery-item-details').css({
            display: "block",
            backgroundColor: this.background[index]
        });
    });
};















