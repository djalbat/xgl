"use strict";

import { Canvas, Scene, Part, DesignCamera } from "../index";  ///

import ColouredSquare from "./element/colouredSquare";

const simpleExample = () => {
  const canvas = new Canvas();

  return (

    <Scene canvas={canvas}>
      <Part>
        { false && <ColouredSquare colour={[ 0, 0, 1 ]} /> }
      </Part>
      <DesignCamera/>
    </Scene>

  );
};

export default simpleExample;
