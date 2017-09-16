'use strict';

const necessary = require('necessary');

const Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      colourCube = require('./intermediate/colourCube'),
      textureCube = require('./intermediate/textureCube');

const { asynchronousUtilities } = necessary,
      { repeatedly } = asynchronousUtilities;

function intermediate() {
  const canvas = new Canvas(),
        imageSources = [
          'texture/bricks.jpg'
        ],
        imageSourcesLength = imageSources.length,
        callback = loadImageCallback,
        length = imageSourcesLength,  ///
        context = {
          imageSources: imageSources,
          images: []
        };

  repeatedly(callback, length, function() {
    const { images } = context,
          image = images[0];

    textureCube(image, canvas, function(count, shader) {
      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      const render = createRender(canvas, count, shader);

      requestAnimationFrame(render);
    });
  }, context);

  // colourCube(canvas, callback);
}

function createRender(canvas, count, shader) {
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
}

module.exports = intermediate;

function loadImageCallback(next, done, context, index) {
  const { imageSources, images } = context,
        imageSource = imageSources[index],
        image = new Image();

  images[index] = image;

  image.onload = next;

  image.src = imageSource;  ///
}
