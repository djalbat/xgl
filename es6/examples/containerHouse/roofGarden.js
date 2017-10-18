'use strict';

const TexturedPlane = require('../common/textured/plane');

const RoofGarden = (properties) => {
  return (

    <TexturedPlane width={20} height={16} depth={0} position={[ 20, 19.01, 32 ]} rotations={[ -90, 0, 0 ]} imageName="gravel.jpg" />

  );
};

module.exports = RoofGarden;
