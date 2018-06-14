'use strict';

const constants = require('../constants'),
      matrixMaths = require('../maths/matrix'),
      arrayUtilities = require('../utilities/array');

const { first, second, third } = arrayUtilities,
      { FIELD_OF_VIEW, Z_NEAR, Z_FAR } = constants,
      { identity4, invert4, rotate4, translate4, transpose4, perspective4 } = matrixMaths;

function calculateOffsetMatrix(offset) {
  let offsetMatrix = identity4();

  offsetMatrix = translate4(offsetMatrix, offset);

  return offsetMatrix;
}

function calculateRotationMatrix(angles) {
  const firstAngle = first(angles),
        secondAngle = second(angles),
        thirdAngle = third(angles),
        xAngle = firstAngle,
        yAngle = secondAngle,
        zAngle = thirdAngle;

  let rotationMatrix = identity4();

  rotationMatrix = rotate4(rotationMatrix, xAngle, [1, 0, 0]);
  rotationMatrix = rotate4(rotationMatrix, yAngle, [0, 1, 0]);
  rotationMatrix = rotate4(rotationMatrix, zAngle, [0, 0, 1]);

  return rotationMatrix;
}

function calculatePositionMatrix(distance) {
  const x = 0,
        y = 0,
        z = -distance;

  let positionMatrix = identity4();

  positionMatrix = translate4(positionMatrix, [ x, y, z ]);

  return positionMatrix;
}

function calculateProjectionMatrix(width, height) {
  const fieldOfView = FIELD_OF_VIEW,
        aspectRatio = width / height,
        zNear = Z_NEAR,
        zFar = Z_FAR,
        projectionMatrix = perspective4(fieldOfView, aspectRatio, zNear, zFar);

  return projectionMatrix;
}

function calculateNormalMatrix(rotationMatrix) {
  let normalMatrix = invert4(rotationMatrix);

  normalMatrix = transpose4(normalMatrix);

  return normalMatrix;
}

module.exports = {
  calculateOffsetMatrix,
  calculateRotationMatrix,
  calculatePositionMatrix,
  calculateProjectionMatrix,
  calculateNormalMatrix
};
