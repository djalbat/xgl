"use strict";

import { Canvas, Scene, Part, GamingCamera, preloadUtilities } from "../index";  ///

import Pyramid from "./element/pyramid";

const { preloadImageMap } = preloadUtilities;

const pyramidExample = () => {
  preloadImageMap((imageMap, imageMapJSON) => {
    const canvas = new Canvas();

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <Pyramid/>
        </Part>
        <GamingCamera/>
      </Scene>

    );
  });
};

export default pyramidExample;
