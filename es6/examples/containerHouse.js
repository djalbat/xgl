'use strict';

require('../jiggle');

const Scene = require('../scene'),
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

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap}>
      <Camera initialPosition={[ 0, 0, -150 ]} initialOffset={[ -18, -16, 0 ]} />
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
