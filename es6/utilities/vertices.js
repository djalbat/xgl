'use strict';

function rotateVertices(vertices, rotationQuaternion) {
  vertices = vertices.map((vertex) => {
    vertex = rotateVertex(vertex, rotationQuaternion);

    return vertex;
  });

  return vertices;
}

function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {  ///
  const indexes = indexTuple, ///
        vertices = indexes.map((index) => {
          const coordinateTuple = coordinateTuples[index],
                coordinates = coordinateTuple, ///
                vertex = Vertex.fromCoordinates(coordinates);

          return vertex;
        });

  return vertices;
}

module.exports = {
  rotateVertices,
  verticesFromCoordinateTuplesAndIndexTuple
};

function rotateVertex(vertex, rotationQuaternion) {
  vertex = vertex.clone();  ///

  vertex.rotate(rotationQuaternion);

  return vertex;
}
