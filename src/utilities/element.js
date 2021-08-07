"use strict";

export function elementsFromChildElements(childElements, Class) {
  const elements = childElements.reduce((elements, childElement) => {
    if (childElement instanceof Class) {
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
      if (childElement instanceof Class) {
        element = childElement;  ///
      }
    }

    return element;
  }, null);

  return element;
}
