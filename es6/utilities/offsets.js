"use strict";

import { reflect3, transform4 } from "../maths/vector";
import { rotationsMatrixFromAngles } from "../utilities/matrix";

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
