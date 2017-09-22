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
  constructor(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation, samplerUniformLocation) {
    super(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation);

    this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    this.samplerUniformLocation = samplerUniformLocation;
  }

  getTextureCoordinateAttributeLocation() {
    return this.textureCoordinateAttributeLocation;
  }

  getSamplerUniformLocation() {
    return this.samplerUniformLocation;
  }

  static fromNothing(canvas) {
    const context = canvas.getContext(),
          program = context.createProgram(),
          vertexShader = Shader.createVertexShader(vertexShaderSource, context),
          fragmentShader = Shader.createFragmentShader(fragmentShaderSource, context);

    context.attachShader(program, vertexShader);
    context.attachShader(program, fragmentShader);
    context.linkProgram(program);

    const textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureShader = Shader.fromProgram(TextureShader, program, canvas, textureCoordinateAttributeLocation, samplerUniformLocation);

    return textureShader;
  }

  createTextureCoordinateBuffer(vertexCoordinateData, canvas) {
    const textureCoordinateBuffer = canvas.createBuffer(vertexCoordinateData);

    return textureCoordinateBuffer;
  }

  bindTextureCoordinateBuffer(textureCoordinateBuffer, canvas) {
    const textureCoordinateComponents = 2;

    canvas.bindBuffer(textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
  }

  createTexture(image, canvas) {
    canvas.createTexture(image);
  }

  activateTexture(canvas) {
    const context = canvas.getContext(),
          { TEXTURE0 } = context,
          target = TEXTURE0,
          uSamplerUniformLocationIntegerValue = 0;

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(this.samplerUniformLocation, uSamplerUniformLocationIntegerValue);
  }
}

module.exports = TextureShader;
