'use strict';

const vec3 = require('./maths/vec3'),
      arrayUtilities = require('./utilities/array');

const { subtract } = vec3,
      { first, second } = arrayUtilities;

class LineInXYPlane {
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
          firstPositionComponent = first(positionComponents),
          secondPositionComponent = second(positionComponents),
          firstDirectionComponent = first(directionComponents),
          secondDirectionComponent = second(directionComponents);

    if (firstDirectionComponent === 0) {
      intersection = null;
    } else {
      const a = +secondDirectionComponent, ///
            b = -firstDirectionComponent,
            c = firstPositionComponent * secondDirectionComponent - secondPositionComponent * firstDirectionComponent,
            x = verticalLineInXYPlane.getX(),
            y = (c - a*x) / b,
            y1 = secondPositionComponent,
            y2 = secondPositionComponent + secondDirectionComponent;

      intersection = (y - y1) / (y2 - y1);
    }

    return intersection;
  }

  static fromEquation(a, b, c) {
    const startVertex = (b !== 0) ?
                          [ -1, (a - c)/b, 0 ] :
                            [ (b - c)/a, -1, 0 ],
          endVertex = (b !== 0) ?
                        [ +1, (-a - c)/b, 0 ] :
                          [ (-b - c)/a, +1, 0 ],
          position = startVertex, ///
          direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);
    
    return lineInXYPlane;    
  }

  static fromVertices(startVertex, endVertex) {
    const position = startVertex.slice(),
          direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

    return lineInXYPlane;
  }
}

module.exports = LineInXYPlane;
