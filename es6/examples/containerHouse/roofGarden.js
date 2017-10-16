'use strict';

const TexturePlane = require('../common/plane/texture');

const RoofGarden = (properties) => {
  return (

    <TexturePlane width={20} height={16} depth={0} offset={[ 20, 19.01, 32 ]} rotation={[ -90, 0, 0 ]} imageName="gravel.jpg" />

  );
};

module.exports = RoofGarden;
