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
      return Position.fromCoordinates(undefined, undefined, zCoordinate);
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates() {
      var xCoordinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXCoordinate;
      var yCoordinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYCoordinate;
      var zCoordinate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZCoordinate;

      var coordinateVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create(),
          position = new Position(matrix);

      mat4.translate(matrix, matrix, coordinateVector);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9wb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYQ29vcmRpbmF0ZSIsImRlZmF1bHRZQ29vcmRpbmF0ZSIsImRlZmF1bHRaQ29vcmRpbmF0ZSIsIlBvc2l0aW9uIiwibWF0cml4IiwiekNvb3JkaW5hdGUiLCJmcm9tQ29vcmRpbmF0ZXMiLCJ1bmRlZmluZWQiLCJ4Q29vcmRpbmF0ZSIsInlDb29yZGluYXRlIiwiY29vcmRpbmF0ZVZlY3RvciIsImNyZWF0ZSIsInBvc2l0aW9uIiwidHJhbnNsYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0FBRWxDLElBQU1DLHFCQUFxQixDQUFDLEdBQTVCO0FBQUEsSUFDTUMscUJBQXFCLENBQUMsR0FENUI7QUFBQSxJQUVNQyxxQkFBcUIsQ0FBQyxHQUY1Qjs7SUFJTUMsUTtBQUNKLG9CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztvQ0FFc0JDLFcsRUFBYTtBQUFFLGFBQU9GLFNBQVNHLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DQSxTQUFwQyxFQUErQ0YsV0FBL0MsQ0FBUDtBQUFxRTs7O3NDQUVrQjtBQUFBLFVBQXRHRyxXQUFzRyx1RUFBeEZSLGtCQUF3RjtBQUFBLFVBQXBFUyxXQUFvRSx1RUFBdERSLGtCQUFzRDtBQUFBLFVBQWxDSSxXQUFrQyx1RUFBcEJILGtCQUFvQjs7QUFDM0gsVUFBTVEsbUJBQW1CLENBQ2pCRixXQURpQixFQUVqQkMsV0FGaUIsRUFHakJKLFdBSGlCLENBQXpCO0FBQUEsVUFLTUQsU0FBU04sS0FBS2EsTUFBTCxFQUxmO0FBQUEsVUFNTUMsV0FBVyxJQUFJVCxRQUFKLENBQWFDLE1BQWIsQ0FOakI7O0FBUUFOLFdBQUtlLFNBQUwsQ0FBZVQsTUFBZixFQUF1QkEsTUFBdkIsRUFBK0JNLGdCQUEvQjs7QUFFQSxhQUFPRSxRQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCWixRQUFqQiIsImZpbGUiOiJwb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WENvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFlDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRaQ29vcmRpbmF0ZSA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSB7IHJldHVybiBQb3NpdGlvbi5mcm9tQ29vcmRpbmF0ZXModW5kZWZpbmVkLCB1bmRlZmluZWQsIHpDb29yZGluYXRlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoeENvb3JkaW5hdGUgPSBkZWZhdWx0WENvb3JkaW5hdGUsIHlDb29yZGluYXRlID0gZGVmYXVsdFlDb29yZGluYXRlLCB6Q29vcmRpbmF0ZSA9IGRlZmF1bHRaQ29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVWZWN0b3IgPSBbXG4gICAgICAgICAgICB4Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgIHlDb29yZGluYXRlLFxuICAgICAgICAgICAgekNvb3JkaW5hdGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIG1hdHJpeCA9IG1hdDQuY3JlYXRlKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24obWF0cml4KTtcblxuICAgIG1hdDQudHJhbnNsYXRlKG1hdHJpeCwgbWF0cml4LCBjb29yZGluYXRlVmVjdG9yKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc2l0aW9uO1xuIl19