'use strict';

const rotationUtilities = require('./utilities/rotation');

const { rotatePosition } = rotationUtilities;

class Vertex {
  constructor(position) {
    this.position = position;
  }

  clone() {
    const position = this.position.slice(), ///
          vertex = new Vertex(position);

    return vertex;
  }

  getPosition() {
    return this.position;
  }

  rotate(rotationQuaternion) {
    this.position = rotatePosition(this.position, rotationQuaternion);
  }

  applyTransforms(transforms) {
    transforms.forEach((transform) => {
      this.position = transform(this.position);
    });
  }
  
  static fromPosition(position) {
    const vertex = new Vertex(position);
    
    return vertex;
  }
  
  static fromCoordinateTuple(coordinateTuple) {
    const position = coordinateTuple.slice(), ///
          vertex = new Vertex(position);

    return vertex;
  }
}

module.exports = Vertex;
