"use strict";

import { FUNCTION } from "./constants";

import { guarantee } from "./utilities/array";

export default class Element {
  getProperties() {
    return this.properties;
  }

  getChildElements() {
    return this.childElements;
  }

  setProperties(properties) {
    this.properties = properties;
  }

  setChildElements(childElements) {
    this.childElements = childElements;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const element = new Class(...remainingArguments),
          childElements = (typeof element.childElements === FUNCTION) ?
                            guarantee(element.childElements(properties)) :
                              properties.childElements || [];

    element.setProperties(properties);

    element.setChildElements(childElements);

    return element;
  }
}
