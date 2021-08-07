"use strict";

import Element from "../element";
import MaskingFacet from "../primitive/maskingFacet";

import { push } from "../utilities/array";
import { DEFAULT_HIDDEN } from "../constants";

export default class Mask extends Element {
  constructor(hidden, reference) {
    super();

    this.hidden = hidden;
    this.reference = reference;
  }

  getHidden() {
    return this.hidden;
  }

  getReference() {
    return this.reference;
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

  maskElement(element) {
    const maskingFacets = this.retrieveMaskingFacets(),
          childElements = element.getChildElements();

    maskElement(element, maskingFacets);

    childElements.forEach((childElement) => maskElement(childElement, maskingFacets));
  }

  initialise(masks, magnification) {
    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.createFacets(this.hidden, magnification));

    childElements.forEach((childElement) => childElement.amendFacets(masks));
  }

  static fromProperties(properties) {
    const { reference, hidden = DEFAULT_HIDDEN } = properties,
          mask = Element.fromProperties(Mask, properties, hidden, reference);

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

function maskElement(element, maskingFacets) {
  let facets = element.getFacets();

  maskingFacets.forEach((maskingFacet) => {
    const unmaskedFacets = [];

    facets.forEach((facet) => maskingFacet.maskFacet(facet, unmaskedFacets));

    facets = unmaskedFacets;  ///
  });

  element.setFacets(facets);

  const childElements = element.getChildElements();

  childElements.forEach((childElement) => {
    const element = childElement; ///

    maskElement(element, maskingFacets);
  });
}