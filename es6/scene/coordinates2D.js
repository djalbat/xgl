'use strict';

class Coordinates2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
  
  setX(x) {
    this.x = x;
  }
  
  setY(y) {
    this.y = y;
  }

  plus(coordinates2D) {
    let x = coordinates2D.getX(),
        y = coordinates2D.getY();

    x = this.x + x;
    y = this.y + y;

    return new Coordinates2D(x, y);
  }

  minus(coordinates2D) {
    let x = coordinates2D.getX(),
        y = coordinates2D.getY();

    x = this.x - x;
    y = this.y - y;

    return new Coordinates2D(x, y);
  }
  
  multipliedBy(scalar) {
    const x = this.x * scalar,
          y = this.y * scalar;

    return new Coordinates2D(x, y);
  }

  dividedBy(scalar) {
    const x = this.x / scalar,
          y = this.y / scalar;

    return new Coordinates2D(x, y);
  }

  toString() {
    const x = this.getX(),
          y = this.getY(),
          string = `${x},${y}`;

    return string;
  }
}

module.exports = Coordinates2D;
