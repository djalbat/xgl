'use strict';

const vec3 = require('../../../../gl/vec3'),
      ColourCuboid = require('../../../common/cuboid/colour'),
      ColourCylinder = require('../../../common/cylinder/colour');

const { add } = vec3,
      overallHeight = 0.25,
      overallThickness = 0.025,
      widthwiseCount = 10,
      depthwiseCount = 5,
      colour = [ 0.6, 0.6, 0.6, 10 ];

const OpenMesh = (properties) => {
  const { offset, width, depth } = properties,
        overallWidth = width, ///
        overallDepth = depth, ///
        elements = [];

  for (let index = 1; index < widthwiseCount; index++) {
    const step = overallWidth / widthwiseCount,
          width = overallThickness,  ///
          depth = overallDepth,
          height = overallHeight;

    elements.push(

      <ColourCuboid colour={colour} offset={add(offset, [ step * index, 0, -height ])} width={width} depth={depth} height={height} />

    )
  }

  for (let index = 1; index < depthwiseCount; index++) {
    const step = overallDepth / depthwiseCount,
          diameter = overallHeight / 2, ///
          width = diameter, ///
          depth = diameter, ///
          height = overallWidth;  ///

    elements.push(

      <ColourCylinder colour={colour} offset={add(offset, [ 0, step * index, -diameter/2 ])} width={width} depth={depth} height={height} rotation={[ 0, 90, 0 ]} />

    )
  }

  return elements;
};

module.exports = OpenMesh;
