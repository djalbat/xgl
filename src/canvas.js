"use strict";

import depthMixins from "./mixins/depth";
import shaderMixins from "./mixins/shader";
import bufferMixins from "./mixins/buffer";
import colourMixins from "./mixins/colour";
import matrixMixins from "./mixins/matrix";
import textureMixins from "./mixins/texture";
import programMixins from "./mixins/program";
import blendingMixins from "./mixins/blending";
import locationMixins from "./mixins/location";

import { WEB_GL_CONTEXT_ERROR } from "./errors";
import { WEBGL, WIDTH, HEIGHT, CANVAS, STRING } from "./constants";

export default class Canvas {
  constructor(selector = CANVAS) {
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

  setWidth(width) { this.domElement.setAttribute(WIDTH, width); }

  setHeight(height) { this.domElement.setAttribute(HEIGHT, height); }

  resize(width, height) {
    const x = 0,
          y = 0;

    this.setWidth(width);

    this.setHeight(height);

    this.context.viewport(x, y, width, height);
  }

  clear(colour) {
    this.clearColour(colour);
    this.clearDepth();
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

Object.assign(Canvas.prototype, depthMixins);
Object.assign(Canvas.prototype, shaderMixins);
Object.assign(Canvas.prototype, bufferMixins);
Object.assign(Canvas.prototype, colourMixins);
Object.assign(Canvas.prototype, matrixMixins);
Object.assign(Canvas.prototype, textureMixins);
Object.assign(Canvas.prototype, programMixins);
Object.assign(Canvas.prototype, blendingMixins);
Object.assign(Canvas.prototype, locationMixins);

function domElementFromSelector(selector) {
  const domElement = (typeof selector === STRING) ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}

function contextFromDOMElement(domElement) {
  const context = domElement.getContext(WEBGL);

  if (!context) {
    throw new Error(WEB_GL_CONTEXT_ERROR);
  }

  return context;
}
