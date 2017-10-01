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
        
      `,
      vertexPositionComponents = 3,
      vertexNormalComponents = 3;

class Shader {
  constructor(program, canvas) {
    this.program = program;
    this.normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName);
    this.rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName);
    this.positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName);
    this.perspectiveMatrixUniformLocation = canvas.getUniformLocation(program, perspectiveMatrixName);
    this.vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName);
    this.vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName);

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];
    this.maximumVertexIndex = -1; ///
  }

  getCount() {
    const vertexIndexDataLength = this.vertexIndexData.length,
          count = vertexIndexDataLength;  ///

    return count;
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

  addVertexPositionData(vertexPositionData) {
    add(this.vertexPositionData, vertexPositionData);
  }

  addVertexNormalData(vertexNormalData) {
    add(this.vertexNormalData, vertexNormalData);
  }

  addVertexIndexData(vertexIndexData) {
    const offset = this.maximumVertexIndex + 1;

    vertexIndexData = vertexIndexData.map(function(vertexIndex) {
      return vertexIndex + offset;
    });

    add(this.vertexIndexData, vertexIndexData);

    this.maximumVertexIndex = Math.max(this.maximumVertexIndex, ...vertexIndexData);
  }

  createBuffers(canvas) {
    this.createVertexPositionBuffer(canvas);
    this.createVertexNormalBuffer(canvas);
    this.createVertexIndexElementBuffer(canvas);
  }

  bindBuffers(canvas) {
    this.bindVertexNormalBuffer(canvas);
    this.bindVertexPositionBuffer(canvas);
    this.bindVertexIndexElementBuffer(canvas);
  }

  createVertexPositionBuffer(canvas) {
    this.vertexPositionBuffer = canvas.createBuffer(this.vertexPositionData);
  }

  createVertexNormalBuffer(canvas) {
    this.vertexNormalBuffer = canvas.createBuffer(this.vertexNormalData);
  }

  createVertexIndexElementBuffer(canvas) {
    this.vertexIndexElementBuffer = canvas.createElementBuffer(this.vertexIndexData);
  }

  bindVertexNormalBuffer(canvas) {
    canvas.bindBuffer(this.vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
  }

  bindVertexPositionBuffer(canvas) {
    canvas.bindBuffer(this.vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);
  }

  bindVertexIndexElementBuffer(canvas) {
    canvas.bindElementBuffer(this.vertexIndexElementBuffer);
  }
}

function createVertexShader(vertexShaderSource, canvas) {
  const context = canvas.getContext(),
      { VERTEX_SHADER } = context,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, canvas);

  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, canvas) {
  const context = canvas.getContext(),
      { FRAGMENT_SHADER } = context,
      type = FRAGMENT_SHADER,
      vertexShader = createShader(type, fragmentShaderSource, canvas);

  return vertexShader;
}

Object.assign(Shader, {
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader,
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createShader(type, shaderSource, canvas) {
  const context = canvas.getContext(),
        { COMPILE_STATUS } = context,
        pname = COMPILE_STATUS,
        shader = context.createShader(type);

  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  const compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}
