'use strict';

const Element = require('../element'),
      transformUtilities = require('../utilities/transform');

const { composeTransform } = transformUtilities;

class CanvasElement extends Element {
  constructor(transform, facets, mask, hidden) {
    super();

    this.transform = transform;
    this.facets = facets;
    this.mask = mask;

    this.hidden = hidden;
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

  isHidden() {
    return this.hidden;
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

  createFacets() {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.createFacets());
  }

  addFacets(colourRenderer, textureRenderer) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.addFacets(colourRenderer, textureRenderer));
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { scale, position, rotations, mask = null, hidden = false } = properties,
          transform = composeTransform(scale, position, rotations),
          facets = [],
          canvasElement = Element.fromProperties(Class, properties, transform, facets, mask, hidden, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
