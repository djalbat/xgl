'use strict';

const Edge = require('./section/edge'),
      OpenMesh = require('./section/openMesh'),
      LongEdge = require('./section/edge/long'),
      ShortEdge = require('./section/edge/short'),
      CanvasElement = require('../../../element/canvas');

const { height, thickness } = Edge,
      width = 4,
      depth = 16;

class BalconySection extends CanvasElement {
  childElements(properties) {
    return ([

      <LongEdge position={[               0, -height,            0 ]} depth={depth}/>,
      <LongEdge position={[ width-thickness, -height,            0 ]} depth={depth}/>,

      <ShortEdge position={[              0, -height,            0 ]} width={width}/>,
      <ShortEdge position={[              0, -height, 16-thickness ]} width={width}/>,

      <OpenMesh position={[ thickness, 0, thickness ]} overallWidth={width - 2 * thickness} overallDepth={depth - 2 * thickness} />

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(BalconySection, properties); }
}

module.exports = BalconySection;
