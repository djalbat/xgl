"use strict";

import Mask from "./mask";
import Element from "../element";

import { composeTransform } from "../utilities/transform";
import { elementsFromChildElements } from "../utilities/element";

export default class CanvasElement extends Element {
  constructor(maskReference, transform, facets, masks) {
    super();

    this.maskReference = maskReference;
    this.transform = transform;
    this.facets = facets;
    this.masks = masks;
  }

  getMaskReference() {
    return this.maskReference;
  }

  getTransform() {
    return this.transform;
  }

  getFacets() {
    return this.facets;
  }

  getMasks() {
    return this.masks;
  }

  setFacets(facets) {
    this.facets = facets;
  }

  applyMask(masks, marginOfError) {
    if (this.maskReference !== null) {
      const mask = masks.find((mask) => {
        const reference = mask.getReference();

        if (reference === this.maskReference) {
          return true;
        }
      }) || null; ///

      if (mask !== null) {
        const element = this; ///

        mask.maskElement(element, marginOfError);
      }
    }
  }

  applyTransform(transform) {
    const childElements = this.getChildElements();

    this.facets.forEach((facet) => {
      facet.applyTransform(transform);
    });

    childElements.forEach((childElement) => {
      childElement.applyTransform(transform);
    });
  }

  createFacets(marginOfError) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => {
      childElement.createFacets(marginOfError);
    });
  }

  maskFacets(masks, marginOfError) {
    masks = [ ...masks, ...this.masks ]; ///

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => {
      childElement.maskFacets(masks, marginOfError);
    });

    this.applyTransform(this.transform);  ///

    this.applyMask(masks, marginOfError);
  }

  addFacets(colourRenderer, textureRenderer) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => {
      childElement.addFacets(colourRenderer, textureRenderer);
    });
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { childElements, scale = null, position = null, rotations = null, maskReference = null } = properties,
          transform = composeTransform(scale, position, rotations),
          facets = [],
          masks = elementsFromChildElements(childElements, Mask),
          canvasElement = Element.fromProperties(Class, properties, maskReference, transform, facets, masks, ...remainingArguments);

    return canvasElement;
  }
}
