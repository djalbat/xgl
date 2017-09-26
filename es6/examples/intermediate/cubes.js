'use strict';

const necessary = require('necessary');

const ColourCube = require('./cube/colour'),
      TextureCube = require('./cube/texture'),
      imagesUtilities = require('../../utilities/images');

const { arrayUtilities, asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { preload } = imagesUtilities,
      { first } = arrayUtilities;

function create(colourShader, textureShader, canvas, callback) {
  const cubes = [],
        callbacks = [
          createColourCubeCallback,
          createTextureCubeCallback
        ],
        context = {
          colourShader: colourShader,
          textureShader: textureShader,
          canvas: canvas,
          cubes: cubes
        };

  sequence(callbacks, function() {
    callback(cubes);
  }, context);
}

module.exports = {
  create: create
};

function createColourCubeCallback(next, done, context) {
  const { cubes, colourShader, canvas } = context,
        offsetPosition = [-2, 0, 0],
        colourCube = ColourCube.fromOffsetPosition(offsetPosition, colourShader, canvas);

  cubes.push(colourCube);

  next();
}

function createTextureCubeCallback(next, done, context) {
  const { cubes, textureShader, canvas } = context,
        sources = [
          'texture/bricks.jpg'
        ];

  preload(sources, function(images) {
    const firstImage = first(images),
          offsetPosition = [+2, 0, 0],
          image = firstImage, ///
          textureCube = TextureCube.fromOffsetPositionAndImage(offsetPosition, image, textureShader, canvas);

    cubes.push(textureCube);

    next();
  });
}
