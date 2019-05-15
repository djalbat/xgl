'use strict';

const jiggle = require('../../../index');

const { TexturedCanvasElement } = jiggle;

const coordinates = [

        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],

      ],
      indexes = [

        [ 0, 1, 2 ],
        [ 2, 3, 0 ],

      ],
      defaultImageName = "grass.jpg",
      defaultTextureCoordinates = [

        [ [ 0, 0 ], [ 1, 0 ], [ 1, 1 ] ],
        [ [ 1, 1 ], [ 0, 1 ], [ 0, 0 ] ],

      ];

class TexturedSquare extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedSquare = TexturedCanvasElement.fromProperties(TexturedSquare, properties, coordinates, indexes, imageName, textureCoordinates);

    return texturedSquare;
  }
}

module.exports = TexturedSquare;
