'use strict';

const xgl = require('../../index'); ///

const ColouredSquare = require('./element/colouredSquare');

const { Canvas, Scene, Part, Mask, Camera } = xgl;

const canvas = new Canvas();

const mask =

  <Mask>
    <ColouredSquare size={[ 0.5, 0.5, 0 ]} />
  </Mask>

;

const MaskedColouredSquare = (properties) =>

  <ColouredSquare mask={mask} />

;

  const temporaryExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <MaskedColouredSquare size={[ 2, 2, 0 ]} rotations={[ 0, 45, 0 ]} />
    </Part>
    <Camera />
  </Scene>

;

module.exports = temporaryExample;
