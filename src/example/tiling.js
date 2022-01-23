"use strict";

import { Canvas, Scene, Part, Mask, DesignCamera, preloadUtilities } from "../index";  ///

import ColouredSquare from "./element/colouredSquare";
import TexturedQuadrangle from "./element/texturedQuadrangle";

const { preloadImages } = preloadUtilities;

const tilingExample = () => {
  preloadImages((images, imageNames) => {
    const canvas = new Canvas(),
          context = {};

    return (

      <Scene canvas={canvas} context={context} >
        <Part images={images} imageNames={imageNames} imageTiling >
          <Mask reference="mask">
            <ColouredSquare scale={[ 0.25, 0.25, 1 ]} position={[ 0.125, 0.125, 0.125 ]} />
          </Mask>
          <TexturedQuadrangle position={[ 0, 0, 0 ]} imageName="floorboards.jpg" maskReference="mask" />
          <TexturedQuadrangle position={[ -0.5, -0.5, -0.5 ]} imageName="paving.jpg" maskReference="mask" />
        </Part>
        <DesignCamera/>
      </Scene>

    );
  });
};

export default tilingExample;
