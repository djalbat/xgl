'use strict';

const Edge = require('../edge'),
      Facet = require('../facet'),
      Normal = require('../normal'),
      Vertex = require('../vertex'),
      arrayUtilities = require('../../utilities/array'),
      facetUtilities = require('../../utilities/facet'),
      textureUtilities = require('../../utilities/texture'),
      verticesUtilities = require('../../utilities/vertices'),
      approximateUtilities = require('../../utilities/approximate');

const { permute } = arrayUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { verticesFromCoordinateTuplesAndIndexTuple } = verticesUtilities,
      { cloneEdges, cloneNormal, cloneVertices, calculateArea, calculateEdges, calculateNormal } = facetUtilities,
      { cloneTextureCoordinatesTuple, calculateVertexTextureCoordinatesTuple, calculateAdjustedTextureCoordinatesTuple } = textureUtilities;

class TexturedFacet extends Facet {
  constructor(vertices, normal, edges, imageName, textureCoordinatesTuple) {
    super(vertices, normal, edges);

    this.imageName = imageName;

    this.textureCoordinatesTuple = textureCoordinatesTuple;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();

    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const imageName = this.imageName,
          textureCoordinatesTuple = cloneTextureCoordinatesTuple(this.textureCoordinatesTuple),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinatesTuple);

    return texturedFacet;
  }

  getImageName() {
    return this.imageName;
  }

  getTextureCoordinates() {
    return this.textureCoordinatesTuple;
  }

  getVertexTextureCoordinatesTuple(imageMapJSON) {
    const json = imageMapJSON[this.imageName],
          extent = json,  ///
          { left, bottom, width, height } = extent,
          vertexTextureCoordinatesTuple = calculateVertexTextureCoordinatesTuple(this.textureCoordinatesTuple, left, bottom, width, height);

    return vertexTextureCoordinatesTuple;
  }

  permute(places) {
    super.permute(places);

    this.textureCoordinatesTuple = permute(this.textureCoordinatesTuple, places);
  }

  fromVertices(vertices) {
    let texturedFacet = null;

    const area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const normal = calculateNormal(vertices, Normal),
            parentVertices = this.vertices, ///
            adjustedTextureCoordinatesTuple = calculateAdjustedTextureCoordinatesTuple(vertices, normal, parentVertices, this.textureCoordinatesTuple),
            edges = calculateEdges(vertices, Edge),
            imageName = this.imageName,
            textureCoordinatesTuple = adjustedTextureCoordinatesTuple;  ///

      texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinatesTuple);
    }

    return texturedFacet;
  }

  static fromTextureCoordinateTupleCoordinatesTuplesIndexTupleAndImageName(textureCoordinatesTuple, coordinateTuples, indexTuple, imageName) {
    let texturedFacet = null;

    const vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);

      texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinatesTuple);
    }

    return texturedFacet;
  }
}

module.exports = TexturedFacet;
