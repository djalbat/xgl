'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      matrixMaths = require('../maths/matrix');

const { transform4 } = vectorMaths,
      { DEGREES_TO_RADIANS } = constants,
      { identity4, scale4, rotate4, translate4, multiply4 } = matrixMaths;

function composeTransform(scale, position, rotations) {
  let matrix = null;

  if (scale !== null) {
    const scaleMatrix = calculateScaleMatrix(scale);

    matrix = (matrix === null) ?
               scaleMatrix :
                 multiply4(scaleMatrix, matrix);
  }

  if (rotations !== null) {
    const rotationsMatrix = calculateRotationsMatrix(rotations);

    matrix = (matrix === null) ?
               rotationsMatrix :
                 multiply4(rotationsMatrix, matrix);

  }

  if (position !== null) {
    const positionMatrix = calculatePositionMatrix(position);

    matrix = (matrix === null) ?
                positionMatrix :
                  multiply4(positionMatrix, matrix);
  }

  const transform = (matrix === null) ?
                      (vector) => vector :
                        (vector) => transform4([...vector, 1], matrix).slice(0, 3);

  return transform;
}

module.exports = module.exports = {
  composeTransform
};

function calculateScaleMatrix(scale) {
  let scaleMatrix = identity4();

  scaleMatrix = scale4(scaleMatrix, scale);

  return scaleMatrix;
}

function calculatePositionMatrix(position) {
  let positionMatrix = identity4();

  positionMatrix = translate4(positionMatrix, position);

  return positionMatrix;
}

function calculateRotationsMatrix(rotations) {
  let rotationsMatrix = identity4();

  const xAngle = rotations[ 0 ] * DEGREES_TO_RADIANS,
        yAngle = rotations[ 1 ] * DEGREES_TO_RADIANS,
        zAngle = rotations[ 2 ] * DEGREES_TO_RADIANS,

        xAxis = [ 1, 0, 0 ],
        yAxis = [ 0, 1, 0 ],
        zAxis = [ 0, 0, 1 ];

  rotationsMatrix = rotate4(rotationsMatrix, xAngle, xAxis);
  rotationsMatrix = rotate4(rotationsMatrix, yAngle, yAxis);
  rotationsMatrix = rotate4(rotationsMatrix, zAngle, zAxis);

  return rotationsMatrix;
}
