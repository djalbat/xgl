'use strict';

const Facet = require('../facet'),
      vectorUtilities = require('../utilities/vector'),
      verticesUtilities = require('../utilities/vertices'),
      imageMapUtilities = require('../utilities/imageMap');

const { add2, multiply2 } = vectorUtilities,
      { calculateNormal } = verticesUtilities,
      { getImageDetails } = imageMapUtilities;

class TexturedFacet extends Facet {
  constructor(vertices, normal, imageName, textureCoordinates) {
    super(vertices, normal);

    this.imageName = imageName;
    this.textureCoordinates = textureCoordinates;
  }

  getImageName() {
    return this.imageName;
  }

  getTextureCoordinates() {
    return this.textureCoordinates;
  }

  getVertexTextureCoordinates() {
    const imageDetails = getImageDetails(this.imageName),
          { left, bottom, width, height } = imageDetails,
          vertexTextureCoordinates = translateTextureCoordinates(this.textureCoordinates, left, bottom, width, height);

    return vertexTextureCoordinates;
  }

  static fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
    vertices = indexes.map(function(index) { return vertices[index]; });  ///

    textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3);  ///

    const normal = calculateNormal(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

    return texturedFacet;
  }
}

module.exports = TexturedFacet;

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height ) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = add2(multiply2(textureCoordinates, [ width, height ] ), [ left, bottom ]);

    return textureCoordinates;
  });

  return textureCoordinates;
}
