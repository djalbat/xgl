'use strict';

const React = require('../react'),
      Scene = require('../scene'),
      Canvas = require('../canvas'),
      ColourShader = require('../shader/colour'),
      TextureShader = require('../shader/texture'),
      ColourCube = require('./intermediate/cube/colour'),
      TextureCube = require('./intermediate/cube/texture'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

function intermediate() {
  const canvas = new Canvas(),
        colourShader = ColourShader.fromNothing(canvas),
        textureShader = TextureShader.fromNothing(canvas);

  preloadImageMap(canvas, textureShader, function() {
    const colourCube = <ColourCube offsetPosition={[0, 0, 0]} />,
          textureCube = <TextureCube offsetPosition={[+2, +2, +2]} />;

    colourCube.createElement(colourShader, textureShader);
    textureCube.createElement(colourShader, textureShader);
    
    canvas.enableDepthTesting();
    canvas.enableDepthFunction();

    colourShader.createBuffers(canvas);
    textureShader.createBuffers(canvas);

    Scene.fromCanvasAndShaders(canvas, colourShader, textureShader);
  });
}

module.exports = intermediate;
