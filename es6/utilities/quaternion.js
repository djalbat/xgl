'use strict';

const vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array'),
      angleUtilities = require('../utilities/angle'),
      approximateUtilities = require('../utilities/approximate');

const { dot3, cross3, normalise3 } = vectorMaths,
      { isApproximatelyEqualToOne } = approximateUtilities,
      { first, second, third, fourth } = arrayUtilities,
      { calculateHalfAngleCosine, calculateHalfAngleSine } = angleUtilities;

function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) { return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion); }

function calculateInverseRotationQuaternion(rotationQuaternion) {
  const rotationQuaternionComponents = rotationQuaternion,  ///
        firstRotationQuaternionComponent = first(rotationQuaternionComponents),
        secondRotationQuaternionComponent = second(rotationQuaternionComponents),
        thirdRotationQuaternionComponent = third(rotationQuaternionComponents),
        fourthRotationQuaternionComponent = fourth(rotationQuaternionComponents),
        inverseRotationQuaternion = [
          firstRotationQuaternionComponent,
          -secondRotationQuaternionComponent,
          -thirdRotationQuaternionComponent,
          -fourthRotationQuaternionComponent
        ];

  return inverseRotationQuaternion;
}

function calculateForwardsRotationQuaternion(rotationQuaternion) {
  const forwardsRotationQuaternion = rotationQuaternion;  ///

  return forwardsRotationQuaternion;
}

function calculateBackwardsRotationQuaternion(rotationQuaternion) {
  const inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion),
        backwardsRotationQuaternion = inverseRotationQuaternion;  ///

  return backwardsRotationQuaternion;

}

function calculateArbitraryRotationQuaternion(normal) {
  const extent = normal.getExtent(),
        unitNormal = extent,  ///
        zAxis = [ 0, 0, 1 ],
        dotProductOfUnitNormalAndZAxis = dot3(unitNormal, zAxis),
        crossProductOfUnitNormalAndZAxis = cross3(unitNormal, zAxis),
        angleOfRotationCosine = dotProductOfUnitNormalAndZAxis, ///
        angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine),
        angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = isApproximatelyEqualToOne(angleOfRotationCosineAbsoluteValue),
        axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ?
                          [ 1, 0, 0 ] : ///
                            crossProductOfUnitNormalAndZAxis,
        unitAxisOfRotation = normalise3(axisOfRotation),
        halfAngleOfRotationCosine = calculateHalfAngleCosine(angleOfRotationCosine),
        halfAngleOfRotationSine = calculateHalfAngleSine(angleOfRotationCosine),
        unitAxisOfRotationComponents = unitAxisOfRotation,  ///
        firstAxisOfRotationComponent = first(unitAxisOfRotationComponents),
        secondAxisOfRotationComponent = second(unitAxisOfRotationComponents),
        thirdAxisOfRotationComponent = third(unitAxisOfRotationComponents),
        arbitraryRotationQuaternion = [
          halfAngleOfRotationCosine,
          firstAxisOfRotationComponent * halfAngleOfRotationSine,
          secondAxisOfRotationComponent * halfAngleOfRotationSine,
          thirdAxisOfRotationComponent * halfAngleOfRotationSine
        ];

  return arbitraryRotationQuaternion;
}

function calculateRotationAboutZAxisQuaternion(maskingEdge) {
  const maskingEdgeExtent = maskingEdge.getExtent(),
        unitMaskingEdgeExtent = normalise3(maskingEdgeExtent),
        unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent,  ///
        firstUnitMaskingEdgeExtentComponent = first(unitMaskingEdgeExtentComponents),
        secondUnitMaskingEdgeExtentComponent = second(unitMaskingEdgeExtentComponents),
        angleOfRotationSine = firstUnitMaskingEdgeExtentComponent,  ///
        angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent,  ///
        halfAngleOfRotationCosine = calculateHalfAngleCosine(angleOfRotationCosine),
        halfAngleOfRotationSine = (angleOfRotationSine > 0 ) ?
                                   +calculateHalfAngleSine(angleOfRotationCosine) :
                                     -calculateHalfAngleSine(angleOfRotationCosine),
        rotationAboutZAxisQuaternion = [
          halfAngleOfRotationCosine,
          0,
          0,
          halfAngleOfRotationSine
        ];

  return rotationAboutZAxisQuaternion;
}

module.exports = {
  rotateImaginaryQuaternion,
  calculateInverseRotationQuaternion,
  calculateForwardsRotationQuaternion,
  calculateBackwardsRotationQuaternion,
  calculateArbitraryRotationQuaternion,
  calculateRotationAboutZAxisQuaternion
};

function hamiltonProduct(quaternionA, quaternionB) {
  const a1 = quaternionA[0],
        b1 = quaternionA[1],
        c1 = quaternionA[2],
        d1 = quaternionA[3],
        a2 = quaternionB[0],
        b2 = quaternionB[1],
        c2 = quaternionB[2],
        d2 = quaternionB[3],
        a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2,
        b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2,
        c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2,
        d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2,
        quaternion = [ a, b, c, d ];

  return quaternion;
}
