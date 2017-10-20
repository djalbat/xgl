'use strict';

const ColouredPlane = require('../../common/coloured/plane');

const Roof = (properties) => {
  const { length, overallWidth, overallHeight, colour } = properties,
        width = overallWidth,
        height = length,
        depth = overallHeight,
        position = [ 0, overallHeight, length ],
        rotations = [ -90, 0, 0 ];
;

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

module.exports = Roof;
