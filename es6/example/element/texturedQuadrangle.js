'use strict';

const xgl = require('../../../index');  ///

const { TexturedCanvasElement } = xgl;

const coordinates = [

        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 0, 1, 0 ],
        [ 1, 1, 0 ],

      ],
      indexes = [

        [ 0, 1, 3 ],
        [ 3, 2, 0 ],

      ],
      defaultImageName = "plaster.jpg",
      defaultTextureCoordinates = [

        [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ] ],
        [ [ 1, 1 ], [ 0, 1 ], [ 0, 0 ] ],

      ];

class TexturedQuadrangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);

    return texturedQuadrangle;
  }
}

module.exports = TexturedQuadrangle;
