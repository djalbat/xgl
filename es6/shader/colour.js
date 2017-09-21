'use strict';

const Shader = require('../shader');

const { calculateLightingSource, calculatePositionSource } = Shader;

const vertexColourAttributeName = 'aVertexColour';

const vertexShaderSource = `
    
        attribute vec4 ${vertexColourAttributeName};

        ${calculateLightingSource}
      
        ${calculatePositionSource}
    
        varying highp vec3 vLighting;
        
        varying lowp vec4 vColour;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();

          vColour = ${vertexColourAttributeName};                    
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
  static fromNothing(canvas) { return Shader.fromVertexShaderSourceAndFragmentShaderSource(ColourShader, vertexShaderSource, fragmentShaderSource, canvas); }

  createAndBindVertexColourBuffer(vertexColourData, canvas) {
    const program = this.getProgram(),
          vertexColourBuffer = canvas.createBuffer(vertexColourData),
          vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          vertexColourComponents = 4;

    canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
  }
}

module.exports = ColourShader;
