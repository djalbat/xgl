"use strict";

import { asynchronousUtilities } from "necessary";

import { ANONYMOUS } from "../constants";

const { forEach } = asynchronousUtilities;

export function preloadImages(callback, configuration = window.__configuration__) { ///
  const { imageNames, imageDirectoryURI } = configuration,
        images = [],
        context = {
          images
        };

  forEach(imageNames, (imageName, next, done, context) => {
    const src = `${imageDirectoryURI}/${imageName}`,
          image = new Image(),
          crossOrigin = ANONYMOUS;

  Object.assign(image, {
      src,
      onload,
      crossOrigin
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
        src = imageMapURI,
        imageMap = new Image(),	///
        crossOrigin = ANONYMOUS;  ///

  Object.assign(imageMap, {
    src,
    onload,
    crossOrigin
  });

  function onload(event) {
    callback(imageMap, imageMapJSON);
  }
}

export default {
  preloadImages,
  preloadImageMap
};
