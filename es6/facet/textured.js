'use strict';

const Facet = require('../facet'),
      facetUtilities = require('../utilities/facet'),
      arrayUtilities = require('../utilities/array'),
      matrixUtilities = require('../utilities/matrix'),
      vectorUtilities = require('../utilities/vector'),
      imageMapUtilities = require('../utilities/imageMap'),
      rotationUtilities = require('../utilities/rotation');

const { invert2, invert3 } = matrixUtilities,
      { getImageDetails } = imageMapUtilities,
      { calculateRotationQuaternion } = rotationUtilities,
      { first, second, third, permute } = arrayUtilities,
      { cloneEdges, cloneNormal, cloneVertices, calculateEdges, calculateNormal, rotateVertices } = facetUtilities,
      { add2, multiply2, transform2, transform3 } = vectorUtilities;

class TexturedFacet extends Facet {
  constructor(vertices, normal, edges, imageName, textureCoordinates) {
    super(vertices, normal, edges);

    this.imageName = imageName;
    this.textureCoordinates = textureCoordinates;
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

  splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) { super.splitWithTwoNonNullIntersections(intersections, smallerFacets, this); } ///

  splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) { super.splitWithOneNonNullIntersection(intersections, smallerFacets, this); } ///

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

  fromVertices(vertices) {
    const normal = calculateNormal(vertices),
          edges = calculateEdges(vertices),
          imageName = this.imageName,
          parentVertices = this.vertices, ///
          textureCoordinates = textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }

  static fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
    vertices = verticesFromVerticesAndIndexes(vertices, indexes); ///

    textureCoordinates = textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinates, index);  ///

    const normal = calculateNormal(vertices),
          edges = calculateEdges(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

    return texturedFacet;
  }
}

module.exports = TexturedFacet;

function verticesFromVerticesAndIndexes(vertices, indexes) {  ///
  vertices = indexes.map(function(index) {
    const vertex = vertices[index];

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
        rotationQuaternion = calculateRotationQuaternion(normal),
        verticesInXYPlane = rotateVertices(vertices, rotationQuaternion),
        parentVerticesInXYPlane = rotateVertices(parentVertices, rotationQuaternion),
        textureCoordinatesMatrix = calculateTextureCoordinatesMatrix(textureCoordinates),
        textureCoordinatesBasis = calculateTextureCoordinatesBasis(parentVerticesInXYPlane, textureCoordinatesMatrix);

  textureCoordinates = calculateTextureCoordinates(verticesInXYPlane, textureCoordinatesBasis);

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

function calculateTextureCoordinatesBasis(parentVerticesInXYPlane, textureCoordinatesMatrix) {
  const firstParentVertexInXYPlane = first(parentVerticesInXYPlane),
        secondParentVertexInXYPlane = second(parentVerticesInXYPlane),
        thirdParentVertexInXYPlane = third(parentVerticesInXYPlane),
        P1x = firstParentVertexInXYPlane[0], ///
        P1y = firstParentVertexInXYPlane[1], ///
        P2x = secondParentVertexInXYPlane[0], ///
        P2y = secondParentVertexInXYPlane[1], ///
        P3x = thirdParentVertexInXYPlane[0], ///
        P3y = thirdParentVertexInXYPlane[1], ///
        xVector = transform3([ P1x, P2x, P3x ], textureCoordinatesMatrix),
        yVector = transform3([ P1y, P2y, P3y ], textureCoordinatesMatrix),
        textureCoordinatesBasis = [].concat(xVector).concat(yVector);

  return textureCoordinatesBasis;
}

function calculateTextureCoordinates(verticesInXYPlane, textureCoordinatesBasis) {
  const firstVertexInXYPlane = first(verticesInXYPlane),
        secondVertexInXYPlane = second(verticesInXYPlane),
        thirdVertexInXYPlane = third(verticesInXYPlane),
        R1x = firstVertexInXYPlane[0],  ///
        R1y = firstVertexInXYPlane[1],  ///
        R2x = secondVertexInXYPlane[0], ///
        R2y = secondVertexInXYPlane[1], ///
        R3x = thirdVertexInXYPlane[0],  ///
        R3y = thirdVertexInXYPlane[1],  ///
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
