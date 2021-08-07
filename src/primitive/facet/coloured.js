"use strict";

import Edge from "../edge";
import Facet from "../facet";
import Normal from "../normal";
import Vertex from "../vertex";

import { isApproximatelyEqualToZero } from "../../utilities/approximate";
import { verticesFromCoordinateTuplesIndexTupleAndMagnification } from "../../utilities/vertices";
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

  fromVertices(vertices) {
    let colouredFacet = null;

    const area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const rgba = this.rgba,
            normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);

      colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
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

    const rgba = this.rgba,
          colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);

    return colouredFacet;
  }

  static fromCoordinateTuplesIndexTupleColourAndMagnification(coordinateTuples, indexTuple, colour, magnification) {
    let colouredFacet = null;

    const vertices = verticesFromCoordinateTuplesIndexTupleAndMagnification(coordinateTuples, indexTuple, magnification, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero;  ///

    if (largeEnough) {
      const normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge),
            rgba = [ ...colour, 1 ];  ///

      colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
    }

    return colouredFacet;
  }
}