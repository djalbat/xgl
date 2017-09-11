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

  const data = [
          +1.0, +1.0,
          -1.0, +1.0,
          +1.0, -1.0,
          -1.0, -1.0
        ],
        buffer = canvas.createBuffer(data),
        clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        shaderProgram = canvas.createShaderProgram(),
        projection = new Projection(clientWidth, clientHeight),
        modelView = new ModelView();

  canvas.render(buffer, shaderProgram, projection, modelView);

  canvas.draw();
};

module.exports = intermediate;
