'use strict';

const constants = require('../../constants');

const { CYLINDER_SIDES } = constants;

const defaultIndexes = calculateDefaultIndexes(),
      defaultVertices = calculateDefaultVertices();

module.exports = {
  defaultIndexes: defaultIndexes,
  defaultVertices: defaultVertices
};

function calculateDefaultIndexes() {
  const defaultIndexes = [],
        sides = CYLINDER_SIDES,
        defaultIndexCount = sides * 2;

  for (let count = 0; count < sides; count++) {
    const defaultIndex = count * 2;

    defaultIndexes.push([ (defaultIndex + 1) % defaultIndexCount, (defaultIndex + 0) % defaultIndexCount, (defaultIndex + 2) % defaultIndexCount ]);
    defaultIndexes.push([ (defaultIndex + 2) % defaultIndexCount, (defaultIndex + 3) % defaultIndexCount, (defaultIndex + 1) % defaultIndexCount ]);
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
