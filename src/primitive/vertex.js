"use strict";

import { rotatePosition } from "../utilities/rotation";

export default class Vertex {
  constructor(position) {
    this.position = position;
  }

  getPosition() {
    return this.position;
  }

  rotate(rotationQuaternion) {
    this.position = rotatePosition(this.position, rotationQuaternion);
  }

  applyTransform(transform) {
    this.position = transform(this.position);
  }

  clone() {
    const position = this.position.slice(), ///
          vertex = new Vertex(position);

    return vertex;
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
