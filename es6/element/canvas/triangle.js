'use strict';

const Facet = require('../../facet'),
      ColouredCanvasElement = require('../../element/canvas/coloured');

const defaultVertices = [
  [ 0, 0, 0 ],
  [ 1, 0, 0 ],
  [ 0, 1, 0 ]
];

class Triangle extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { vertices = defaultVertices } = properties,
          facet = Facet.fromVertices(vertices),
          facets = [
            facet
          ],
          triangle = ColouredCanvasElement.fromProperties(Triangle, properties, facets);

    return triangle;
  }
}

module.exports = Triangle;
