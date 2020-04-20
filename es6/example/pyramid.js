"use strict";

import { Canvas, Scene, Part, GamingCamera } from "../../index";  ///

import Pyramid from "./element/pyramid";
import configuration from "../miscellaneous/configuration";

const canvas = new Canvas();

const pyramidExample = () => {
  preloadImageMap((imageMap) => {
    const { imageMapJSON } = configuration;

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <Pyramid />
        </Part>
        <GamingCamera />
      </Scene>

    );
  });
};

module.exports = pyramidExample;

function preloadImageMap(callback) {
  const { imageMapURI } = configuration,
        imageMap = new Image(),	///
        src = imageMapURI;  ///

  Object.assign(imageMap, {
    src,
    onload
  });

  function onload(event) {
    callback(imageMap);
  }
}
