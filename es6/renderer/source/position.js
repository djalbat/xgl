'use strict';

const offsetMatrixName = 'uOffsetMatrix',
      positionMatrixName = 'uPositionMatrix',
      rotationsMatrixName = 'uRotationsMatrix',
      projectionMatrixName = 'uPerspectiveMatrix',
      vertexPositionAttributeName = 'aVertexPosition';

const positionSource = new String(`
  
        uniform mat4 ${offsetMatrixName},
                     ${rotationsMatrixName},
                     ${positionMatrixName},
                     ${projectionMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${projectionMatrixName} * ${positionMatrixName} * ${rotationsMatrixName} * ${offsetMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `);

Object.assign(positionSource, {
  offsetMatrixName,
  positionMatrixName,
  rotationsMatrixName,
  projectionMatrixName,
  vertexPositionAttributeName
});
    
module.exports = positionSource;
