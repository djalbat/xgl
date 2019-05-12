'use strict';

const jiggle = require('../../index');

const Cube = require('./element/cube');

const { Canvas, Scene, Mask, Part, Camera } = jiggle;

const canvas = new Canvas();

const SmallCube = (properties) => <Cube size={[ 1/3, 1/3, 1/3 ]} /> ;

const MediumCube = (properties) => <Cube size={[ 2/3, 2/3, 2/3 ]} mask={smallCubeMask} /> ;

const LargeCube = (properties) => <Cube mask={mediumCubeMask} /> ;

const smallCubeMask =

  <Mask>
    <SmallCube />
  </Mask>

;

const mediumCubeMask =

  <Mask>
    <MediumCube />
  </Mask>

;

const maskingExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <LargeCube />
    </Part>
    <Camera />
  </Scene>

;

module.exports = maskingExample;
