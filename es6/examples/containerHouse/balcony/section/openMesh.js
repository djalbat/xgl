'use strict';

const vec3 = require('../../../../maths/vec3'),
      ColouredCuboid = require('../../../common/coloured/cuboid'),
      ColouredCylinder = require('../../../common/coloured/cylinder');

const { add } = vec3,
      overallHeight = 0.25,
      overallThickness = 0.025,
      widthwiseCount = 10,
      depthwiseCount = 5,
      colour = [ 0.6, 0.6, 0.6, 10 ];

const OpenMesh = (properties) => {
  const { position, width, depth } = properties,
        overallWidth = width, ///
        overallDepth = depth, ///
        elements = [];

  for (let index = 1; index < widthwiseCount; index++) {
    const step = overallWidth / widthwiseCount,
          width = overallThickness,  ///
          height = overallHeight,
          depth = overallDepth;

    elements.push(

      <ColouredCuboid colour={colour} position={add(position, [ step * index, -height, 0 ])} width={width} height={height} depth={depth} />

    )
  }

  for (let index = 1; index < depthwiseCount; index++) {
    const step = overallDepth / depthwiseCount,
          diameter = overallHeight / 2, ///
          width = diameter, ///
          height = diameter, ///
          depth = overallWidth;  ///

    elements.push(

      <ColouredCylinder colour={colour} position={add(position, [ 0, -3*diameter/2, step * index ])} width={width} height={height} depth={depth} rotations={[ 0, 90, 0 ]} />

    )
  }

  return elements;
};

module.exports = OpenMesh;
