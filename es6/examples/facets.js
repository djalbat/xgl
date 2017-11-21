'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Mask = require('../element/mask'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      ColouredCuboid = require('../examples/common/coloured/cuboid'),
      ColouredTriangle = require('../examples/common/coloured/triangle'),
      ColouredQuadrangle = require('../examples/common/coloured/quadrangle');

const facets = () => {
  const canvas = new Canvas();

  (() => 

    <Scene canvas={canvas}>
      <Camera initialDistance={15} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <ColouredCuboid colour={[ 1, 1, 0, 1]} />
    </Scene>

  )();
};

module.exports = facets;

/*
 <ColouredQuadrangle colour={[ 1, 1, 1, 1 ]} />
 <ColouredTriangle vertices={[ [ 2, 2, 0 ], [ 2, -2, 0 ], [ -2, 2, 0 ] ]} colour={[ 1, 0, 0, 1 ]} position={[ 0, 0, 0 ]} rotations={[ -45, +45, -45 ]} >
 <Mask>
 <ColouredTriangle vertices={[ [ 0, 0, 0 ], [ 2, 0, 0 ], [ 0, 2, 0 ] ]} colour={[ 0, 1, 0, 1 ]} position={[ 0, 0, 1 ]} rotations={[ +15, -15, 0 ]} >
 <Mask>
 <ColouredTriangle vertices={[ [ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ] ]} colour={[ 0, 0, 1, 1 ]} position={[ 0, 0, 1 ]} rotations={[ -15, +15, 0 ]} />
 </Mask>
 </ColouredTriangle>
 </Mask>
 </ColouredTriangle>
 */