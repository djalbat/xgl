'use strict';

const jiggle = require('../../index');

const ColouredTriangle = require('../element/common/coloured/triangle');

const { Canvas, Scene, Part, Camera } = jiggle;

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part canvas={canvas}>
      <ColouredTriangle />
    </Part>
    <Camera canvas={canvas} initialDistance={5} initialOffset={[ 0, 0, 0 ]} />
  </Scene>

;

module.exports = simpleExample;
