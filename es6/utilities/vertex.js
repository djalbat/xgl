'use strict';

const vectorUtilities = require('../utilities/vector');

const { transform3 } = vectorUtilities;

function rotateAboutZAxis(vertex, rotationAboutZAxisMatrix) {
  const matrix = rotationAboutZAxisMatrix;  ///

  vertex = transform3(vertex, matrix);

  return vertex;
}

function projectOntoXYPlane(vertex) {
  vertex = [...vertex.slice(0, 2), 0];  ///
  
  return vertex;
}

module.exports = {
  rotateAboutZAxis: rotateAboutZAxis,
  projectOntoXYPlane: projectOntoXYPlane
};
