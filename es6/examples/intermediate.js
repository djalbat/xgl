'use strict';

const Canvas = require('../canvas'),
      ModelView = require('../modelView'),
      Projection = require('../projection');

const intermediate = () => {
  const canvas = new Canvas(),
        context = canvas.getContext();

  if (!context) {
    return;
  }

  const vertexShaderSource = `
          attribute vec4 aVertexPosition;
          attribute vec4 aVertexColour;
          
          uniform mat4 uModelViewMatrix;
          uniform mat4 uProjectionMatrix;
          
          varying lowp vec4 vColour;
      
          void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
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
        projection = new Projection(clientWidth, clientHeight),
        modelView = new ModelView();

  const vertexCount = createAndBindVertexPositionBuffer(canvas, shaderProgram);

  createAndBindVertexColourBuffer(canvas, shaderProgram);

  canvas.useProgram(shaderProgram);

  let initialTime = null;

  function render(time) {
    if (initialTime === null) {
      initialTime = time;
    }

    const elapsedTime = time - initialTime;

    canvas.render(shaderProgram, projection, modelView, elapsedTime);

    canvas.draw(vertexCount);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
};

module.exports = intermediate;

function createAndBindVertexPositionBuffer(canvas, shaderProgram) {
  const vertexPositionData = [
          +1.0, +1.0,
          -1.0, +1.0,
          +1.0, -1.0,
          -1.0, -1.0
        ],
        vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
        vertexPositionAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexPosition'),
        vertexPositionComponents = 2;

  canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

  const vertexPositionDataLength = vertexPositionData.length,
        vertexCount = vertexPositionDataLength / vertexPositionComponents;

  return vertexCount;
}

function createAndBindVertexColourBuffer(canvas, shaderProgram) {
  const vertexColourData = [
          1.0,  1.0,  1.0,  1.0,
          1.0,  0.0,  0.0,  1.0,
          0.0,  1.0,  0.0,  1.0,
          0.0,  0.0,  1.0,  1.0
        ],
        vertexColourBuffer = canvas.createBuffer(vertexColourData),
        vertexColourAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexColour'),
        vertexColourComponents = 4;

  canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
}
