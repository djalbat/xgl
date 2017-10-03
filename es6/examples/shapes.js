'use strict';

require('../jiggle');

const Scene = require('../scene'),
      ColourCuboid = require('./common/cuboid/colour'),
      TextureCuboid = require('./common/cuboid/texture'),
      ColourCylinder = require('./common/cylinder/colour'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap}>
      <TextureCuboid offset={[ +1, +1, +1 ]} width={1} depth={1} height={1} imageName="bricks.jpg" />
      <ColourCuboid offset={[ -1, -1, -1 ]} width={1} depth={1} height={1} colour={[ 1, 0, 0, 1 ]} />
      <ColourCylinder offset={[ 0, 0, 0 ]} width={1} depth={1} height={1} colour={[ 0, 1, 0, 1 ]} />
    </Scene>

  );
};

module.exports = shapes;
