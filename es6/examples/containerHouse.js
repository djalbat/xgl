'use strict';

require('../jiggle');

const Scene = require('../scene'),
      Canvas = require('../canvas'),
      Camera = require('../camera'),
      Frame = require('./containerHouse/frame'),
      FirstFloor = require('./containerHouse/floor/first'),
      ThirdFloor = require('./containerHouse/floor/third'),
      SecondFloor = require('./containerHouse/floor/second'),
      Foundations = require('./containerHouse/foundations'),
      MainBalcony = require('./containerHouse/balcony/main'),
      BedroomBalcony = require('./containerHouse/balcony/bedroom'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const containerHouse = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={150} initialOffset={[ -18, 0, -16 ]} canvas={canvas} />
      <Foundations />
      <FirstFloor />
      <SecondFloor />
      <ThirdFloor />
      <MainBalcony />
      <BedroomBalcony />
      <Frame />
    </Scene>

  );
};

module.exports = containerHouse;
