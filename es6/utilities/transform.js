'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      matrixMaths = require('../maths/matrix'),
      matrixUtilities = require('../utilities/matrix');

const { transform4 } = vectorMaths,
      { DEGREES_TO_RADIANS } = constants,
      { rotationsMatrixFromAngles } = matrixUtilities,
      { identity4, scale4, translate4, multiply4 } = matrixMaths;

function composeTransform(scale, rotations, position) {
  let matrix = null;

  if (scale !== null) {
    const scaleMatrix = scaleMatrixFromScale(scale);

    matrix = (matrix === null) ?
               scaleMatrix :
                 multiply4(scaleMatrix, matrix);
  }

  if (rotations !== null) {
    const rotationsMatrix = rotationsMatrixFromRotations(rotations);

    matrix = (matrix === null) ?
               rotationsMatrix :
                 multiply4(rotationsMatrix, matrix);

  }

  if (position !== null) {
    const positionMatrix = positionMatrixFromPosition(position);

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

function scaleMatrixFromScale(scale) {
  let scaleMatrix = identity4();

  scaleMatrix = scale4(scaleMatrix, scale);

  return scaleMatrix;
}

function positionMatrixFromPosition(position) {
  let positionMatrix = identity4();

  positionMatrix = translate4(positionMatrix, position);

  return positionMatrix;
}

function rotationsMatrixFromRotations(rotations) {
  const angles = [

          rotations[ 0 ] * DEGREES_TO_RADIANS,
          rotations[ 1 ] * DEGREES_TO_RADIANS,
          rotations[ 2 ] * DEGREES_TO_RADIANS,

        ],
        rotationsMatrix = rotationsMatrixFromAngles(angles);

  return rotationsMatrix;
}
