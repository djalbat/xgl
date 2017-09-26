'use strict';

const necessary = require('necessary');

const App = require('./intermediate/app'),
      Canvas = require('../canvas'),
      MouseEvents = require('../mouseEvents'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture'),
      imagesUtilities = require('../utilities/images'),
      ColourCube = require('./intermediate/cube/colour'),
      TextureCube = require('./intermediate/cube/texture');

const { arrayUtilities } = necessary,
      { preload } = imagesUtilities,
      { first } = arrayUtilities;

function intermediate() {
  const canvas = new Canvas(),
        mouseEvents = MouseEvents.fromNothing(canvas),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  createColourCube(colourShader, canvas, function(colourCube) {
    createTextureCube(textureShader, canvas, function(textureCube) {
      const app = new App(canvas, colourCube, colourShader, textureCube, textureShader),
            mouseUpEventHandler = app.mouseUpEventHandler.bind(app),
            mouseDownEventHandler = app.mouseDownEventHandler.bind(app),
            mouseMoveEventHandler = app.mouseMoveEventHandler.bind(app),
            mouseWheelEventHandler = app.mouseWheelEventHandler.bind(app);

      mouseEvents.addMouseUpEventHandler(mouseUpEventHandler);
      mouseEvents.addMouseDownEventHandler(mouseDownEventHandler);
      mouseEvents.addMouseMoveEventHandler(mouseMoveEventHandler);
      mouseEvents.addMouseWheelEventHandler(mouseWheelEventHandler);

      window.onresize = function() {
        app.resize();
        app.render();
      };

      app.resize();
      app.render();
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
  const sources = [
          'texture/bricks.jpg'
        ];

  preload(sources, function(images) {
    const firstImage = first(images),
          offsetPosition = [+2, 0, 0],
          image = firstImage, ///
          textureCube = TextureCube.fromOffsetPositionAndImage(offsetPosition, image, textureShader, canvas);

    callback(textureCube);
  });
}
