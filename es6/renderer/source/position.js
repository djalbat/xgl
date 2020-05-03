"use strict";

export const offsetsMatrixName = "uOffsetsMatrix";
export const positionMatrixName = "uPositionMatrix";
export const rotationsMatrixName = "uRotationsMatrix";
export const projectionMatrixName = "uPerspectiveMatrix";
export const vertexPositionAttributeName = "aVertexPosition";

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

export default positionSource;
