'use strict';

const Edge = require('../edge'),
      Facet = require('../facet'),
      Vertex = require('../vertex'),
      matrixMaths = require('../maths/matrix'),
      vectorMaths = require('../maths/vector'),
      facetUtilities = require('../utilities/facet'),
      arrayUtilities = require('../utilities/array'),
      imageMapUtilities = require('../utilities/imageMap'),
      rotationUtilities = require('../utilities/rotation'),
      quaternionUtilities = require('../utilities/quaternion');

const { rotateVertices } = rotationUtilities,
      { invert2, invert3 } = matrixMaths,
      { getImageDetails } = imageMapUtilities,
      { first, second, third, permute } = arrayUtilities,
      { calculateRotationQuaternion } = quaternionUtilities,
      { add2, multiply2, transform2, transform3 } = vectorMaths,
      { cloneEdges, cloneNormal, cloneVertices, calculateEdges, calculateNormal } = facetUtilities;

class TexturedFacet extends Facet {
  constructor(vertices, normal, edges, imageName, textureCoordinates) {
    super(vertices, normal, edges);

    this.imageName = imageName;
    this.textureCoordinates = textureCoordinates;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal(),
        edges = this.getEdges();

    vertices = cloneVertices(vertices);
    normal = cloneNormal(normal);
    edges = cloneEdges(edges);

    const imageName = this.imageName,
          textureCoordinates = cloneTextureCoordinates(this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }

  getImageName() {
    return this.imageName;
  }

  getTextureCoordinates() {
    return this.textureCoordinates;
  }

  getVertexTextureCoordinates() {
    const imageDetails = getImageDetails(this.imageName),
          { left, bottom, width, height } = imageDetails,
          vertexTextureCoordinates = translateTextureCoordinates(this.textureCoordinates, left, bottom, width, height);

    return vertexTextureCoordinates;
  }

  permute(places) {
    super.permute(places);

    this.textureCoordinates = permute(this.textureCoordinates, places);
  }

  fromVertices(vertices) {
    const normal = calculateNormal(vertices),
          edges = calculateEdges(vertices, Edge),
          imageName = this.imageName,
          parentVertices = this.vertices, ///
          textureCoordinates = textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }

  static fromVertexCoordinatesImageNameAndTextureCoordinates(vertexCoordinates, indexes, imageName, textureCoordinates, index) {
    textureCoordinates = textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinates, index);  ///

    const vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes),
          normal = calculateNormal(vertices),
          edges = calculateEdges(vertices, Edge),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }
}

module.exports = TexturedFacet;

function verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes) {  ///
  const vertices = indexes.map(function(index) {
    const coordinates = vertexCoordinates[index], ///
          vertex = Vertex.fromCoordinates(coordinates);

    return vertex;
  });

  return vertices;
}

function textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinates, index) {  ///
  textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3);  ///

  return textureCoordinates;
}

function cloneTextureCoordinates(textureCoordinates) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = textureCoordinates.slice();

    return textureCoordinates;
  });

  return textureCoordinates;
}

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height ) {
  textureCoordinates = textureCoordinates.map(function(textureCoordinates) {  ///
    textureCoordinates = add2(multiply2(textureCoordinates, [ width, height ] ), [ left, bottom ]);

    return textureCoordinates;
  });

  return textureCoordinates;
}

function textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, textureCoordinates) {
  const normal = calculateNormal(vertices),
        rotationQuaternion = calculateRotationQuaternion(normal);

  vertices = rotateVertices(vertices, rotationQuaternion);

  parentVertices = rotateVertices(parentVertices, rotationQuaternion);

  const textureCoordinatesMatrix = calculateTextureCoordinatesMatrix(textureCoordinates),
        textureCoordinatesBasis = calculateTextureCoordinatesBasis(parentVertices, textureCoordinatesMatrix);

  textureCoordinates = calculateTextureCoordinates(vertices, textureCoordinatesBasis);

  return textureCoordinates;
}

function calculateTextureCoordinatesMatrix(textureCoordinates) {
  const firstTextureCoordinate = first(textureCoordinates),
        secondTextureCoordinate = second(textureCoordinates),
        thirdTextureCoordinate = third(textureCoordinates),
        P1u = firstTextureCoordinate[0], ///
        P1v = firstTextureCoordinate[1], ///
        P2u = secondTextureCoordinate[0], ///
        P2v = secondTextureCoordinate[1], ///
        P3u = thirdTextureCoordinate[0], ///
        P3v = thirdTextureCoordinate[1], ///
        textureCoordinatesMatrix = invert3([ 1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v ]);

  return textureCoordinatesMatrix;
}

function calculateTextureCoordinatesBasis(parentVertices, textureCoordinatesMatrix) {
  const firstParentVertex = first(parentVertices),
        secondParentVertex = second(parentVertices),
        thirdParentVertex = third(parentVertices),
        P1x = firstParentVertex[0], ///
        P1y = firstParentVertex[1], ///
        P2x = secondParentVertex[0], ///
        P2y = secondParentVertex[1], ///
        P3x = thirdParentVertex[0], ///
        P3y = thirdParentVertex[1], ///
        xVector = transform3([ P1x, P2x, P3x ], textureCoordinatesMatrix),
        yVector = transform3([ P1y, P2y, P3y ], textureCoordinatesMatrix),
        textureCoordinatesBasis = [].concat(xVector).concat(yVector);

  return textureCoordinatesBasis;
}

function calculateTextureCoordinates(vertices, textureCoordinatesBasis) {
  const firstVertex = first(vertices),
        secondVertex = second(vertices),
        thirdVertex = third(vertices),
        R1x = firstVertex[0],  ///
        R1y = firstVertex[1],  ///
        R2x = secondVertex[0], ///
        R2y = secondVertex[1], ///
        R3x = thirdVertex[0],  ///
        R3y = thirdVertex[1],  ///
        Ox = textureCoordinatesBasis[0],  ///
        Oy = textureCoordinatesBasis[3],  ///
        Ux = textureCoordinatesBasis[1],  ///
        Uy = textureCoordinatesBasis[4],  ///
        Vx = textureCoordinatesBasis[2],  ///
        Vy = textureCoordinatesBasis[5],  ///
        matrix = invert2([ Ux, Uy, Vx, Vy ]),
        firstTextureCoordinates = transform2([ R1x - Ox, R1y - Oy ], matrix),
        secondTextureCoordinates = transform2([ R2x - Ox, R2y - Oy ], matrix),
        thirdTextureCoordinates = transform2([ R3x - Ox, R3y - Oy ], matrix),
        textureCoordinates = [
          firstTextureCoordinates,
          secondTextureCoordinates,
          thirdTextureCoordinates,
        ];

  return textureCoordinates;
}
