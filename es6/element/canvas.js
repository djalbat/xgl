'use strict';

const Element = require('../element'),
      Mask = require('../element/mask'),
      arrayUtilities = require('../utilities/array'),
      transformUtilities = require('../utilities/transform');

const { push } = arrayUtilities,
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

  render(colourRenderer, textureRenderer) {
    ///
  }

  getVertexPositions() {
    const vertexPositions = this.facets.reduce((vertexPositions, facet) => {
      const facetVertexPositions = facet.getVertexPositions();
      
      push(vertexPositions, facetVertexPositions);

      return vertexPositions;
    }, []);

    return vertexPositions;
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

  initialise(colourRenderer, textureRenderer, transforms, masked) {
    transforms = [this.transform, ...transforms]; ///

    this.facets.forEach((facet) => facet.applyTransforms(transforms));

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => {
      const masked = false; ///

      childElement.initialise(colourRenderer, textureRenderer, transforms, masked);

      if (childElement instanceof Mask) {
        const mask = childElement,  ///
              element = this; ///

        mask.maskElement(element);
      }
    });

    if (!masked) {
      this.render(colourRenderer, textureRenderer);
    }
  }

  static fromProperties(Class, properties, facets = [], ...remainingArguments) {
    const { size, position, rotations } = properties,
          transform = composeTransform(size, position, rotations),
          canvasElement = Element.fromProperties(Class, properties, facets, transform, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
