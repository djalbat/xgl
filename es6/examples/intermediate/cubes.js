'use strict';

const necessary = require('necessary');

const ColourCube = require('./cube/colour'),
      TextureCube = require('./cube/texture'),
      imageUtilities = require('../../utilities/image');

const { arrayUtilities, asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { first } = arrayUtilities,
      { preloadImages } = imageUtilities;

function create(colourShader, textureShader, canvas, done) {
  const sources = [
    'image/bricks.jpg'
  ];

  preloadImages(sources, function(images) {
    const callbacks = [
            createColourCubeCallback,
            createTextureCubeCallback
          ],
          context = {
            colourShader: colourShader,
            textureShader: textureShader,
            images: images,
            canvas: canvas
          };

    sequence(callbacks, done, context);
  });
}

module.exports = {
  create: create
};

function createColourCubeCallback(next, done, context) {
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

function createTextureCubeCallback(next, done, context) {
  const { textureShader, images, canvas } = context,
        firstImage = first(images),
        image = firstImage, ///
        offsetPosition = [0, 0, 0];

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
}
