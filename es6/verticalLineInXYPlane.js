'use strict';

const LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      vectorUtilities = require('./utilities/vector'),
      vertexUtilities = require('./utilities/vertex'),
      rotationUtilities = require('./utilities/rotation'),
      approximateUtilities = require('./utilities/approximate');

const { first, second } = arrayUtilities,
      { rotateAboutZAxis } = vertexUtilities,
      { add3, subtract3, normalise3 } = vectorUtilities,
      { isApproximatelyEqualToZero } = approximateUtilities,
      { calculateForwardsRotationAboutZAxisMatrix, calculateBackwardsRotationAboutZAxisMatrix } = rotationUtilities;

class VerticalLineInXYPlane extends LineInXYPlane {
  constructor(position, direction, rotationAboutZAxisMatrix) {
    super(position, direction);

    this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
  }
  
  getRotationAboutZAxisMatrix() {
    return this.rotationAboutZAxisMatrix;
  }

  splitFacets(facets) {
    const smallerFacets = [],
          forwardsRotationAboutZAxisMatrix = calculateForwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix),
          backwardsRotationAboutZAxisMatrix = calculateBackwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix);
    
    facets.forEach(function(facet) {
      facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

      this.splitFacet(facet, smallerFacets);
    }.bind(this));
    
    smallerFacets.forEach(function(smallerFacet) {
      smallerFacet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
    });

    return smallerFacets;    
  }

  splitFacet(facet, smallerFacets) {
    const intersections = this.calculateIntersectionsWithFacet(facet);

    facet.split(intersections, smallerFacets);
  }

  calculateIntersectionsWithFacet(facet) {
    const lines = facet.getLines(),
          intersections = lines.map(function(line) {
            const intersection = this.calculateIntersectionWithLine(line);

            return intersection;
          }.bind(this));

    return intersections;
  }

  calculateIntersectionWithLine(line) {
    let intersection;

    const linePosition = line.getPosition(),
          lineDirection = line.getDirection(),
          linePositionComponents = linePosition, ///
          lineDirectionComponents = lineDirection, ///
          firstLineDirectionComponent = first(lineDirectionComponents),
          firstLineDirectionComponentApproximatelyEqualToZero = isApproximatelyEqualToZero(firstLineDirectionComponent);

    if (firstLineDirectionComponentApproximatelyEqualToZero) {
      intersection = null;
    } else {
      const positionComponents = this.position, ///
            firstPositionComponent = first(positionComponents),
            firstLinePositionComponent = first(linePositionComponents);

      intersection = (firstPositionComponent- firstLinePositionComponent) / firstLineDirectionComponent;
    }

    return intersection;
  }

  static fromLineInXYPlane(lineInXYPlane) {
    let position = lineInXYPlane.getPosition(),
        direction = lineInXYPlane.getDirection();

    const unitDirection = normalise3(direction),
          unitDirectionComponents = unitDirection,  ///
          firstUnitDirectionComponent = first(unitDirectionComponents),
          secondUnitDirectionComponent = second(unitDirectionComponents),
          angleOfRotationCosine = +secondUnitDirectionComponent,  ///
          angleOfRotationSine = -firstUnitDirectionComponent, ///
          c = angleOfRotationCosine,
          s = angleOfRotationSine,
          rotationAboutZAxisMatrix = [ c, -s, 0, +s, c, 0, 0, 0, 1 ];  ///

    let startVertex = position.slice(), ///
        endVertex = add3(position, direction);

    startVertex = rotateAboutZAxis(startVertex, rotationAboutZAxisMatrix);
    endVertex = rotateAboutZAxis(endVertex, rotationAboutZAxisMatrix);

    position = startVertex;
    direction = subtract3(endVertex, startVertex);

    const verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix);

    return verticalLineInXYPlane;
  }
}

module.exports = VerticalLineInXYPlane;
