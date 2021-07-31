"use strict";

import { Canvas, Scene, Part, DesignCamera } from "../index";  ///

import Cube from "./element/cube";

const cubeExample = () => {
  const canvas = new Canvas();

  return (

    <Scene canvas={canvas} magnification={1}>
      <Part>
        <Cube colour={[ 0, 1, 0 ]} />
      </Part>
      <DesignCamera/>
    </Scene>

  );
};

export default cubeExample;
