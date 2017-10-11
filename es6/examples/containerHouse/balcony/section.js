'use strict';

const vec3 = require('../../../gl/vec3'),
      Edge = require('./section/edge'),
      OpenMesh = require('./section/openMesh'),
      LongEdge = require('./section/edge/long'),
      ShortEdge = require('./section/edge/short');

const { add } = vec3,
      width = 4,
      depth = 16;

const { height, thickness } = Edge;

const BalconySection = (properties) => {
  const { offset } = properties;

  return ([

    <LongEdge offset={add(offset, [ 0, 0, -height ])} depth={depth} />,
    <LongEdge offset={add(offset, [ width-thickness, 0, -height ])} depth={depth} />,
    <ShortEdge offset={add(offset, [ 0, 0, -height ])} width={width} />,
    <ShortEdge offset={add(offset, [ 0, 16-thickness, -height ])} width={width} />,
    <OpenMesh offset={add(offset, [ thickness, thickness, 0 ])} width={width - 2 * thickness} depth={depth - 2 * thickness} />

  ]);
};

module.exports = BalconySection;
