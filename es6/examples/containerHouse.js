'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      Frame = require('./containerHouse/frame'),
      RoofGarden = require('./containerHouse/roofGarden'),
      FirstFloor = require('./containerHouse/floor/first'),
      ThirdFloor = require('./containerHouse/floor/third'),
      SecondFloor = require('./containerHouse/floor/second'),
      Foundations = require('./containerHouse/foundations'),
      MainBalcony = require('./containerHouse/balcony/main'),
      LowerBalcony = require('./containerHouse/balcony/lower'),
      BedroomBalcony = require('./containerHouse/balcony/bedroom'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const containerHouse = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={100} initialOffset={[ -18, 0, -16 ]} canvas={canvas} />
      <Foundations />
      <FirstFloor />
      <SecondFloor />
      <ThirdFloor />
      <RoofGarden />
      <MainBalcony />
      <LowerBalcony />
      <BedroomBalcony />
      <Frame />
    </Scene>

  );
};

module.exports = containerHouse;
