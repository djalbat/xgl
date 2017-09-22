'use strict';

const necessary = require('necessary');

const Canvas = require('../canvas'),
      Normal = require('../normal'),
      Rotation = require('../rotation'),
      Position = require('../position'),
      Perspective = require('../perspective'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture'),
      ColourCube = require('./intermediate/cube/colour'),
      TextureCube = require('./intermediate/cube/texture');

const { arrayUtilities, asynchronousUtilities } = necessary,
      { first } = arrayUtilities,
      { repeatedly } = asynchronousUtilities;

function intermediate() {
  const canvas = new Canvas(),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  createColourCube(colourShader, canvas, function(colourCube) {
    createTextureCube(textureShader, canvas, function(textureCube) {
      const render = createRender(canvas, colourCube, colourShader, textureCube, textureShader);

      requestAnimationFrame(render);
    });
  });
}

module.exports = intermediate;

function createColourCube(colourShader, canvas, callback) {
  const offsetPosition = [-2, 0, 0],
        colourCube = ColourCube.fromOffsetPosition(offsetPosition, colourShader, canvas);

  callback(colourCube);
}

function createTextureCube(textureShader, canvas, callback) {
  loadImages(function(images) {
    const firstImage = first(images),
          offsetPosition = [+2, 0, 0],
          image = firstImage,
          textureCube = TextureCube.fromOffsetPositionAndImage(offsetPosition, image, textureShader, canvas);

    callback(textureCube);
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

function createRender(canvas, colourCube, colourShader, textureCube, textureShader) {
  let initialTime = null;

  const clientWidth = canvas.getClientWidth(),
        clientHeight = canvas.getClientHeight(),
        zCoordinate = -10, ///
        position = Position.fromZCoordinate(zCoordinate),
        perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight),
        colourCubeCount = colourCube.getCount(),
        textureCubeCount = textureCube.getCount();

  const render = (time) => {
    if (initialTime === null) {
      initialTime = time;
    }

    const elapsedTime = time - initialTime,
          xAngle = elapsedTime / 573,
          yAngle = elapsedTime / 892,
          rotation = Rotation.fromXAngleAndYAngle(xAngle, yAngle),
          normal = Normal.fromRotation(rotation);

    canvas.clear();



    colourCube.bind(colourShader, canvas);

    canvas.useShader(colourShader);

    colourShader.activateTexture(canvas);

    canvas.render(colourShader, normal, rotation, position, perspective);

    canvas.drawElements(colourCubeCount);




    textureCube.bind(textureShader, canvas);

    canvas.useShader(textureShader);

    textureShader.activateTexture(canvas);

    canvas.render(textureShader, normal, rotation, position, perspective);

    canvas.drawElements(textureCubeCount);




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
