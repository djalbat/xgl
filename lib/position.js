'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = -6.0;

var Position = function () {
  function Position(matrix) {
    _classCallCheck(this, Position);

    this.matrix = matrix;
  }

  _createClass(Position, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromZCoordinate',
    value: function fromZCoordinate(zCoordinate) {
      var xCoordinate = defaultXCoordinate,
          yCoordinate = defaultYCoordinate,
          coordinateVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create();

      mat4.translate(matrix, matrix, coordinateVector);

      var position = new Position(matrix);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYQ29vcmRpbmF0ZSIsImRlZmF1bHRZQ29vcmRpbmF0ZSIsImRlZmF1bHRaQ29vcmRpbmF0ZSIsIlBvc2l0aW9uIiwibWF0cml4IiwiekNvb3JkaW5hdGUiLCJ4Q29vcmRpbmF0ZSIsInlDb29yZGluYXRlIiwiY29vcmRpbmF0ZVZlY3RvciIsImNyZWF0ZSIsInRyYW5zbGF0ZSIsInBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0FBRWxDLElBQU1DLHFCQUFxQixDQUFDLEdBQTVCO0FBQUEsSUFDTUMscUJBQXFCLENBQUMsR0FENUI7QUFBQSxJQUVNQyxxQkFBcUIsQ0FBQyxHQUY1Qjs7SUFJTUMsUTtBQUNKLG9CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztvQ0FFc0JDLFcsRUFBYTtBQUNsQyxVQUFNQyxjQUFjTixrQkFBcEI7QUFBQSxVQUNNTyxjQUFjTixrQkFEcEI7QUFBQSxVQUVNTyxtQkFBbUIsQ0FDakJGLFdBRGlCLEVBRWpCQyxXQUZpQixFQUdqQkYsV0FIaUIsQ0FGekI7QUFBQSxVQU9NRCxTQUFTTixLQUFLVyxNQUFMLEVBUGY7O0FBU0FYLFdBQUtZLFNBQUwsQ0FBZU4sTUFBZixFQUF1QkEsTUFBdkIsRUFBK0JJLGdCQUEvQjs7QUFFQSxVQUFNRyxXQUFXLElBQUlSLFFBQUosQ0FBYUMsTUFBYixDQUFqQjs7QUFFQSxhQUFPTyxRQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCVixRQUFqQiIsImZpbGUiOiJwb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WENvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFlDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRaQ29vcmRpbmF0ZSA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSB7XG4gICAgY29uc3QgeENvb3JkaW5hdGUgPSBkZWZhdWx0WENvb3JkaW5hdGUsXG4gICAgICAgICAgeUNvb3JkaW5hdGUgPSBkZWZhdWx0WUNvb3JkaW5hdGUsXG4gICAgICAgICAgY29vcmRpbmF0ZVZlY3RvciA9IFtcbiAgICAgICAgICAgIHhDb29yZGluYXRlLFxuICAgICAgICAgICAgeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICB6Q29vcmRpbmF0ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIG1hdDQudHJhbnNsYXRlKG1hdHJpeCwgbWF0cml4LCBjb29yZGluYXRlVmVjdG9yKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKG1hdHJpeCk7XG4gICAgXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9zaXRpb247XG4iXX0=