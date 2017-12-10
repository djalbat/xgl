'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Part = require('../element/part'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      Frame = require('./containerHouse/frame'),
      RoofGarden = require('./containerHouse/roofGarden'),
      Foundations = require('./containerHouse/foundations'),
      FirstFloor = require('./containerHouse/floor/first'),
      ThirdFloor = require('./containerHouse/floor/third'),
      SecondFloor = require('./containerHouse/floor/second'),
      MainBalcony = require('./containerHouse/balcony/main'),
      LowerBalcony = require('./containerHouse/balcony/lower'),
      BedroomBalcony = require('./containerHouse/balcony/bedroom'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const containerHouse = () => {
  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene canvas={canvas}>
      <Part canvas={canvas}>
        <FirstFloor />
        <SecondFloor />
        <ThirdFloor />
      </Part>
      <Part canvas={canvas}>
        <MainBalcony />
        <LowerBalcony />
        <BedroomBalcony />
      </Part>
      <Part imageMap={imageMap} canvas={canvas}>
        <Foundations />
        <RoofGarden />
        <Frame />
      </Part>
      <Camera initialDistance={100} initialOffset={[ -18, 0, -16 ]} canvas={canvas} />
    </Scene>

  );
};

module.exports = containerHouse;
