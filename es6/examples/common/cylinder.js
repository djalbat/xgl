'use strict';

const vec3 = require('../../vec3'),
      Element = require('../../element'),
      arrayUtilities = require('../../utilities/array');

const vertexPositionData = [

        0.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 1.0, 1.0,
        0.0, 1.0, 1.0,

        0.0, 0.0, 0.0,
        0.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 0.0, 0.0,

        0.0, 1.0, 0.0,
        0.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, 0.0,

        0.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        1.0, 0.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 1.0,
        1.0, 0.0, 1.0,

        0.0, 0.0, 0.0,
        0.0, 0.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 0.0,

      ],
      vertexNormalData = [

        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,

        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,

        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,

        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,

        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,

        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,

      ],
      vertexIndexData = [

        0,  1,  2,
        0,  2,  3,

        4,  5,  6,
        4,  6,  7,

        8,  9, 10,
        8, 10, 11,

        12, 13, 14,
        12, 14, 15,

        16, 17, 18,
        16, 18, 19,

        20, 21, 22,
        20, 22, 23,

      ];

const { divide, flatten } = arrayUtilities;

class Cylinder extends Element {
  constructor(vertexPositionData, vertexNormalData, vertexIndexData) {
    super();
    
    this.vertexPositionData = vertexPositionData;
    this.vertexNormalData = vertexNormalData;
    this.vertexIndexData = vertexIndexData;
  }

  getVertexPositionData() {
    return this.vertexPositionData;
  }

  getVertexNormalData() {
    return this.vertexNormalData;
  }

  getVertexIndexData() {
    return this.vertexIndexData;
  }
  
  static fromProperties(Class, properties, ...remainingArguments) {
    const { width, depth, height, offset } = properties,
          vertexPositionData = vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset);
    
    return new Class(vertexPositionData, vertexNormalData, vertexIndexData, ...remainingArguments);
  }
}

module.exports = Cylinder;

function vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset) {
  let vertexPositions = divide(vertexPositionData, 3);  ///

  vertexPositions = vertexPositions.map(function(vertexPosition) {
    vertexPosition = vec3.multiply(vertexPosition, [width, depth, height]) ;
    vertexPosition = vec3.add(vertexPosition, offset);

    return vertexPosition;
  });

  return flatten(vertexPositions);
}
