'use strict';

const constants = require('../constants'),
      matrixMaths = require('../maths/matrix'),
      arrayUtilities = require('../utilities/array');

const { first, second, third } = arrayUtilities,
      { FIELD_OF_VIEW, Z_NEAR, Z_FAR } = constants,
      { identity4, invert4, rotate4, translate4, transpose4, perspective4 } = matrixMaths;

function offsetMatrixFromOffsets(offsets) {
  let offsetMatrix = identity4(); ///

  offsetMatrix = translate4(offsetMatrix, offsets);

  return offsetMatrix;
}

function rotationsMatrixFromAngles(angles) {
  let rotationsMatrix = identity4(); ///

  const firstAngle = first(angles),
        secondAngle = second(angles),
        thirdAngle = third(angles),
        xAngle = firstAngle,
        yAngle = secondAngle,
        zAngle = thirdAngle,

        xAxis = [ 1, 0, 0 ],
        yAxis = [ 0, 1, 0 ],
        zAxis = [ 0, 0, 1 ];

  rotationsMatrix = rotate4(rotationsMatrix, xAngle, xAxis);
  rotationsMatrix = rotate4(rotationsMatrix, yAngle, yAxis);
  rotationsMatrix = rotate4(rotationsMatrix, zAngle, zAxis);

  return rotationsMatrix;
}

function positionMatrixFromNothing() {
  let positionMatrix = identity4(); ///

  return positionMatrix;
}

function positionMatrixFromDistance(distance) {
  let positionMatrix = identity4(); ///

  const x = 0,
        y = 0,
        z = -distance;

  positionMatrix = translate4(positionMatrix, [ x, y, z ]);

  return positionMatrix;
}

function positionMatrixFromPosition(position) {
  let positionMatrix = identity4(); ///

  positionMatrix = translate4(positionMatrix, position);

  return positionMatrix;
}

function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
  let normalsMatrix = invert4(rotationsMatrix);

  normalsMatrix = transpose4(normalsMatrix);

  return normalsMatrix;
}

function projectionMatrixFromWidthAndHeight(width, height) {
  const fieldOfView = FIELD_OF_VIEW,  ///
        aspectRatio = width / height,
        zNear = Z_NEAR, ///
        zFar = Z_FAR, ///
        projectionMatrix = perspective4(fieldOfView, aspectRatio, zNear, zFar);

  return projectionMatrix;
}

module.exports = {
  offsetMatrixFromOffsets,
  rotationsMatrixFromAngles,
  positionMatrixFromNothing,
  positionMatrixFromDistance,
  positionMatrixFromPosition,
  normalsMatrixFromRotationsMatrix,
  projectionMatrixFromWidthAndHeight
};
