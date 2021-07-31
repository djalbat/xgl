"use strict";

import { Canvas, Scene, Part, DesignCamera, preloadUtilities } from "../index";  ///

import TexturedQuadrangle from "./element/texturedQuadrangle";

const { preloadImages } = preloadUtilities;

const houseExample = () => {
  preloadImages((images, imageNames) => {
    const canvas = new Canvas();

    return (

      <Scene canvas={canvas}>
        <Part images={images} imageNames={imageNames} imageTiling >
          <TexturedQuadrangle position={[ 0, 0, 0 ]} imageName="floorboards.jpg" />
        </Part>
        <DesignCamera/>
      </Scene>

    );
  });
};

export default houseExample;
