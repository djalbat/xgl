'use strict';

const mat4 = require('gl-mat4');

const domUtilities = require('./utilities/dom');

const { domElementFromSelector } = domUtilities;

const defaultRed = 0.0,
      defaultBlue = 0.0,
      defaultGreen = 0.0,
      defaultAlpha = 1.0,
      defaultDepth = 1.0,
      defaultVertexShaderSource = `
        attribute vec4 aVertexPosition;
    
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
    
        void main() {
          gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        }
      `,
      defaultFragmentShaderSource = `
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
      `;
  
class Canvas {
  constructor(selector = 'canvas') {
    const domElement = domElementFromSelector(selector),
          context = domElement.getContext('webgl');

    if (!context) {
      throw new Error(`Unable to initialise WebGL.`);
    }

    this.context = context;

    this.domElement = domElement;
  }

  getContext() {
    return this.context;
  }
  
  render(buffer, shaderProgram, projection, modelView) {
    const projectionMatrix = projection.getMatrix(),
          modelViewMatrix = modelView.getMatrix(),
          vertexPositionAttributeLocation = this.getAttributeLocation(shaderProgram, 'aVertexPosition'),
          projectionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uModelViewMatrix');

    this.enableDepthTesting();
    this.enableDepthFunction();

    this.clearColour();
    this.clearDepth();
    this.clearColourBuffer();
    this.clearDepthBuffer();

    this.bindBuffer(vertexPositionAttributeLocation, buffer);
    
    this.useProgram(shaderProgram);

    this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
    this.applyMatrix(modelViewMatrixUniformLocation, modelViewMatrix);
  }

  applyMatrix(uniformLocation, matrix) {
    this.context.uniformMatrix4fv(uniformLocation, false, matrix);
  }
  
  draw() {
    const offset = 0,
          vertexCount = 4;
    
    this.context.drawArrays(this.context.TRIANGLE_STRIP, offset, vertexCount);
  }

  bindBuffer(vertexPositionAttributeLocation, buffer) {
    const numComponents = 2,
          type = this.context.FLOAT,
          normalize = false,
          stride = 0,
          offset = 0;

    this.context.bindBuffer(this.context.ARRAY_BUFFER, buffer);
    this.context.vertexAttribPointer(vertexPositionAttributeLocation, numComponents, type, normalize, stride, offset);
    this.context.enableVertexAttribArray(vertexPositionAttributeLocation);
  }

  getUniformLocation(program, name) { return this.context.getUniformLocation(program, name); }

  getAttributeLocation(program, name) { return this.context.getAttribLocation(program, name); }

  clearColour(red = defaultRed, green = defaultGreen, blue = defaultBlue, alpha = defaultAlpha) { this.context.clearColor(red, green, blue, alpha); }

  clearDepth(depth = defaultDepth) { this.context.clearDepth(depth); }

  enableDepthTesting() { this.context.enable(this.context.DEPTH_TEST); }

  enableDepthFunction() { this.context.depthFunc(this.context.LEQUAL); }

  useProgram(program) { this.context.useProgram(program); }

  clearDepthBuffer() { this.context.clear(this.context.DEPTH_BUFFER_BIT); }

  clearColourBuffer() { this.context.clear(this.context.COLOR_BUFFER_BIT); }

  getClientWidth() { return this.domElement.clientWidth; }

  getClientHeight() { return this.domElement.clientHeight; }

  createShader(type, shaderSource) {
    const shader = this.context.createShader(type);

    this.context.shaderSource(shader, shaderSource);

    this.context.compileShader(shader);

    const compileStatus = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);

    if (!compileStatus) {
      throw new Error(`Unable to create the shader.`);
    }

    return shader;
  }

  createVertexShader(vertexShaderSource = defaultVertexShaderSource) {
    const VERTEX_SHADER_TYPE = this.context.VERTEX_SHADER,  ///
          vertexShader = this.createShader(VERTEX_SHADER_TYPE, vertexShaderSource);

    return vertexShader;
  }

  createFragmentShader(fragmentShaderSource = defaultFragmentShaderSource) {
    const FRAGMENT_SHADER_TYPE = this.context.FRAGMENT_SHADER,  ///
          vertexShader = this.createShader(FRAGMENT_SHADER_TYPE, fragmentShaderSource);

    return vertexShader;
  }

  createShaderProgram(vertexShaderSource, fragmentShaderSource) {
    const shaderProgram = this.context.createProgram(),
          vertexShader = this.createVertexShader(vertexShaderSource),
          fragmentShader = this.createFragmentShader(fragmentShaderSource);

    this.context.attachShader(shaderProgram, vertexShader);
    this.context.attachShader(shaderProgram, fragmentShader);

    this.context.linkProgram(shaderProgram);

    const linkStatus = this.context.getProgramParameter(shaderProgram, this.context.LINK_STATUS);

    if (!linkStatus) {
      const message = this.context.getProgramInfoLog(shaderProgram);  ///

      throw new Error(`Unable to create the shader program, '${message}'`);
    }

    return shaderProgram;
  }

  createBuffer(data) {
    const ARRAY_BUFFER_TYPE = this.context.ARRAY_BUFFER, ///
          STATIC_DRAW = this.context.STATIC_DRAW,
          buffer = this.context.createBuffer(),
          float32DataArray = new Float32Array(data);

    this.context.bindBuffer(ARRAY_BUFFER_TYPE, buffer);

    this.context.bufferData(ARRAY_BUFFER_TYPE, float32DataArray, STATIC_DRAW);

    return buffer;
  }
}

module.exports = Canvas;

