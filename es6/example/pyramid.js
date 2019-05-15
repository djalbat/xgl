'use strict';

const jiggle = require('../../index');

const Pyramid = require('./element/pyramid'),
      configuration = require('../miscellaneous/configuration'),
      ColouredSquare = require('./element/colouredSquare');

const { Canvas, Scene, Mask, Part, Camera } = jiggle;

const canvas = new Canvas();

const mask =

  <Mask>
    <ColouredSquare size={[ 0.25, 0.25, 1 ]} position={[ -0.125, +0.125, 1 ]} />
  </Mask>

;

const pyramidExample = () => {
  preloadImageMap((imageMap) => {
    const { imageMapJSON } = configuration;

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <ColouredSquare size={[ 0.25, 0.25, 1 ]} position={[ -0.125, +0.125, 1 ]} />
          <Pyramid mask={mask} />
        </Part>
        <Camera />
      </Scene>

    );
  });
};

module.exports = pyramidExample;

function preloadImageMap(callback) {
  const { imageMapURI } = configuration,
        imageMap = new Image(),	///
        src = imageMapURI;  ///

  Object.assign(imageMap, {
    src,
    onload
  });

  function onload(event) {
    callback(imageMap);
  }
}

/*

    <ColouredSquare size={[ 0.25, 0.25, 1]} position={[ -0.25, +0.25, 0 ]} />

 */