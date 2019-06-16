'use strict';

const Camera = require('../camera');

class GamingCamera extends Camera {
  update(canvas) {
    ///
  }

  initialise(canvas) {
    ///
  }

  static fromProperties(properties) { return Camera.fromProperties(GamingCamera, properties); }
}

module.exports = GamingCamera;
