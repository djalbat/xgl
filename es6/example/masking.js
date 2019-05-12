'use strict';

const jiggle = require('../../index');

const Cube = require('./element/cube');

const { Canvas, Scene, Mask, Part, Camera } = jiggle;

const canvas = new Canvas();

const maskingExample = () => {
  const SmallCube =

          <Cube size={[ 1/4, 1/4, 1/4 ]} />

        ,
        smallCubeMask =

          <Mask>
            <SmallCube />
          </Mask>

        ,
        MediumCube =

          <Cube size={[ 1/2, 1/2, 1/2 ]} mask={smallCubeMask} />

        ,
        mediumCubeMask =

          <Mask>
            <MediumCube />
          </Mask>

        ,
        LargeCube = <Cube mask={mediumCubeMask} />;

  return (

    <Scene canvas={canvas}>
      <Part>
        <LargeCube />
      </Part>
      <Camera />
    </Scene>

  );
};

module.exports = maskingExample;
