'use strict';

const React = require('../../react'),
      ColourCube = require('./cube/colour'),
      TextureCube = require('./cube/texture'),
      imageUtilities = require('../../utilities/image');

const { preloadImage } = imageUtilities;

function create(colourShader, textureShader, canvas, done) {
  const source = 'imageMap';

  preloadImage(source, function(image) {
    const colourCube = <ColourCube offsetPosition={[0, 0, 0]} />,
          textureCube = <TextureCube offsetPosition={[+2, +2, +2]} />;

    colourCube.createElement(colourShader, textureShader);
    textureCube.createElement(colourShader, textureShader);
    textureShader.createTexture(image, canvas);

    done();
  });
}

module.exports = {
  create: create
};
