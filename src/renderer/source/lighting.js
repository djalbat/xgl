"use strict";

export const normalsMatrixName = "uNormalsMatrix";
export const vertexNormalAttributeName = "aVertexNormal";

const lightingSource = new String(`
  
        uniform mat4 ${normalsMatrixName};

        attribute vec3 ${vertexNormalAttributeName};

        vec3 directionalLightColour = vec3(1, 1, 1),
             directionalVector = normalize(vec3(1.0, 1.0, 1.0));
          
        vec3 calculateLighting() {
          vec4 transformedNormal = ${normalsMatrixName} * vec4(${vertexNormalAttributeName}, 1.0);            

          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;
          
          vec3 lighting = (directionalLightColour * directional);
          
          return lighting;
        }

      `);

export default lightingSource;