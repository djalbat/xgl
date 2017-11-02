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

module.exports = {
  calculateIntersectionOfPlanes: calculateIntersectionOfPlanes
};
