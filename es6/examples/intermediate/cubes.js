'use strict';

const necessary = require('necessary');

const ColourCube = require('./cube/colour'),
      TextureCube = require('./cube/texture'),
      imageUtilities = require('../../utilities/image');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { preloadImage } = imageUtilities;

function create(colourShader, textureShader, canvas, done) {
  const source = [
    'imageMap'
  ];

  preloadImage(source, function(image) {
    const callbacks = [
            createColourCubeCallback,
            createTextureCubeCallback
          ],
          context = {
            colourShader: colourShader,
            textureShader: textureShader
          };

    textureShader.createTexture(image, canvas);

    sequence(callbacks, done, context);
  });
}

module.exports = {
  create: create
};

function createColourCubeCallback(next, done, context) {
  const { colourShader, textureShader } = context;

  ColourCube.createElement(colourShader, textureShader);

  next();
}

function createTextureCubeCallback(next, done, context) {
  const { colourShader, textureShader } = context;

  TextureCube.createElement(colourShader, textureShader);

  next();
}
