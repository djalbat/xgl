"use strict";

const vectorMaths = require("../maths/vector"),
      matrixMaths = require("../maths/matrix"),
      matrixUtilities = require("../utilities/matrix");

const { multiply4 } = matrixMaths,
      { transform4 } = vectorMaths,
      { scaleMatrixFromScale, positionMatrixFromPosition, rotationsMatrixFromRotations } = matrixUtilities;

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
                        (vector) => transform4([ ...vector, 1 ], matrix).slice(0, 3);

  return transform;
}

module.exports = module.exports = {
  composeTransform
};
