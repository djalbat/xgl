'use strict';

const programMixin = require('./canvas/mixin/program'),
      textureMixin = require('./canvas/mixin/texture'),
      colourMixin = require('./canvas/mixin/colour'),
      shaderMixin = require('./canvas/mixin/shader'),
      bufferMixin = require('./canvas/mixin/buffer'),
      matrixMixin = require('./canvas/mixin/matrix'),
      depthMixin = require('./canvas/mixin/depth'),
      mouseMixin = require('./canvas/mixin/mouse'),
      domUtilities = require('./utilities/dom');

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
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(),
          canvas = this;  ///

    offsetMatrix.apply(offsetMatrixUniformLocation, canvas);
    rotationMatrix.apply(rotationMatrixUniformLocation, canvas);
    positionMatrix.apply(positionMatrixUniformLocation, canvas);
    projectionMatrix.apply(projectionMatrixUniformLocation, canvas);
    normalMatrix.apply(normalMatrixUniformLocation, canvas);

    const count = shader.getCount();

    this.drawElements(count);
  }

  drawElements(count, offset = defaultOffset) {
    const { TRIANGLES, UNSIGNED_SHORT } = this.context,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT;

    this.context.drawElements(mode, count, type, offset)
  }
}

Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;
