'use strict';

const vec3 = require('../maths/vec3'),
      Line = require('../maths/line'),
      arrayUtilities = require('../utilities/array');

const { first, second, third, fourth } = arrayUtilities,
      { subtract, dot, cross, normalise } = vec3;

function calculateNormal(vertexPositions) {
  const firstVertexPosition = first(vertexPositions),
        secondVertexPosition = second(vertexPositions),
        fourthVertexPosition = fourth(vertexPositions),
        firstVector = subtract(secondVertexPosition, firstVertexPosition),
        secondVector = subtract(fourthVertexPosition, firstVertexPosition),
        normal = normalise(cross(firstVector, secondVector));

  return normal;
}

function calculateIntersectionOfPlanes(vertexPositionsA, vertexPositionsB) {
  const normalA = calculateNormal(vertexPositionsA),
        rotationQuaternion = calculateRotationQuaternion(normalA),
        rotatedVertexPositionsA = rotatePositions(vertexPositionsA, rotationQuaternion),
        rotatedVertexPositionsB = rotatePositions(vertexPositionsB, rotationQuaternion),
        firstRotatedVertexPositionA = first(rotatedVertexPositionsA),
        rotatedVertexPositionA = firstRotatedVertexPositionA, ///
        rotatedVertexPositionComponents = rotatedVertexPositionA,  ///
        thirdRotatedVertexPositionComponent = third(rotatedVertexPositionComponents),
        z = thirdRotatedVertexPositionComponent,  ///
        normalB = calculateNormal(rotatedVertexPositionsB),
        normalBComponents = normalB,  ///
        firstNormalBComponent = first(normalBComponents),
        secondNormalBComponent = second(normalBComponents),
        thirdNormalBComponent = third(normalBComponents),
        a = firstNormalBComponent,  ///
        b = secondNormalBComponent, ///
        c = dot(rotatedVertexPositionA, normalB) - thirdNormalBComponent * z,
        intersectionLine = Line.fromEquation(a, b, c),
        lines = linesFromVertexPositions(rotatedVertexPositionsA),
        intersections = lines.map(function(line) {
          const intersection = line.calculateIntersection(intersectionLine);

          return intersection;
        });

  debugger
}

function linesFromVertexPositions(vertexPositions) {
  const lines = [],
        vertexPositionsLength = vertexPositions.length;

  for (var index = 0; index < vertexPositionsLength; index++ ) {
    const firstIndex = index,
          secondIndex = (index + 1) % vertexPositionsLength,
          firstVertexPosition = vertexPositions[firstIndex],
          secondVertexPosition = vertexPositions[secondIndex],
          line = Line.fromVertexPositions(firstVertexPosition, secondVertexPosition);

    lines.push(line);
  }

  return lines;
}

function calculateRotationQuaternion(normal) {
  const normalComponents = normal,  ///
        firstNormalComponent = first(normalComponents),
        secondNormalComponent = second(normalComponents),
        thirdNormalComponent = third(normalComponents),
        angleOfRotationCosine = thirdNormalComponent,  ///
        axisOfRotation = (angleOfRotationCosine === 1) ?
                           [ 0, 0, 1 ] :
                             [
                               +secondNormalComponent,
                               -firstNormalComponent,
                               0
                             ],
        unitAxisOfRotation = normalise(axisOfRotation),
        rotationQuaternion = calculateRotationQuarternion(angleOfRotationCosine, unitAxisOfRotation);

  return rotationQuaternion;
}

function rotatePosition(position, rotationQuaternion) {
  const imaginaryQuaternion = calculateImaginaryQuaternion(position),
        rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion),
        rotatedPosition = calculatePosition(rotatedImaginaryQuaternion);

  return rotatedPosition;
}

function rotatePositions(positions, rotationQuaternion) {
  const rotatedPositions = positions.map(function(position) {
    const rotatedPosition = rotatePosition(position, rotationQuaternion);

    return rotatedPosition;
  });

  return rotatedPositions;
}

