"use strict";

import { VERTICES_LENGTH } from "../constants";
import { first, second, third } from "../utilities/array";
import { subtract3, cross3, length3 } from "../maths/vector";

export function cloneEdges(edges) {
  edges = edges.map((edge) => {
    edge = edge.clone();  ///

    return edge;
  });

  return edges;
}

export function cloneNormal(normal) {
  normal = normal.clone();
  
  return normal;
}

export function cloneVertices(vertices) {
  vertices = vertices.map((vertex) => {
    vertex = vertex.clone();  ///

    return vertex;
  });

  return vertices;
}

export function calculateEdges(vertices, Edge) {
  const edges = vertices.map((vertex, index) => {
    const startIndex = index, ///
          endIndex = (startIndex + 1) % VERTICES_LENGTH,
          startVertex = vertices[startIndex],
          endVertex = vertices[endIndex],
          edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);

    return edge;
  });

  return edges;
}

export function calculateNormal(vertices, Normal) {
  const normal = Normal.fromVertices(vertices);

  return normal;
}

export function calculateArea(vertices) {
  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        firstVertexPosition = firstVertex.getPosition(),
        secondVertexPosition = secondVertex.getPosition(),
        thirdVertexPosition = thirdVertex.getPosition(),
        firstExtent = subtract3(secondVertexPosition, firstVertexPosition),
        secondExtent = subtract3(thirdVertexPosition, firstVertexPosition),
        area = length3(cross3(firstExtent, secondExtent)) / 2;

  return area;
}
