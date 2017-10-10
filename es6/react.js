'use strict';

const Scene = require('./scene'),
      Camera = require('./camera'),
      Element = require('./element'),
      arrayUtilities = require('./utilities/array');

const { flatten, guarantee } = arrayUtilities;

function createElement(firstArgument, properties, ...childElements) {
  let elementOrElements;

  if (firstArgument !== undefined) {
    childElements = flatten(childElements);

    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {

    } else if (firstArgument === Scene) {
      const scene = Scene.fromProperties(properties);

      elementOrElements = scene;  ///
    } else if (firstArgument === Camera) {
      const camera = Camera.fromProperties(properties);

      elementOrElements = camera; ///
    } else if (isSubclassOf(firstArgument, Element)) {
      const Class = firstArgument;  ///

      elementOrElements = Class.fromProperties(properties);
    } else if (typeof firstArgument === 'function') {
      const func = firstArgument;  ///

      elementOrElements = func(properties);
    }
  }

  const elements = flatten(guarantee(elementOrElements)); ///

  return elements;
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
