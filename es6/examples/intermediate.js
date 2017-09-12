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
          
          uniform mat4 uRotationMatrix;
          uniform mat4 uPositionMatrix;
          uniform mat4 uPerspectiveMatrix;
          
          varying lowp vec4 vColour;
      
          void main() {
            gl_Position = uPerspectiveMatrix* uPositionMatrix * uRotationMatrix * aVertexPosition;
            vColour = aVertexColour;
          }
        `,
        fragmentShaderSource = `
          varying lowp vec4 vColour;

          void main() {
            gl_FragColor = vColour;
          }
        `,
        shaderProgram = canvas.createShaderProgram(vertexShaderSource, fragmentShaderSource),
        clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        position = new Position(),
        perspective = new Perspective(clientWidth, clientHeight);

  createAndBindVertexPositionBuffer(canvas, shaderProgram);

  createAndBindVertexColourBuffer(canvas, shaderProgram);

  const count = createVertexIndexElementBuffer(canvas);

  canvas.useProgram(shaderProgram);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  let initialTime = null;

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

  requestAnimationFrame(render);
};

module.exports = intermediate;

function createAndBindVertexPositionBuffer(canvas, shaderProgram) {
  const vertexPositionData = [
          +1.0, +1.0, +1.0,
          -1.0, +1.0, +1.0,
          +1.0, -1.0, +1.0,
          -1.0, -1.0, +1.0,
          +1.0, +1.0, -1.0,
          -1.0, +1.0, -1.0,
          +1.0, -1.0, -1.0,
          -1.0, -1.0, -1.0
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
          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0
        ],
        vertexColourBuffer = canvas.createBuffer(vertexColourData),
        vertexColourAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexColour'),
        vertexColourComponents = 4;

  canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
}

function createVertexIndexElementBuffer(canvas) {
  const vertexIndexData = [
          0, 1, 2,
          1, 2, 3,
          4, 5, 6,
          5, 6, 7
        ],
        vertexIndexElementBuffer = canvas.createElementBuffer(vertexIndexData),
        vertexIndexDataLength = vertexIndexData.length,
        count = vertexIndexDataLength;  ///

  canvas.bindElementBuffer(vertexIndexElementBuffer);

  return count;
}