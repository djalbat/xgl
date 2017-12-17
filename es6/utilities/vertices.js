'use strict';

function rotateVertices(vertices, rotationQuaternion) {
  vertices = vertices.map(function(vertex) {
    vertex = rotateVertex(vertex, rotationQuaternion);

    return vertex;
  });

  return vertices;
}

function transformVertices(vertices, transforms) {
  vertices = vertices.map(function(vertex) {
    vertex = transformVertex(vertex, transforms);

    return vertex;
  });

  return vertices;
}

function rotateVerticesAboutZAxis(vertices, rotationAboutZAxisMatrix) {
  vertices = vertices.map(function(vertex) {
    vertex = rotateVertexAboutZAxis(vertex, rotationAboutZAxisMatrix);

    return vertex;
  });

  return vertices;
}

function verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes, Vertex) {  ///
  const vertices = indexes.map(function(index) {
    const coordinates = vertexCoordinates[index], ///
          vertex = Vertex.fromCoordinates(coordinates);

    return vertex;
  });

  return vertices;
}

module.exports = module.exports = {
  rotateVertices: rotateVertices,
  transformVertices: transformVertices,
  rotateVerticesAboutZAxis: rotateVerticesAboutZAxis,
  verticesFromVertexCoordinatesAndIndexes: verticesFromVertexCoordinatesAndIndexes
};

function rotateVertex(vertex, rotationQuaternion) {
  vertex = vertex.clone();  ///

  vertex.rotate(rotationQuaternion);

  return vertex;
}

function transformVertex(vertex, transforms) {
  vertex = vertex.clone();  ///

  transforms.forEach(function(transform) {
    vertex.applyTransform(transform);
  });

  return vertex;
}

function rotateVertexAboutZAxis(vertex, rotationAboutZAxisMatrix) {
  vertex = vertex.clone();  ///

  vertex.rotateAboutZAxis(rotationAboutZAxisMatrix);

  return vertex;
}
