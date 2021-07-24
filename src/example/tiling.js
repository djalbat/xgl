"use strict";

import { asynchronousUtilities } from "necessary";
import { Canvas, Scene, Part, Mask, DesignCamera } from "../index";  ///

import configuration from "../miscellaneous/configuration";
import ColouredSquare from "./element/colouredSquare";
import TexturedQuadrangle from "./element/texturedQuadrangle";

const { forEach } = asynchronousUtilities;

const canvas = new Canvas(),
      mask =

        <Mask>
          <ColouredSquare scale={[ 0.25, 0.25, 1 ]} position={[ 0.125, 0.125, 0 ]} />
        </Mask>

      ;

const tilingExample = () => {
  const { imageNames, imageDirectoryURI } = configuration;

  preloadImages(imageNames, imageDirectoryURI, (images) => {
    return (

      <Scene canvas={canvas}>
        <Part images={images} imageNames={imageNames} imageTiling >
          <TexturedQuadrangle position={[ 0, 0, 0 ]} imageName="floorboards.jpg" mask={mask} />
          <TexturedQuadrangle position={[ -0.5, -0.5, -0.5 ]} imageName="paving.jpg" mask={mask} />
        </Part>
        <DesignCamera/>
      </Scene>

    );
  });
};

export default tilingExample;

function preloadImages(imageNames, imageDirectoryURI, callback) {
  const images = [],
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

    callback(images);
  }
}
