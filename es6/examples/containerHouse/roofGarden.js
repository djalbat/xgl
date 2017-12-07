'use strict';

const TexturedQuadrangle = require('../common/textured/quadrangle');

const RoofGarden = (properties) => {
  return (

    <TexturedQuadrangle width={20} height={16} depth={0} position={[ 20, 19.01, 32 ]} rotations={[ -90, 0, 0 ]} imageName="gravel.jpg" />

  );
};

module.exports = RoofGarden;
