"use strict";

import { asynchronousUtilities } from "necessary";

import { ANONYMOUS } from "../constants";
import { DEFAULT_HOST } from "../defaults";

const { forEach } = asynchronousUtilities;

export function preloadImages(callback, configuration = window.__configuration__) { ///
  const { host = DEFAULT_HOST, imageNames, imageDirectoryURI } = configuration,
        images = [],
        context = {
          images
        };

  forEach(imageNames, (imageName, next, done, context) => {
    const src = `${host}${imageDirectoryURI}/${imageName}`,
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
  const { host = DEFAULT_HOST, imageMapURI, imageMapJSON } = configuration,
        src = `${host}${imageMapURI}`,
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
