'use strict';

const Edge = require('../edge'),
      Facet = require('../facet'),
      Normal = require('../normal'),
      Vertex = require('../vertex'),
      arrayUtilities = require('../utilities/array'),
      facetUtilities = require('../utilities/facet'),
      textureUtilities = require('../utilities/texture'),
      verticesUtilities = require('../utilities/vertices');

const { permute } = arrayUtilities,
      { verticesFromVertexCoordinatesAndIndexes } = verticesUtilities,
      { cloneEdges, cloneNormal, cloneVertices, calculateEdges, calculateNormal } = facetUtilities,
      { cloneTextureCoordinates, calculateVertexTextureCoordinates, calculateAdjustedTextureCoordinates } = textureUtilities;

class TexturedFacet extends Facet {
  constructor(vertices, normal, edges, imageName, textureCoordinates) {
    super(vertices, normal, edges);

    this.imageName = imageName;

    this.textureCoordinates = textureCoordinates;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();

    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const imageName = this.imageName,
          textureCoordinates = cloneTextureCoordinates(this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }

  getImageName() {
    return this.imageName;
  }

  getTextureCoordinates() {
    return this.textureCoordinates;
  }

  getVertexTextureCoordinates(imageJSON) {
    const extent = imageJSON[this.imageName],
          { left, bottom, width, height } = extent,
          vertexTextureCoordinates = calculateVertexTextureCoordinates(this.textureCoordinates, left, bottom, width, height);

    return vertexTextureCoordinates;
  }

  permute(places) {
    super.permute(places);

    this.textureCoordinates = permute(this.textureCoordinates, places);
  }

  fromVertices(vertices) {
    const normal = calculateNormal(vertices, Normal),
          parentVertices = this.vertices, ///
          adjustedTextureCoordinates = calculateAdjustedTextureCoordinates(vertices, normal, parentVertices, this.textureCoordinates),
          edges = calculateEdges(vertices, Edge),
          imageName = this.imageName,
          textureCoordinates = adjustedTextureCoordinates,  ///
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }

  static fromVertexCoordinatesImageNameAndTextureCoordinates(vertexCoordinates, indexes, imageName, textureCoordinates) {
    const vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }
}

module.exports = TexturedFacet;
