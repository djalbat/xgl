'use strict';

const Element = require('../element'),
      MaskingFacet = require('../maskingFacet'),
      arrayUtilities = require('../utilities/array'),
      transformUtilities = require('../utilities/transform');

const { push } = arrayUtilities,
      { composeTransform } = transformUtilities;

class Mask extends Element {
  constructor(transform, facets) {
    super();

    this.transform = transform;

    this.facets = facets;
  }

  getFacets() {
    return this.facets;
  }

  retrieveMaskingFacets() {
    const element = this, ///
          facets = retrieveFacets(element),
          maskingFacets = facets.map((facet) => {
            const maskingFacet = MaskingFacet.fromFacet(facet);
            
            return maskingFacet;
          });
    
    return maskingFacets;          
  }

  maskElement(element) {
    let facets = retrieveFacets(element);
    
    const maskingFacets = this.retrieveMaskingFacets();

    maskingFacets.forEach((maskingFacet) => {
      const unmaskedFacets = [];

      facets.forEach((facet) => maskingFacet.maskFacet(facet, unmaskedFacets));

      facets = unmaskedFacets;  ///
    });
    
    element.setFacets(facets);
  }

  initialise() {
    const childElements = this.getChildElements(),
          colourRenderer = null, ///
          textureRenderer = null, ///
          transforms = [this.transform], ///
          masking = true; ///

    childElements.forEach((childElement) => childElement.initialise(colourRenderer, textureRenderer, transforms, masking));
  }

  static fromProperties(properties) {
    const { size, position, rotations } = properties,
          transform = composeTransform(size, position, rotations),
          facets = [],
          mask = Element.fromProperties(Mask, properties, transform, facets);

    mask.initialise();

    return mask;
  }
}

module.exports = Mask;

function retrieveFacets(element, facets = []) {
  const elementFacets = element.getFacets(),
        childElements = element.getChildElements();

  childElements.forEach((childElement) => {
    const element = childElement; ///

    retrieveFacets(element, facets);
  });

  push(facets, elementFacets);

  return facets;
}
