'use strict';

const necessary = require('necessary');

const React = require('../../react'),
      ColourCube = require('./cube/colour'),
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

  const offsetPosition = [0, 0, 0],
        colourCube = <ColourCube offsetPosition={offsetPosition} />;

  colourCube.createElement(colourShader, textureShader);

  next();
}

function createTextureCubeCallback(next, done, context) {
  const { colourShader, textureShader } = context;

  const offsetPosition = [+2, +2, +2],
        textureCube = <TextureCube offsetPosition={offsetPosition} />;

  textureCube.createElement(colourShader, textureShader);

  next();
}
