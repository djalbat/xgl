'use strict';

const CanvasElement = require('../../element/canvas');

const initialVertexPositions = [

        [ 0.0, 0.0, 0.0 ],
        [ 0.0, 1.0, 0.0 ],
        [ 0.0, 1.0, 1.0 ],
        [ 0.0, 0.0, 1.0 ],
      
      ];

class Mask extends CanvasElement {
  getInitialVertexPositions() {
    return initialVertexPositions;
  }
  
  create(colourRenderer, textureRenderer, transforms) {
    ///
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Mask, properties); }
}

module.exports = Mask;
