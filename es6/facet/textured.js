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

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal();

    vertices = vertices.map(function(vertex) {
      vertex = vertex.slice();  ///

      return vertex;
    });

    normal = normal.slice();  ///

    const imageName = this.imageName,
          textureCoordinates = this.textureCoordinates.map(function(textureCoordinates) {
            textureCoordinates = textureCoordinates.slice();  ///

            return textureCoordinates;
          }),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

    return texturedFacet;
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

  splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) { super.splitWithTwoNonNullIntersections(intersections, smallerFacets, this); }

  splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) { super.splitWithOneNonNullIntersection(intersections, smallerFacets, this); }

  fromVertices(vertices) {
    const imageName = this.imageName,
          textureCoordinates = this.textureCoordinates.map(function(textureCoordinates) {
            textureCoordinates = textureCoordinates.slice();  ///

            return textureCoordinates;
          }),
          texturedFacet = TexturedFacet.fromVerticesImageNameAndTextureCoordinates(vertices, imageName, textureCoordinates);

    return texturedFacet;
  }

  static fromVerticesImageNameAndTextureCoordinates(vertices, imageName, textureCoordinates) {
    const normal = calculateNormal(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

    return texturedFacet;
  }

  static fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
    vertices = indexes.map(function(index) { return vertices[index]; });  ///

    textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3);  ///

    const texturedFacet = TexturedFacet.fromVerticesImageNameAndTextureCoordinates(vertices, imageName, textureCoordinates);

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
