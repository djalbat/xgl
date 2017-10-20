'use strict';

const ColouredPlane = require('../../common/coloured/plane');

const FrontWall = (properties) => {
  const { length, overallWidth, overallHeight, colour } = properties,
        width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ 0, 0, length ],
        rotations = [ 0, 0, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

module.exports = FrontWall;
