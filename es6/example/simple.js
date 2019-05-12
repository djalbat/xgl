'use strict';

const jiggle = require('../../index');

const ColouredSquare = require('./element/colouredSquare');

const { Canvas, Scene, Part, Camera } = jiggle;

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredSquare colour={[ 0, 0, 1 ]} />
    </Part>
    <Camera />
  </Scene>

;

module.exports = simpleExample;
