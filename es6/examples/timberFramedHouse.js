'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Part = require('../element/part'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      Frame = require('./timberFramedHouse/frame'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const timberFramedHouse = () => {
  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene canvas={canvas}>
      <Part imageMap={imageMap} canvas={canvas}>
        <Frame />
      </Part>
      <Camera initialDistance={100} initialOffset={[ -18, 0, -16 ]} canvas={canvas} />
    </Scene>

  );
};

module.exports = timberFramedHouse;
