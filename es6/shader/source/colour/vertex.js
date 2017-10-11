'use strict';

const lightingSource = require('../../source/lighting'),
      positionSource = require('../../source/position');

const vertexColourAttributeName = 'aVertexColour',
      vertexShaderSource = `
    
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
        
      `;

module.exports = vertexShaderSource;
