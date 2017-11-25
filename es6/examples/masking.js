'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Mask = require('../element/mask'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      ColouredCuboid = require('../examples/common/coloured/cuboid'),
      ColouredTriangle = require('../examples/common/coloured/triangle');

const masking = () => {
  const canvas = new Canvas();

  (() => 

    <Scene canvas={canvas}>
      <Camera initialDistance={15} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
        <Mask>
          <ColouredCuboid colour={[ 1, 0, 1, 1 ]} width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
        </Mask>
      </ColouredCuboid>
    </Scene>

  )();
};

module.exports = masking;

/*
 <ColouredTriangle colour={[ 1, 1, 0, 1 ]} vertices={[ [ +2, -2, 0 ], [ +2, +2, 0 ], [ -2, +2, 0 ] ]}>
 <Mask>
 <ColouredTriangle colour={[ 1, 0, 0, 1 ]} vertices={[ [ +1, -1, 1 ], [ +1, +1, 1 ], [ -1, +1, 1 ] ]} />
 </Mask>
 </ColouredTriangle>
*/