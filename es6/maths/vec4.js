'use strict';

const vec4 = require('gl-vec4');

const mat4 = require('./mat4');

const { transformMat4 } = vec4,
      { create, translate, scale, rotate } = mat4,
      defaultWidth = 1,
      defaultDepth = 1,
      defaultHeight = 1,
      defaultOffset = [ 0, 0, 0 ],
      defaultRotation = [ 0, 0, 0 ];

function composeTransform(width = defaultWidth, height = defaultHeight, depth = defaultDepth, offset = defaultOffset, rotation = defaultRotation) {
  const mat4 = create(),
        xAngle = rotation[0] * Math.PI / 180,
        yAngle = rotation[1] * Math.PI / 180,
        zAngle = rotation[2] * Math.PI / 180;

  translate(mat4, mat4, offset);

  rotate(mat4, mat4, xAngle, [ 1, 0, 0 ]);
  rotate(mat4, mat4, yAngle, [ 0, 1, 0 ]);
  rotate(mat4, mat4, zAngle, [ 0, 0, 1 ]);

  scale(mat4, mat4, [width, height, depth]);

  return function(vec4) {
    return transformMat4(vec4, vec4, mat4);
  };
}

module.exports = module.exports = {
  composeTransform: composeTransform
};
