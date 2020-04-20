"use strict";

import lightingSource from "../../source/lighting";
import positionSource from "../../source/position";

const textureCoordinateAttributeName = "aTextureCoordinate",
      vertexShaderSource = new String(`
        
        attribute vec2 ${textureCoordinateAttributeName};
        
        ${lightingSource}
      
        ${positionSource}

        varying highp vec3 vLighting;
        
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();
                    
          vTextureCoordinate = ${textureCoordinateAttributeName};
        }
        
      `);

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName
});

module.exports = vertexShaderSource;
