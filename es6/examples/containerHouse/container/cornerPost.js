'use strict';

const CanvasElement = require('../../../element/canvas'),
      ColouredCuboid = require('../../common/coloured/cuboid');

const colour = [ 1, 1, 1, 1 ],
      width = 8/12,
      depth = 8/12,
      indent = 1/12;

class CornerPost extends CanvasElement {
  childElements(properties) {
    const { overallHeight } = properties,
          position = [ indent, 0, indent ],
          height = overallHeight; ///

    return ([

      <ColouredCuboid width={width - 2*indent} height={height} depth={depth - 2*indent} position={position} colour={colour} />, ///

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(CornerPost, properties); }
}

Object.assign(CornerPost, {
  width: width,
  depth: depth
});

module.exports = CornerPost;
