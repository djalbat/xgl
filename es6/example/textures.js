'use strict';

const jiggle = require('../../index');

const configuration = require('../miscellaneous/configuration'),
      TexturedSquare = require('./element/texturedSquare');

const { imageMapURI, imageMapJSON } = configuration,
      { Canvas, Scene, Mask, Part, Camera } = jiggle;

const canvas = new Canvas();

const texturesExample = () => {
  preloadImageMap((imageMap) => {

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <TexturedSquare />
        </Part>
        <Camera />
      </Scene>

    );
  });
};

module.exports = texturesExample;

function preloadImageMap(callback) {
  const imageMap = new Image(),	///
        src = imageMapURI;  ///

  Object.assign(imageMap, {
    src,
    onload
  });

  function onload(event) {
    callback(imageMap);
  }
}

