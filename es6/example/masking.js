'use strict';

const xgl = require('../../index'); ///

const Cube = require('./element/cube');

const { Canvas, Scene, Mask, Part, GamingCamera } = xgl;

const canvas = new Canvas();

const maskingExample = () => {
  const SmallCube = (properties) =>

          <Cube scale={[ 1/4, 1/4, 1/4 ]} />

        ,
        smallCubeMask =

          <Mask>
            <SmallCube />
          </Mask>

        ,
        MediumCube = (properties) =>

          <Cube scale={[ 1/2, 1/2, 1/2 ]} mask={smallCubeMask} />

        ,
        mediumCubeMask =

          <Mask>
            <MediumCube />
          </Mask>

        ,
        LargeCube = (properties) =>

          <Cube mask={mediumCubeMask} />

        ;

  return (

    <Scene canvas={canvas}>
      <Part>
        <LargeCube />
      </Part>
      <GamingCamera />
    </Scene>

  );
};

module.exports = maskingExample;
