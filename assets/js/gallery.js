'use strict';
var app = app || {};
app.Gallery = function ($galleryContainer, galleryCollection, galleryPath) {
    this.$galleryContainer = $galleryContainer;
    this.$galleryWrapper = $('<div>').addClass('row gallery-wrapper');
    this.$galleryContainer.append(this.$galleryWrapper);
    this.$galleryIsotop = $('<ul>').addClass('gallery-isotop');
    this.$galleryWrapper.append(this.$galleryIsotop);
    this.galleryCollection = galleryCollection;
    this.galleryAmount = galleryCollection.length;
    this.galleryPath = galleryPath;
};

app.Gallery.prototype.createGallery = function () {
    var $galleryItem,
        $figureItem,
        $figcaption,
        $galleryItemText;
    for (var i = 0; i < this.galleryAmount; i++) {
        $figcaption = $('<figcaption>');
        $galleryItemText = $('<div>').addClass('gallery-item-text');
        $galleryItem = $('<li>').addClass('col-xs-12 col-sm-6 col-md-4 gallery-item');
        $figcaption.append($galleryItemText);
        $figureItem = $('<figure>').addClass('figure-item').append($figcaption);
        $galleryItem.css({
            backgroundImage: 'url(' + this.galleryPath + this.galleryCollection[i] + ')',
            width: this.$galleryIsotop / this.galleryAmount
        });
        $galleryItem.append($figureItem);
        this.$galleryIsotop.append($galleryItem);
    }
};
















