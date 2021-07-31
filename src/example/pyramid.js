"use strict";

import {Canvas, Scene, Part, GamingCamera, DesignCamera} from "../index";  ///

import Pyramid from "./element/pyramid";
import configuration from "../miscellaneous/configuration";

const pyramidExample = () => {
  preloadImageMap((imageMap) => {
    const { imageMapJSON } = configuration,
          canvas = new Canvas();

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
