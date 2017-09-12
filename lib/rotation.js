'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 6.0;

var Rotation = function () {
  function Rotation() {
    var xAngle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXAngle;
    var yAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYAngle;
    var zAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZAngle;

    _classCallCheck(this, Rotation);

    this.matrix = mat4.create();

    var xAxisVectorArray = [1, 0, 0],
        yAxisVectorArray = [0, 1, 0],
        zAxisVectorArray = [0, 0, 1];

    mat4.rotate(this.matrix, this.matrix, xAngle, xAxisVectorArray);
    mat4.rotate(this.matrix, this.matrix, yAngle, yAxisVectorArray);
    mat4.rotate(this.matrix, this.matrix, zAngle, zAxisVectorArray);
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yb3RhdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYQW5nbGUiLCJkZWZhdWx0WUFuZ2xlIiwiZGVmYXVsdFpBbmdsZSIsIlJvdGF0aW9uIiwieEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwibWF0cml4IiwiY3JlYXRlIiwieEF4aXNWZWN0b3JBcnJheSIsInlBeGlzVmVjdG9yQXJyYXkiLCJ6QXhpc1ZlY3RvckFycmF5Iiwicm90YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0FBRWxDLElBQU1DLGdCQUFnQixHQUF0QjtBQUFBLElBQ01DLGdCQUFnQixHQUR0QjtBQUFBLElBRU1DLGdCQUFnQixHQUZ0Qjs7SUFJTUMsUTtBQUNKLHNCQUFvRjtBQUFBLFFBQXhFQyxNQUF3RSx1RUFBL0RKLGFBQStEO0FBQUEsUUFBaERLLE1BQWdELHVFQUF2Q0osYUFBdUM7QUFBQSxRQUF4QkssTUFBd0IsdUVBQWZKLGFBQWU7O0FBQUE7O0FBQ2xGLFNBQUtLLE1BQUwsR0FBY1QsS0FBS1UsTUFBTCxFQUFkOztBQUVBLFFBQU1DLG1CQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF6QjtBQUFBLFFBQ01DLG1CQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUR6QjtBQUFBLFFBRU1DLG1CQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZ6Qjs7QUFJQWIsU0FBS2MsTUFBTCxDQUFZLEtBQUtMLE1BQWpCLEVBQXlCLEtBQUtBLE1BQTlCLEVBQXNDSCxNQUF0QyxFQUE4Q0ssZ0JBQTlDO0FBQ0FYLFNBQUtjLE1BQUwsQ0FBWSxLQUFLTCxNQUFqQixFQUF5QixLQUFLQSxNQUE5QixFQUFzQ0YsTUFBdEMsRUFBOENLLGdCQUE5QztBQUNBWixTQUFLYyxNQUFMLENBQVksS0FBS0wsTUFBakIsRUFBeUIsS0FBS0EsTUFBOUIsRUFBc0NELE1BQXRDLEVBQThDSyxnQkFBOUM7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0osTUFBWjtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQlgsUUFBakIiLCJmaWxlIjoicm90YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdFhBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRZQW5nbGUgPSAwLjAsXG4gICAgICBkZWZhdWx0WkFuZ2xlID0gNi4wO1xuXG5jbGFzcyBSb3RhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHhBbmdsZSA9IGRlZmF1bHRYQW5nbGUsIHlBbmdsZSA9IGRlZmF1bHRZQW5nbGUsIHpBbmdsZSA9IGRlZmF1bHRaQW5nbGUpIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgICBjb25zdCB4QXhpc1ZlY3RvckFycmF5ID0gWzEsIDAsIDBdLFxuICAgICAgICAgIHlBeGlzVmVjdG9yQXJyYXkgPSBbMCwgMSwgMF0sXG4gICAgICAgICAgekF4aXNWZWN0b3JBcnJheSA9IFswLCAwLCAxXTtcblxuICAgIG1hdDQucm90YXRlKHRoaXMubWF0cml4LCB0aGlzLm1hdHJpeCwgeEFuZ2xlLCB4QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZSh0aGlzLm1hdHJpeCwgdGhpcy5tYXRyaXgsIHlBbmdsZSwgeUF4aXNWZWN0b3JBcnJheSk7XG4gICAgbWF0NC5yb3RhdGUodGhpcy5tYXRyaXgsIHRoaXMubWF0cml4LCB6QW5nbGUsIHpBeGlzVmVjdG9yQXJyYXkpO1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm90YXRpb247XG4iXX0=