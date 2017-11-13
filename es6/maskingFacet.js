'use strict';

const Facet = require('./facet'),
      LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      verticesUtilities = require('./utilities/vertices'),
      rotationUtilities = require('./utilities/rotation'),
      VerticalLineInXYPlane = require('./verticalLineInXYPlane');

const { dilute } = arrayUtilities,
      { calculateNormal, rotateVertices } = verticesUtilities,
      { calculateRotationQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = rotationUtilities;

class MaskingFacet extends Facet {
  constructor(vertices, normal, rotationQuaternion) {
    super(vertices, normal);
    
    this.rotationQuaternion = rotationQuaternion;
  }

  getRotationQuaternion() {
    return this.rotationQuaternion;
  }

  getLinesInXYPlane() {
    const verticesLength = 3, ///
          linesInXYPlane = this.vertices.map(function(vertex, index) {
            const startIndex = index,
                  endIndex = (startIndex + 1) % verticesLength,
                  startVertex = this.vertices[startIndex],
                  endVertex = this.vertices[endIndex],
                  lineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);
                  
            return lineInXYPlane;
          }.bind(this));

    return linesInXYPlane;
  }

  maskFacet(facet, unmaskedFacets) {
    const forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

    facet.rotate(forwardsRotationQuaternion);

    const smallerFacets = this.splitFacet(facet);

    this.diluteSmallerFacets(smallerFacets, unmaskedFacets);

    unmaskedFacets.forEach(function(unmaskedFacet) {
      unmaskedFacet.rotate(backwardsRotationQuaternion);
    });
  }
  
  splitFacet(facet) {
    const linesInXYPlane = this.getLinesInXYPlane();

    let facets = [
          facet
        ],
        smallerFacets = facets; ///

    linesInXYPlane.forEach(function(lineInXYPlane) {
      const verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane);

      smallerFacets = verticalLineInXYPlane.splitFacets(facets);

      facets = smallerFacets; ///
    });

    return smallerFacets;
  }

  diluteSmallerFacets(smallerFacets, unmaskedFacets) {
    const linesInXYPlane = this.getLinesInXYPlane();

    dilute(smallerFacets, unmaskedFacets, function(smallerFacet) {
      const smallerFacetOutsideLinesInXYPlane = smallerFacet.isOutsideLinesInXYPlane(linesInXYPlane),
            smallerFacetUnmasked = smallerFacetOutsideLinesInXYPlane; ///

      return smallerFacetUnmasked;
    });
  }

  static fromFacet(facet) {
    let normal = facet.getNormal();
    
    const rotationQuaternion = calculateRotationQuaternion(normal);

    let vertices = facet.getVertices();
    
    vertices = rotateVertices(vertices, rotationQuaternion);
    
    normal = calculateNormal(vertices);
    
    const maskingFacet = new MaskingFacet(vertices, normal, rotationQuaternion);

    return maskingFacet;
  }
  
  static fromVertices(vertices) {
    const facet = Facet.fromVertices(vertices),
          maskingFacet = MaskingFacet.fromFacet(facet);
    
    return maskingFacet;
  }
}

module.exports = MaskingFacet;
