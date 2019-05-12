'use strict';

const Element = require('../element'),
      arrayUtilities = require('../utilities/array'),
      transformUtilities = require('../utilities/transform');

const { push } = arrayUtilities,
      { composeTransform } = transformUtilities;

class CanvasElement extends Element {
  constructor(transform, facets, mask) {
    super();

    this.transform = transform;

    this.facets = facets;

    this.mask = mask;
  }

  getFacets() {
    return this.facets;
  }

  setFacets(facets) {
    this.facets = facets;
  }

  getVertexIndexes() {
    const vertexIndexes = this.facets.reduce((vertexIndexes, facet, index) => {
      const facetVertexIndexes = facet.getVertexIndexes(index);
      
      push(vertexIndexes, facetVertexIndexes);

      return vertexIndexes;
    }, []);

    return vertexIndexes;
  }

  getVertexNormals() {
    const vertexNormals = this.facets.reduce((vertexNormals, facet) => {
      const facetVertexNormals = facet.getVertexNormals();

      push(vertexNormals, facetVertexNormals);

      return vertexNormals;
    }, []);

    return vertexNormals;
  }

  getVertexPositions() {
    const vertexPositions = this.facets.reduce((vertexPositions, facet) => {
      const facetVertexPositions = facet.getVertexPositions();

      push(vertexPositions, facetVertexPositions);

      return vertexPositions;
    }, []);

    return vertexPositions;
  }

  applyTransforms(transforms) {
    transforms = [this.transform, ...transforms]; ///

    this.facets.forEach((facet) => facet.applyTransforms(transforms));

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.applyTransforms(transforms));
  }

  applyMask() {
    if (this.mask) {
      const element = this; ///

      this.mask.maskElement(element);
    }

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.applyMask());
  }

  render(colourRenderer, textureRenderer) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.render(colourRenderer, textureRenderer));
  }

  static fromProperties(Class, properties, facets = [], ...remainingArguments) {
    const { size, position, rotations, mask = null } = properties,
          transform = composeTransform(size, position, rotations),
          canvasElement = Element.fromProperties(Class, properties, transform, facets, mask, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
