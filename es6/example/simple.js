'use strict';

const xgl = require('../../index'); ///

const ColouredSquare = require('./element/colouredSquare');

const { Canvas, Scene, Part, DesignCamera } = xgl;

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredSquare colour={[ 0, 0, 1 ]} />
    </Part>
    <DesignCamera />
  </Scene>

;

const matrixMaths = require('../maths/matrix'),
      { rotate4, rotate4x, identity4 } = matrixMaths,
      angle = Math.PI / 3;

module.exports = simpleExample;
