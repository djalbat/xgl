'use strict';

const rotationUtilities = require('./utilities/rotation');

const { rotatePosition, rotatePositionAboutZAxis } = rotationUtilities;

class Vertex {
  constructor(position) {
    this.position = position;
  }

  clone() {
    const position = clonePosition(this.position),
          vertex = new Vertex(position);

    return vertex;
  }

  getPosition() {
    return this.position;
  }

  rotate(rotationQuaternion) {
    this.position = rotatePosition(this.position, rotationQuaternion);
  }

  rotateAboutZAxis(rotationAboutZAxisMatrix) {
    this.position = rotatePositionAboutZAxis(this.position, rotationAboutZAxisMatrix);
  }
  
  applyTransforms(transforms) {
    transforms.forEach(function(transform) {
      this.position = transform(this.position);
    }.bind(this));
  }
  
  static fromCoordinates(coordinates) {
    const position = positionFromCoordinates(coordinates),
          vertex = new Vertex(position);

    return vertex;
  }
}

module.exports = Vertex;

function clonePosition(position) { return position.slice(); } ///

function positionFromCoordinates(coordinates) { 
  const position = coordinates.slice(); ///
  
  return position;
}
