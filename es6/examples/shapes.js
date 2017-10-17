'use strict';

require('../jiggle');

const Scene = require('../scene'),
      Canvas = require('../canvas'),
      Camera = require('../camera'),
      TexturePlane = require('./common/plane/texture'),
      TextureCuboid = require('./common/cuboid/texture'),
      ColourCylinder = require('./common/cylinder/colour'),
      TextureCylinder = require('./common/cylinder/texture'),
      TwentyFootContainer = require('./containerHouse/container/twentyFoot'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={100} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <TextureCuboid width={10} height={10} depth={10} offset={[ 0, 20, 0 ]} imageName="bricks.jpg" />
      <TwentyFootContainer rotations={[ 0, 0, 0 ]} />
    </Scene>

  );
};

module.exports = shapes;

// <TexturePlane width={1} height={1} offset={[ -1, -1, -1 ]} imageName="gravel.jpg" />
// <ColourCylinder width={1} height={1} depth={1} offset={[ 0, -1, 1 ]} rotations={[ 0, 0, 0 ]} colour={[ 1, 0, 0, 1 ]} />
// <TextureCylinder width={1} height={1} depth={1} offset={[ 0, 1, -1 ]} imageName="grass.jpg" rotations={[ 0, 90, 90 ]} />
