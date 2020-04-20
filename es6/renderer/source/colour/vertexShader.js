"use strict";

import lightingSource from "../../source/lighting";
import positionSource from "../../source/position";

const vertexColourAttributeName = "aVertexColour",
      vertexShaderSource = new String(`
    
        attribute vec4 ${vertexColourAttributeName};

        ${lightingSource}
      
        ${positionSource}
    
        varying highp vec3 vLighting;
        
        varying lowp vec4 vColour;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();

          vColour = ${vertexColourAttributeName};                    
        }
        
      `);

Object.assign(vertexShaderSource, {
  vertexColourAttributeName
});

module.exports = vertexShaderSource;
