'use strict';

const Element = require('../element'),
      transformUtilities = require('../utilities/transform');

const { composeTransform } = transformUtilities;

class FunctionElement extends Element {
  constructor(transform) {
    super();

    this.transform = transform;
  }

  initialise(colourRenderer, textureRenderer, transforms, masking) {
    transforms = [this.transform, ...transforms]; ///

    const childElements = this.getChildElements();

    childElements.forEach((childElement) => childElement.initialise(colourRenderer, textureRenderer, transforms, masking));
  }

  static fromProperties(properties) {
    const { size, position, rotations } = properties,
          transform = composeTransform(size, position, rotations),
          functionElement = Element.fromProperties(FunctionElement, properties, transform);

    return functionElement;
  }
}

module.exports = FunctionElement;
