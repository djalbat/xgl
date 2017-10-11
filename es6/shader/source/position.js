'use strict';

const UniformLocations = require('../locations/uniform'),
      AttributeLocations = require('../locations/attribute');

const { offsetMatrixName, rotationMatrixName, positionMatrixName, projectionMatrixName } = UniformLocations,
      { vertexPositionAttributeName } = AttributeLocations,
      positionSource = `
  
        uniform mat4 ${offsetMatrixName},
                     ${rotationMatrixName},
                     ${positionMatrixName},
                     ${projectionMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${projectionMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * ${offsetMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `;
    
module.exports = positionSource;
