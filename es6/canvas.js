'use strict';

const domUtilities = require('./utilities/dom'),
      bufferMixin = require('./mixin/buffer'),
      shaderMixin = require('./mixin/shader'),
      colourMixin = require('./mixin/colour'),
      depthMixin = require('./mixin/depth');

const { domElementFromSelector } = domUtilities;

const defaultDepth = 1.0,
      defaultOffset = 0;

class Canvas {
  constructor(selector = 'canvas') {
    const domElement = domElementFromSelector(selector),
          context = domElement.getContext('webgl');

    if (!context) {
      throw new Error(`Unable to initialise WebGL.`);
    }

    this.context = context;

    this.domElement = domElement;
  }

  getContext() {
    return this.context;
  }

  getClientWidth() { return this.domElement.clientWidth; }

  getClientHeight() { return this.domElement.clientHeight; }

  getUniformLocation(program, name) { return this.context.getUniformLocation(program, name); }

  getAttributeLocation(program, name) { return this.context.getAttribLocation(program, name); }

  useProgram(program) { this.context.useProgram(program); }

  render(shaderProgram, projection, modelView) {
    this.useProgram(shaderProgram);

    const projectionMatrix = projection.getMatrix(),
          modelViewMatrix = modelView.getMatrix(),
          projectionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uModelViewMatrix');

    this.enableDepthTesting();
    this.enableDepthFunction();

    this.clearColour();
    this.clearDepth();
    this.clearColourBuffer();
    this.clearDepthBuffer();

    this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
    this.applyMatrix(modelViewMatrixUniformLocation, modelViewMatrix);
  }

  applyMatrix(uniformLocation, matrix) {
    this.context.uniformMatrix4fv(uniformLocation, false, matrix);
  }
  
  draw(vertexCount, offset = defaultOffset) {
    this.context.drawArrays(this.context.TRIANGLE_STRIP, offset, vertexCount);
  }
}

Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;
