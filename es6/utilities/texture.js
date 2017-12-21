'use strict';

const matrixMaths = require('../maths/matrix'),
      vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array'),
      verticesUtilities = require('../utilities/vertices'),
      quaternionUtilities = require('../utilities/quaternion');

const { invert2, invert3 } = matrixMaths,
      { rotateVertices } = verticesUtilities,
      { first, second, third } = arrayUtilities,
      { add2, multiply2, transform2, transform3 } = vectorMaths,
      { calculateArbitraryRotationQuaternion } = quaternionUtilities;

function cloneTextureCoordinates(textureCoordinates) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = textureCoordinates.slice();

    return textureCoordinates;
  });

  return textureCoordinates;
}

function calculateVertexTextureCoordinates(textureCoordinates, left, bottom, width, height) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = add2(multiply2(textureCoordinates, [ width, height ] ), [ left, bottom ]);

    return textureCoordinates;
  });

  return textureCoordinates;
}

function calculateAdjustedTextureCoordinates(vertices, normal, parentVertices, textureCoordinates) {
  const arbitraryRotationQuaternion = calculateArbitraryRotationQuaternion(normal),
        rotationQuaternion = arbitraryRotationQuaternion;

  vertices = rotateVertices(vertices, rotationQuaternion);

  parentVertices = rotateVertices(parentVertices, rotationQuaternion);

  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        firstParentVertex = first(parentVertices),
        secondParentVertex = second(parentVertices),
        thirdParentVertex = third(parentVertices),
        firstTextureCoordinate = first(textureCoordinates),
        secondTextureCoordinate = second(textureCoordinates),
        thirdTextureCoordinate = third(textureCoordinates),
        firstVertexPosition = firstVertex.getPosition(),
        secondVertexPosition = secondVertex.getPosition(),
        thirdVertexPosition = thirdVertex.getPosition(),
        firstParentVertexPosition = firstParentVertex.getPosition(),
        secondParentVertexPosition = secondParentVertex.getPosition(),
        thirdParentVertexPosition = thirdParentVertex.getPosition(),
        R1x = firstVertexPosition[0],  ///
        R1y = firstVertexPosition[1],  ///
        R2x = secondVertexPosition[0], ///
        R2y = secondVertexPosition[1], ///
        R3x = thirdVertexPosition[0],  ///
        R3y = thirdVertexPosition[1],  ///
        P1x = firstParentVertexPosition[0], ///
        P2x = secondParentVertexPosition[0], ///
        P3x = thirdParentVertexPosition[0], ///
        P1y = firstParentVertexPosition[1], ///
        P2y = secondParentVertexPosition[1], ///
        P3y = thirdParentVertexPosition[1], ///
        P1u = firstTextureCoordinate[0], ///
        P1v = firstTextureCoordinate[1], ///
        P2u = secondTextureCoordinate[0], ///
        P2v = secondTextureCoordinate[1], ///
        P3u = thirdTextureCoordinate[0], ///
        P3v = thirdTextureCoordinate[1], ///
        textureCoordinatesMatrix = invert3([ 1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v ]),
        firstTransformedParentVerticesComponent = transform3([ P1x, P2x, P3x ], textureCoordinatesMatrix),
        secondTransformedParentVerticesComponent = transform3([ P1y, P2y, P3y ], textureCoordinatesMatrix),
        Ox = firstTransformedParentVerticesComponent[0],  ///
        Ux = firstTransformedParentVerticesComponent[1],  ///
        Vx = firstTransformedParentVerticesComponent[2],  ///
        Oy = secondTransformedParentVerticesComponent[0],  ///
        Uy = secondTransformedParentVerticesComponent[1],  ///
        Vy = secondTransformedParentVerticesComponent[2],  ///
        transformedParentVerticesMatrix = invert2([ Ux, Uy, Vx, Vy ]),
        firstAdjustedTextureCoordinatesComponent = transform2([ R1x - Ox, R1y - Oy ], transformedParentVerticesMatrix),
        secondAdjustedTextureCoordinatesComponent = transform2([ R2x - Ox, R2y - Oy ], transformedParentVerticesMatrix),
        thirdAdjustedTextureCoordinatesComponent = transform2([ R3x - Ox, R3y - Oy ], transformedParentVerticesMatrix),
        adjustedTextureCoordinates = [
          firstAdjustedTextureCoordinatesComponent,
          secondAdjustedTextureCoordinatesComponent,
          thirdAdjustedTextureCoordinatesComponent,
        ];

  return adjustedTextureCoordinates;
}

function textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinates, index) {  ///
  textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3);  ///

  return textureCoordinates;
}

module.exports = {
  cloneTextureCoordinates: cloneTextureCoordinates,
  calculateVertexTextureCoordinates: calculateVertexTextureCoordinates,
  calculateAdjustedTextureCoordinates: calculateAdjustedTextureCoordinates,
  textureCoordinatesFromTextureCoordinatesAndIndex: textureCoordinatesFromTextureCoordinatesAndIndex
};
