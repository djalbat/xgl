'use strict';

const Facet = require('../../facet'),
      vec3 = require('../../maths/vec3'),
      CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array'),
      transformUtilities = require('../../utilities/transform');

const FacetInXYPlane = require('../../facetInXYPlane'),
      VerticalLineInXYPlane = require('../../verticalLineInXYPlane');

const { first } = arrayUtilities,
      { normalise } = vec3,
      { composeTransform } = transformUtilities;

const facets = calculateFacets(),
      colours = [
        [ 1, 0, 0, 1 ],
        [ 0, 1, 0, 1 ],
        [ 0, 0, 1, 1 ],

        [ 1, 1, 0, 1 ],
        [ 0, 1, 1, 1 ],
        [ 1, 0, 1, 1 ],
      ];

class Triangle extends CanvasElement {
  constructor(transform) {
    super(transform);

    this.facets = facets; ///
    this.colours = colours; ///
  }

  getFacets() {
    return this.facets;
  }

  getColours() {
    return this.colours;
  }

  getInitialVertexPositions() {
    const initialVertexPositions = this.facets.reduce(function(initialVertexPositions, facet) {
      const vertices = facet.getVertices();

      initialVertexPositions = vertices.reduce(function(initialVertexPositions, vertex) {
        const initialVertexPosition = vertex.slice(); ///

        initialVertexPositions.push(initialVertexPosition);

        return initialVertexPositions;
      }, initialVertexPositions);

      return initialVertexPositions;
    }, []);

    return initialVertexPositions;
  }

  calculateVertexIndexes(vertexPositions) {
    let vertexIndex = 0;

    const vertexIndexes = this.facets.reduce(function(vertexIndexes, facet) {
            vertexIndexes = [ ...vertexIndexes, vertexIndex + 0, vertexIndex + 1, vertexIndex + 2 ];

            vertexIndex += 3;

            return vertexIndexes;
          }, []);

    return vertexIndexes;
  }

  calculateVertexNormals(vertexPositions) {
    const vertexNormals = this.facets.reduce(function(vertexNormals, facet) {
      const normal = facet.getNormal(),
            normals = [ ///
              normal,
              normal,
              normal
            ];

      vertexNormals = normals.reduce(function(vertexNormals, normal) {
        const vertexNormal = normalise(normal);

        vertexNormals.push(vertexNormal);

        return vertexNormals;
      }, vertexNormals);

      return vertexNormals;
    }, []);

    return vertexNormals;
  }

  calculateVertexColours(vertexPositions) {
    const vertexColours = this.facets.reduce(function(vertexColours, facet, index) {
      index = index % 6;  ///
      
      const colour = this.colours[index],
            colours = [
              colour,
              colour,
              colour
            ];

      vertexColours = colours.reduce(function(vertexColours, colour) {
        const vertexColour = colour;  ///

        vertexColours.push(vertexColour);

        return vertexColours;

      }, vertexColours);

      return vertexColours;
    }.bind(this), []);

    return vertexColours;
  }

  create(colourRenderer, textureRenderer, transforms) {
    const vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

    colourRenderer.addVertexPositions(vertexPositions);
    colourRenderer.addVertexIndexes(vertexIndexes);
    colourRenderer.addVertexNormals(vertexNormals);
    colourRenderer.addVertexColours(vertexColours);

    super.create(colourRenderer, textureRenderer, transforms);
  }

  static fromProperties(properties, ...remainingArguments) {
    const { width, height, depth, position, rotations } = properties,
          transform = composeTransform(width, height, depth, position, rotations),
          Class = Triangle,
          canvasElement = CanvasElement.fromProperties(Class, properties, transform, ...remainingArguments);

    return canvasElement;
  }
}

module.exports = Triangle;

function calculateFacets() {
  const facetVertices = [
          [ -2, 0, 0 ],  /// [ 2, 0, 0 ],
          [ +2, 0, 0 ],  /// [ 0, 2, 0 ],
          [  0, 2, 0 ],  /// [ 0, 0, 2 ],
        ],
        maskFacetVertices = [
          [ 0, 1, 0 ],  /// [ 1, 0, 1 ],
          [ 1, 0, 0 ],  /// [ 0, 0, 1 ],
          [ 1, 1, 0 ],  /// [ 0, 1, 1 ],
        ],
        facet = Facet.fromVertices(facetVertices),
        maskFacet = Facet.fromVertices(maskFacetVertices),
        maskFacetInXYPlane = FacetInXYPlane.fromFacet(maskFacet),
        linesInXYPlane = maskFacetInXYPlane.getLinesInXYPlane(),
        firstLineInXYPlane = first(linesInXYPlane),
        lineInXYPlane = firstLineInXYPlane,
        verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
        forwardsRotationAboutZAxisMatrix = verticalLineInXYPlane.getForwardsRotationAboutZAxisMatrix(),
        backwardsRotationAboutZAxisMatrix = verticalLineInXYPlane.getBackwardsRotationAboutZAxisMatrix();

  facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

  const facets = facet.splitWithVerticalLineInXYPlane(verticalLineInXYPlane);

  facets.forEach(function(facet) {
    facet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
  });


  // const forwardsTranslation = facetInXYPlane.getForwardsTranslation(),
  //       backwardsTranslation = facetInXYPlane.getBackwardsTranslation(),
  //       forwardsRotationQuaternion = facetInXYPlane.getForwardsRotationQuaternion(),
  //       backwardsRotationQuaternion = facetInXYPlane.getBackwardsRotationQuaternion();
  //
  // maskFacet.rotate(forwardsRotationQuaternion);
  // maskFacet.translate(forwardsTranslation);
  //
  // const lineInXYPlane = maskFacet.getLineInXYPlane(),
  //       verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
  //       forwardsRotationMatrix = verticalLineInXYPlane.getForwardsRotationMatrix();
  //
  // facetInXYPlane.rotate(forwardsRotationMatrix);
  //
  // const facetsInXYPlane = facetInXYPlane.possiblySplit(verticalLineInXYPlane),
  //       backwardsRotationMatrix = verticalLineInXYPlane.getBackwardsRotationMatrix();
  //
  // facetsInXYPlane.forEach(function (facetInXYPlane) {
  //   facetInXYPlane.rotate(backwardsRotationMatrix);
  // });
  //
  // const facets = facetsInXYPlane.map(function (facetInXYPlane) {
  //         const facet = Facet.fromFacetInXYPlane(facetInXYPlane);
  //
  //         facet.translate(backwardsTranslation);
  //         facet.rotate(backwardsRotationQuaternion);
  //
  //         return facet;
  //       });

  return facets;
}
