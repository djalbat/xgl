'use strict';

const lightingSource = require('../../source/lighting'),
      positionSource = require('../../source/position');

const textureCoordinateAttributeName = 'aTextureCoordinate',
      vertexShaderSource = `
        
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
        
      `;

module.exports = vertexShaderSource;
