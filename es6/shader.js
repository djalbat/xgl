'use strict';

const necessary = require('necessary');

const UniformLocations = require('./shader/locations/uniform'),
      AttributeLocations = require('./shader/locations/attribute');

const { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

const vertexPositionComponents = 3,
      vertexNormalComponents = 3;

class Shader {
  constructor(program, canvas) {
    this.program = program;
    this.uniformLocations = UniformLocations.fromProgram(program, canvas);
    this.attributeLocations = AttributeLocations.fromProgram(program, canvas);

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

  getOffsetMatrixUniformLocation() { return this.uniformLocations.getOffsetMatrixUniformLocation(); }

  getRotationMatrixUniformLocation() { return this.uniformLocations.getRotationMatrixUniformLocation(); }

  getPositionMatrixUniformLocation() { return this.uniformLocations.getPositionMatrixUniformLocation(); }

  getProjectionMatrixUniformLocation() { return this.uniformLocations.getProjectionMatrixUniformLocation(); }

  getNormalMatrixUniformLocation() { return this.uniformLocations.getNormalMatrixUniformLocation(); }

  getVertexPositionAttributeLocation() { return this.attributeLocations.getVertexPositionAttributeLocation(); }

  getVertexNormalAttributeLocation() { return this.attributeLocations.getVertexNormalAttributeLocation(); }

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

  bindVertexPositionBuffer(canvas) {
    const vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation();
    
    canvas.bindBuffer(this.vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
  }

  bindVertexNormalBuffer(canvas) {
    const vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation();

    canvas.bindBuffer(this.vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
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
  createFragmentShader: createFragmentShader
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
