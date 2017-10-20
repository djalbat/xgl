'use strict';

const ColouredPlane = require('../../common/coloured/plane');

const Underside = (properties) => {
  const { length, overallWidth, overallHeight, colour } = properties,
        width = overallWidth,
        height = length,
        depth = 0,
        position = [ 0, 0, 0 ],
        rotations = [ +90,  0, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

module.exports = Underside;
