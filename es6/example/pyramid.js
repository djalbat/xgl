'use strict';

const xgl = require('../../index'); ///

const Pyramid = require('./element/pyramid'),
      configuration = require('../miscellaneous/configuration');

const { Canvas, Scene, Part, Camera } = xgl;

const canvas = new Canvas();

const pyramidExample = () => {
  preloadImageMap((imageMap) => {
    const { imageMapJSON } = configuration;

    return (

      <Scene canvas={canvas} done={done}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <Pyramid />
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

function done() {
  console.log('Done!');
}
