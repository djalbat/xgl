"use strict";

import Element from "../element";

import { composeTransform } from "../utilities/transform";

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
    const childElements = this.getChildElements();

    this.facets.forEach((facet) => facet.applyTransform(transform));

    childElements.forEach((childElement) => childElement.applyTransform(transform));
  }

  createFacets(hidden) {
    const childElements = this.getChildElements();

    hidden = hidden || this.hidden; ///

    childElements.forEach((childElement) => childElement.createFacets(hidden));

    return hidden;
  }

  amendFacets() {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.amendFacets());

    this.applyTransform(this.transform);

    this.applyMask(this.mask);
  }

  addFacets(colourRenderer, textureRenderer) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.addFacets(colourRenderer, textureRenderer));
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { scale = null, rotations = null, position = null, mask = null, hidden = false } = properties,
          transform = composeTransform(scale, rotations, position),
          facets = [],
          canvasElement = Element.fromProperties(Class, properties, transform, facets, mask, hidden, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = CanvasElement;
