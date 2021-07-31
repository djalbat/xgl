"use strict";

import Edge from "../edge";
import Facet from "../facet";
import Normal from "../normal";
import Vertex from "../vertex";

import { permute } from "../../utilities/array";
import { isApproximatelyEqualToZero } from "../../utilities/approximate";
import { verticesFromCoordinateTuplesIndexTupleAndMagnification } from "../../utilities/vertices";
import { cloneEdges, cloneNormal, cloneVertices, calculateArea, calculateEdges, calculateNormal } from "../../utilities/facet";
import { cloneTextureCoordinateTuples, calculateMappedTextureCoordinateTuples, calculateAdjustedTextureCoordinateTuples } from "../../utilities/texture";

export default class TexturedFacet extends Facet {
  constructor(vertices, normal, edges, imageName, textureCoordinateTuples) {
    super(vertices, normal, edges);

    this.imageName = imageName;

    this.textureCoordinateTuples = textureCoordinateTuples;
  }

  getImageName() {
    return this.imageName;
  }

  getTextureCoordinateTuples() {
    return this.textureCoordinateTuples;
  }

  getMappedTextureCoordinateTuples(imageMapJSON) {
    const json = imageMapJSON[this.imageName],
          extent = json,  ///
          mappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);

    return mappedTextureCoordinateTuples;
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

  static fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMagnification(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, magnification) {
    let texturedFacet = null;

    const vertices = verticesFromCoordinateTuplesIndexTupleAndMagnification(coordinateTuples, indexTuple, magnification, Vertex),
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
