'use strict';

const depthMixin = require('./mixin/depth'),
      colourMixin = require('./mixin/colour'),
      shaderMixin = require('./mixin/shader'),
      bufferMixin = require('./mixin/buffer'),
      matrixMixin = require('./mixin/matrix'),
      programMixin = require('./mixin/program'),
      textureMixin = require('./mixin/texture'),
      blendingMixin = require('./mixin/blending');

class Canvas {
  constructor(selector = 'canvas') {
    const domElement = domElementFromSelector(selector),
          context = domElement.getContext('webgl');

    if (!context) {
      throw new Error(`Unable to initialise the context.`);
    }

    this.context = context;
    
    this.domElement = domElement;

    this.enableDepthTesting();  ///
  }

  getContext() {
    return this.context;
  }

  getDOMElement() {
    return this.domElement;
  }

  getWidth() { return this.domElement.width; }

  getHeight() { return this.domElement.height; }

  getClientWidth() { return this.domElement.clientWidth; }

  getClientHeight() { return this.domElement.clientHeight; }

  getUniformLocation(program, name) { return this.context.getUniformLocation(program, name); }

  getAttributeLocation(program, name) { return this.context.getAttribLocation(program, name); }

  setWidth(width) { this.domElement.setAttribute('width', width); }

  setHeight(height) { this.domElement.setAttribute('height', height); }

  setViewport(x, y, width, height) { this.context.viewport(x, y, width, height); }

  setUniformLocationIntegerValue(uniformLocation, integerValue) { this.context.uniform1i(uniformLocation, integerValue); }

  clear() {
    this.clearDepth();
    this.clearColour();
    this.clearDepthBuffer();
    this.clearColourBuffer();
  }

  resize(width, height) {
    this.setWidth(width);
    this.setHeight(height);
    this.setViewport(0, 0, width, height);
  }

  render(shader, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
    const offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation();

    this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
    this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
    this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
    this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
    this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
  }

  drawElements(start, finish) {
    const { TRIANGLES, UNSIGNED_SHORT } = this.context,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT,
          count = finish - start,
          offset = start * 2; ///

    this.context.drawElements(mode, count, type, offset)
  }
}

Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, blendingMixin);

module.exports = Canvas;

function domElementFromSelector(selector) {
  const domElement = (typeof selector === 'string') ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}
