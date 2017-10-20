'use strict';

const CanvasElement = require('../../../element/canvas'),
      ColouredPlane = require('../../common/coloured/plane');

class SideWall extends CanvasElement {
  childElements(properties) {
    const { length, overallWidth, overallHeight, colour } = properties,
          width = length,
          height = overallHeight,
          depth = 0,
          position = [ 0, 0, 0 ],
          rotations = [ 0, -90, 0 ];

    return ([

      <ColouredPlane colour={colour} width={width} height={height} depth={depth} position={position} rotations={rotations} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(SideWall, properties); }
}

module.exports = SideWall;
