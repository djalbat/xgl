'use strict';

const jiggle = require('../../index');

const { Canvas, Scene, Camera } = jiggle;

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Camera canvas={canvas} initialDistance={5} initialOffset={[ 0, 0, 0 ]} />
  </Scene>

;

module.exports = simpleExample;
