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
            createFirstColourCubeCallback,
            createSecondColourCubeCallback,
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

function createFirstColourCubeCallback(next, done, context) {
  const { colourShader } = context,
        offsetPosition = [+2, +2, +2];

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
        offsetPosition = [-2, -2, -2];

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
        offsetPosition = [0, 0, 0];

  const vertexPositionData = TextureCube.getVertexPositionData(offsetPosition),
        vertexNormalData = TextureCube.getVertexNormalData(),
        vertexIndexData = TextureCube.getVertexIndexData(),
        textureCoordinateData = TextureCube.getTextureCoordinateData();

  textureShader.addVertexPositionData(vertexPositionData);
  textureShader.addVertexNormalData(vertexNormalData);
  textureShader.addVertexIndexData(vertexIndexData);
  textureShader.addTextureCoordinateData(textureCoordinateData);

  next();
}
