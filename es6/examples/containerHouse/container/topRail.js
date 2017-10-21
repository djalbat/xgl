'use strict';

const CanvasElement = require('../../../element/canvas'),
      ColouredCuboid = require('../../common/coloured/cuboid');

const colour = [ 1, 1, 1, 1 ],
      thickness = 8/12,
      indent = 1/12;

class TopRail extends CanvasElement {
  childElements(properties) {
    const { length } = properties,
          width = length, ///
          depth = thickness - 2*indent,
          height = thickness,
          position = [ 0, -height, indent ];

    return ([

      <ColouredCuboid width={width} height={height} depth={depth} position={position} colour={colour} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(TopRail, properties); }
}

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;
