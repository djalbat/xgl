"use strict";

import { arrayUtilities } from "necessary";

export const { first, second, third, fourth, push, separate } = arrayUtilities;

export function add(arrayA, arrayB) {
  arrayB.forEach((elementB) => {
    arrayA.push(elementB);
  });
}

export function permute(array, places) {
  const length = array.length,
        cut = length - places,
        leadingElements = array.slice(0, cut),
        trailingElements = array.slice(cut);

  array = [ ...trailingElements, ...leadingElements ];

  return array;
}

export function flatten(arrays) {
  return arrays.reduce((elements, array) => {
    elements = elements.concat(array);

    return elements;
  }, []);
}

export function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
             [ arrayOrElement ];
}
