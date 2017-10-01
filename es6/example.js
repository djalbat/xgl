'use strict';

const Scene = require('./scene'),
      Canvas = require('./canvas'),
      ColourShader = require('./shader/colour'),
      TextureShader = require('./shader/texture'),
      imageMapUtilities = require('./utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

function example(callback) {
  const canvas = new Canvas(),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  preloadImageMap(canvas, textureShader, function() {
    const elements = callback();
    
    elements.forEach(function(element) {
      element.create(colourShader, textureShader);
    });
    
    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    colourShader.createBuffers(canvas);
    textureShader.createBuffers(canvas);

    Scene.fromCanvasAndShaders(canvas, colourShader, textureShader);
  });
}

module.exports = example;
