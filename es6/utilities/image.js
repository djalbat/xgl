'use strict';

const necessary = require('necessary');

const { asynchronousUtilities } = necessary,
      { repeatedly } = asynchronousUtilities;

function preloadImage(source, callback) {
  const image = new Image();

  image.onload = function() {
    callback(image);
  };

  image.src = source;  ///
}

function preloadImages(sources, callback) {
  const images = [],
        length = sources.length, ///
        context = {
          images: images,
          sources: sources
        };

  repeatedly(preloadImageCallback, length, done, context);

  function done() {
    callback(images);
  }
}

module.exports = {
  preloadImage: preloadImage,
  preloadImages: preloadImages
};

function preloadImageCallback(next, done, context, index) {
  const { images, sources } = context,
        source = sources[index],
        image = new Image();

  images[index] = image;

  image.onload = next;  ///

  image.src = source;  ///
}
