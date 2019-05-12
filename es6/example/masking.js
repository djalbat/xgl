'use strict';

const jiggle = require('../../index');

const SmallRectangle = require('./element/smallRectangle'),
      LargeRectangle = require('./element/largeRectangle');

const { Canvas, Scene, Mask, Part, Camera } = jiggle;

const canvas = new Canvas();

const maskingExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <LargeRectangle />
      <SmallRectangle />
    </Part>
    <Camera initialDistance={40} />
  </Scene>

;

module.exports = maskingExample;

/*
  <Scene canvas={canvas}>
    <Part canvas={canvas}>
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
    <Camera canvas={canvas} initialDistance={5} initialOffset={[ 0, 0, 0 ]} />
  </Scene>

 */