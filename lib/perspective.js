'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 0.1,
    defaultZFar = 100.0;

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
    key: 'fromClientWidthAndClientHeight',
    value: function fromClientWidthAndClientHeight(clientWidth, clientHeight) {
      var aspectRatio = clientWidth / clientHeight,
          fieldOfView = defaultFieldOfView,
          zNear = defaultZNear,
          zFar = defaultZFar,
          matrix = mat4.create();

      mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

      var perspective = new Perspective(matrix);

      return perspective;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wZXJzcGVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRGaWVsZE9mVmlldyIsIk1hdGgiLCJQSSIsImRlZmF1bHRaTmVhciIsImRlZmF1bHRaRmFyIiwiUGVyc3BlY3RpdmUiLCJtYXRyaXgiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImFzcGVjdFJhdGlvIiwiZmllbGRPZlZpZXciLCJ6TmVhciIsInpGYXIiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztBQUVsQyxJQUFNQyxxQkFBcUIsS0FBS0MsS0FBS0MsRUFBVixHQUFlLEdBQTFDO0FBQUEsSUFDTUMsZUFBZSxHQURyQjtBQUFBLElBRU1DLGNBQWMsS0FGcEI7O0lBSU1DLFc7QUFDSix1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7bURBRXFDQyxXLEVBQWFDLFksRUFBYztBQUMvRCxVQUFNQyxjQUFjRixjQUFjQyxZQUFsQztBQUFBLFVBQ01FLGNBQWNWLGtCQURwQjtBQUFBLFVBRU1XLFFBQVFSLFlBRmQ7QUFBQSxVQUdNUyxPQUFPUixXQUhiO0FBQUEsVUFJTUUsU0FBU1IsS0FBS2UsTUFBTCxFQUpmOztBQU1BZixXQUFLZ0IsV0FBTCxDQUFpQlIsTUFBakIsRUFBeUJJLFdBQXpCLEVBQXNDRCxXQUF0QyxFQUFtREUsS0FBbkQsRUFBMERDLElBQTFEOztBQUVBLFVBQU1FLGNBQWMsSUFBSVQsV0FBSixDQUFnQkMsTUFBaEIsQ0FBcEI7O0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlgsV0FBakIiLCJmaWxlIjoicGVyc3BlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdEZpZWxkT2ZWaWV3ID0gNDUgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgZGVmYXVsdFpOZWFyID0gMC4xLFxuICAgICAgZGVmYXVsdFpGYXIgPSAxMDAuMDtcblxuY2xhc3MgUGVyc3BlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xpZW50V2lkdGhBbmRDbGllbnRIZWlnaHQoY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCkge1xuICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gY2xpZW50V2lkdGggLyBjbGllbnRIZWlnaHQsXG4gICAgICAgICAgZmllbGRPZlZpZXcgPSBkZWZhdWx0RmllbGRPZlZpZXcsXG4gICAgICAgICAgek5lYXIgPSBkZWZhdWx0Wk5lYXIsXG4gICAgICAgICAgekZhciA9IGRlZmF1bHRaRmFyLFxuICAgICAgICAgIG1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgICBtYXQ0LnBlcnNwZWN0aXZlKG1hdHJpeCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgICBjb25zdCBwZXJzcGVjdGl2ZSA9IG5ldyBQZXJzcGVjdGl2ZShtYXRyaXgpO1xuXG4gICAgcmV0dXJuIHBlcnNwZWN0aXZlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc3BlY3RpdmU7XG4iXX0=