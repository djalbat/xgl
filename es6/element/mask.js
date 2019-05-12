'use strict';

const Element = require('../element'),
      MaskingFacet = require('../maskingFacet'),
      arrayUtilities = require('../utilities/array');

const { push } = arrayUtilities;

class Mask extends Element {
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
    const maskingFacets = this.retrieveMaskingFacets();

    maskElement(element, maskingFacets);
  }

  initialise() {
    const transforms = [],
          childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.applyTransforms(transforms));
  }

  static fromProperties(properties) {
    const mask = Element.fromProperties(Mask, properties);

    mask.initialise();

    return mask;
  }
}

module.exports = Mask;

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
