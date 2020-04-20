"use strict";

const vectorMaths = require("../maths/vector"),
      matrixUtilities = require("../utilities/matrix");

const { reflect3, transform4 } = vectorMaths,
      { rotationsMatrixFromAngles } = matrixUtilities;

function relativeOffsetsFromAnglesAndDirections(angles, directions) {
  const reverseOrder = true,
        reflectedAngles = reflect3(angles),
        rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
        relativeOffsets = transform4(directions, rotationsMatrix).slice(0, 3); ///

  return relativeOffsets;
}

module.exports = {
  relativeOffsetsFromAnglesAndDirections
};
