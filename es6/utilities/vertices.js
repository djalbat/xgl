'use strict';

function rotateVertices(vertices, rotationQuaternion) {
  vertices = vertices.map((vertex) => {
    vertex = rotateVertex(vertex, rotationQuaternion);

    return vertex;
  });

  return vertices;
}

function verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes, Vertex) {  ///
  const vertices = indexes.map((index) => {
    const coordinates = vertexCoordinates[index], ///
          vertex = Vertex.fromCoordinates(coordinates);

    return vertex;
  });

  return vertices;
}

module.exports = {
  rotateVertices,
  verticesFromVertexCoordinatesAndIndexes
};

function rotateVertex(vertex, rotationQuaternion) {
  vertex = vertex.clone();  ///

  vertex.rotate(rotationQuaternion);

  return vertex;
}
