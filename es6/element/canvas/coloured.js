'use strict';

const CanvasElement = require('../../element/canvas'),
      vertexUtilities = require('../../utilities/vertex');

const { calculateVertexPositionData, calculateVertexNormalData, calculateVertexIndexData, calculateVertexColourData } = vertexUtilities;

class ColouredCanvasElement extends CanvasElement {
  constructor(width, height, depth, dimensions, position, rotations, transformations, colour) {
    super(width, height, depth, dimensions, position, rotations, transformations);

    this.colour = colour;
  }

  create(colourRenderer, textureRenderer) {
    const initialVertexPositionData = this.getInitialVertexPositionData(),
        width = this.getWidth(),
        height = this.getHeight(),
        depth = this.getDepth(),
        dimensions = this.getDimensions(),
        position = this.getPosition(),
        rotations = this.getRotations(),
        transformations = this.getTransformations(),
        vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
        vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
        vertexNormalData = calculateVertexNormalData(vertexPositionData),
        vertexColourData = calculateVertexColourData(initialVertexPositionData, this.colour);

    colourRenderer.addVertexPositionData(vertexPositionData);
    colourRenderer.addVertexIndexData(vertexIndexData);
    colourRenderer.addVertexNormalData(vertexNormalData);
    colourRenderer.addVertexColourData(vertexColourData);
  }

  static fromProperties(Class, properties) {
    const { colour } = properties,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour);

    return colouredCanvasElement;
  }
}

module.exports = ColouredCanvasElement;
