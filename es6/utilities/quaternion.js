'use strict';

const vec3 = require('../maths/vec3'),
      arrayUtilities = require('../utilities/array'),
      angleUtilities = require('../utilities/angle');

const { normalise } = vec3,
      { first, second, third, fourth } = arrayUtilities,
      { calculateHalfAngleCosine, calculateHalfAngleSine } = angleUtilities;

function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
  const rotatedImaginaryQuaternion = hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);

  return rotatedImaginaryQuaternion;
}

function calculateRotationQuaternion(normal) {
  const angleCosineBetweenNormalAndZAxis = calculateAngleCosineBetweenNormalAndZAxis(normal),
        crossProductOfNormalWithZAxis = calculateCrossProductOfNormalWithZAxis(normal),
        angleOfRotationCosine = angleCosineBetweenNormalAndZAxis,
        axisOfRotation = (angleOfRotationCosine === 1) ?
                           [0, 0, 1] : ///
                             crossProductOfNormalWithZAxis,
        unitAxisOfRotation = normalise(axisOfRotation),
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

module.exports = {
  rotateImaginaryQuaternion: rotateImaginaryQuaternion,
  calculateRotationQuaternion: calculateRotationQuaternion,
  calculateInverseRotationQuaternion: calculateInverseRotationQuaternion
};

function calculateAngleCosineBetweenNormalAndZAxis(normal) {
  const unitNormal = normalise(normal),
        unitNormalComponents = unitNormal,  ///
        thirdUnitNormalComponent = third(unitNormalComponents),
        angleCosineBetweenNormalAndZAxis = thirdUnitNormalComponent;  ///

  return angleCosineBetweenNormalAndZAxis;
}

function calculateCrossProductOfNormalWithZAxis(normal) {
  const normalComponents = normal,  ///
        firstNormalComponent = first(normalComponents),
        secondNormalComponent = second(normalComponents),
        crossProductOfNormalWithZAxis = [
          +secondNormalComponent,
          -firstNormalComponent,
          0
        ];

  return crossProductOfNormalWithZAxis;
}

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
        a1 = firstQuaternionAComponent,
        b1 = secondQuaternionAComponent,
        c1 = thirdQuaternionAComponent,
        d1 = fourthQuaternionAComponent,
        a2 = firstQuaternionBComponent,
        b2 = secondQuaternionBComponent,
        c2 = thirdQuaternionBComponent,
        d2 = fourthQuaternionBComponent,
        a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2,
        b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2,
        c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2,
        d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2,
        quaternion = [ a, b, c, d ];

  return quaternion;
}
