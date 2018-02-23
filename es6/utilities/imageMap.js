'use strict';

function preloadImageMap(imageMapURL, callback) {
  const src = imageMapURL;  ///

  preloadImage(src, callback);
}

function getImageDetails(imageName) {
  const imageDetails = imageMapJSON[imageName];

  return imageDetails;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  getImageDetails: getImageDetails
};

function preloadImage(src, callback) {
  const image = new Image(),
        onload = function() {
          callback(image)
        };

  Object.assign(image, {
    src: src,
    onload: onload
  });
}
