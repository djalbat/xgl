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
  static fromNothing(context) { return Shader.fromVertexShaderSourceAndFragmentShaderSource(TextureShader, vertexShaderSource, fragmentShaderSource, context); }
}

module.exports = TextureShader;
