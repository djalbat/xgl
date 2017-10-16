'use strict';

const vertexUtilities = require('../../utilities/vertex');

const { calculateVertexIndexData, calculateVertexNormalData} = vertexUtilities;

const initialVertexPositionData = [

        0.0, 0.0, 0.0, 1,
        1.0, 0.0, 0.0, 1,
        1.0, 1.0, 0.0, 1,
        0.0, 1.0, 0.0, 1,
    
      ],
      vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
      vertexNormalData = calculateVertexNormalData(initialVertexPositionData);

module.exports = {
  vertexIndexData: vertexIndexData,
  vertexNormalData: vertexNormalData,
  initialVertexPositionData: initialVertexPositionData
};
