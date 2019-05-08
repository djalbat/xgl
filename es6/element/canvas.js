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

  render(textureRenderer, colourRenderer) {
    ///
  }

  getVertexPositions() {
    const vertexPositions = this.facets.reduce(function(vertexPositions, facet) {
      const facetVertexPositions = facet.getVertexPositions();
      
      push(vertexPositions, facetVertexPositions);

      return vertexPositions;
    }, []);

    return vertexPositions;
  }

  getVertexNormals() {
    const vertexNormals = this.facets.reduce(function(vertexNormals, facet) {
      const facetVertexNormals = facet.getVertexNormals();
      
      push(vertexNormals, facetVertexNormals);

      return vertexNormals;
    }, []);

    return vertexNormals;
  }

  getVertexIndexes() {
    const vertexIndexes = this.facets.reduce(function(vertexIndexes, facet, index) {
      const facetVertexIndexes = facet.getVertexIndexes(index);
      
      push(vertexIndexes, facetVertexIndexes);

      return vertexIndexes;
    }, []);

    return vertexIndexes;
  }

  initialise(textureRenderer, colourRenderer, transforms, masked) {
    transforms = [this.transform, ...transforms]; ///

    this.facets.forEach(function(facet) {
      facet.applyTransforms(transforms);
    });

    const childElements = this.getChildElements();

    childElements.forEach(function(childElement) {
      const masked = false; ///

      childElement.initialise(textureRenderer, colourRenderer, transforms, masked);

      if (childElement instanceof Mask) {
        const mask = childElement,  ///
              element = this; ///

        mask.maskElement(element);
      }
    }.bind(this));

    if (!masked) {
      this.render(textureRenderer, colourRenderer);
    }
  }

  static fromProperties(Class, properties, facets = [], ...remainingArguments) {
    const { width, height, depth, position, rotations } = properties,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties(Class, properties, facets, transform, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
