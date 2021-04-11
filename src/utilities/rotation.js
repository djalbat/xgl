"use strict";

import { rotateImaginaryQuaternion, calculateInverseRotationQuaternion } from "../utilities/quaternion";

export function rotatePosition(position, rotationQuaternion) {
  const imaginaryQuaternion = imaginaryQuaternionFromPosition(position),
        inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion),
        rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);

  return position;
}

function imaginaryQuaternionFromPosition(position) { return [0, ...position]; }  ///

function positionFromImaginaryQuaternion(imaginaryQuaternion) { return imaginaryQuaternion.slice(1); }  ///
