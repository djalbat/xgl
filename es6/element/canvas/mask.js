'use strict';

const CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array');

const { flatten } = arrayUtilities,
      colour = [ 1, 1, 1, 0.5 ],
      initialVertexPositionData = [

        0.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
      
      ];

class MaskCanvasElement extends CanvasElement {
  calculateVertexColourData(vertexPositionData) {
    const vertexPositionDataLength = vertexPositionData.length,
          vertexColoursLength = vertexPositionDataLength / 3,  ///
          vertexColour = colour,
          vertexColours = [];

    for (let index = 0; index < vertexColoursLength; index++) {
      vertexColours.push(vertexColour);
    }

    const vertexColourData = flatten(vertexColours);  ///

    return vertexColourData;
  }

  getInitialVertexPositionData() {
    return initialVertexPositionData;
  }

  create(colourRenderer, textureRenderer, transforms) {
    const vertexPositionData = this.calculateVertexPositionData(transforms),
          vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
          vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
          vertexColourData = this.calculateVertexColourData(vertexPositionData);

    colourRenderer.addVertexPositionData(vertexPositionData);
    colourRenderer.addVertexIndexData(vertexIndexData);
    colourRenderer.addVertexNormalData(vertexNormalData);
    colourRenderer.addVertexColourData(vertexColourData);

    super.create(colourRenderer, textureRenderer, transforms);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(MaskCanvasElement, properties); }
}

module.exports = MaskCanvasElement;
