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

  getVertexNormals() {
    const vertexNormals = this.facets.reduce((vertexNormals, facet) => {
      const facetVertexNormals = facet.getVertexNormals();
      
      push(vertexNormals, facetVertexNormals);

      return vertexNormals;
    }, []);

    return vertexNormals;
  }

  getVertexIndexes() {
    const vertexIndexes = this.facets.reduce((vertexIndexes, facet, index) => {
      const facetVertexIndexes = facet.getVertexIndexes(index);
      
      push(vertexIndexes, facetVertexIndexes);

      return vertexIndexes;
    }, []);

    return vertexIndexes;
  }

  getVertexPositions() {
    const vertexPositions = this.facets.reduce((vertexPositions, facet) => {
      const facetVertexPositions = facet.getVertexPositions();

      push(vertexPositions, facetVertexPositions);

      return vertexPositions;
    }, []);

    return vertexPositions;
  }

  render(colourRenderer, textureRenderer) {
    ///
  }

  initialise(colourRenderer, textureRenderer, transforms, masking) {
    transforms = [this.transform, ...transforms]; ///

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.initialise(colourRenderer, textureRenderer, transforms, masking));

    this.facets.forEach((facet) => facet.applyTransforms(transforms));

    if (this.mask) {
      const element = this; ///

      this.mask.maskElement(element);
    }

    if (!masking) {
      this.render(colourRenderer, textureRenderer);
    }
  }

  static fromProperties(Class, properties, facets = [], ...remainingArguments) {
    const { size, position, rotations, mask } = properties,
          transform = composeTransform(size, position, rotations),
          canvasElement = Element.fromProperties(Class, properties, transform, facets, mask, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
