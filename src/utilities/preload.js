"use strict";

import { asynchronousUtilities } from "necessary";

import { ANONYMOUS } from "../constants";

const { forEach } = asynchronousUtilities;

export function preloadImages(host, imageNames, imageDirectoryURI, callback) {
  const images = [],
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

export function preloadImageMap(host, imageMapURI, imageMapJSON, callback) {
  const src = `${host}${imageMapURI}`,
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
