'use strict';

const mat4 = require('gl-mat4');  ///

const domUtilities = require('./utilities/dom'),
      bufferMixin = require('./mixin/buffer'),
      shaderMixin = require('./mixin/shader'),
      colourMixin = require('./mixin/colour'),
      depthMixin = require('./mixin/depth');

const { domElementFromSelector } = domUtilities;

const defaultOffset = 0;

class Canvas {
  constructor(selector = 'canvas') {
    const domElement = domElementFromSelector(selector),
          context = domElement.getContext('webgl');

    if (!context) {
      throw new Error(`Unable to initialise the context.`);
    }

    this.context = context;

    this.domElement = domElement;

    this.FLOAT_TYPE = this.context.FLOAT;  ///
    this.TRIANGLES_MODE = this.context.TRIANGLES;  ///
    this.DEPTH_TEST_CAP = this.context.DEPTH_TEST;  ///
    this.LEQUAL_FUNCTION = this.context.LEQUAL; ///
    this.STATIC_DRAW_USAGE = this.context.STATIC_DRAW; ///
    this.LINK_STATUS_PNAME = this.context.LINK_STATUS;  ///
    this.VERTEX_SHADER_TYPE = this.context.VERTEX_SHADER; ///
    this.ARRAY_BUFFER_TARGET = this.context.ARRAY_BUFFER;  ///
    this.UNSIGNED_SHORT_TYPE = this.context.UNSIGNED_SHORT;  ///
    this.TRIANGLE_STRIP_MODE = this.context.TRIANGLE_STRIP;  ///
    this.COMPILE_STATUS_PNAME = this.context.COMPILE_STATUS;  ///
    this.FRAGMENT_SHADER_TYPE = this.context.FRAGMENT_SHADER; ///
    this.COLOR_BUFFER_BIT_MASK = this.context.COLOR_BUFFER_BIT; ///
    this.DEPTH_BUFFER_BIT_MASK = this.context.DEPTH_BUFFER_BIT; ///
    this.ELEMENT_ARRAY_BUFFER_TARGET = this.context.ELEMENT_ARRAY_BUFFER;  ///
  }

  getContext() {
    return this.context;
  }

  getClientWidth() { return this.domElement.clientWidth; }

  getClientHeight() { return this.domElement.clientHeight; }

  getUniformLocation(program, name) { return this.context.getUniformLocation(program, name); }

  getAttributeLocation(program, name) { return this.context.getAttribLocation(program, name); }

  useProgram(program) { this.context.useProgram(program); }

  render(shaderProgram, projection, modelView, elapsedTime) {
    const projectionMatrix = projection.getMatrix(),
          modelViewMatrix = modelView.getMatrix(),
          projectionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uModelViewMatrix');

    this.clearColour();
    this.clearDepth();
    this.clearColourBuffer();
    this.clearDepthBuffer();

    const rotation = elapsedTime / 1000;

    const rotatedModelViewMatrix = mat4.clone(modelViewMatrix),
          xAxisVectorArray = [1, 0, 0],
          yAxisVectorArray = [0, 1, 0];

    mat4.rotate(rotatedModelViewMatrix, rotatedModelViewMatrix, rotation, xAxisVectorArray);
    mat4.rotate(rotatedModelViewMatrix, rotatedModelViewMatrix, rotation, yAxisVectorArray);

    this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
    this.applyMatrix(modelViewMatrixUniformLocation, rotatedModelViewMatrix);
  }

  applyMatrix(uniformLocation, matrix) {
    const transpose = false;  ///

    this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
  }
  
  drawElements(count, offset = defaultOffset) {
    const mode = this.TRIANGLES_MODE,
          type = this.UNSIGNED_SHORT_TYPE;

    this.context.drawElements(mode, count, type, offset)
  }
}

Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;
