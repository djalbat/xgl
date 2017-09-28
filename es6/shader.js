'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

const normalMatrixName = 'uNormalMatrix',
      rotationMatrixName = 'uRotationMatrix',
      positionMatrixName = 'uPositionMatrix',
      perspectiveMatrixName = 'uPerspectiveMatrix',
      vertexPositionAttributeName = 'aVertexPosition',
      vertexNormalAttributeName = 'aVertexNormal',
      calculateLightingSource = `

        uniform mat4 ${normalMatrixName};

        attribute vec3 ${vertexNormalAttributeName};

        vec3 ambientLight = vec3(0.3, 0.3, 0.3),
             directionalLightColour = vec3(1, 1, 1),
             directionalVector = normalize(vec3(0.85, 0.8, 0.75));
          
        vec3 calculateLighting() {
          vec4 transformedNormal = ${normalMatrixName} * vec4(${vertexNormalAttributeName}, 1.0);            

          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
          
          vec3 lighting = ambientLight + (directionalLightColour * directional);
          
          return lighting;
        }

      `,
      calculatePositionSource = `

        uniform mat4 ${rotationMatrixName},
                     ${positionMatrixName},
                     ${perspectiveMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${perspectiveMatrixName} * ${positionMatrixName} * ${rotationMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `;

class Shader {
  constructor(program, canvas) {
    this.program = program;
    this.normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName);
    this.rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName);
    this.positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName);
    this.perspectiveMatrixUniformLocation = canvas.getUniformLocation(program, perspectiveMatrixName);
    this.vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName);
    this.vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName);

    this.vertexIndexData = [];
  }

  getCount() {
    return this.count;
  }

  getProgram() {
    return this.program;
  }

  getNormalMatrixUniformLocation() {
    return this.normalMatrixUniformLocation;
  }

  getRotationMatrixUniformLocation() {
    return this.rotationMatrixUniformLocation;
  }

  getPositionMatrixUniformLocation() {
    return this.positionMatrixUniformLocation;
  }

  getPerspectiveMatrixUniformLocation() {
    return this.perspectiveMatrixUniformLocation;
  }

  getVertexIndexData() {
    return this.vertexIndexData;
  }

  addVertexIndexData(vertexIndexData) {
    add(this.vertexIndexData, vertexIndexData);
  }

  createVertexPositionBuffer(vertexPositionData, canvas) {
    this.vertexPositionBuffer = canvas.createBuffer(vertexPositionData);
  }

  createVertexNormalBuffer(vertexNormalData, canvas) {
    this.vertexNormalBuffer = canvas.createBuffer(vertexNormalData);
  }

  bind(canvas) {
    this.bindVertexNormalBuffer(canvas);
    this.bindVertexPositionBuffer(canvas);
  }

  bindVertexNormalBuffer(canvas) {
    const vertexNormalComponents = 3;

    canvas.bindBuffer(this.vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
  }

  bindVertexPositionBuffer(canvas) {
    const vertexPositionComponents = 3;

    canvas.bindBuffer(this.vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);
  }

  setCount(count) {
    this.count = count;
  }

  static createVertexShader(vertexShaderSource, canvas) {
    const context = canvas.getContext(),
          { VERTEX_SHADER } = context,
          type = VERTEX_SHADER,
          vertexShader = createShader(type, vertexShaderSource, context);

    return vertexShader;
  }

  static createFragmentShader(fragmentShaderSource, canvas) {
    const context = canvas.getContext(),
          { FRAGMENT_SHADER } = context,
          type = FRAGMENT_SHADER,
          vertexShader = createShader(type, fragmentShaderSource, context);

    return vertexShader;
  }

  static fromProgram(Class, program, canvas) {
    const shader = new Class(program, canvas);

    return shader;
  }
}

Object.assign(Shader, {
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createShader(type, shaderSource, context) {
  const { COMPILE_STATUS } = context,
        pname = COMPILE_STATUS,
        shader = context.createShader(type);

  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  const compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    const shaderInfoLog = context.getShaderInfoLog(shader);

    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}
