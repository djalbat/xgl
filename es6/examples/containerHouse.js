'use strict';

const React = require('../react'),
      Scene = require('../scene'),
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

  preloadImageMap((imageMap) => {
    return (

        <Scene imageMap={imageMap}>
          <Foundations />
          <FirstFloor />
          <SecondFloor />
          <ThirdFloor />
          <MainBalcony />
          <BedroomBalcony />
          <Frame />
        </Scene>

    );
  });
};

module.exports = containerHouse;
