'use strict';

const Facet = require('../../../facet'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const defaultVertices = [
        
      [ 0, 0, 0 ],
      [ 1, 0, 0 ],
      [ 0, 1, 0 ],
        
    ],
    indexes = [ 0, 1, 2 ];

class ColouredTriangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices } = properties,
          facet = Facet.fromVerticesAndIndexes(vertices, indexes),
          facets = [
            facet
          ],
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, facets);

    return colouredTriangle;
  }
}

module.exports = ColouredTriangle;
