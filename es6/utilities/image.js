'use strict';

const necessary = require('necessary');

const { asynchronousUtilities } = necessary,
      { repeatedly } = asynchronousUtilities;

function preloadImages(sources, callback) {
  const images = [],
        length = sources.length; ///

  repeatedly(preloadImageCallback, length, done );

  function done() {
    callback(images);
  }
}

module.exports = {
  preloadImages: preloadImages
};

function preloadImageCallback(next, done, context, index) {
  const source = sources[index],
       image = new Image();

  images[index] = image;

  image.onload = next;  ///

  image.src = source;  ///
}
