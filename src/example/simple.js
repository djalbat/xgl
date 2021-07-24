"use strict";

import { Canvas, Scene, Part, DesignCamera } from "../index";  ///

import ColouredSquare from "./element/colouredSquare";

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredSquare colour={[ 0, 0, 1 ]} />
    </Part>
    <DesignCamera/>
  </Scene>

;

export default simpleExample;
