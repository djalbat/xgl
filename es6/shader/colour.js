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
  constructor(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
    super(program, normalMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, perspectiveMatrixUniformLocation, vertexPositionAttributeLocation, vertexNormalAttributeLocation);

    this.vertexColourAttributeLocation = vertexColourAttributeLocation;
  }

  getVertexColourAttributeLocation() {
    return this.vertexColourAttributeLocation;
  }

  static fromNothing(canvas) {
    const context = canvas.getContext(),
          program = context.createProgram(),
          vertexShader = Shader.createVertexShader(vertexShaderSource, context),
          fragmentShader = Shader.createFragmentShader(fragmentShaderSource, context);

    context.attachShader(program, vertexShader);
    context.attachShader(program, fragmentShader);
    context.linkProgram(program);

    const vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourShader = Shader.fromProgram(ColourShader, program, canvas, vertexColourAttributeLocation);

    return colourShader;
  }

  createVertexColourBuffer(vertexColourData, canvas) {
    const vertexColourBuffer = canvas.createBuffer(vertexColourData);

    return vertexColourBuffer;
  }

  bindVertexColourBuffer(vertexColourBuffer, canvas) {
    const vertexColourComponents = 4;

    canvas.bindBuffer(vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
  }

  activateTexture(canvas) {}  ///
}

module.exports = ColourShader;
