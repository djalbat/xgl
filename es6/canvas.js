'use strict';

const depthMixin = require('./mixin/depth'),
      colourMixin = require('./mixin/colour'),
      shaderMixin = require('./mixin/shader'),
      bufferMixin = require('./mixin/buffer'),
      matrixMixin = require('./mixin/matrix'),
      programMixin = require('./mixin/program'),
      textureMixin = require('./mixin/texture'),
      blendingMixin = require('./mixin/blending'),
      locationMixin = require('./mixin/location');

class Canvas {
  constructor(selector = 'canvas') {
    const domElement = domElementFromSelector(selector),
          context = contextFromDOMElement(domElement);

    this.domElement = domElement;

    this.context = context;

    this.enableDepthTesting();  ///
  }

  getDOMElement() {
    return this.domElement;
  }

  getContext() {
    return this.context;
  }

  getWidth() { return this.domElement.width; }

  getHeight() { return this.domElement.height; }

  getClientWidth() { return this.domElement.clientWidth; }

  getClientHeight() { return this.domElement.clientHeight; }

  setWidth(width) { this.domElement.setAttribute('width', width); }

  setHeight(height) { this.domElement.setAttribute('height', height); }

  resize(width, height) {
    const x = 0,
          y = 0;

    this.setWidth(width);

    this.setHeight(height);

    this.context.viewport(x, y, width, height);
  }

  clear() {
    this.clearDepth();

    this.clearColour();

    this.clearDepthBuffer();

    this.clearColourBuffer();
  }

  render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
    const offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(),
          normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(),
          positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(),
          rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(),
          projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();

    this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
    this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
    this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
    this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
    this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
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
Object.assign(Canvas.prototype, locationMixin);

module.exports = Canvas;

function domElementFromSelector(selector) {
  const domElement = (typeof selector === 'string') ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}

function contextFromDOMElement(domElement) {
  const context = domElement.getContext('webgl');

  if (!context) {
    throw new Error(`Unable to get the WebGL context.`);
  }

  return context;
}
