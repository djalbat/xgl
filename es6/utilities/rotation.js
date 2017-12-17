'use strict';

const vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array'),
      quaternionUtilities = require('../utilities/quaternion');

const { first, second, fourth } = arrayUtilities,
      { transform3, normalise3 } = vectorMaths,
      { rotateImaginaryQuaternion, calculateInverseRotationQuaternion } = quaternionUtilities;

function rotatePosition(position, rotationQuaternion) {
  const imaginaryQuaternion = imaginaryQuaternionFromPosition(position),
        inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion),
        rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);

  return position;
}

function rotatePositionAboutZAxis(position, rotationAboutZAxisMatrix) {
  position = transform3(position, rotationAboutZAxisMatrix);

  return position;
}

function calculateRotationAboutZAxisMatrix(maskingEdge) {
  const maskingEdgeExtent = maskingEdge.getExtent(),
        unitMaskingEdgeExtent = normalise3(maskingEdgeExtent),
        unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent,  ///
        firstUnitMaskingEdgeExtentComponent = first(unitMaskingEdgeExtentComponents),
        secondUnitMaskingEdgeExtentComponent = second(unitMaskingEdgeExtentComponents),
        angleOfRotationCosine = +secondUnitMaskingEdgeExtentComponent,  ///
        angleOfRotationSine = -firstUnitMaskingEdgeExtentComponent, ///
        c = angleOfRotationCosine,
        s = angleOfRotationSine,
        rotationAboutZAxisMatrix = [ c, -s, 0, +s, c, 0, 0, 0, 1 ];  ///

  return rotationAboutZAxisMatrix;
}

function calculateForwardsRotationAboutZAxisMatrix(rotationAboutZAxisMatrix) {
  const forwardsRotationAboutZAxisMatrix = rotationAboutZAxisMatrix; ///

  return forwardsRotationAboutZAxisMatrix;
}

function calculateBackwardsRotationAboutZAxisMatrix(rotationAboutZAxisMatrix) {
  const rotationAboutZAxisMatrixComponents = rotationAboutZAxisMatrix, ///
        firstRotationAboutZAxisMatrixComponent = first(rotationAboutZAxisMatrixComponents),
        fourthRotationAboutZAxisMatrixComponent = fourth(rotationAboutZAxisMatrixComponents),
        c = firstRotationAboutZAxisMatrixComponent, ///
        s = fourthRotationAboutZAxisMatrixComponent,  ///
        backwardsRotationAboutZAxisMatrix = [ c, +s, 0, -s, c, 0, 0, 0, 1 ];

  return backwardsRotationAboutZAxisMatrix;
}

module.exports = {
  rotatePosition: rotatePosition,
  rotatePositionAboutZAxis: rotatePositionAboutZAxis,
  calculateRotationAboutZAxisMatrix: calculateRotationAboutZAxisMatrix,
  calculateForwardsRotationAboutZAxisMatrix: calculateForwardsRotationAboutZAxisMatrix,
  calculateBackwardsRotationAboutZAxisMatrix: calculateBackwardsRotationAboutZAxisMatrix
};

function imaginaryQuaternionFromPosition(position) { return [0, ...position]; }  ///

function positionFromImaginaryQuaternion(imaginaryQuaternion) { return imaginaryQuaternion.slice(1); }  ///
