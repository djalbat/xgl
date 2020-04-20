"use strict";

import { Canvas, Scene, Mask, Part, DesignCamera } from "../../index";  ///

import Cube from "./element/cube";

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
      <DesignCamera />
    </Scene>

  );
};

module.exports = maskingExample;
