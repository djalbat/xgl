'use strict';

const CanvasElement = require('../../../element/canvas'),
      ColouredCuboid = require('../../common/coloured/cuboid');

const colour = [ 1, 1, 1, 1 ],
      thickness = 8/12,
      indent = 1/12;

class BottomRail extends CanvasElement {
  childElements(properties) {
    const { length } = properties,
          width = length, ///
          depth = thickness - 2*indent,
          height = thickness,
          position = [ 0, 0, indent ];

    return ([

      <ColouredCuboid width={width} height={height} depth={depth} position={position} colour={colour} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(BottomRail, properties); }
}

Object.assign(BottomRail, {
  thickness: thickness
});

module.exports = BottomRail;
