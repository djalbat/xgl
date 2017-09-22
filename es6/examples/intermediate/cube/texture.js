'use strict';

const vec3 = require('../../../vec3'),
      arrayUtilities = require('../../../utilities/array');

const { divide, flatten } = arrayUtilities;

const textureCoordinateData = [
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,

        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0
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

class TextureCube {
  constructor(vertexPositionBuffer, vertexNormalBuffer, textureCoordinateBuffer, count) {
    this.vertexPositionBuffer = vertexPositionBuffer;
    this.vertexNormalBuffer = vertexNormalBuffer;
    this.textureCoordinateBuffer = textureCoordinateBuffer;
    this.count = count;
  }

  getCount() {
    return this.count;
  }

  bind(textureShader, canvas) {
    textureShader.bindVertexPositionBuffer(this.vertexPositionBuffer, canvas);

    textureShader.bindVertexNormalBuffer(this.vertexNormalBuffer, canvas);

    textureShader.bindTextureCoordinateBuffer(this.textureCoordinateBuffer, canvas);
  }

  static fromOffsetPositionAndImage(offsetPosition, image, textureShader, canvas) {
    const vertexPositions = divide(vertexPositionData, 3),  ///
          offsetVertexPositions = vertexPositions.map(function(vertexPosition) {
            const offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

            return offsetVertexPosition;
          }),
          offsetVertexPositionData = flatten(offsetVertexPositions);

    textureShader.createTexture(image, canvas);

    const vertexPositionBuffer = textureShader.createVertexPositionBuffer(offsetVertexPositionData, canvas),
          vertexNormalBuffer = textureShader.createVertexNormalBuffer(vertexNormalData, canvas),
          textureCoordinateBuffer = textureShader.createTextureCoordinateBuffer(textureCoordinateData, canvas),
          count = canvas.createAndBindElementBuffer(vertexIndexData),
          textureCube = new TextureCube(vertexPositionBuffer, vertexNormalBuffer, textureCoordinateBuffer, count);

    return textureCube;
  }
}

module.exports = TextureCube;
