'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      Triangle = require('../element/canvas/triangle');

const facets = () => {
  const canvas = new Canvas();

  (() => 

    <Scene canvas={canvas}>
      <Camera initialDistance={10} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <Triangle />
    </Scene>

  )();
};

module.exports = facets;
