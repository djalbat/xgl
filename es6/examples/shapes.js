'use strict';

require('../jiggle');

const Scene = require('../scene'),
      Canvas = require('../canvas'),
      Camera = require('../camera'),
      TextureCuboid = require('./common/cuboid/texture'),
      ColourCylinder = require('./common/cylinder/colour'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialPosition={[ 0, 0, -20 ]} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <TextureCuboid width={1} depth={1} height={1} imageName="bricks.jpg" />
      <ColourCylinder width={1} depth={1} height={5} colour={[ 1, 0, 0, 1 ]} rotation={[ 0, 90, 0 ]} offset={[ 2, 0, 0 ]} />
    </Scene>

  );
};

module.exports = shapes;
