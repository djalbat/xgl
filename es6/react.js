'use strict';

const Element = require('./element'),
      arrayUtilities = require('./utilities/array');

const { flatten } = arrayUtilities;

function createElement(firstArgument, properties, ...childElements) {
  let element = null;

  if (firstArgument !== undefined) {
    flatten(childElements);

    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {

    } else if (isSubclassOf(firstArgument, Element)) {
      const Class = firstArgument;  ///

      element = Class.fromProperties(properties);
    } else if (typeof firstArgument === 'function') {
      const elementFunction = firstArgument;  ///

      element = elementFunction(properties);
    }
  }

  return element;
}

const React = {
  createElement: createElement
};

module.exports = React;

function isSubclassOf(argument, Class) {
  let typeOf = false;

  if (argument.name === Class.name) { ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}
