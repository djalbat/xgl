'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      Mask = require('../element/canvas/mask'),
      CompoundedShapes = require('./shapes/compounded'),
      TexturedPlane = require('./common/textured/plane'),
      TexturedCuboid = require('./common/textured/cuboid'),
      ColouredCylinder = require('./common/coloured/cylinder'),
      TexturedCylinder = require('./common/textured/cylinder'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={10} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <TexturedCuboid width={1} height={1} depth={1} position={[ 0, 2, 0 ]} imageName="bricks.jpg" />
      <Mask />
      <TexturedPlane width={1} height={1} position={[ -1, -1, -1 ]} imageName="gravel.jpg" />
      <ColouredCylinder width={1} height={1} depth={1} position={[ 0, -1, 1 ]} rotations={[ 0, 0, 0 ]} colour={[ 1, 0, 0, 1 ]} />
      <TexturedCylinder width={1} height={1} depth={1} position={[ 0, 1, -1 ]} rotations={[ 0, 90, 90 ]} imageName="grass.jpg" />
      <CompoundedShapes width={0.1} height={0.1} depth={0.1} rotations={[ 45, 45, 45 ]} position={[ 0, 0, 10 ]} />
    </Scene>

  );
};

module.exports = shapes;

