'use strict';

const necessary = require('necessary');

const { asynchronousUtilities } = necessary,
      { repeatedly } = asynchronousUtilities;

function preloadImage(path, callback) {
  const image = new Image();

  image.onload = function() {
    callback(image);
  };

  image.src = path;  ///
}

function preloadImages(paths, callback) {
  const images = [],
        length = paths.length, ///
        context = {
          images: images,
          paths: paths
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
  const { images, paths } = context,
        path = paths[index],
        image = new Image();

  images[index] = image;

  image.onload = next;  ///

  image.src = path;  ///
}
