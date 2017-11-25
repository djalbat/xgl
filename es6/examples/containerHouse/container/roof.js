'use strict';

// const ColouredPlane = require('../../common/coloured/plane');

const indent = 1/12;

const Roof = (properties) => {
  const { length, overallWidth, overallHeight } = properties,
        width = overallWidth - 2*indent,
        height = length - 2*indent,
        position = [ indent, overallHeight - indent, length - indent ],
        rotations = [ -90, 0, 0 ],
        colour = [ 1, 1, 1, 1 ];

  // return (
  //
  //   <ColouredPlane colour={colour} width={width} height={height} position={position} rotations={rotations} />
  //
  // );
};

module.exports = Roof;
