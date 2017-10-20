'use strict';

const ColouredPlane = require('../../common/coloured/plane');

const BackWall = (properties) => {
  const { length, overallWidth, overallHeight, colour } = properties,
        width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, 0 ],
        rotations = [ 0, -180, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

module.exports = BackWall;
