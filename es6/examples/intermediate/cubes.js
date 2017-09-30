'use strict';

const necessary = require('necessary');

const ColourCube = require('./cube/colour'),
      TextureCube = require('./cube/texture'),
      imagesUtilities = require('../../utilities/images');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { preloadImages, createImageMap } = imagesUtilities;

function create(colourShader, textureShader, canvas, done) {
  const sources = [
    'texture/concrete.jpg',
    'texture/bricks.jpg',
    'texture/grass.jpg'
  ];

  preloadImages(sources, function(images) {
    const imageMap = createImageMap(images),
          callbacks = [
            createColourCubeCallback,
            createTextureCubeCallback
          ],
          context = {
            colourShader: colourShader,
            textureShader: textureShader,
            imageMap: imageMap,
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
  const { textureShader, imageMap, canvas } = context,
        offsetPosition = [0, 0, 0];

  const vertexPositionData = TextureCube.getVertexPositionData(offsetPosition),
        vertexNormalData = TextureCube.getVertexNormalData(),
        vertexIndexData = TextureCube.getVertexIndexData(),
        textureCoordinateData = TextureCube.getTextureCoordinateData();

  textureShader.addVertexPositionData(vertexPositionData);
  textureShader.addVertexNormalData(vertexNormalData);
  textureShader.addVertexIndexData(vertexIndexData);
  textureShader.addTextureCoordinateData(textureCoordinateData);

  textureShader.createTexture(imageMap, canvas);

  next();
}
