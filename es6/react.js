'use strict';

const Element = require('./element'),
      arrayUtilities = require('./utilities/array'),
      FunctionElement = require('./element/function');

const { guarantee } = arrayUtilities;

function createElement(firstArgument, properties, ...childElements) {
  let element;

  if (false) {
    ///
  } else if (isSubclassOf(firstArgument, Element)) {
    const Class = firstArgument;  ///

    properties = Object.assign({
      childElements
    }, properties);

    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === 'function') {
    const func = firstArgument,  ///
          childElements = guarantee(func(properties));

    Object.assign(properties, {
      childElements
    });

    element = FunctionElement.fromProperties(properties);
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
