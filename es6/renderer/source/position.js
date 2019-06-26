'use strict';

const offsetsMatrixName = 'uOffsetsMatrix',
      positionMatrixName = 'uPositionMatrix',
      rotationsMatrixName = 'uRotationsMatrix',
      projectionMatrixName = 'uPerspectiveMatrix',
      vertexPositionAttributeName = 'aVertexPosition';

const positionSource = new String(`
  
        uniform mat4 ${offsetsMatrixName},
                     ${rotationsMatrixName},
                     ${positionMatrixName},
                     ${projectionMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${projectionMatrixName} * ${positionMatrixName} * ${rotationsMatrixName} * ${offsetsMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `);

Object.assign(positionSource, {
  offsetsMatrixName,
  positionMatrixName,
  rotationsMatrixName,
  projectionMatrixName,
  vertexPositionAttributeName
});
    
module.exports = positionSource;
