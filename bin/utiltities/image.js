'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function createImageMap(images) {
  const firstImage = first(images),
        imageMap = firstImage;  ///

  return imageMap;
}

module.exports = {
  createImageMap: createImageMap
};
