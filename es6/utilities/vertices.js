"use strict";

function rotateVertices(vertices, rotationQuaternion) {
  const rotatedVertices = vertices.map((vertex) => {
    const rotatedVertex = vertex.clone();  ///

    rotatedVertex.rotate(rotationQuaternion);

    return rotatedVertex;
  });

  return rotatedVertices;
}

function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {  ///
  const indexes = indexTuple, ///
        vertices = indexes.map((index) => {
          const coordinateTuple = coordinateTuples[index],
                vertex = Vertex.fromCoordinateTuple(coordinateTuple);

          return vertex;
        });

  return vertices;
}

module.exports = {
  rotateVertices,
  verticesFromCoordinateTuplesAndIndexTuple
};
