'use strict';

const Canvas = require('../canvas'),
      App = require('./intermediate/app'),
      cubes = require('./intermediate/cubes'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture');

const { create } = cubes;

function intermediate() {
  const canvas = new Canvas(),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  create(colourShader, textureShader, canvas, function(cubes) {
    const app = new App(cubes, colourShader, textureShader, canvas);

    window.onresize = function() {
      app.resize();

      app.render(colourShader, textureShader);
    };

    app.resize();

    app.render(colourShader, textureShader);

    app.addMouseEventHandlers();
  });
}

module.exports = intermediate;
