'use strict';

const Canvas = require('../canvas'),
      ModelView = require('../modelView'),
      Perspective = require('../projection');

const containerHouse = () => {
  const canvas = new Canvas(),
        shaderProgram = canvas.createShaderProgram(),
        positions = [
          +1.0, +1.0,
          -1.0, +1.0,
          +1.0, -1.0,
          -1.0, -1.0
        ],
        positionsBuffer = canvas.createBuffer(positions),
        clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        modelView = new ModelView(),
        perspective = new Perspective(clientWidth, clientHeight),
        vertexPositionLocation = canvas.getProgramAttributeLocation(shaderProgram, 'aVertexPosition'),
        projectionMatrixLocation = canvas.getProgramUniformLocation(shaderProgram, 'uProjectionMatrix'),
        modelViewMatrixLocation = canvas.getProgramUniformLocation(shaderProgram, 'uModelViewMatrix');

  canvas.clearDepth();
  canvas.clearColour();
  canvas.clearDepthBuffer();
  canvas.clearColourBuffer();

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  canvas.useProgram(shaderProgram);
  canvas.usePerspective(projectionMatrixLocation, perspective); ///
  canvas.useModelView(modelViewMatrixLocation, modelView);
  
  canvas.useBuffer(vertexPositionLocation, positionsBuffer); ///

  const offset = 0,
        vertexCount = 4;

  canvas.render(offset, vertexCount);
};

module.exports = containerHouse;
