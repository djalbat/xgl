'use strict';

const quaternionUtilities = require('../utilities/quaternion');

const { rotateImaginaryQuaternion, calculateInverseRotationQuaternion } = quaternionUtilities;

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
