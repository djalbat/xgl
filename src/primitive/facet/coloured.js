"use strict";

import Edge from "../edge";
import Facet from "../facet";
import Normal from "../normal";
import Vertex from "../vertex";

import { isApproximatelyEqualToZero } from "../../utilities/approximate";
import { verticesFromCoordinateTuplesAndIndexTuple } from "../../utilities/vertices";
import { cloneEdges, cloneNormal, cloneVertices, calculateArea, calculateEdges, calculateNormal } from "../../utilities/facet";

export default class ColouredFacet extends Facet {
  constructor(vertices, normal, edges, rgba) {
    super(vertices, normal, edges);
    
    this.rgba = rgba;
  }

  getVertexColours() {
    const vertexColour = this.rgba, ///
          vertexColours = [
            vertexColour,
            vertexColour,
            vertexColour,
          ];
    
    return vertexColours;
  }

  fromVerticesAndMarginOfError(vertices, marginOfError) {
    let colouredFacet = null;

    const area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area, marginOfError);

    if (!areaApproximatelyEqualToZero) {
      const normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);

      colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);
    }

    return colouredFacet;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();

    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);

    return colouredFacet;
  }

  static fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
    let colouredFacet = null;

    const vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area, marginOfError);

    if (!areaApproximatelyEqualToZero) {
      const normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge),
            rgba = [ ...colour, 1 ];  ///

      colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
    }

    return colouredFacet;
  }
}
