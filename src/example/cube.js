"use strict";

import { Canvas, Scene, Part, DesignCamera } from "../index";  ///

import Cube from "./element/cube";

const canvas = new Canvas();

const cubeExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <Cube colour={[ 0, 1, 0 ]} />
    </Part>
    <DesignCamera/>
  </Scene>

;

export default cubeExample;
