"use strict";

export default class Element {
  getChildElements() {
    return this.childElements;
  }

  setChildElements(childElements) {
    this.childElements = childElements;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const element = new Class(...remainingArguments),
          childElements = (typeof element.childElements === "function") ?
                            element.childElements(properties) :
                              properties.childElements || [];

    element.setChildElements(childElements);

    return element;
  }
}
