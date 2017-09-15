'use strict';

const Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      colourCube = require('./intermediate/colourCube'),
      textureCube = require('./intermediate/textureCube');

const intermediate = () => {
  const canvas = new Canvas(),
        context = canvas.getContext();

  if (!context) {
    return;
  }

  const callback = (count, shader) => {
    canvas.useShader(shader);

    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    const render = createRender(canvas, count, shader);

    requestAnimationFrame(render);
  };

  // const imageURL = 'texture/bricks.jpg';
  //
  // textureCube(imageURL, canvas, callback);

  colourCube(canvas, callback);
};

const createRender = (canvas, count, shader) => {
  let initialTime = null;

  const clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        zCoordinate = -5, ///
        position = Position.fromZCoordinate(zCoordinate),
        perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight);

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

  return render;
};

module.exports = intermediate;
