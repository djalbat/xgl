'use strict';

const vec3 = require('./maths/vec3'),
      LineInXYPlane = require('./lineInXYPlane'),
      arrayUtilities = require('./utilities/array');

const { add, subtract, normalise, transform } = vec3,
      { first, second, fourth } = arrayUtilities;

class VerticalLineInXYPlane extends LineInXYPlane {
  constructor(position, direction, rotationMatrix) {
    super(position, direction);

    this.rotationMatrix = rotationMatrix;
  }
  
  getRotationMatrix() {
    return this.rotationMatrix;
  }

  getForwardsRotationMatrix() {
    const forwardsRotationMatrix = this.rotationMatrix; ///
    
    return forwardsRotationMatrix;
  }
  
  getBackwardsRotationMatrix() {
    const rotationMatrixComponents = this.rotationMatrix, ///
          firstRotationMatrixComponent = first(rotationMatrixComponents),
          fourthRotationMatrixComponent = fourth(rotationMatrixComponents),
          c = firstRotationMatrixComponent, ///
          s = fourthRotationMatrixComponent,  ///
          backwardsRotationMatrix = [ c, +s, 0, -s, c, 0, 0, 0, 1 ];
    
    return backwardsRotationMatrix;
  }
  
  getX() {
    const positionComponents = this.position, ///
          firstPositionComponent = first(positionComponents),
          x = firstPositionComponent; ///
    
    return x;
  }

  static fromLineInXYPlane(lineInXYPlane) {
    let position = lineInXYPlane.getPosition(),
        direction = lineInXYPlane.getDirection();

    const unitDirection = normalise(direction),
          unitDirectionComponents = unitDirection,  ///
          firstUnitDirectionComponent = first(unitDirectionComponents),
          secondUnitDirectionComponent = second(unitDirectionComponents),
          angleOfRotationCosine = +secondUnitDirectionComponent,  ///
          angleOfRotationSine = -firstUnitDirectionComponent, ///
          c = angleOfRotationCosine,
          s = angleOfRotationSine,
          rotationMatrix = [ c, -s, 0, +s, c, 0, 0, 0, 1 ];  ///

    let startVertex = position.slice(),
        endVertex = add(position, direction);

    startVertex = rotateVertex(startVertex, rotationMatrix);
    endVertex = rotateVertex(endVertex, rotationMatrix);

    position = startVertex;
    direction = subtract(endVertex, startVertex);

    const verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationMatrix);

    return verticalLineInXYPlane;
  }
}

module.exports = VerticalLineInXYPlane;

function rotateVertex(vertex, rotationMatrix) {
  let vec = vertex; ///

  const mat3 = rotationMatrix;  ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}
