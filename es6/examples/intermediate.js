'use strict';

const Canvas = require('../canvas'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective');

const intermediate = () => {
  const canvas = new Canvas(),
        context = canvas.getContext();

  if (!context) {
    return;
  }

  const vertexShaderSource = `
  
          attribute vec4 aVertexPosition;
          attribute vec4 aVertexColour;
          attribute vec2 aTextureCoordinate;
          
          uniform mat4 uRotationMatrix;
          uniform mat4 uPositionMatrix;
          uniform mat4 uPerspectiveMatrix;
          
          varying lowp vec4 vColour;
          varying highp vec2 vTextureCoordinate;
      
          void main() {
            gl_Position = uPerspectiveMatrix * uPositionMatrix * uRotationMatrix * aVertexPosition;
            vColour = aVertexColour;
            vTextureCoordinate = aTextureCoordinate;
          }
          
        `,
        fragmentShaderSource = `
        
          varying lowp vec4 vColour;
          varying highp vec2 vTextureCoordinate;
          
          uniform sampler2D uSampler;

          void main() {
            // gl_FragColor = vColour;
            gl_FragColor = texture2D(uSampler, vTextureCoordinate);
          }
          
        `,
        shaderProgram = canvas.createShaderProgram(vertexShaderSource, fragmentShaderSource),
        clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        position = new Position(),
        perspective = new Perspective(clientWidth, clientHeight);

  createAndBindVertexPositionBuffer(canvas, shaderProgram);

  // createAndBindVertexColourBuffer(canvas, shaderProgram);

  createAndBindTextureCoordinateBuffer(canvas, shaderProgram);

  const count = createVertexIndexElementBuffer(canvas);

  canvas.useProgram(shaderProgram);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  let initialTime = null;

  const image = new Image();

  image.onload = function() {
    const target = canvas.TEXTURE0_TARGET,
          uSamplerUniformLocationIntegerValue = 0,
          uSamplerUniformLocation = canvas.getUniformLocation(shaderProgram, 'uSampler');

    canvas.createTexture(image);

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(uSamplerUniformLocation, uSamplerUniformLocationIntegerValue);

    requestAnimationFrame(render);
  };

  image.src = 'texture/bricks.jpg';

  function render(time) {
    if (initialTime === null) {
      initialTime = time;
    }

    const elapsedTime = time - initialTime,
          xAngle = elapsedTime / 1000,
          yAngle = elapsedTime / 1000,
          rotation = new Rotation(xAngle, yAngle);

    canvas.render(rotation, position, perspective, shaderProgram);

    canvas.drawElements(count);

    requestAnimationFrame(render);
  }
};

module.exports = intermediate;

function createAndBindVertexPositionBuffer(canvas, shaderProgram) {
  const vertexPositionData = [
          -1.0, -1.0, +1.0,
          +1.0, -1.0, +1.0,
          +1.0, +1.0, +1.0,
          -1.0, +1.0, +1.0,

          -1.0, -1.0, -1.0,
          -1.0, +1.0, -1.0,
          +1.0, +1.0, -1.0,
          +1.0, -1.0, -1.0,

          -1.0, +1.0, -1.0,
          -1.0, +1.0, +1.0,
          +1.0, +1.0, +1.0,
          +1.0, +1.0, -1.0,

          -1.0, -1.0, -1.0,
          +1.0, -1.0, -1.0,
          +1.0, -1.0, +1.0,
          -1.0, -1.0, +1.0,

          +1.0, -1.0, -1.0,
          +1.0, +1.0, -1.0,
          +1.0, +1.0, +1.0,
          +1.0, -1.0, +1.0,

          -1.0, -1.0, -1.0,
          -1.0, -1.0, +1.0,
          -1.0, +1.0, +1.0,
          -1.0, +1.0, -1.0
        ],
        vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
        vertexPositionAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexPosition'),
        vertexPositionComponents = 3;

  canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

  const vertexPositionDataLength = vertexPositionData.length,
        count = vertexPositionDataLength / vertexPositionComponents;

  return count;
}

function createAndBindVertexColourBuffer(canvas, shaderProgram) {
  const vertexColourData = [
          1.0,  0.0,  0.0,  1.0,
          1.0,  0.0,  0.0,  1.0,
          1.0,  0.0,  0.0,  1.0,
          1.0,  0.0,  0.0,  1.0,

          0.0,  1.0,  1.0,  1.0,
          0.0,  1.0,  1.0,  1.0,
          0.0,  1.0,  1.0,  1.0,
          0.0,  1.0,  1.0,  1.0,

          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,

          1.0,  0.0,  1.0,  1.0,
          1.0,  0.0,  1.0,  1.0,
          1.0,  0.0,  1.0,  1.0,
          1.0,  0.0,  1.0,  1.0,

          0.0,  0.0,  1.0,  1.0,
          0.0,  0.0,  1.0,  1.0,
          0.0,  0.0,  1.0,  1.0,
          0.0,  0.0,  1.0,  1.0,

          1.0,  1.0,  0.0,  1.0,
          1.0,  1.0,  0.0,  1.0,
          1.0,  1.0,  0.0,  1.0,
          1.0,  1.0,  0.0,  1.0
        ],
        vertexColourBuffer = canvas.createBuffer(vertexColourData),
        vertexColourAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexColour'),
        vertexColourComponents = 4;

  canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
}

function createAndBindTextureCoordinateBuffer(canvas, shaderProgram) {
  const textureCoordinateData = [
          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0,

          0.0,  0.0,
          1.0,  0.0,
          1.0,  1.0,
          0.0,  1.0
        ],
        textureCoordinateBuffer = canvas.createBuffer(textureCoordinateData),
        textureCoordinateAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aTextureCoordinate'),
        textureCoordinateComponents = 2;

  canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
}

function createVertexIndexElementBuffer(canvas) {
  const vertexIndexData = [
           0,  1,  2,
           0,  2,  3,

           4,  5,  6,
           4,  6,  7,

           8,  9, 10,
           8, 10, 11,

          12, 13, 14,
          12, 14, 15,

          16, 17, 18,
          16, 18, 19,

          20, 21, 22,
          20, 22, 23
        ],
        vertexIndexElementBuffer = canvas.createElementBuffer(vertexIndexData),
        vertexIndexDataLength = vertexIndexData.length,
        count = vertexIndexDataLength;  ///

  canvas.bindElementBuffer(vertexIndexElementBuffer);

  return count;
}
