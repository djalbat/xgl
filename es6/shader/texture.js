'use strict';

const Shader = require('../shader');

const { calculateLightingSource, calculatePositionSource } = Shader;

const samplerName = 'uSampler',
      textureCoordinateAttributeName = 'aTextureCoordinate';

const vertexShaderSource = `
        
        attribute vec2 ${textureCoordinateAttributeName};
        
        ${calculateLightingSource}
      
        ${calculatePositionSource}

        varying highp vec3 vLighting;
        
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();
                    
          vTextureCoordinate = ${textureCoordinateAttributeName};
        }
        
      `,
      fragmentShaderSource = `
        
        uniform sampler2D ${samplerName};

        varying highp vec3 vLighting;
                   
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          highp vec4 texelColour = texture2D(${samplerName}, vTextureCoordinate);
          
          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  
        }
        
      `;

class TextureShader extends Shader {
  static fromNothing(canvas) { return Shader.fromVertexShaderSourceAndFragmentShaderSource(TextureShader, vertexShaderSource, fragmentShaderSource, canvas); }

  createAndBindTextureCoordinateBuffer(vertexCoordinateData, canvas) {
    const program = this.getProgram(),
          textureCoordinateBuffer = canvas.createBuffer(vertexCoordinateData),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureCoordinateComponents = 2;

    canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
  }

  createAndActivateTexture(image, canvas, done) {
    const context = canvas.getContext(),
          program = this.getProgram(),
          { TEXTURE0 } = context,
          target = TEXTURE0,
          uSamplerUniformLocationIntegerValue = 0,
          uSamplerUniformLocation = canvas.getUniformLocation(program, samplerName);

    canvas.createTexture(image);

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(uSamplerUniformLocation, uSamplerUniformLocationIntegerValue);
  }
}

module.exports = TextureShader;
