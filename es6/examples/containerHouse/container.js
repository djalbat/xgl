'use strict';

const CanvasElement = require('../../element/canvas'),
      ColouredPlane = require('../common/coloured/plane');

const overallHeight = 9.5,
      overallWidth = 8,
      colour = [ 1, 1, 1, 1 ];

class Container extends CanvasElement {
  childElements(properties) {
    const { length } = properties,
          overallLength = length; ///

    return ([

      top(overallLength),
      bottom(overallLength),
      frontWall(overallLength),
      backWall(overallLength),
      sideWallA(overallLength),
      sideWallB(overallLength),

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Container, properties); }
}

'use strict';

module.exports = Container;

const top = (overallLength) => {
  const width = overallWidth,
        height = overallLength,
        depth = overallHeight,
        position = [ 0, overallHeight, overallLength ],
        rotations = [ -90, 0, 0 ];
;

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const bottom = (overallLength) => {
  const width = overallWidth,
        height = overallLength,
        depth = 0,
        position = [ 0, 0, 0 ],
        rotations = [ +90,  0, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const frontWall = (overallLength) => {
  const width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ 0, 0, overallLength ],
        rotations = [ 0, 0, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const backWall = (overallLength) => {
  const width = overallWidth,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, 0 ],
        rotations = [ 0, -180, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const sideWallA = (overallLength) => {
  const width = overallLength,
        height = overallHeight,
        depth = 0,
        position = [ 0, 0, 0 ],
        rotations = [ 0, -90, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};

const sideWallB = (overallLength) => {
  const width = overallLength,
        height = overallHeight,
        depth = 0,
        position = [ overallWidth, 0, overallLength ],
        rotations = [ 0, +90, 0 ];

  return (

    <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />

  );
};
