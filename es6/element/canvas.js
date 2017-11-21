'use strict';

const Element = require('../element'),
      Facet = require('../facet'),
      Mask = require('../element/mask'),
      vectorUtilities = require('../utilities/vector'),
      transformUtilities = require('../utilities/transform');

const { normalise3 } = vectorUtilities,
      { composeTransform } = transformUtilities;

class CanvasElement extends Element {
  constructor(facets, transform) {
    super();

    this.facets = facets;

    this.transform = transform;
  }

  getFacets() {
    return this.facets;
  }

  getTransform() {
    return this.transform;
  }

  setFacets(facets) {
    this.facets = facets;
  }

  create(colourRenderer, textureRenderer, transforms) {
    transforms = [this.transform, ...transforms]; ///

    this.facets.forEach(function(facet) {
      facet.applyTransforms(transforms);
    });

    const childElements = this.getChildElements(),
          masking = false; ///

    childElements.forEach(function(childElement) {
      childElement.create(colourRenderer, textureRenderer, transforms, masking);

      if (childElement instanceof Mask) {
        const mask = childElement,  ///
              element = this; ///

        mask.maskElement(element);
      }
    }.bind(this));
  }

  calculateVertexPositions() {
    const vertexPositions = this.facets.reduce(function(vertexPositions, facet) {
      const vertices = facet.getVertices();

      vertexPositions = vertices.reduce(function(vertexPositions, vertex) {
        const vertexPosition = vertex.slice(); ///

        vertexPositions.push(vertexPosition);

        return vertexPositions;
      }, vertexPositions);

      return vertexPositions;
    }, []);

    return vertexPositions;
  }

  calculateVertexNormals() {
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

  calculateVertexIndexes() {
    let vertexIndex = 0;

    const vertexIndexes = this.facets.reduce(function(vertexIndexes, facet) {
      vertexIndexes.push(vertexIndex++);
      vertexIndexes.push(vertexIndex++);
      vertexIndexes.push(vertexIndex++);

      return vertexIndexes;
    }, []);

    return vertexIndexes;
  }

  static fromProperties(Class, properties, vertices, indexes, ...remainingArguments) {
    const { width, height, depth, position, rotations } = properties,
          facets = indexes.map(function(indexes) {  ///
            const facet = Facet.fromVerticesAndIndexes(vertices, indexes);
            
            return facet;
          }),
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties(Class, properties, facets, transform, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
