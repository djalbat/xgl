'use strict';

const Element = require('../element'),
      MaskingFacet = require('../maskingFacet'),
      arrayUtilities = require('../utilities/array'),
      transformUtilities = require('../utilities/transform');

const { push } = arrayUtilities,
      { composeTransform } = transformUtilities;

class Mask extends Element {
  constructor(transform) {
    super();

    this.transform = transform;
  }

  getTransform() {
    return this.transform;
  }

  getFacets() {
    const childElements = this.getChildElements(),
          facets =  childElements.reduce((facets, childElement) => {
            const childElementFacets = childElement.getFacets();
            
            push(facets, childElementFacets);

            return facets;
          }, []);

    return facets;
  }
  
  getMaskingFacets() {
    const facets = this.getFacets(),
          maskingFacets = facets.map((facet) => {
            const maskingFacet = MaskingFacet.fromFacet(facet);
            
            return maskingFacet;
          });
    
    return maskingFacets;          
  }

  maskElement(element) {
    let facets = element.getFacets();
    
    const maskingFacets = this.getMaskingFacets();

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
          mask = Element.fromProperties(Mask, properties, transform);

    mask.initialise();

    return mask;
  }
}

module.exports = Mask;
