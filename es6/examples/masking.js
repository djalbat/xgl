'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Mask = require('../element/mask'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      ColouredCuboid = require('./common/coloured/cuboid'),
      TexturedCuboid = require('./common/textured/cuboid'),
      ColouredTriangle = require('../examples/common/coloured/triangle'),
      TexturedTriangle = require('../examples/common/textured/triangle'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const masking = () => {
  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={5} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <TexturedTriangle imageName="graffiti.jpg">
        <Mask>
          <ColouredTriangle position={[ 0.375, 0.125, 0.5 ]} width={0.5} height={0.5} />
        </Mask>
      </TexturedTriangle>
    </Scene>

  );
};

module.exports = masking;

/*
 <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
 </Mask>
 </ColouredCuboid>
 </Mask>
 </ColouredCuboid>
 <ColouredTriangle colour={[ 1, 0, 1, 1 ]} >
 <Mask>
 <ColouredTriangle position={[ 0.375, 0.125, 0.5 ]} width={0.5} height={0.5} />
 </Mask>
 </ColouredTriangle>
*/
