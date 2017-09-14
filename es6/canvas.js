'use strict';

const domUtilities = require('./utilities/dom'),
      textureMixin = require('./mixin/texture'),
      bufferMixin = require('./mixin/buffer'),
      colourMixin = require('./mixin/colour'),
      matrixMixin = require('./mixin/matrix'),
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
  }

  getContext() {
    return this.context;
  }

  getClientWidth() { return this.domElement.clientWidth; }

  getClientHeight() { return this.domElement.clientHeight; }

  getUniformLocation(program, name) { return this.context.getUniformLocation(program, name); }

  getAttributeLocation(program, name) { return this.context.getAttribLocation(program, name); }
  
  setUniformLocationIntegerValue(uniformLocation, integerValue) { this.context.uniform1i(uniformLocation, integerValue); }

  useProgram(program) { this.context.useProgram(program); }
  
  render(normal, rotation, position, perspective, shader) {
    const normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          shaderProgram = shader.getProgram(),
          normalMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uNormalMatrix'),
          rotationMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uRotationMatrix'),
          positionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPositionMatrix'),
          perspectiveMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPerspectiveMatrix');

    this.clearDepth();
    this.clearColour();
    this.clearDepthBuffer();
    this.clearColourBuffer();

    this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
    this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
    this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
    this.applyMatrix(perspectiveMatrixUniformLocation, perspectiveMatrix);
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

module.exports = Canvas;
