'use strict';

const Element = require('../element');

class CanvasElement extends Element {
  constructor(width, height, depth, dimensions, position, rotations, transformations) {
    super();

    this.width = width;
    this.height = height;
    this.depth = depth;
    this.dimensions = dimensions;
    this.position = position;
    this.rotations = rotations;
    this.transformations = transformations;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getDepth() {
    return this.depth;
  }

  getDimensions() {
    return this.dimensions;
  }

  getPosition() {
    return this.position;
  }

  getRotations() {
    return this.rotations;
  }

  getTransformations() {
    return this.transformations;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { width, height, depth, dimensions, position, rotations, transformations } = properties,
          canvasElement = new Class(width, height, depth, dimensions, position, rotations, transformations, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
