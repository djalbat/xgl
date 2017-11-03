'use strict';

const vec3 = require('./maths/vec3'),
      arrayUtilities = require('./utilities/array');

const { subtract } = vec3,
      { first } = arrayUtilities;

class Line {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane) {
    let intersection;

    const positionComponents = this.position, ///
          directionComponents = this.direction, ///
          firstDirectionComponent = first(directionComponents);

    if (firstDirectionComponent === 0) {
      intersection = null;
    } else {
      const firstPositionComponent = first(positionComponents),
            verticalLineInXYPlaneFirstPositionComponent = verticalLineInXYPlane.getFirstPositionComponent();

      intersection = (verticalLineInXYPlaneFirstPositionComponent - firstPositionComponent) / firstDirectionComponent;
    }

    return intersection;
  }

  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(),
          direction = subtract(endVertex, startVertex),
          line = new Line(position, direction);

    return line;
  }
}

module.exports = Line;
