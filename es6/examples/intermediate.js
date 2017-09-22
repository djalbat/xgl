'use strict';

const necessary = require('necessary');

const Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture'),
      colourCube = require('./intermediate/cube/colour'),
      textureCube = require('./intermediate/cube/texture');

const { arrayUtilities, asynchronousUtilities } = necessary,
      { first } = arrayUtilities,
      { repeatedly } = asynchronousUtilities;

function intermediate() {
  const canvas = new Canvas(),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  createTextureCube(textureShader, canvas, function(count) {
    const shader = textureShader;  ///

    canvas.useShader(shader);

    shader.activateTexture(canvas);

    const render = createRender(canvas, count, shader);

    requestAnimationFrame(render);
  });
}

module.exports = intermediate;

function createColourCube(colourShader, canvas, callback) {
  const offsetPosition = [-1, 0, 0],
        count = colourCube(offsetPosition, colourShader, canvas);

  callback(count);
}

function createTextureCube(textureShader, canvas, callback) {
  loadImages(function(images) {
    const firstImage = first(images),
          offsetPosition = [+1, 0, 0],
          image = firstImage,
          count = textureCube(offsetPosition, image, textureShader, canvas);

    callback(count);
  });
}

function loadImages(callback) {
  const imageSources = [
          'texture/bricks.jpg'
        ],
        images = [],
        context = {
          imageSources: imageSources,
          images: images
        },
        length = imageSources.length; ///

  repeatedly(loadImageCallback, length, function() {
    const { images } = context;

    callback(images)
  }, context);
}

function createRender(canvas, count, shader) {
  let initialTime = null;

  const clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        zCoordinate = -10, ///
        position = Position.fromZCoordinate(zCoordinate),
        perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight);

  const render = (time) => {
    if (initialTime === null) {
      initialTime = time;
    }

    const elapsedTime = time - initialTime,
          // xAngle = elapsedTime / 1000,
          // yAngle = elapsedTime / 1000,
          // rotation = Rotation.fromXAngleAndYAngle(xAngle, yAngle),
          rotation = Rotation.fromNothing(),
          normal = Normal.fromRotation(rotation);

    canvas.render(shader, normal, rotation, position, perspective);

    canvas.drawElements(count);

    requestAnimationFrame(render);
  };

  return render;
}

function loadImageCallback(next, done, context, index) {
  const { imageSources, images } = context,
        imageSource = imageSources[index],
        image = new Image();

  images[index] = image;

  image.onload = next;  ///

  image.src = imageSource;  ///
}
