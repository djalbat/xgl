'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 0.0,
    xAxisVectorArray = [1, 0, 0],
    yAxisVectorArray = [0, 1, 0],
    zAxisVectorArray = [0, 0, 1];

var Rotation = function () {
  function Rotation(matrix) {
    _classCallCheck(this, Rotation);

    this.matrix = matrix;
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var xAngle = defaultXAngle,
          yAngle = defaultYAngle,
          zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngle',
    value: function fromXAngle(xAngle) {
      var yAngle = defaultYAngle,
          zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleAndYAngle',
    value: function fromXAngleAndYAngle(xAngle, yAngle) {
      var zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleAndZAngle',
    value: function fromXAngleAndZAngle(xAngle, zAngle) {
      var yAngle = defaultYAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleYAngleAndZAngle',
    value: function fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
      var matrix = mat4.create();

      mat4.rotate(matrix, matrix, xAngle, xAxisVectorArray);
      mat4.rotate(matrix, matrix, yAngle, yAxisVectorArray);
      mat4.rotate(matrix, matrix, zAngle, zAxisVectorArray);

      var rotation = new Rotation(matrix);

      return rotation;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yb3RhdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYQW5nbGUiLCJkZWZhdWx0WUFuZ2xlIiwiZGVmYXVsdFpBbmdsZSIsInhBeGlzVmVjdG9yQXJyYXkiLCJ5QXhpc1ZlY3RvckFycmF5IiwiekF4aXNWZWN0b3JBcnJheSIsIlJvdGF0aW9uIiwibWF0cml4IiwieEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwicm90YXRpb24iLCJmcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlIiwiY3JlYXRlIiwicm90YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0FBRWxDLElBQU1DLGdCQUFnQixHQUF0QjtBQUFBLElBQ01DLGdCQUFnQixHQUR0QjtBQUFBLElBRU1DLGdCQUFnQixHQUZ0QjtBQUFBLElBR01DLG1CQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUh6QjtBQUFBLElBSU1DLG1CQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUp6QjtBQUFBLElBS01DLG1CQUFtQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUx6Qjs7SUFPTUMsUTtBQUNKLG9CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUMsU0FBU1IsYUFBZjtBQUFBLFVBQ01TLFNBQVNSLGFBRGY7QUFBQSxVQUVNUyxTQUFTUixhQUZmO0FBQUEsVUFHTVMsV0FBV0wsU0FBU00seUJBQVQsQ0FBbUNKLE1BQW5DLEVBQTJDQyxNQUEzQyxFQUFtREMsTUFBbkQsQ0FIakI7O0FBS0EsYUFBT0MsUUFBUDtBQUNEOzs7K0JBRWlCSCxNLEVBQVE7QUFDeEIsVUFBTUMsU0FBU1IsYUFBZjtBQUFBLFVBQ01TLFNBQVNSLGFBRGY7QUFBQSxVQUVNUyxXQUFXTCxTQUFTTSx5QkFBVCxDQUFtQ0osTUFBbkMsRUFBMkNDLE1BQTNDLEVBQW1EQyxNQUFuRCxDQUZqQjs7QUFJQSxhQUFPQyxRQUFQO0FBQ0Q7Ozt3Q0FFMEJILE0sRUFBUUMsTSxFQUFRO0FBQ3pDLFVBQU1DLFNBQVNSLGFBQWY7QUFBQSxVQUNNUyxXQUFXTCxTQUFTTSx5QkFBVCxDQUFtQ0osTUFBbkMsRUFBMkNDLE1BQTNDLEVBQW1EQyxNQUFuRCxDQURqQjs7QUFHQSxhQUFPQyxRQUFQO0FBQ0Q7Ozt3Q0FFMEJILE0sRUFBUUUsTSxFQUFRO0FBQ3pDLFVBQU1ELFNBQVNSLGFBQWY7QUFBQSxVQUNNVSxXQUFXTCxTQUFTTSx5QkFBVCxDQUFtQ0osTUFBbkMsRUFBMkNDLE1BQTNDLEVBQW1EQyxNQUFuRCxDQURqQjs7QUFHQSxhQUFPQyxRQUFQO0FBQ0Q7Ozs4Q0FFZ0NILE0sRUFBUUMsTSxFQUFRQyxNLEVBQVE7QUFDdkQsVUFBTUgsU0FBU1QsS0FBS2UsTUFBTCxFQUFmOztBQUVBZixXQUFLZ0IsTUFBTCxDQUFZUCxNQUFaLEVBQW9CQSxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NMLGdCQUFwQztBQUNBTCxXQUFLZ0IsTUFBTCxDQUFZUCxNQUFaLEVBQW9CQSxNQUFwQixFQUE0QkUsTUFBNUIsRUFBb0NMLGdCQUFwQztBQUNBTixXQUFLZ0IsTUFBTCxDQUFZUCxNQUFaLEVBQW9CQSxNQUFwQixFQUE0QkcsTUFBNUIsRUFBb0NMLGdCQUFwQzs7QUFFQSxVQUFNTSxXQUFXLElBQUlMLFFBQUosQ0FBYUMsTUFBYixDQUFqQjs7QUFFQSxhQUFPSSxRQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCVixRQUFqQiIsImZpbGUiOiJyb3RhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WEFuZ2xlID0gMC4wLFxuICAgICAgZGVmYXVsdFlBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRaQW5nbGUgPSAwLjAsXG4gICAgICB4QXhpc1ZlY3RvckFycmF5ID0gWzEsIDAsIDBdLFxuICAgICAgeUF4aXNWZWN0b3JBcnJheSA9IFswLCAxLCAwXSxcbiAgICAgIHpBeGlzVmVjdG9yQXJyYXkgPSBbMCwgMCwgMV07XG5cbmNsYXNzIFJvdGF0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gZGVmYXVsdFhBbmdsZSxcbiAgICAgICAgICB5QW5nbGUgPSBkZWZhdWx0WUFuZ2xlLFxuICAgICAgICAgIHpBbmdsZSA9IGRlZmF1bHRaQW5nbGUsXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGUoeEFuZ2xlKSB7XG4gICAgY29uc3QgeUFuZ2xlID0gZGVmYXVsdFlBbmdsZSxcbiAgICAgICAgICB6QW5nbGUgPSBkZWZhdWx0WkFuZ2xlLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKTtcblxuICAgIHJldHVybiByb3RhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWEFuZ2xlQW5kWUFuZ2xlKHhBbmdsZSwgeUFuZ2xlKSB7XG4gICAgY29uc3QgekFuZ2xlID0gZGVmYXVsdFpBbmdsZSxcbiAgICAgICAgICByb3RhdGlvbiA9IFJvdGF0aW9uLmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSk7XG5cbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSkge1xuICAgIGNvbnN0IHlBbmdsZSA9IGRlZmF1bHRZQW5nbGUsXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSkge1xuICAgIGNvbnN0IG1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgeEFuZ2xlLCB4QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgeUFuZ2xlLCB5QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgekFuZ2xlLCB6QXhpc1ZlY3RvckFycmF5KTtcblxuICAgIGNvbnN0IHJvdGF0aW9uID0gbmV3IFJvdGF0aW9uKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3RhdGlvbjtcbiJdfQ==