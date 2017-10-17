'use strict';

const TexturePlane = require('../common/texture/plane');

const RoofGarden = (properties) => {
  return (

    <TexturePlane width={20} height={16} depth={0} position={[ 20, 19.01, 32 ]} rotations={[ -90, 0, 0 ]} imageName="gravel.jpg" />

  );
};

module.exports = RoofGarden;
