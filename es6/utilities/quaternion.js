'use strict';

const vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array'),
      angleUtilities = require('../utilities/angle'),
      approximateUtilities = require('../utilities/approximate');

const { dot3, cross3, normalise3 } = vectorMaths,
      { first, second, third, fourth } = arrayUtilities,
      { isApproximatelyEqualToOne } = approximateUtilities,
      { calculateHalfAngleCosine, calculateHalfAngleSine } = angleUtilities;

function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) { return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion); }

function calculateRotationQuaternion(normal) {
  const extent = normal.getExtent(),
        unitNormal = extent,  ///
        zAxis = [ 0, 0, 1],
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
        rotationQuaternion = [
          halfAngleOfRotationCosine,
          firstAxisOfRotationComponent * halfAngleOfRotationSine,
          secondAxisOfRotationComponent * halfAngleOfRotationSine,
          thirdAxisOfRotationComponent * halfAngleOfRotationSine
        ];

  return rotationQuaternion;
}

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

module.exports = {
  rotateImaginaryQuaternion: rotateImaginaryQuaternion,
  calculateRotationQuaternion: calculateRotationQuaternion,
  calculateInverseRotationQuaternion: calculateInverseRotationQuaternion,
  calculateForwardsRotationQuaternion: calculateForwardsRotationQuaternion,
  calculateBackwardsRotationQuaternion: calculateBackwardsRotationQuaternion
};

function hamiltonProduct(quaternionA, quaternionB) {
  const quaternionAComponents = quaternionA,  ///
        quaternionBComponents = quaternionB,  ///
        firstQuaternionAComponent = first(quaternionAComponents),
        secondQuaternionAComponent = second(quaternionAComponents),
        thirdQuaternionAComponent = third(quaternionAComponents),
        fourthQuaternionAComponent = fourth(quaternionAComponents),
        firstQuaternionBComponent = first(quaternionBComponents),
        secondQuaternionBComponent = second(quaternionBComponents),
        thirdQuaternionBComponent = third(quaternionBComponents),
        fourthQuaternionBComponent = fourth(quaternionBComponents),
        a1 = firstQuaternionAComponent, ///
        b1 = secondQuaternionAComponent,  ///
        c1 = thirdQuaternionAComponent, ///
        d1 = fourthQuaternionAComponent,  ///
        a2 = firstQuaternionBComponent, ///
        b2 = secondQuaternionBComponent,  ///
        c2 = thirdQuaternionBComponent, ///
        d2 = fourthQuaternionBComponent,  ///
        a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2,
        b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2,
        c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2,
        d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2,
        quaternion = [ a, b, c, d ];

  return quaternion;
}
