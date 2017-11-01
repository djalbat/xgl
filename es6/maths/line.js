'use strict';

const vec2 = require('./vec2'),
      mat2 = require('./mat2'),
      arrayUtilities = require('../utilities/array');

const { invert } = mat2,
      { subtract, transform } = vec2,
      { first, second } = arrayUtilities;

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

  calculateIntersection(line) {
    let intersection;

    const linePosition = line.getPosition(),
          lineDirection = line.getDirection(),
          directionComponents = this.direction,  ///
          lineDirectionComponents = lineDirection,  ///
          firstDirectionComponent = first(directionComponents),
          secondDirectionComponent = second(directionComponents),
          firstLineDirectionComponent = first(lineDirectionComponents),
          secondLineDirectionComponent = second(lineDirectionComponents),
          mat = invert([
            +firstDirectionComponent, ///
            +secondDirectionComponent,  ///
            -firstLineDirectionComponent, ///
            -secondLineDirectionComponent  ///
          ]);  ///

    if (mat === null) {
      intersection = null;
    } else {
      const relativePosition = subtract(linePosition, this.position),
            intersections = transform(relativePosition, mat),
            firstIntersection = first(intersections);

      intersection = firstIntersection; ///
    }

    return intersection;
  }
  
  static fromEquation(a, b, c) {
    const firstPosition = (b !== 0) ?
                            [ -1, (c + a)/b ] :
                              [ (c + b)/a, -1 ],
          secondPosition = (b !== 0) ?
                             [ +1, (c - a)/b ] :
                               [ (c - b)/a, +1 ],
          position = firstPosition, ///
          direction = subtract(secondPosition, firstPosition),
          line = new Line(position, direction);
    
    return line;    
  }

  static fromVertexPositions(vertexPositionA, vertexPositionB) {
    const position = vertexPositionA.slice(0, 2),
          direction = subtract(vertexPositionB, vertexPositionA),
          line = new Line(position, direction);

    return line;
  }
}

module.exports = Line;