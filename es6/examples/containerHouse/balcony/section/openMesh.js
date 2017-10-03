'use strict';

const vec3 = require('gl-vec3');  ///

const ColourCuboid = require('../../../common/cuboid/colour');

const height = 0.25,
      thickness = 0.025,
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
          width = thickness;  ///

    elements.push(

      <ColourCuboid colour={colour} offset={add(offset, [ step * index, 0, -height ])} width={width} depth={overallDepth} height={height} />

    )
  }

  for (let index = 1; index < depthwiseCount; index++) {
    const step = overallDepth / depthwiseCount,
          depth = thickness;  //;

    elements.push(

      <ColourCuboid colour={colour} offset={add(offset, [ 0, step * index, -height ])} width={overallWidth} depth={depth} height={height} />

    )
  }

  return elements;
};

Object.assign(OpenMesh, {
  height: height,
  thickness: thickness
});

module.exports = OpenMesh;

function add(vec1, vec2) {
  const vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}
