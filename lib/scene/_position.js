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

      var translationVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create(),
          position = new Position(matrix);

      mat4.translate(matrix, matrix, translationVector);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9fcG9zaXRpb24uanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJkZWZhdWx0WENvb3JkaW5hdGUiLCJkZWZhdWx0WUNvb3JkaW5hdGUiLCJkZWZhdWx0WkNvb3JkaW5hdGUiLCJQb3NpdGlvbiIsIm1hdHJpeCIsInpDb29yZGluYXRlIiwiZnJvbUNvb3JkaW5hdGVzIiwidW5kZWZpbmVkIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInRyYW5zbGF0aW9uVmVjdG9yIiwiY3JlYXRlIiwicG9zaXRpb24iLCJ0cmFuc2xhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWIsQyxDQUFrQzs7QUFFbEMsSUFBTUMscUJBQXFCLENBQUMsR0FBNUI7QUFBQSxJQUNNQyxxQkFBcUIsQ0FBQyxHQUQ1QjtBQUFBLElBRU1DLHFCQUFxQixDQUFDLEdBRjVCOztJQUlNQyxRO0FBQ0osb0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O29DQUVzQkMsVyxFQUFhO0FBQUUsYUFBT0YsU0FBU0csZUFBVCxDQUF5QkMsU0FBekIsRUFBb0NBLFNBQXBDLEVBQStDRixXQUEvQyxDQUFQO0FBQXFFOzs7c0NBRWtCO0FBQUEsVUFBdEdHLFdBQXNHLHVFQUF4RlIsa0JBQXdGO0FBQUEsVUFBcEVTLFdBQW9FLHVFQUF0RFIsa0JBQXNEO0FBQUEsVUFBbENJLFdBQWtDLHVFQUFwQkgsa0JBQW9COztBQUMzSCxVQUFNUSxvQkFBb0IsQ0FDbEJGLFdBRGtCLEVBRWxCQyxXQUZrQixFQUdsQkosV0FIa0IsQ0FBMUI7QUFBQSxVQUtNRCxTQUFTTixLQUFLYSxNQUFMLEVBTGY7QUFBQSxVQU1NQyxXQUFXLElBQUlULFFBQUosQ0FBYUMsTUFBYixDQU5qQjs7QUFRQU4sV0FBS2UsU0FBTCxDQUFlVCxNQUFmLEVBQXVCQSxNQUF2QixFQUErQk0saUJBQS9COztBQUVBLGFBQU9FLFFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJaLFFBQWpCIiwiZmlsZSI6Il9wb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WENvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFlDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRaQ29vcmRpbmF0ZSA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSB7IHJldHVybiBQb3NpdGlvbi5mcm9tQ29vcmRpbmF0ZXModW5kZWZpbmVkLCB1bmRlZmluZWQsIHpDb29yZGluYXRlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoeENvb3JkaW5hdGUgPSBkZWZhdWx0WENvb3JkaW5hdGUsIHlDb29yZGluYXRlID0gZGVmYXVsdFlDb29yZGluYXRlLCB6Q29vcmRpbmF0ZSA9IGRlZmF1bHRaQ29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uVmVjdG9yID0gW1xuICAgICAgICAgICAgeENvb3JkaW5hdGUsXG4gICAgICAgICAgICB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgIHpDb29yZGluYXRlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKG1hdHJpeCk7XG5cbiAgICBtYXQ0LnRyYW5zbGF0ZShtYXRyaXgsIG1hdHJpeCwgdHJhbnNsYXRpb25WZWN0b3IpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9zaXRpb247XG4iXX0=