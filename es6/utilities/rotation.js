'use strict';

const vectorMaths = require('../maths/vector'),
      arrayUtilities = require('../utilities/array'),
      quaternionUtilities = require('../utilities/quaternion');

const { first, second, fourth } = arrayUtilities,
      { transform3, normalise3 } = vectorMaths,
      { calculateInverseRotationQuaternion, rotateImaginaryQuaternion } = quaternionUtilities;

function rotateVertices(vertices, rotationQuaternion) {
  const inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion);

  vertices = vertices.map(function(vertex) {
    vertex = rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion);

    return vertex;
  });

  return vertices;
}

function rotateVertexAboutZAxis(vertex, rotationAboutZAxisMatrix) {
  const matrix = rotationAboutZAxisMatrix;  ///

  vertex = transform3(vertex, matrix);

  return vertex;
}

function rotatePositionAboutZAxis(position, rotationAboutZAxisMatrix) {
  const matrix = rotationAboutZAxisMatrix;  ///

  position = transform3(position, matrix);

  return position;
}

function calculateRotationAboutZAxisMatrix(edgeInXYPlane) {
  const edgeInXYPlaneExtent = edgeInXYPlane.getExtent(),
        unitEdgeInXYPlaneExtent = normalise3(edgeInXYPlaneExtent),
        unitEdgeInXYPlaneExtentComponents = unitEdgeInXYPlaneExtent,  ///
        firstUnitEdgeInXYPlaneExtentComponent = first(unitEdgeInXYPlaneExtentComponents),
        secondUnitEdgeInXYPlaneExtentComponent = second(unitEdgeInXYPlaneExtentComponents),
        angleOfRotationCosine = +secondUnitEdgeInXYPlaneExtentComponent,  ///
        angleOfRotationSine = -firstUnitEdgeInXYPlaneExtentComponent, ///
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
  rotateVertices: rotateVertices,
  rotateVertexAboutZAxis: rotateVertexAboutZAxis,
  rotatePositionAboutZAxis: rotatePositionAboutZAxis,
  calculateRotationAboutZAxisMatrix: calculateRotationAboutZAxisMatrix,
  calculateForwardsRotationAboutZAxisMatrix: calculateForwardsRotationAboutZAxisMatrix,
  calculateBackwardsRotationAboutZAxisMatrix: calculateBackwardsRotationAboutZAxisMatrix
};

function rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion) {
  const imaginaryQuaternion = [0, ...vertex], ///
        rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  vertex = rotatedImaginaryQuaternion.slice(1); ///

  return vertex;
}
