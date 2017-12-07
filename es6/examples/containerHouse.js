'use strict';

require('../jiggle');

const Canvas = require('../canvas'),
      Scene = require('../element/scene'),
      Camera = require('../element/camera'),
      MainBalcony = require('./containerHouse/balcony/main'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const containerHouse = () => {
  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={1} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <MainBalcony />
    </Scene>

  );
};

module.exports = containerHouse;

/*
 Frame = require('./containerHouse/frame'),
 RoofGarden = require('./containerHouse/roofGarden'),
 Foundations = require('./containerHouse/foundations'),
 FirstFloor = require('./containerHouse/floor/first'),
 ThirdFloor = require('./containerHouse/floor/third'),
 SecondFloor = require('./containerHouse/floor/second'),
 LowerBalcony = require('./containerHouse/balcony/lower'),
 BedroomBalcony = require('./containerHouse/balcony/bedroom'),

 <Frame />
 <RoofGarden />
 <Foundations />
 <FirstFloor />
 <SecondFloor />
 <ThirdFloor />
 <LowerBalcony />
 <BedroomBalcony />

 */