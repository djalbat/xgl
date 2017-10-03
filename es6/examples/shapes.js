'use strict';

require('../jiggle');

const Scene = require('../scene'),
      TextureCuboid = require('./common/cuboid/texture'),
      ColourCylinder = require('./common/cylinder/colour'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  // <TextureCuboid offset={[ +1, +2, +3 ]} width={3} depth={2} height={1} imageName="bricks.jpg" />

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap}>
      <ColourCylinder offset={[ -3, -2, -1 ]} width={1} depth={2} height={3} colour={[ 1, 0, 0, 1 ]} />
    </Scene>

  );
};

module.exports = shapes;
