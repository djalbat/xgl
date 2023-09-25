"use strict";

import { Part, Scene, Canvas, GamingCamera, preloadUtilities } from "../index";  ///

import Pyramid from "./element/pyramid";

const { preloadImageMap } = preloadUtilities,
      { host, imageMapURI, imageMapJSON } = globalThis;

const pyramidExample = () => {
  preloadImageMap(host, imageMapURI, imageMapJSON, (imageMap, imageMapJSON) => {
    const canvas = new Canvas();

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <Pyramid/>
        </Part>
        <GamingCamera mouseSensitivity={10} />
      </Scene>

    );
  });
};

export default pyramidExample;
