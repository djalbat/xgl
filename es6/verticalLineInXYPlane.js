'use strict';

const LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array'),
      vectorUtilities = require('./utilities/vector'),
      vertexUtilities = require('./utilities/vertex');

const { rotateAboutZAxis } = vertexUtilities,
      { first, second, fourth } = arrayUtilities,
      { add3, subtract3, normalise3 } = vectorUtilities;

class VerticalLineInXYPlane extends LineInXYPlane {
  constructor(position, direction, rotationAboutZAxisMatrix) {
    super(position, direction);

    this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
  }
  
  getRotationAboutZAxisMatrix() {
    return this.rotationAboutZAxisMatrix;
  }

  getForwardsRotationAboutZAxisMatrix() {
    const forwardsRotationAboutZAxisMatrix = this.rotationAboutZAxisMatrix; ///
    
    return forwardsRotationAboutZAxisMatrix;
  }
  
  getBackwardsRotationAboutZAxisMatrix() {
    const rotationAboutZAxisMatrixComponents = this.rotationAboutZAxisMatrix, ///
          firstRotationAboutZAxisMatrixComponent = first(rotationAboutZAxisMatrixComponents),
          fourthRotationAboutZAxisMatrixComponent = fourth(rotationAboutZAxisMatrixComponents),
          c = firstRotationAboutZAxisMatrixComponent, ///
          s = fourthRotationAboutZAxisMatrixComponent,  ///
          backwardsRotationAboutZAxisMatrix = [ c, +s, 0, -s, c, 0, 0, 0, 1 ];
    
    return backwardsRotationAboutZAxisMatrix;
  }
  
  splitFacets(facets) {
    const forwardsRotationAboutZAxisMatrix = this.getForwardsRotationAboutZAxisMatrix(),
          backwardsRotationAboutZAxisMatrix = this.getBackwardsRotationAboutZAxisMatrix(),
          facetsFromSplit = [];
    
    facets.forEach(function(facet) {
      facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

      this.splitFacet(facet, facetsFromSplit);
    }.bind(this));


    facetsFromSplit.forEach(function(facetFromSplit) {
      facetFromSplit.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
    });

    return facetsFromSplit;    
  }

  splitFacet(facet, facetsFromSplit) {
    const intersections = this.calculateIntersectionsWithFacet(facet),
          intersectionsIncludesNull = intersections.includes(null),
          facets = intersectionsIncludesNull ?
                     facet.splitWithNullIntersection(intersections) :
                       facet.splitWithoutNullIntersection(intersections);
    
    facets.forEach(function(facet) {
      const facetTooSmall = facet.isTooSmall();

      if (!facetTooSmall) {
        const facetFromSplit = facet; ///
        
        facetsFromSplit.push(facetFromSplit);
      }
    });
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
          firstLineDirectionComponent = first(lineDirectionComponents);

    if (firstLineDirectionComponent === 0) {
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

    let startVertex = position.slice(),
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
