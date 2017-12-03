'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      ColouredCuboid = require('./common/coloured/cuboid'),
      ColouredCylinder = require('./common/coloured/cylinder'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {
  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={10} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <ColouredCuboid colour={[ 1, 0, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]} />
      <ColouredCylinder colour={[ 0, 1, 0, 1 ]} position={[ 1, 1, 1 ]} />
    </Scene>

  );
};

module.exports = shapes;
