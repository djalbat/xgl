"use strict";

const xgl = require("../../index"); ///

const ColouredSquare = require("./element/colouredSquare");

const { Canvas, Scene, Part, DesignCamera } = xgl;

const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredSquare colour={[ 0, 0, 1 ]} />
    </Part>
    <DesignCamera />
  </Scene>

;

module.exports = simpleExample;
