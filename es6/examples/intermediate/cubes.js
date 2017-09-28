'use strict';

const necessary = require('necessary');

const ColourCube = require('./cube/colour'),
      TextureCube = require('./cube/texture'),
      imagesUtilities = require('../../utilities/images');

const { arrayUtilities, asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { preload } = imagesUtilities,
      { first } = arrayUtilities;

function create(colourShader, textureShader, canvas, done) {
  const callbacks = [
          createFirstColourCubeCallback,
          createSecondColourCubeCallback,
          createTextureCubeCallback
        ],
        context = {
          colourShader: colourShader,
          textureShader: textureShader,
          canvas: canvas
        };

  sequence(callbacks, done, context);
}

module.exports = {
  create: create
};

function createFirstColourCubeCallback(next, done, context) {
  const { colourShader } = context,
        offsetPosition = [0, +2, +2];

  const vertexPositionData = ColourCube.getVertexPositionData(offsetPosition),
        vertexNormalData = ColourCube.getVertexNormalData(),
        vertexIndexData = ColourCube.getVertexIndexData(),
        vertexColourData = ColourCube.getVertexColourData();

  colourShader.addVertexPositionData(vertexPositionData);
  colourShader.addVertexNormalData(vertexNormalData);
  colourShader.addVertexIndexData(vertexIndexData);
  colourShader.addVertexColourData(vertexColourData);

  next();
}

function createSecondColourCubeCallback(next, done, context) {
  const { colourShader } = context,
        offsetPosition = [0, -2, -2];

  const vertexPositionData = ColourCube.getVertexPositionData(offsetPosition),
        vertexNormalData = ColourCube.getVertexNormalData(),
        vertexIndexData = ColourCube.getVertexIndexData(),
        vertexColourData = ColourCube.getVertexColourData();

  colourShader.addVertexPositionData(vertexPositionData);
  colourShader.addVertexNormalData(vertexNormalData);
  colourShader.addVertexIndexData(vertexIndexData);
  colourShader.addVertexColourData(vertexColourData);

  next();
}

function createTextureCubeCallback(next, done, context) {
  const { textureShader, canvas } = context,
        sources = [
          'texture/bricks.jpg'
        ];

  preload(sources, function(images) {
    const firstImage = first(images),
          offsetPosition = [+2, 0, 0],
          image = firstImage;

    const vertexPositionData = TextureCube.getVertexPositionData(offsetPosition),
          vertexNormalData = TextureCube.getVertexNormalData(),
          vertexIndexData = TextureCube.getVertexIndexData(),
          textureCoordinateData = TextureCube.getTextureCoordinateData();

    textureShader.addVertexPositionData(vertexPositionData);
    textureShader.addVertexNormalData(vertexNormalData);
    textureShader.addVertexIndexData(vertexIndexData);
    textureShader.addTextureCoordinateData(textureCoordinateData);

    textureShader.createTexture(image, canvas);

    next();
  });
}
