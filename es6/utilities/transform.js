'use strict';

const mat4 = require('../maths/mat4'),
      vec4 = require('../maths/vec4'),
      constants = require('../constants'),
      arrayUtilities = require('../utilities/array');

const { DEGREES_TO_RADIANS } = constants,
      { create, translate, scale, rotate } = mat4,
      { first, second, third } = arrayUtilities,
      { transform } = vec4,
      defaultWidth = 1,
      defaultDepth = 1,
      defaultHeight = 1,
      xAxis = [ 1, 0, 0 ],
      yAxis = [ 0, 1, 0 ],
      zAxis = [ 0, 0, 1 ],
      defaultOffset = [ 0, 0, 0 ],
      defaultRotations = [ 0, 0, 0 ];

function composeScaleRotateTranslate(width, height, depth, offset, rotations) {
  const scale = composeScale(width, height, depth),
        rotate = composeRotate(rotations),
        translate = composeTranslate(offset);
  
  return function(vec) {
    return translate(rotate(scale(vec)));
  }
}

function composeTranslate(offset = defaultOffset) {
  const mat4 = create();

  translate(mat4, mat4, offset);

  return composeTransform(mat4);
}

function composeScale(width = defaultWidth, height = defaultHeight, depth = defaultDepth) {
  const mat4 = create();

  scale(mat4, mat4, [width, height, depth]);

  return composeTransform(mat4);
}

function composeRotate(rotations = defaultRotations) {
  const mat4 = create(),
        firstRotation = first(rotations),
        secondRotation = second(rotations),
        thirdRotation = third(rotations),
        xAngle = firstRotation * DEGREES_TO_RADIANS,  ///
        yAngle = secondRotation * DEGREES_TO_RADIANS, ///
        zAngle = thirdRotation * DEGREES_TO_RADIANS;  ///

  rotate(mat4, mat4, xAngle, xAxis);
  rotate(mat4, mat4, yAngle, yAxis);
  rotate(mat4, mat4, zAngle, zAxis);

  return composeTransform(mat4);
}

module.exports = module.exports = {
  composeScaleRotateTranslate: composeScaleRotateTranslate,
  composeScale: composeScale,
  composeRotate: composeRotate,
  composeTranslate: composeTranslate
};

function composeTransform(mat4) {
  return function(vec) {
    return transform([...vec, 1], mat4).slice(0, 3);
  };
}
