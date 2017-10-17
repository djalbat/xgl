'use strict';

const vec3 = require('../maths/vec3'),
      arrayUtilities = require('../utilities/array'),
      imageMapUtilities = require('../utilities/imageMap'),
      transformUtilities = require('../utilities/transform');

const { textureCoordinatesFromImageNames } = imageMapUtilities,
      { composeTransforms } = transformUtilities,
      { chop, flatten } = arrayUtilities,
      { subtract, cross, normalise } = vec3;

function calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations) {
  const initialVertexPositions = chop(initialVertexPositionData, 3),  ///
        transforms = composeTransforms(width, height, depth, dimensions, position, rotations, transformations),
        vertexPositions = initialVertexPositions.map(function(initialVertexPosition) {
          let vertexPosition = initialVertexPosition;

          transforms.forEach(function(transform) {
            vertexPosition = transform(vertexPosition);
          });

          return vertexPosition;
        }),
        vertexPositionData = flatten(vertexPositions);

  return vertexPositionData;
}

function calculateVertexNormalData(vertexPositionData) {
  const faces = chop(vertexPositionData, 12),  ///
        vertexNormals = faces.reduce(function(vertexNormals, face) {
          const vertexPositions = chop(face, 3);

          for (let index = 0; index < 4; index++) {
            const firstVertexIndex = index,
                  secondVertexIndex = (index + 1) % 4,
                  thirdVertexIndex = (index + 3) % 4,
                  firstVertexPosition = vertexPositions[firstVertexIndex],
                  secondVertexPosition = vertexPositions[secondVertexIndex],
                  thirdVertexPosition = vertexPositions[thirdVertexIndex],
                  firstVector = subtract(secondVertexPosition, firstVertexPosition),
                  secondVector = subtract(thirdVertexPosition, firstVertexPosition),
                  vertexNormal = normalise(cross(firstVector, secondVector));

            vertexNormals.push(vertexNormal);
          }

          return vertexNormals;
        }, []),
        vertexNormalData = flatten(vertexNormals); ///

  return vertexNormalData;
}

function calculateVertexIndexData(initialVertexPositionData) {
  const vertexIndexData = [],
        initialVertexPositionDataLength = initialVertexPositionData.length,
        facesLength = initialVertexPositionDataLength / 12; ///

  for (let index = 0; index < facesLength; index++) {
    const offset = index * 4;

    vertexIndexData.push(offset + 0);
    vertexIndexData.push(offset + 1);
    vertexIndexData.push(offset + 2);
    vertexIndexData.push(offset + 0);
    vertexIndexData.push(offset + 2);
    vertexIndexData.push(offset + 3);
  }

  return vertexIndexData;
}

function calculateVertexColourData(initialVertexPositionData, colour) {
  const initialVertexPositionDataLength = initialVertexPositionData.length,
        vertexColoursLength = initialVertexPositionDataLength / 3,  ///
        vertexColour = colour,
        vertexColours = [];

  for (let index = 0; index < vertexColoursLength; index++) {
    vertexColours.push(vertexColour);
  }

  const vertexColourData = flatten(vertexColours);  ///

  return vertexColourData;
}

function calculateTextureCoordinateData(initialVertexPositionData, imageName) {
  const initialVertexPositionDataLength = initialVertexPositionData.length,
        imageNamesLength = initialVertexPositionDataLength / 12,  ///
        imageNames = [];

  for (let index = 0; index < imageNamesLength; index++) {
    imageNames.push(imageName);
  }

  const textureCoordinates = textureCoordinatesFromImageNames(imageNames),
        textureCoordinateData = flatten(textureCoordinates);

  return textureCoordinateData;
}

module.exports = {
  calculateVertexPositionData: calculateVertexPositionData,
  calculateVertexNormalData: calculateVertexNormalData,
  calculateVertexIndexData: calculateVertexIndexData,
  calculateVertexColourData: calculateVertexColourData,
  calculateTextureCoordinateData: calculateTextureCoordinateData
};
