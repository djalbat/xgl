'use strict';

const Element = require('../element'),
      transformUtilities = require('../utilities/transform');

const { composeTransform } = transformUtilities;

class CanvasElement extends Element {
  constructor(transform, facets, mask) {
    super();

    this.transform = transform;
    this.facets = facets;
    this.mask = mask;
  }

  getTransform() {
    return this.transform;
  }

  getFacets() {
    return this.facets;
  }

  getMask() {
    return this.mask;
  }

  setFacets(facets) {
    this.facets = facets;
  }

  applyMask(mask) {
    if (mask) {
      const element = this; ///

      mask.maskElement(element);
    }
  }

  applyTransform(transform) {
    this.facets.forEach((facet) => facet.applyTransform(transform));

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.applyTransform(transform));
  }

  applyTransformsAndMasks() {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.applyTransformsAndMasks());

    this.applyTransform(this.transform);

    this.applyMask(this.mask);
  }

  render(colourRenderer, textureRenderer) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.render(colourRenderer, textureRenderer));
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { scale, position, rotations, mask = null } = properties,
          transform = composeTransform(scale, position, rotations),
          facets = [],
          canvasElement = Element.fromProperties(Class, properties, transform, facets, mask, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
