'use strict';

const CanvasElement = require('../../element/canvas'),
      ColouredPlane = require('../common/coloured/plane');

const overallHeight = 9.5,
      overallWidth = 8,
      colour = [ 1, 1, 1, 1 ];

class Container extends CanvasElement {
  childElements(properties) {
    const { length } = properties;

    return ([

      top(length),
      bottom(length),
      frontWall(length),
      backWall(length),
      sideWallA(length),
      sideWallB(length),

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Container, properties); }
}

'use strict';

module.exports = Container;

const top = (length) => {
  const width = overallWidth,
        height = length,
        depth = overallHeight,
        position = [ 0, overallHeight, length ],
        rotations = [ -90, 0, 0 ];
;

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const bottom = (length) => {
  const width = overallWidth,
        height = length,
        depth = 0,
        position = [ 0, 0, 0 ],
        rotations = [ +90,  0, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const frontWall = (length) => {
  const width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ 0, 0, length ],
        rotations = [ 0, 0, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const backWall = (length) => {
  const width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, 0 ],
        rotations = [ 0, -180, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const sideWallA = (length) => {
  const width = length,
        height = overallHeight,
        depth = 0,
        position = [ 0, 0, 0 ],
        rotations = [ 0, -90, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const sideWallB = (length) => {
  const width = length,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, length ],
        rotations = [ 0, +90, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};
