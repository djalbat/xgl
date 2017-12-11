'use strict';

const rotationUtilities = require('./utilities/rotation');

const { rotatePosition, rotatePositionAboutZAxis } = rotationUtilities;

class Vertex {
  constructor(position) {
    this.position = position;
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
  
  applyTransform(transform) {
    this.position = transform(this.position);
  }

  clone() {
    const position = clonePosition(this.position),
          vertex = new Vertex(position);
    
    return vertex;
  }

  static fromCoordinates(coordinates) {
    const position = coordinates.slice(), ///
          vertex = new Vertex(position);

    return vertex;
  }
}

module.exports = Vertex;

function clonePosition(position) { return position.slice(); } ///
