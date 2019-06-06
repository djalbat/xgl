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
      { cloneTextureCoordinateTuples, calculateMappedTextureCoordinateTuples, calculateAdjustedTextureCoordinateTuples } = textureUtilities;

class TexturedFacet extends Facet {
  constructor(vertices, normal, edges, imageName, textureCoordinateTuples) {
    super(vertices, normal, edges);

    this.imageName = imageName;

    this.textureCoordinateTuples = textureCoordinateTuples;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();

    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const imageName = this.imageName, ///
          textureCoordinateTuples = cloneTextureCoordinateTuples(this.textureCoordinateTuples),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);

    return texturedFacet;
  }

  getImageName() {
    return this.imageName;
  }

  getTextureCoordinateTuples() {
    return this.textureCoordinateTuples;
  }

  getVertexTextureCoordinateTuples(imageMapJSON) {
    let vertexTextureCoordinateTuples ;

    if (imageMapJSON === null) {
      vertexTextureCoordinateTuples = this.textureCoordinateTuples; ///
    } else {
      const json = imageMapJSON[this.imageName],
            extent = json,  ///
            mappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);

      vertexTextureCoordinateTuples = mappedTextureCoordinateTuples; ///
    }

    return vertexTextureCoordinateTuples;
  }

  permute(places) {
    super.permute(places);

    this.textureCoordinateTuples = permute(this.textureCoordinateTuples, places);
  }

  fromVertices(vertices) {
    let texturedFacet = null;

    const area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const normal = calculateNormal(vertices, Normal),
            parentVertices = this.vertices, ///
            adjustedTextureCoordinateTuple = calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, this.textureCoordinateTuples),
            edges = calculateEdges(vertices, Edge),
            imageName = this.imageName,
            textureCoordinateTuples = adjustedTextureCoordinateTuple;  ///

      texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
    }

    return texturedFacet;
  }

  static fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(textureCoordinateTuples, coordinateTuples, indexTuple, imageName) {
    let texturedFacet = null;

    const vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);

      texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
    }

    return texturedFacet;
  }
}

module.exports = TexturedFacet;
