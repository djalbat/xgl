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

  const positionData = [
          +1.0, +1.0,
          -1.0, +1.0,
          +1.0, -1.0,
          -1.0, -1.0
        ],
        vertexShaderSource = `
          attribute vec4 aVertexPosition;
      
          uniform mat4 uModelViewMatrix;
          uniform mat4 uProjectionMatrix;
      
          void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
          }
        `,
        fragmentShaderSource = `
          void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
          }
        `,
        vertexPositionComponents = 2,
        vertexCount = 4,  ///
        vertexPositionBuffer = canvas.createBuffer(positionData),
        clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        shaderProgram = canvas.createShaderProgram(vertexShaderSource, fragmentShaderSource),
        vertexPositionAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexPosition'),
        projection = new Projection(clientWidth, clientHeight),
        modelView = new ModelView();

  canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

  canvas.render(shaderProgram, projection, modelView);

  canvas.draw(vertexCount);
};

module.exports = intermediate;
