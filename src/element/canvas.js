"use strict";

import Element from "../element";

import { composeTransform } from "../utilities/transform";

export default class CanvasElement extends Element {
  constructor(maskReference, transform, facets, hidden) {
    super();

    this.maskReference = maskReference;
    this.transform = transform;
    this.facets = facets;

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

  applyMask(maskReference, masks) {
    const mask = masks.find((mask) => {
      const reference = mask.getReference();

      if (reference === maskReference) {
        return true;
      }
    }) || null; ///

    if (mask !== null) {
      const element = this; ///

      mask.maskElement(element);
    }
  }

  applyTransform(transform) {
    const childElements = this.getChildElements();

    this.facets.forEach((facet) => facet.applyTransform(transform));

    childElements.forEach((childElement) => childElement.applyTransform(transform));
  }

  createFacets(hidden, magnification) {
    const childElements = this.getChildElements();

    hidden = hidden || this.hidden; ///

    childElements.forEach((childElement) => childElement.createFacets(hidden, magnification));

    return hidden;
  }

  amendFacets(masks) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.amendFacets(masks));

    this.applyTransform(this.transform);

    this.applyMask(this.maskReference, masks);
  }

  addFacets(colourRenderer, textureRenderer) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.addFacets(colourRenderer, textureRenderer));
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { scale = null, rotations = null, position = null, maskReference = null, hidden = false } = properties,
          transform = composeTransform(scale, rotations, position),
          facets = [],
          canvasElement = Element.fromProperties(Class, properties, maskReference, transform, facets, hidden, ...remainingArguments);

    return canvasElement;
  }
}
