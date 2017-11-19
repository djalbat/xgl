'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Mask = require('../element/mask'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      Triangle = require('../element/canvas/triangle');

const facets = () => {
  const canvas = new Canvas();

  (() => 

    <Scene canvas={canvas}>
      <Camera initialDistance={15} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <Triangle vertices={[ [ 2, 2, 0 ], [ 2, -2, 0 ], [ -2, 2, 0 ] ]} colour={[ 1, 0, 0, 1 ]} position={[ 0, 0, 0 ]} rotations={[ 0, 0, 0 ]} >
        <Mask>
          <Triangle vertices={[ [ 0, 0, 0 ], [ 2, 0, 0 ], [ 0, 2, 0 ] ]} colour={[ 0, 1, 0, 1 ]} position={[ 0, 0, 1 ]} rotations={[ +15, -15, 0 ]} >
            <Mask>
              <Triangle vertices={[ [ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ] ]} colour={[ 0, 0, 1, 1 ]} position={[ 0, 0, 1 ]} rotations={[ -15, +15, 0 ]} />
            </Mask>
          </Triangle>
        </Mask>
      </Triangle>
    </Scene>

  )();
};

module.exports = facets;
