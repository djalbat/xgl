"use strict";

export function removeFalseyElements(elements) {
  elements = elements.reduce((elements, element) => {
    if (element) {
      elements.push(element);
    }

    return elements;
  }, []);

  return elements;
}
