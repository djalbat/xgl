'use strict';

require('../jiggle');

const Scene = require('../scene'),
      Canvas = require('../canvas'),
      Camera = require('../camera'),
      TexturePlane = require('./common/plane/texture'),
      TextureCuboid = require('./common/cuboid/texture'),
      ColourCylinder = require('./common/cylinder/colour'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={20} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <TexturePlane width={1} height={1} offset={[ -1, -1, -1 ]} imageName="gravel.jpg" />
      <TextureCuboid width={1} height={3} depth={2} offset={[ 2, 0, 2 ]} imageName="bricks.jpg" />
      <ColourCylinder width={1} height={1} depth={10} colour={[ 1, 0, 0, 1 ]} rotation={[ 0, 0, 0 ]} />
    </Scene>

  );
};

module.exports = shapes;
