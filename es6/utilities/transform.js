'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      matrixMaths = require('../maths/matrix');

const { transform4 } = vectorMaths,
      { DEGREES_TO_RADIANS } = constants,
      { identity4, scale4, rotate4, translate4 } = matrixMaths;

const xAxis = [ 1, 0, 0 ],
      yAxis = [ 0, 1, 0 ],
      zAxis = [ 0, 0, 1 ],
      defaultScale = [ 1, 1, 1 ],
      defaultPosition = [ 0, 0, 0 ],
      defaultRotations = [ 0, 0, 0 ];

function composeTransform(scale, position, rotations) {
  scale = composeScale(scale);  ///

  const rotate = composeRotate(rotations),
        translate = composeTranslate(position);

  return (vector) => translate(rotate(scale(vector)));
}

module.exports = module.exports = {
  composeTransform
};

function compose(matrix) {
  return (vector) => transform4([...vector, 1], matrix).slice(0, 3);
}

function composeScale(scale = defaultScale) {
  let matrix = identity4();

  matrix = scale4(matrix, scale);

  return compose(matrix);
}

function composeRotate(rotations = defaultRotations) {
  let matrix = identity4();

  const xAngle = rotations[ 0 ] * DEGREES_TO_RADIANS, ///
        yAngle = rotations[ 1 ] * DEGREES_TO_RADIANS, ///
        zAngle = rotations[ 2 ] * DEGREES_TO_RADIANS; ///

  matrix = rotate4(matrix, xAngle, xAxis);
  matrix = rotate4(matrix, yAngle, yAxis);
  matrix = rotate4(matrix, zAngle, zAxis);

  return compose(matrix);
}

function composeTranslate(position = defaultPosition) {
  let matrix = identity4();

  matrix = translate4(matrix, position);

  return compose(matrix);
}
