'use strict';

const offsetMatrixName = 'uOffsetMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      projectionMatrixName = 'uPerspectiveMatrix',
      vertexPositionAttributeName = 'aVertexPosition';

const positionSource = new String(`
  
        uniform mat4 ${offsetMatrixName},
                     ${rotationMatrixName},
                     ${positionMatrixName},
                     ${projectionMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${projectionMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * ${offsetMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `);

Object.assign(positionSource, {
  offsetMatrixName,
  rotationMatrixName,
  positionMatrixName,
  projectionMatrixName,
  vertexPositionAttributeName
});
    
module.exports = positionSource;
