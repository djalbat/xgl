'use strict';

const necessary = require('necessary');

const constants = require('../../constants');

const { CYLINDER_SIDES } = constants,
      { arrayUtilities } = necessary,
      { push } = arrayUtilities;

const defaultIndexes = calculateDefaultIndexes(),
      defaultVertices = calculateDefaultVertices(),
      defaultTextureCoordinates = calculateDefaultTextureCoordinates();

module.exports = {
  defaultIndexes: defaultIndexes,
  defaultVertices: defaultVertices,
  defaultTextureCoordinates: defaultTextureCoordinates
};

function calculateDefaultIndexes() {
  const defaultIndexes = [],
        sides = CYLINDER_SIDES,
        defaultIndexCount = sides * 2;

  for (let count = 0; count < sides; count++) {
    const defaultIndex = count * 2,
          firstDefaultIndexes = [ (defaultIndex + 1) % defaultIndexCount, (defaultIndex + 0) % defaultIndexCount, (defaultIndex + 2) % defaultIndexCount ],
          secondDefaultIndexes = [ (defaultIndex + 2) % defaultIndexCount, (defaultIndex + 3) % defaultIndexCount, (defaultIndex + 1) % defaultIndexCount ];

    defaultIndexes.push(firstDefaultIndexes);
    defaultIndexes.push(secondDefaultIndexes);
  }

  return defaultIndexes;
}

function calculateDefaultVertices() {
  const defaultVertices = [],
        sides = CYLINDER_SIDES,
        step = 2 * Math.PI / sides;

  for (let count = 0; count < sides; count++) {
    const angle = step * count,
          angleCosine = Math.cos(angle),
          angleSine = Math.sin(angle),
          topDefaultVertex = [
            ( angleCosine + 1 ) / 2,
            ( angleSine + 1 ) / 2,
            0
          ],
          bottomDefaultVertex = [
            ( angleCosine + 1 ) / 2,
            ( angleSine + 1 ) / 2,
            1
          ];

    defaultVertices.push(topDefaultVertex);
    defaultVertices.push(bottomDefaultVertex);
  }

  return defaultVertices;
}

function calculateDefaultTextureCoordinates() {
  const defaultTextureCoordinates = [],
        sides = CYLINDER_SIDES,
        step = 1 / sides;

  for (let count = 0; count < sides; count++) {
    const offset = step * count,
          firstDefaultTextureCoordinates = [ [ offset, 0 ], [ offset, 1 ], [ offset + step, 1 ] ],
          secondDefaultTextureCoordinates = [ [ offset + step, 1 ], [ offset + step, 0 ], [ offset, 0 ] ];

    push(defaultTextureCoordinates, firstDefaultTextureCoordinates);
    push(defaultTextureCoordinates, secondDefaultTextureCoordinates);
  }

  return defaultTextureCoordinates;
}