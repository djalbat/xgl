'use strict';

const Facet = require('../../../facet'),
      ColouredCanvasElement = require('../../../element/canvas/coloured');

const defaultVertices = [

        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],

      ],
      firstIndexes = [ 0, 1, 3 ],
      secondIndexes = [ 2, 3, 1 ];

class ColouredQuadrangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices } = properties,
          firstFacet = Facet.fromVerticesAndIndexes(vertices, firstIndexes),
          secondFacet = Facet.fromVerticesAndIndexes(vertices, secondIndexes),
          facets = [
            firstFacet,
            secondFacet
          ],
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, facets);

    return colouredQuadrangle;
  }
}

module.exports = ColouredQuadrangle;
