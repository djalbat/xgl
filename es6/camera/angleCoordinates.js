'use strict';

class AngleCoordinates {
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

  plus(angleCoordinates) {
    let x = angleCoordinates.getX(),
        y = angleCoordinates.getY();

    x = this.x + x;
    y = this.y + y;

    return new AngleCoordinates(x, y);
  }

  minus(angleCoordinates) {
    let x = angleCoordinates.getX(),
        y = angleCoordinates.getY();

    x = this.x - x;
    y = this.y - y;

    return new AngleCoordinates(x, y);
  }

  multipliedBy(scalar) {
    const x = this.x * scalar,
          y = this.y * scalar;

    return new AngleCoordinates(x, y);
  }
}

module.exports = AngleCoordinates;
