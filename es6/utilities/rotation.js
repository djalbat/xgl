"use strict";

import { rotateImaginaryQuaternion, calculateInverseRotationQuaternion } from "../utilities/quaternion";

function rotatePosition(position, rotationQuaternion) {
  const imaginaryQuaternion = imaginaryQuaternionFromPosition(position),
        inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion),
        rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);

  return position;
}

module.exports = {
  rotatePosition
};

function imaginaryQuaternionFromPosition(position) { return [0, ...position]; }  ///

function positionFromImaginaryQuaternion(imaginaryQuaternion) { return imaginaryQuaternion.slice(1); }  ///
