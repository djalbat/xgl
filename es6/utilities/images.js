'use strict';

const necessary = require('necessary');

const { arrayUtilities, asynchronousUtilities } = necessary,
      { repeatedly } = asynchronousUtilities,
      { first } = arrayUtilities;

function preloadImages(sources, callback) {
  const images = [],
        length = sources.length; ///

  repeatedly(
    function(next, done, context, index) {
      const source = sources[index],
            image = new Image();

      images[index] = image;

      image.onload = next;  ///

      image.src = source;  ///
    },
    length,
    done
  );

  function done() {
    callback(images);
  }
}

function createImageMap(images) {
  const firstImage = first(images),
        imageMap = firstImage;  ///

  return imageMap;
}

module.exports = {
  preloadImages: preloadImages,
  createImageMap: createImageMap
};