function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion) {
  const inverseRotationQuaternion = calculateInverseRotationQuarternion(rotationQuaternion),
        rotatedImaginaryQuaternion = hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);

  return rotatedImaginaryQuaternion;
}

function hamiltonProduct(quaternionA, quarternionB) {
  const quaternionAComponents = quaternionA,  ///
        quaternionBComponents = quarternionB,  ///
        firstQuarternionAComponent = first(quaternionAComponents),
        secondQuarternionAComponent = second(quaternionAComponents),
        thirdQuarternionAComponent = third(quaternionAComponents),
        fourthQuarternionAComponent = fourth(quaternionAComponents),
        firstQuarternionBComponent = first(quaternionBComponents),
        secondQuarternionBComponent = second(quaternionBComponents),
        thirdQuarternionBComponent = third(quaternionBComponents),
        fourthQuarternionBComponent = fourth(quaternionBComponents),
        a1 = firstQuarternionAComponent,
        b1 = secondQuarternionAComponent,
        c1 = thirdQuarternionAComponent,
        d1 = fourthQuarternionAComponent,
        a2 = firstQuarternionBComponent,
        b2 = secondQuarternionBComponent,
        c2 = thirdQuarternionBComponent,
        d2 = fourthQuarternionBComponent,
        a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2,
        b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2,
        c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2,
        d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2,
        quaternion = [ a, b, c, d ];

  return quaternion;
}

function calculateImaginaryQuaternion(position) {
  const positionComponents = position,  ///
        firstPositionComponent = first(positionComponents),
        secondPositionComponent = second(positionComponents),
        thirdPositionComponent = third(positionComponents),
        imaginaryQuaternion = [
          0,
          firstPositionComponent,
          secondPositionComponent,
          thirdPositionComponent
        ];

  return imaginaryQuaternion;
}

function calculatePosition(imaginaryQuaternion) {
  const imaginaryQuaternionComponents = imaginaryQuaternion,  ///
        secondImaginaryQuaternionComponent = second(imaginaryQuaternionComponents),
        thirdImaginaryQuaternionComponent = third(imaginaryQuaternionComponents),
        fourthImaginaryQuaternionComponent = fourth(imaginaryQuaternionComponents),
        position = [
          secondImaginaryQuaternionComponent,
          thirdImaginaryQuaternionComponent,
          fourthImaginaryQuaternionComponent
        ];

  return position;
}

function calculateRotationQuarternion(angleOfRotationCosine, unitAxisOfRotation) {
  const halfAngleOfRotationCosine = calculateHalfAngleCosine(angleOfRotationCosine),
        halfAngleOfRotationSine = calculateHalfAngleSine(angleOfRotationCosine),
        unitAxisOfRotationComponents = unitAxisOfRotation,  ///
        firstAxisOfRotationComponent = first(unitAxisOfRotationComponents),
        secondAxisOfRotationComponent = second(unitAxisOfRotationComponents),
        thirdAxisOfRotationComponent = third(unitAxisOfRotationComponents),
        rotationQuarternion = [
          halfAngleOfRotationCosine,
          firstAxisOfRotationComponent * halfAngleOfRotationSine,
          secondAxisOfRotationComponent * halfAngleOfRotationSine,
          thirdAxisOfRotationComponent * halfAngleOfRotationSine
        ];

  return rotationQuarternion;
}

function calculateInverseRotationQuarternion(rotationQuaternion) {
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

function calculateHalfAngleCosine(angleCosine) {
  const halfAngleCosine = Math.sqrt((1 + angleCosine) / 2);

  return halfAngleCosine;
}

function calculateHalfAngleSine(angleCosine) {
  const halfAngleSine = Math.sqrt((1 - angleCosine) / 2);

  return halfAngleSine;
}

module.exports = {
  calculateIntersectionOfPlanes: calculateIntersectionOfPlanes
};
