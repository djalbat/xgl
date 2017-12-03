'use strict';

const Facet = require('../facet'),
      arrayUtilities = require('../utilities/array'),
      matrixUtilities = require('../utilities/matrix'),
      vectorUtilities = require('../utilities/vector'),
      verticesUtilities = require('../utilities/vertices'),
      imageMapUtilities = require('../utilities/imageMap'),
      rotationUtilities = require('../utilities/rotation');

const { invert2, invert3 } = matrixUtilities,
      { getImageDetails } = imageMapUtilities,
      { calculateRotationQuaternion } = rotationUtilities,
      { first, second, third, permute } = arrayUtilities,
      { calculateNormal, rotateVertices } = verticesUtilities,
      { add2, multiply2, transform2, transform3 } = vectorUtilities;

class TexturedFacet extends Facet {
  constructor(vertices, normal, imageName, textureCoordinates) {
    super(vertices, normal);

    this.imageName = imageName;
    this.textureCoordinates = textureCoordinates;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal();

    vertices = vertices.map(function(vertex) {
      vertex = vertex.slice();  ///

      return vertex;
    });

    normal = normal.slice();  ///

    const imageName = this.imageName,
          textureCoordinates = this.textureCoordinates.map(function(textureCoordinates) {
            textureCoordinates = textureCoordinates.slice();  ///

            return textureCoordinates;
          }),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

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

  splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) { super.splitWithTwoNonNullIntersections(intersections, smallerFacets, this); }

  splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) { super.splitWithOneNonNullIntersection(intersections, smallerFacets, this); }

  fromVertices(vertices) {
    const normal = calculateNormal(vertices),
          imageName = this.imageName,
          parentVertices = this.vertices, ///
          textureCoordinates = textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

    return texturedFacet;
  }

  static fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
    vertices = indexes.map(function(index) { return vertices[index]; });  ///

    textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3);  ///

    const normal = calculateNormal(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

    return texturedFacet;
  }
}

module.exports = TexturedFacet;

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
        firstVertexInXYPlane = first(verticesInXYPlane),
        secondVertexInXYPlane = second(verticesInXYPlane),
        thirdVertexInXYPlane = third(verticesInXYPlane),
        firstParentVertexInXYPlane = first(parentVerticesInXYPlane),
        secondParentVertexInXYPlane = second(parentVerticesInXYPlane),
        thirdParentVertexInXYPlane = third(parentVerticesInXYPlane),
        P1x = firstParentVertexInXYPlane[0], ///
        P1y = firstParentVertexInXYPlane[1], ///
        P2x = secondParentVertexInXYPlane[0], ///
        P2y = secondParentVertexInXYPlane[1], ///
        P3x = thirdParentVertexInXYPlane[0], ///
        P3y = thirdParentVertexInXYPlane[1], ///
        changeOfBasisMatrix = calculateChangeOfBasisMatrix(textureCoordinates),
        xVector = transform3([ P1x, P2x, P3x ], changeOfBasisMatrix),
        yVector = transform3([ P1y, P2y, P3y ], changeOfBasisMatrix),
        Ox = xVector[0],  ///
        Oy = yVector[0],  ///
        Ux = xVector[1],  ///
        Uy = yVector[1],  ///
        Vx = xVector[2],  ///
        Vy = yVector[2],  ///
        R1x = firstVertexInXYPlane[0],  ///
        R1y = firstVertexInXYPlane[1],  ///
        R2x = secondVertexInXYPlane[0], ///
        R2y = secondVertexInXYPlane[1], ///
        R3x = thirdVertexInXYPlane[0],  ///
        R3y = thirdVertexInXYPlane[1],  ///
        matrix = invert2([ Ux, Uy, Vx, Vy ]),
        firstTextureCoordinates = transform2([ R1x - Ox, R1y - Oy ], matrix),
        secondTextureCoordinates = transform2([ R2x - Ox, R2y - Oy ], matrix),
        thirdTextureCoordinates = transform2([ R3x - Ox, R3y - Oy ], matrix);

  textureCoordinates = [
    firstTextureCoordinates,
    secondTextureCoordinates,
    thirdTextureCoordinates,
  ];

  return textureCoordinates;
}

function calculateChangeOfBasisMatrix(textureCoordinates) {
  const firstTextureCoordinate = first(textureCoordinates),
        secondTextureCoordinate = second(textureCoordinates),
        thirdTextureCoordinate = third(textureCoordinates),
        P1u = firstTextureCoordinate[0], ///
        P1v = firstTextureCoordinate[1], ///
        P2u = secondTextureCoordinate[0], ///
        P2v = secondTextureCoordinate[1], ///
        P3u = thirdTextureCoordinate[0], ///
        P3v = thirdTextureCoordinate[1], ///
        changeOfBasisMatrix = invert3([ 1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v ]);

  return changeOfBasisMatrix;
}
