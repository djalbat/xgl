'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 1,
    defaultZFar = 1000.0;

var Perspective = function () {
  function Perspective(matrix) {
    _classCallCheck(this, Perspective);

    this.matrix = matrix;
  }

  _createClass(Perspective, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromWidthAndHeight',
    value: function fromWidthAndHeight(width, height) {
      var aspectRatio = width / height,
          fieldOfView = defaultFieldOfView,
          zNear = defaultZNear,
          zFar = defaultZFar,
          matrix = mat4.create(),
          perspective = new Perspective(matrix);

      mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

      return perspective;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9wZXJzcGVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRGaWVsZE9mVmlldyIsIk1hdGgiLCJQSSIsImRlZmF1bHRaTmVhciIsImRlZmF1bHRaRmFyIiwiUGVyc3BlY3RpdmUiLCJtYXRyaXgiLCJ3aWR0aCIsImhlaWdodCIsImFzcGVjdFJhdGlvIiwiZmllbGRPZlZpZXciLCJ6TmVhciIsInpGYXIiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztBQUVsQyxJQUFNQyxxQkFBcUIsS0FBS0MsS0FBS0MsRUFBVixHQUFlLEdBQTFDO0FBQUEsSUFDTUMsZUFBZSxDQURyQjtBQUFBLElBRU1DLGNBQWMsTUFGcEI7O0lBSU1DLFc7QUFDSix1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7dUNBRXlCQyxLLEVBQU9DLE0sRUFBUTtBQUN2QyxVQUFNQyxjQUFjRixRQUFRQyxNQUE1QjtBQUFBLFVBQ01FLGNBQWNWLGtCQURwQjtBQUFBLFVBRU1XLFFBQVFSLFlBRmQ7QUFBQSxVQUdNUyxPQUFPUixXQUhiO0FBQUEsVUFJTUUsU0FBU1IsS0FBS2UsTUFBTCxFQUpmO0FBQUEsVUFLTUMsY0FBYyxJQUFJVCxXQUFKLENBQWdCQyxNQUFoQixDQUxwQjs7QUFPQVIsV0FBS2dCLFdBQUwsQ0FBaUJSLE1BQWpCLEVBQXlCSSxXQUF6QixFQUFzQ0QsV0FBdEMsRUFBbURFLEtBQW5ELEVBQTBEQyxJQUExRDs7QUFFQSxhQUFPRSxXQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCWCxXQUFqQiIsImZpbGUiOiJwZXJzcGVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0RmllbGRPZlZpZXcgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICBkZWZhdWx0Wk5lYXIgPSAxLFxuICAgICAgZGVmYXVsdFpGYXIgPSAxMDAwLjA7XG5cbmNsYXNzIFBlcnNwZWN0aXZlIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICAgIGZpZWxkT2ZWaWV3ID0gZGVmYXVsdEZpZWxkT2ZWaWV3LFxuICAgICAgICAgIHpOZWFyID0gZGVmYXVsdFpOZWFyLFxuICAgICAgICAgIHpGYXIgPSBkZWZhdWx0WkZhcixcbiAgICAgICAgICBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlID0gbmV3IFBlcnNwZWN0aXZlKG1hdHJpeCk7XG5cbiAgICBtYXQ0LnBlcnNwZWN0aXZlKG1hdHJpeCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgICByZXR1cm4gcGVyc3BlY3RpdmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzcGVjdGl2ZTtcbiJdfQ==