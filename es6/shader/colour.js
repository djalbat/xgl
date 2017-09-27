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
  constructor(program, canvas) {
    super(program, canvas);

    this.vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName);
  }

  getVertexColourAttributeLocation() {
    return this.vertexColourAttributeLocation;
  }

  static fromNothing(canvas) {
    const context = canvas.getContext(),
          program = canvas.createProgram(),
          vertexShader = Shader.createVertexShader(vertexShaderSource, canvas),
          fragmentShader = Shader.createFragmentShader(fragmentShaderSource, canvas);

    context.attachShader(program, vertexShader);
    context.attachShader(program, fragmentShader);
    context.linkProgram(program);

    const colourShader = Shader.fromProgram(ColourShader, program, canvas);

    return colourShader;
  }

  createVertexColourBuffer(vertexColourData, canvas) {
    this.vertexColourBuffer = canvas.createBuffer(vertexColourData);
  }

  bind(canvas) {
    this.bindVertexColourBuffer(canvas);

    super.bind(canvas);
  }

  bindVertexColourBuffer(canvas) {
    const vertexColourComponents = 4;

    canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
  }

  activateTexture(canvas) {}  ///
}

module.exports = ColourShader;
