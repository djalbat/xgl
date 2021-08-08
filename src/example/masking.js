"use strict";

import { Canvas, Scene, Mask, Part, DesignCamera } from "../index";  ///

import Cube from "./element/cube";

const maskingExample = () => {
  const canvas = new Canvas();

  return (

    <Scene canvas={canvas} magnification={10}>
      <Mask reference="quarter-sized-cube">
        <Cube scale={[ 1/4, 1/4, 1/4 ]} />
      </Mask>
      <Mask reference="half-sized-cube">
        <Cube scale={[ 1/2, 1/2, 1/2 ]} maskReference="quarter-sized-cube"/>
      </Mask>
      <Part>
        <Cube maskReference="half-sized-cube" />
      </Part>
      <DesignCamera/>
    </Scene>

  );
};

export default maskingExample;
