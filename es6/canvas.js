'use strict';

const domUtilities = require('./utilities/dom'),
      textureMixin = require('./mixin/texture'),
      bufferMixin = require('./mixin/buffer'),
      colourMixin = require('./mixin/colour'),
      matrixMixin = require('./mixin/matrix'),
      depthMixin = require('./mixin/depth'),
      mouseMixin = require('./mixin/mouse');

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

  createProgram() { return this.context.createProgram(); }

  useShader(shader) {
    const shaderProgram = shader.getProgram();

    this.context.useProgram(shaderProgram);
  }

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

  render(shader, normal, rotation, position, perspective) {
    const normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          perspectiveMatrixUniformLocation = shader.getPerspectiveMatrixUniformLocation();

    this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
    this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
    this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
    this.applyMatrix(perspectiveMatrixUniformLocation, perspectiveMatrix);

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

Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;
