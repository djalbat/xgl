"use strict";

import Element from "./element";
import FunctionCanvasElement from "./element/canvas/function";

import { FUNCTION } from "./constants";
import { flatten, guarantee } from "./utilities/array";
import { removeFalseyElements } from "./utilities/elements";

function createElement(firstArgument, properties, ...childElements) {
  properties = properties || {};  ///

  childElements = sanitiseChildElements(childElements); ///

  let element;

  if (isSubclassOf(firstArgument, Element)) {
    const Class = firstArgument;  ///

    Object.assign(properties, {
      childElements
    });

    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === FUNCTION) {
    const func = firstArgument,  ///
          childElements = guarantee(func(properties));

    Object.assign(properties, {
      childElements
    });

    element = FunctionCanvasElement.fromProperties(properties);
  }

  return element;
}

const React = {
  createElement
};

export default React;

function isSubclassOf(argument, Class) {
  const subclassOf = (argument.prototype instanceof Class);

  return subclassOf;
}

function sanitiseChildElements(childElements) {
  childElements = flatten(childElements);

  childElements = removeFalseyElements(childElements);

  return childElements;
}
