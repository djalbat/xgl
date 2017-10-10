'use strict';

require('../jiggle');

const Scene = require('../scene'),
      Camera = require('../camera'),
      TextureCuboid = require('./common/cuboid/texture'),
      ColourCylinder = require('./common/cylinder/colour'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} offset={[ 0, 0, 0 ]}>
      <Camera initialPosition={[ 0, 0, -20 ]} />
      <TextureCuboid width={1} depth={1} height={1} imageName="bricks.jpg" />
      <ColourCylinder width={1} depth={1} height={5} colour={[ 1, 0, 0, 1 ]} rotation={[ 0, 90, 0 ]} offset={[ 2, 0, 0 ]} />
    </Scene>

  );
};

module.exports = shapes;
