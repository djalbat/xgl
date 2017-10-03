'use strict';

const arrayUtilities = require('../../utilities/array'),
      vertexUtilities = require('../../utilities/vertex');

const { flatten } = arrayUtilities,
      { calculateVertexIndexData, calculateVertexNormalData} = vertexUtilities;

const initialVertexPositionData = calculateInitialVertexPositionData(),
      vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
      vertexNormalData = calculateVertexNormalData(initialVertexPositionData);

module.exports = {
  vertexIndexData: vertexIndexData,
  vertexNormalData: vertexNormalData,
  initialVertexPositionData: initialVertexPositionData
};

function calculateInitialVertexPositionData() {
  const initialVertexPositions = [],
        facesLength = 7, ///
        step = 2 * Math.PI / facesLength;

  for (let count = 0; count < facesLength; count++) {
    const angle = step * count,
          firstX = Math.cos(angle),
          firstY = Math.sin(angle),
          secondX = Math.cos(angle + step),
          secondY = Math.sin(angle + step),
          firstZ = 0,
          secondZ = 1;

    initialVertexPositions.push([ firstX, firstY, firstZ, 1 ]);
    initialVertexPositions.push([ secondX, secondY, firstZ, 1 ]);
    initialVertexPositions.push([ secondX, secondY, secondZ, 1 ]);
    initialVertexPositions.push([ firstX, firstY, secondZ, 1 ]);
  }

  const initialVertexPositionData = flatten(initialVertexPositions);

  return initialVertexPositionData;
}
