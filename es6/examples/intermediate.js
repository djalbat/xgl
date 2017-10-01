'use strict';

const Scene = require('../scene'),
      Canvas = require('../canvas'),
      cubes = require('./intermediate/cubes'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture');

const { create } = cubes;

function intermediate() {
  const canvas = new Canvas(),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  create(colourShader, textureShader, canvas, function() {
    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    colourShader.createBuffers(canvas);
    textureShader.createBuffers(canvas);

    Scene.fromCanvasAndShaders(canvas, colourShader, textureShader);
  });
}

module.exports = intermediate;
