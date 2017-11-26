'use strict';

const arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices'),
      rotationUtilities = require('./utilities/rotation'),
      EdgeInXYPlane = require('./facet/edgeInXYPlane'),
      VerticalLineInXYPlane = require('./facet/verticalLineInXYPlane');

const { push, separate } = arrayUtilities,
      { rotateVertices } = verticesUtilities,
      { calculateRotationQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = rotationUtilities;

class MaskingFacet {
  constructor(edgesInXYPlane, verticalLinesInXYPlane, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    this.edgesInXYPlane = edgesInXYPlane;
    this.verticalLinesInXYPlane = verticalLinesInXYPlane;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  getEdgesInXYPlane() {
    return this.edgesInXYPlane;
  }

  getVerticalLinesInXYPlane() {
    return this.verticalLinesInXYPlane;
  }

  getForwardsRotationQuaternion() {
    return this.forwardsRotationQuaternion;
  }

  getBackwardsRotationQuaternion() {
    return this.backwardsRotationQuaternion;
  }

  maskFacet(facet, unmaskedFacets) {
    const unmaskedFacet = facet.clone();

    facet.rotate(this.forwardsRotationQuaternion);

    const maskingFacet = this,  ///
          smallerFacets = this.splitFacet(facet),
          maskedSmallerFacets = [],
          unmaskedSmallerFacets = [];

    separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
      const smallerFacetMasked = smallerFacet.isMasked(maskingFacet);

      return smallerFacetMasked;
    });

    const maskedSmallerFacetsLength = maskedSmallerFacets.length;

    if (maskedSmallerFacetsLength === 0) {
      unmaskedFacets.push(unmaskedFacet);
    } else {
      unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
        unmaskedSmallerFacet.rotate(this.backwardsRotationQuaternion);
      }.bind(this));

      push(unmaskedFacets, unmaskedSmallerFacets);
    }
  }
  
  splitFacet(facet) {
    let facets = [
          facet
        ],
        smallerFacets = facets; ///

    this.verticalLinesInXYPlane.forEach(function(verticalLineInXYPlane) {
      smallerFacets = verticalLineInXYPlane.splitFacets(facets);

      facets = smallerFacets; ///
    });

    return smallerFacets;
  }

  static fromFacet(facet) {
    const facetNormal = facet.getNormal(),
          facetVertices = facet.getVertices(),
          rotationQuaternion = calculateRotationQuaternion(facetNormal),
          vertices = rotateVertices(facetVertices, rotationQuaternion),
          edgesInXYPlane = calculateEdgesInXYPlane(vertices),
          verticalLinesInXYPlane = edgesInXYPlane.map(VerticalLineInXYPlane.fromEdgeInXYPlane),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
          maskingFacet = new MaskingFacet(edgesInXYPlane, verticalLinesInXYPlane, forwardsRotationQuaternion, backwardsRotationQuaternion);

    return maskingFacet;
  }
}

module.exports = MaskingFacet;

function calculateEdgesInXYPlane(vertices) {
  const verticesLength = 3, ///
        edgesInXYPlane = vertices.map(function(vertex, index) {
          const startIndex = index,
              endIndex = (startIndex + 1) % verticesLength,
              startVertex = vertices[startIndex],
              endVertex = vertices[endIndex],
              edgeInXYPlane = EdgeInXYPlane.fromStartVertexAndEndVertex(startVertex, endVertex);

          return edgeInXYPlane;
        }.bind(this));

  return edgesInXYPlane;
}
