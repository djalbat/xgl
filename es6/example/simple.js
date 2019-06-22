'use strict';

const xgl = require('../../index'); ///

const ColouredSquare = require('./element/colouredSquare');

const { Canvas, Scene, Part, DesignCamera } = xgl;

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredSquare colour={[ 0, 0, 1 ]} />
      <ColouredSquare colour={[ 0, 1, 0 ]} rotations={[ 90,   0, 0 ]} />
      <ColouredSquare colour={[ 1, 0, 0 ]} rotations={[  0, -90, 0 ]} />
    </Part>
    <DesignCamera initialAngles={[ 225, 45 ]} />
  </Scene>

;

module.exports = simpleExample;
