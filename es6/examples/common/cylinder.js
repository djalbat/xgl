'use strict';

const constants = require('../../constants');

const { CYLINDER_FACES } = constants;

const initialVertexPositions = calculateInitialVertexPositions();

module.exports = {
  initialVertexPositions: initialVertexPositions
};

function calculateInitialVertexPositions() {
  const initialVertexPositions = [],
        faces = CYLINDER_FACES,
        step = 2 * Math.PI / faces;

  for (let count = 0; count < faces; count++) {
    const angle = step * count,
          firstX = (Math.cos(angle) + 1 )/ 2,
          firstY = (Math.sin(angle) + 1 )/ 2,
          secondX = (Math.cos(angle + step) + 1 )/ 2,
          secondY = (Math.sin(angle + step) + 1 )/ 2,
          firstZ = 0,
          secondZ = 1;

    initialVertexPositions.push([ firstX, firstY, firstZ ]);
    initialVertexPositions.push([ secondX, secondY, firstZ ]);
    initialVertexPositions.push([ secondX, secondY, secondZ ]);
    initialVertexPositions.push([ firstX, firstY, secondZ ]);
  }

  return initialVertexPositions;
}
