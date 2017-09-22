'use strict';

const vec3 = require('../../../vec3'),
      arrayUtilities = require('../../../utilities/array');

const { divide, flatten } = arrayUtilities;

const vertexColourData = [
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,

        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,

        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,

        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,

        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,

        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0
      ],
      vertexPositionData = [
        -1.0, -1.0, +1.0,
        +1.0, -1.0, +1.0,
        +1.0, +1.0, +1.0,
        -1.0, +1.0, +1.0,

        -1.0, -1.0, -1.0,
        -1.0, +1.0, -1.0,
        +1.0, +1.0, -1.0,
        +1.0, -1.0, -1.0,

        -1.0, +1.0, -1.0,
        -1.0, +1.0, +1.0,
        +1.0, +1.0, +1.0,
        +1.0, +1.0, -1.0,

        -1.0, -1.0, -1.0,
        +1.0, -1.0, -1.0,
        +1.0, -1.0, +1.0,
        -1.0, -1.0, +1.0,

        +1.0, -1.0, -1.0,
        +1.0, +1.0, -1.0,
        +1.0, +1.0, +1.0,
        +1.0, -1.0, +1.0,

        -1.0, -1.0, -1.0,
        -1.0, -1.0, +1.0,
        -1.0, +1.0, +1.0,
        -1.0, +1.0, -1.0
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
        -1.0,  0.0,  0.0
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
        20, 22, 23
      ];

class ColourCube {
  constructor(vertexPositionBuffer, vertexNormalBuffer, vertexColourBuffer, count) {
    this.vertexPositionBuffer = vertexPositionBuffer;
    this.vertexNormalBuffer = vertexNormalBuffer;
    this.vertexColourBuffer = vertexColourBuffer;
    this.count = count;
  }

  getCount() {
    return this.count;
  }

  bind(colourShader, canvas) {
    colourShader.bindVertexPositionBuffer(this.vertexPositionBuffer, canvas);

    colourShader.bindVertexNormalBuffer(this.vertexNormalBuffer, canvas);

    colourShader.bindVertexColourBuffer(this.vertexColourBuffer, canvas);
  }

  static fromOffsetPosition(offsetPosition, colourShader, canvas) {
    const vertexPositions = divide(vertexPositionData, 3),  ///
          offsetVertexPositions = vertexPositions.map(function(vertexPosition) {
            const offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

            return offsetVertexPosition;
          }),
          offsetVertexPositionData = flatten(offsetVertexPositions);



    const vertexPositionBuffer = colourShader.createVertexPositionBuffer(offsetVertexPositionData, canvas),
          vertexNormalBuffer = colourShader.createVertexNormalBuffer(vertexNormalData, canvas),
          vertexColourBuffer = colourShader.createVertexColourBuffer(vertexColourData, canvas),
          count = canvas.createAndBindElementBuffer(vertexIndexData),
          colourCube = new ColourCube(vertexPositionBuffer, vertexNormalBuffer, vertexColourBuffer, count);

    return colourCube;
  }
}

module.exports = ColourCube;
