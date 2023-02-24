"use strict";

import Element from "../element";
import MaskingFacet from "../primitive/maskingFacet";

import { push } from "../utilities/array";
import {composeTransform} from "../utilities/transform";

export default class Mask extends Element {
  constructor(reference, transform) {
    super();

    this.reference = reference;
    this.transform = transform;
  }

  getReference() {
    return this.reference;
  }

  getTransform() {
    return this.transform;
  }

  retrieveMaskingFacets() {
    const childElements = this.getChildElements(),
          facets = retrieveFacets(childElements),
          maskingFacets = facets.map((facet) => {
            const maskingFacet = MaskingFacet.fromFacet(facet);
            
            return maskingFacet;
          });
    
    return maskingFacets;          
  }

  maskElement(element, marginOfError) {
    const maskingFacets = this.retrieveMaskingFacets(),
          childElements = element.getChildElements();

    maskElement(element, maskingFacets, marginOfError);

    childElements.forEach((childElement) => {
      maskElement(childElement, maskingFacets, marginOfError);
    });
  }

  applyTransform(transform) {
    const childElements = this.getChildElements();

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
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => {
      childElement.maskFacets(masks, marginOfError);
    });

    this.applyTransform(this.transform);  ///
  }

  addFacets(colourRenderer, textureRenderer) {}

  static fromProperties(properties) {
    const { reference, scale = null, position = null, rotations = null } = properties,
          transform = composeTransform(scale, position, rotations),
          mask = Element.fromProperties(Mask, properties, reference, transform);

    return mask;
  }
}

function retrieveFacets(childElements, facets = []) {
  childElements.forEach((childElement) => {
    const element = childElement, ///
          elementFacets = element.getFacets(),
          childElements = element.getChildElements();

    push(facets, elementFacets);

    retrieveFacets(childElements, facets);
  });

  return facets;
}

function maskElement(element, maskingFacets, marginOfError) {
  let facets = element.getFacets();

  maskingFacets.forEach((maskingFacet) => {
    const unmaskedFacets = [];

    facets.forEach((facet) => {
      maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
    });

    facets = unmaskedFacets;  ///
  });

  element.setFacets(facets);

  const childElements = element.getChildElements();

  childElements.forEach((childElement) => {
    const element = childElement; ///

    maskElement(element, maskingFacets, marginOfError);
  });
}
