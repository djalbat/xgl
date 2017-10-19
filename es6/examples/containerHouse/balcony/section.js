'use strict';

const vec3 = require('../../../maths/vec3'),
      Edge = require('./section/edge'),
      OpenMesh = require('./section/openMesh'),
      LongEdge = require('./section/edge/long'),
      ShortEdge = require('./section/edge/short'),
      CanvasElement = require('../../../element/canvas');

const { add } = vec3,
      { height, thickness } = Edge,
      width = 4,
      depth = 16;

class BalconySection extends CanvasElement {
  childElements(properties) {
    const {position} = properties;

    return ([

      <LongEdge position={add(position, [0, -height, 0])} depth={depth}/>,
      <LongEdge position={add(position, [width - thickness, -height, 0])} depth={depth}/>,
      <ShortEdge position={add(position, [0, -height, 0])} width={width}/>,
      <ShortEdge position={add(position, [0, -height, 16 - thickness])} width={width}/>,

      <OpenMesh position={add(position, [thickness, 0, thickness])} width={width - 2 * thickness} depth={depth - 2 * thickness}/>

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(BalconySection, properties); }
}

module.exports = BalconySection;
