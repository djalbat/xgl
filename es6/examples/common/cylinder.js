'use strict';

const constants = require('../../constants'),
      arrayUtilities = require('../../utilities/array'),
      vertexUtilities = require('../../utilities/vertex');

const { CYLINDER_FACES } = constants,
      { flatten } = arrayUtilities,
      { calculateVertexIndexData } = vertexUtilities;

const initialVertexPositionData = calculateInitialVertexPositionData(),
      vertexIndexData = calculateVertexIndexData(initialVertexPositionData);

module.exports = {
  vertexIndexData: vertexIndexData,
  initialVertexPositionData: initialVertexPositionData
};

function calculateInitialVertexPositionData() {
  const initialVertexPositionVectors = [],
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

    initialVertexPositionVectors.push([ firstX, firstY, firstZ ]);
    initialVertexPositionVectors.push([ secondX, secondY, firstZ ]);
    initialVertexPositionVectors.push([ secondX, secondY, secondZ ]);
    initialVertexPositionVectors.push([ firstX, firstY, secondZ ]);
  }

  const initialVertexPositionData = flatten(initialVertexPositionVectors);  ///

  return initialVertexPositionData;
}
