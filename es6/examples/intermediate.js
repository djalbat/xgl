'use strict';

const Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      colourCube = require('./intermediate/colourCube'),
      textureCube = require('./intermediate/textureCube');

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
      ];

const canvas = new Canvas(),
      clientWidth = canvas.getClientWidth(),
      clientHeight = canvas.getClientHeight(),
      zCoordinate = -5, ///
      position = Position.fromZCoordinate(zCoordinate),
      perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight),
      count = canvas.createAndBindElementBuffer(vertexIndexData);

canvas.enableDepthTesting();
canvas.enableDepthFunction();

const intermediate = () => {
  const context = canvas.getContext();

  if (!context) {
    return;
  }

  const imageURL = 'texture/bricks.jpg';

  textureCube(imageURL, canvas, function(textureShader) {
    shader = textureShader; ///

    requestAnimationFrame(render);
  });

  // const colourShader = colourCube(canvas);
  //
  // shader = colourShader;  ///
  //
  // requestAnimationFrame(render);
};

let initialTime = null;

let shader;

const render = (time) => {
  if (initialTime === null) {
    initialTime = time;
  }

  const elapsedTime = time - initialTime,
        xAngle = elapsedTime / 1000,
        yAngle = elapsedTime / 1000,
        rotation = Rotation.fromXAngleAndYAngle(xAngle, yAngle),
        normal = Normal.fromRotation(rotation);

  canvas.render(normal, rotation, position, perspective, shader);

  canvas.drawElements(count);

  requestAnimationFrame(render);
};

module.exports = intermediate;
