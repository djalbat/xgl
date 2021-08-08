"use strict";

import { rotationsMatrixFromAngles } from "../utilities/matrix";
import { scale3, reflect3, truncate4, transform4 } from "../maths/vector";

export function relativeOffsetsFromAnglesDirectionsAndMagnification(angles, directions, magnification) {
  angles = reflect3(angles);  ///

  const reverseOrder = true,
        rotationsMatrix = rotationsMatrixFromAngles(angles, reverseOrder);

  let relativeOffsets = transform4(directions, rotationsMatrix);

  relativeOffsets = truncate4(relativeOffsets);

  relativeOffsets = scale3(relativeOffsets, magnification);

  return relativeOffsets;
}
