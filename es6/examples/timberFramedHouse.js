'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      Frame = require('./timberFramedHouse/frame'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const timberFramedHouse = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={100} initialOffset={[ -18, 0, -16 ]} canvas={canvas} />
      <Frame />
    </Scene>

  );
};

module.exports = timberFramedHouse;
