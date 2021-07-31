"use strict";

import { asynchronousUtilities } from "necessary";

const { forEach } = asynchronousUtilities;

export function preloadImages(callback, configuration = window.__configuration__) { ///
  const { imageNames, imageDirectoryURI } = configuration,
        images = [],
        context = {
          images
        };

  forEach(imageNames, (imageName, next, done, context) => {
    const image = new Image(),
          src = `${imageDirectoryURI}/${imageName}`;

    Object.assign(image, {
      src,
      onload
    });

    function onload() {
      images.push(image);

      next();
    }
  }, done, context);

  function done() {
    const { images } = context;

    callback(images, imageNames);
  }
}

export function preloadImageMap(callback, configuration = window.__configuration__) { ///
  const { imageMapURI, imageMapJSON } = configuration,
        imageMap = new Image(),	///
        src = imageMapURI;  ///

  Object.assign(imageMap, {
    src,
    onload
  });

  function onload(event) {
    callback(imageMap, imageMapJSON);
  }
}

export default {
  preloadImages,
  preloadImageMap
};
