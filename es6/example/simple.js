'use strict';

const jiggle = require('../../index');

const ColouredTriangle = require('../element/common/coloured/triangle');

const { Canvas, Scene, Part, Camera } = jiggle;

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredTriangle />
    </Part>
    <Camera />
  </Scene>

;

module.exports = simpleExample;
