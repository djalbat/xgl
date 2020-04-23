"use strict";

import { applyMatrix } from "./mixin/matrix";
import { enableBlending } from "./mixin/blending";
import { createProgram, useProgram } from "./mixin/program";
import { clearColour, clearColourBuffer } from "./mixin/colour";
import { createTexture, enableAnisotropicFiltering } from "./mixin/texture";
import { clearDepth, clearDepthBuffer, enableDepthTesting } from "./mixin/depth";
import { createShader, createVertexShader, createFragmentShader } from "./mixin/shader";
import { bindBuffer, bindElementBuffer, createBuffer, createElementBuffer } from "./mixin/buffer";
import { getAttributeLocation, getUniformLocation, setUniformLocationIntegerValue } from "./mixin/location";

export default class Canvas {
  applyMatrix = applyMatrix;

  enableBlending = enableBlending;

  useProgram = useProgram;
  createProgram = createProgram;

  clearColour = clearColour;
  clearColourBuffer = clearColourBuffer;

  createTexture = createTexture;
  enableAnisotropicFiltering = enableAnisotropicFiltering;

  clearDepth = clearDepth;
  clearDepthBuffer = clearDepthBuffer;
  enableDepthTesting = enableDepthTesting;

  createShader = createShader;
  createVertexShader = createVertexShader;
  createFragmentShader = createFragmentShader;

  bindBuffer = bindBuffer;
  createBuffer = createBuffer;
  bindElementBuffer = bindElementBuffer;
  createElementBuffer = createElementBuffer;

  getUniformLocation = getUniformLocation;
  getAttributeLocation = getAttributeLocation;
  setUniformLocationIntegerValue = setUniformLocationIntegerValue;

  constructor(selector = "canvas") {
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

  setWidth(width) { this.domElement.setAttribute("width", width); }

  setHeight(height) { this.domElement.setAttribute("height", height); }

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

function domElementFromSelector(selector) {
  const domElement = (typeof selector === "string") ?
                       document.querySelectorAll(selector)[0] :  ///
                         selector;  ///

  return domElement;
}

function contextFromDOMElement(domElement) {
  const context = domElement.getContext("webgl");

  if (!context) {
    throw new Error(`Unable to get the WebGL context.`);
  }

  return context;
}
