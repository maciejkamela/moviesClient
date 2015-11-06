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
        $galleryItem.append(this.createDetails(i), $figureItem, this.createGalleryModal(i,'<img src =' + this.galleryPath + this.galleryCollection[i] + ' />'));
        this.$galleryIsotop.append($galleryItem);
    }
};

app.Gallery.prototype.createDetails = function (index) {
    var $movieDetails = $('<div>').addClass('gallery-item-details');
    var $textSpan = $('<span>').addClass('gallery-details-text');
    $textSpan.text('jakis demo text');
    $movieDetails.append($textSpan, this.createDetailsFooter());
    $movieDetails.css({
        backgroundColor: this.background[index]
    });
    //this.toggleGalleryDetails($movieDetails);
    return $movieDetails;
};

app.Gallery.prototype.toggleGalleryDetails = function () {
    this.$galleryIsotop.find('li').hover(function () {
        $(this).find('.gallery-item-details').css({
            //backgroundColor: this.background[index]
            backgroundColor: "rgba(255, 193, 102, 0.85)"
        }).fadeIn(500);
    }, function () {
        $(this).find('.gallery-item-details').fadeOut(500);
    });
};

app.Gallery.prototype.animateGalleryDetails = function () {
    this.$galleryIsotop.find('li').hover(function () {
        $(this).find('.gallery-item-details').addClass('animate');
    }, function () {
        $(this).find('.gallery-item-details').removeClass('animate');
    });
};

app.Gallery.prototype.createDetailsFooter = function () {
    var $footer = $('<span>').addClass('gallery-details-footer'),
        $like = $('<span>').addClass('gallery-details-likes').attr('title', 'Like it'),
        heart = $('<i>').addClass('fa fa-heart heart'),
        $likeCount = $('<span>').addClass('gallery-details-like-count').text('69');

    $like.append(heart, $likeCount);
    $footer.append($like);
    return $footer;
};

app.Gallery.prototype.createGalleryModal = function (modalId,background) {
    var $modal = $('<div>').addClass('modal fade').attr({id: "myModal" + modalId, role: "dialog"}),
        $modalDialog = $('<div>').addClass('modal-dialog'),
        $modalContent = $('<div>').addClass('modal-content'),
        $modalFooter = $('<div>').addClass('modal-footer'),
        $closeBtn = $('<button>').addClass('close').attr({'data-dismiss': 'modal'}).text('X');
    $modalContent.append($closeBtn, background, $modalFooter);
    $modalDialog.append($modalContent);
    $modal.append($modalDialog);

    return $modal;
};

app.Gallery.prototype.displayModal = function () {
    this.$galleryIsotop.find('li').on('click', function () {
        $(this).find('.gallery-item-details').attr({"data-toggle": "modal", "data-target": "#myModal" + $(this).index()});
    });
};
