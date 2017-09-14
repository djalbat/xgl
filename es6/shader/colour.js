'use strict';

const Shader = require('../shader');

const { calculateLightingSource, calculatePositionSource } = Shader;

const vertexShaderSource = `
    
        ${calculateLightingSource}
      
        ${calculatePositionSource}
    
        varying highp vec3 vLighting;
        
        varying lowp vec4 vColour;
        
        attribute vec4 aVertexColour;

        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();

          vColour = aVertexColour;                    
        }
        
      `,
      fragmentShaderSource = `
        
        varying lowp vec4 vColour;
              
        varying highp vec3 vLighting;

        void main() {
          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);
        }
        
      `;
  
class ColourShader extends Shader {
  static fromNothing(context) { return Shader.fromVertexShaderSourceAndFragmentShaderSource(ColourShader, vertexShaderSource, fragmentShaderSource, context); }
}

module.exports = ColourShader;
