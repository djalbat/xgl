'use strict';

class MouseCoordinates {
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

  plus(mouseCoordinates) {
    let x = mouseCoordinates.getX(),
        y = mouseCoordinates.getY();

    x = this.x + x;
    y = this.y + y;

    return new MouseCoordinates(x, y);
  }

  minus(mouseCoordinates) {
    let x = mouseCoordinates.getX(),
        y = mouseCoordinates.getY();

    x = this.x - x;
    y = this.y - y;

    return new MouseCoordinates(x, y);
  }

  multipliedBy(scalar) {
    const x = this.x * scalar,
          y = this.y * scalar;

    return new MouseCoordinates(x, y);
  }
}

module.exports = MouseCoordinates;
