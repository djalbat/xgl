'use strict';

const Shader = require('../shader');

const { calculateLightingSource, calculatePositionSource } = Shader;

const vertexShaderSource = `
        
        ${calculateLightingSource}
      
        ${calculatePositionSource}

        varying highp vec3 vLighting;
        
        attribute vec2 aTextureCoordinate;
        
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();
                    
          vTextureCoordinate = aTextureCoordinate;
        }
        
      `,
      fragmentShaderSource = `
        
        varying highp vec2 vTextureCoordinate;
        
        varying highp vec3 vLighting;
                   
        uniform sampler2D uSampler;

        void main() {
          highp vec4 texelColour = texture2D(uSampler, vTextureCoordinate);
          
          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  
        }
        
      `;

class TextureShader extends Shader {
  static fromNothing(canvas) { return Shader.fromVertexShaderSourceAndFragmentShaderSource(TextureShader, vertexShaderSource, fragmentShaderSource, canvas); }

  createAndBindTextureCoordinateBuffer(data, canvas) {
    const program = this.getProgram(),
          textureCoordinateBuffer = canvas.createBuffer(data),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, 'aTextureCoordinate'),
          textureCoordinateComponents = 2;

    canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
  }
}

module.exports = TextureShader;
