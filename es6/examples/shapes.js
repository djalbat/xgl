'use strict';

require('../jiggle');

const Scene = require('../scene'),
      TextureCuboid = require('./common/cuboid/texture'),
      ColourCylinder = require('./common/cylinder/colour'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} initialPosition={[ 0, 0, -20 ]} offset={[ 0, 0, 0 ]}>
      <TextureCuboid offset={[ +1, +2, +3 ]} width={3} depth={2} height={1} imageName="bricks.jpg" />
      <ColourCylinder offset={[ -3, -2, -1 ]} width={1} depth={1} height={5} colour={[ 1, 0, 0, 1 ]} />
    </Scene>

  );
};

module.exports = shapes;
