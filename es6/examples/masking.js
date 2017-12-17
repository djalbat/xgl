'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Mask = require('../element/mask'),
      Part = require('../element/part'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      ColouredCuboid = require('./common/coloured/cuboid'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const masking = () => {
  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene canvas={canvas}>
      <Part imageMap={imageMap} canvas={canvas}>
        <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
          <Mask>
            <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
              <Mask>
                <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
              </Mask>
            </ColouredCuboid>
          </Mask>
        </ColouredCuboid>
      </Part>
      <Camera initialDistance={5} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
    </Scene>

  );
};

module.exports = masking;
