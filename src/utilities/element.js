"use strict";

export function elementsFromChildElements(childElements, Class) {
  const elements = childElements.reduce((elements, childElement) => {
    if (Class.prototype.isPrototypeOf(childElement)) {
      const element = childElement;  ///

      elements.push(element);
    }
    return elements;
  }, []);

  return elements;
}

export function elementFromChildElements(childElements, Class) {
  const element = childElements.reduce((element, childElement) => {
    if (element === null) {
      if (Class.prototype.isPrototypeOf(childElement)) {
        element = childElement;  ///
      }
    }

    return element;
  }, null);

  return element;
}
