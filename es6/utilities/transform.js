'use strict';

const constants = require('../constants'),
      vectorMaths = require('../maths/vector'),
      matrixMaths = require('../maths/matrix'),
      arrayUtilities = require('../utilities/array');

const { DEGREES_TO_RADIANS } = constants,
      { transform4 } = vectorMaths,
      { first, second, third } = arrayUtilities,
      { identity4, scale4, rotate4, translate4 } = matrixMaths,
      xAxis = [ 1, 0, 0 ],
      yAxis = [ 0, 1, 0 ],
      zAxis = [ 0, 0, 1 ],
      defaultWidth = 1,
      defaultDepth = 1,
      defaultHeight = 1,
      defaultPosition = [ 0, 0, 0 ],
      defaultRotations = [ 0, 0, 0 ];

function composeTransform(width, height, depth, position, rotations) {
  const scale = composeScale(width, height, depth),
        rotate = composeRotate(rotations),
        translate = composeTranslate(position);

  return function(vector) {
    return translate(rotate(scale(vector)));
  };
}

module.exports = module.exports = {
  composeTransform: composeTransform
};

function compose(matrix) {
  return function(vector) {
    return transform4([...vector, 1], matrix).slice(0, 3);
  };
}

function composeScale(width = defaultWidth, height = defaultHeight, depth = defaultDepth) {
  let matrix = identity4();

  matrix = scale4(matrix, [ width, height, depth ]);

  return compose(matrix);
}

function composeRotate(rotations = defaultRotations) {
  const firstRotation = first(rotations),
        secondRotation = second(rotations),
        thirdRotation = third(rotations),
        xAngle = firstRotation * DEGREES_TO_RADIANS,  ///
        yAngle = secondRotation * DEGREES_TO_RADIANS, ///
        zAngle = thirdRotation * DEGREES_TO_RADIANS;  ///

  let matrix = identity4();

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
