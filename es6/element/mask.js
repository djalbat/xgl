'use strict';

const Element = require('../element'),
      MaskingFacet = require('../maskingFacet'),
      arrayUtilities = require('../utilities/array');

const { push } = arrayUtilities;

class Mask extends Element {
  getFacets() {
    const childElements = this.getChildElements(),
          facets =  childElements.reduce(function(facets, childElement) {
            const childElementFacets = childElement.getFacets();
            
            push(facets, childElementFacets);

            return facets;
          }, []);

    return facets;
  }
  
  getMaskingFacets() {
    const facets = this.getFacets(),
          maskingFacets = facets.map(function(facet) {
            const maskingFacet = MaskingFacet.fromFacet(facet);
            
            return maskingFacet;
          });
    
    return maskingFacets;          
  }

  create(colourRenderer, textureRenderer, transforms) {
    const childElements = this.getChildElements(),
          masking = true;  ///

    childElements.forEach(function(childElement) {
      childElement.create(colourRenderer, textureRenderer, transforms, masking);
    });
  }
  
  maskElement(element) {
    let facets = element.getFacets();
    
    const maskingFacets = this.getMaskingFacets();

    maskingFacets.forEach(function(maskingFacet) {
      const unmaskedFacets = [];

      facets.forEach(function(facet) {
        maskingFacet.maskFacet(facet, unmaskedFacets);
      });

      facets = unmaskedFacets;  ///
    });
    
    element.setFacets(facets);
  }

  static fromProperties(properties) { return Element.fromProperties(Mask, properties); }
}

module.exports = Mask;
