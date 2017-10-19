'use strict';

const CanvasElement = require('../../../../element/canvas'),
      ColouredCuboid = require('../../../common/coloured/cuboid'),
      ColouredCylinder = require('../../../common/coloured/cylinder');

const overallHeight = 0.25,
      overallThickness = 0.025,
      widthwiseCount = 10,
      depthwiseCount = 5,
      colour = [ 0.6, 0.6, 0.6, 10 ];

class OpenMesh extends CanvasElement {
  childElements(properties) {
    const { overallWidth, overallDepth } = properties,
          elements = [];

    for (let index = 1; index < widthwiseCount; index++) {
      const step = overallWidth / widthwiseCount,
            width = overallThickness,  ///
            height = overallHeight,
            depth = overallDepth;

      elements.push(

        <ColouredCuboid colour={colour} position={[step * index, -height, 0]} width={width} height={height} depth={depth}/>

      )
    }

    for (let index = 1; index < depthwiseCount; index++) {
      const step = overallDepth / depthwiseCount,
            diameter = overallHeight / 2, ///
            width = diameter, ///
            height = diameter, ///
            depth = overallWidth;  ///

      elements.push(

        <ColouredCylinder colour={colour} position={[ 0, -3 * diameter / 2, step * index ]} width={width} height={height} depth={depth} rotations={[ 0, 90, 0 ]}/>

      )
    }

    return elements;
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(OpenMesh, properties); }
}

module.exports = OpenMesh;
