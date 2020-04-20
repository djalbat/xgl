"use strict";

import { TexturedCanvasElement } from "../../../index"; ///

const coordinates = [

        [   0, 0, 0 ],
        [   1, 0, 0 ],
        [ 0.5, 1, 0 ],

      ],
      indexes = [

        [ 0, 1, 2 ],

      ],
      defaultImageName = "stripes.jpg",
      defaultTextureCoordinates = [

        [ [ 0, 0 ], [ 1, 0 ], [ 0.5, 1 ] ],

      ];

class TexturedTriangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);

    return texturedTriangle;
  }
}

module.exports = TexturedTriangle;
