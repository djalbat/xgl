'use strict';

const Facet = require('../../facet'),
      Mask = require('../../element/mask'),
      vectorUtilities = require('../../utilities/vector'),
      ColouredCanvasElement = require('../../element/canvas/coloured');

const { normalise3 } = vectorUtilities;

const defaultVertices = [
  [ 0, 0, 0 ],
  [ 1, 0, 0 ],
  [ 0, 1, 0 ]
];

class Triangle extends ColouredCanvasElement {
  constructor(transform, colour, facets) {
    super(transform, colour);

    this.facets = facets;
  }

  getColour() {
    return this.colour;
  }

  getFacets() {
    return this.facets;
  }

  setFacets(facets) {
    this.facets = facets;
  }

  getInitialVertexPositions() {
    const initialVertexPositions = this.facets.reduce(function(initialVertexPositions, facet) {
      const vertices = facet.getVertices();

      initialVertexPositions = vertices.reduce(function(initialVertexPositions, vertex) {
        const initialVertexPosition = vertex.slice(); ///

        initialVertexPositions.push(initialVertexPosition);

        return initialVertexPositions;
      }, initialVertexPositions);

      return initialVertexPositions;
    }, []);

    return initialVertexPositions;
  }

  calculateVertexNormals(vertexPositions) {
    const vertexNormals = this.facets.reduce(function(vertexNormals, facet) {
      const normal = facet.getNormal(),
            vertexNormal = normalise3(normal);

      vertexNormals.push(vertexNormal);
      vertexNormals.push(vertexNormal);
      vertexNormals.push(vertexNormal);

      return vertexNormals;
    }, []);

    return vertexNormals;
  }

  calculateVertexIndexes(vertexPositions) {
    let vertexIndex = 0;

    const vertexIndexes = this.facets.reduce(function(vertexIndexes, facet) {
      vertexIndexes = [ ...vertexIndexes, vertexIndex + 0, vertexIndex + 1, vertexIndex + 2 ];

      vertexIndex += 3;

      return vertexIndexes;
    }, []);

    return vertexIndexes;
  }

  calculateVertexColours(vertexPositions) {
    const vertexColours = this.facets.reduce(function(vertexColours, facet) {
      const vertexColour = [Math.random(1), Math.random(1), Math.random(1), 1]; ///this.colour;

      vertexColours.push(vertexColour);
      vertexColours.push(vertexColour);
      vertexColours.push(vertexColour);

      return vertexColours;
    }.bind(this), []);

    return vertexColours;
  }

  create(colourRenderer, textureRenderer, transforms) {
    // super.create(colourRenderer, textureRenderer, transforms);

    transforms = [this.transform, ...transforms]; ///

    const childElements = this.getChildElements();

    childElements.forEach(function(childElement) {
      childElement.create(colourRenderer, textureRenderer, transforms);

      if (childElement instanceof Mask) {
        const mask = childElement,  ///
              element = this; ///

        mask.maskElement(element);
      }
    }.bind(this));

    const vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);
  }

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
