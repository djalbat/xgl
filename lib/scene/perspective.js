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
          matrix = mat4.create();

      mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

      var perspective = new Perspective(matrix);

      return perspective;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9wZXJzcGVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRGaWVsZE9mVmlldyIsIk1hdGgiLCJQSSIsImRlZmF1bHRaTmVhciIsImRlZmF1bHRaRmFyIiwiUGVyc3BlY3RpdmUiLCJtYXRyaXgiLCJ3aWR0aCIsImhlaWdodCIsImFzcGVjdFJhdGlvIiwiZmllbGRPZlZpZXciLCJ6TmVhciIsInpGYXIiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztBQUVsQyxJQUFNQyxxQkFBcUIsS0FBS0MsS0FBS0MsRUFBVixHQUFlLEdBQTFDO0FBQUEsSUFDTUMsZUFBZSxDQURyQjtBQUFBLElBRU1DLGNBQWMsTUFGcEI7O0lBSU1DLFc7QUFDSix1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7dUNBRXlCQyxLLEVBQU9DLE0sRUFBUTtBQUN2QyxVQUFNQyxjQUFjRixRQUFRQyxNQUE1QjtBQUFBLFVBQ01FLGNBQWNWLGtCQURwQjtBQUFBLFVBRU1XLFFBQVFSLFlBRmQ7QUFBQSxVQUdNUyxPQUFPUixXQUhiO0FBQUEsVUFJTUUsU0FBU1IsS0FBS2UsTUFBTCxFQUpmOztBQU1BZixXQUFLZ0IsV0FBTCxDQUFpQlIsTUFBakIsRUFBeUJJLFdBQXpCLEVBQXNDRCxXQUF0QyxFQUFtREUsS0FBbkQsRUFBMERDLElBQTFEOztBQUVBLFVBQU1FLGNBQWMsSUFBSVQsV0FBSixDQUFnQkMsTUFBaEIsQ0FBcEI7O0FBRUEsYUFBT1EsV0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlgsV0FBakIiLCJmaWxlIjoicGVyc3BlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdEZpZWxkT2ZWaWV3ID0gNDUgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgZGVmYXVsdFpOZWFyID0gMSxcbiAgICAgIGRlZmF1bHRaRmFyID0gMTAwMC4wO1xuXG5jbGFzcyBQZXJzcGVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICBmaWVsZE9mVmlldyA9IGRlZmF1bHRGaWVsZE9mVmlldyxcbiAgICAgICAgICB6TmVhciA9IGRlZmF1bHRaTmVhcixcbiAgICAgICAgICB6RmFyID0gZGVmYXVsdFpGYXIsXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIG1hdDQucGVyc3BlY3RpdmUobWF0cml4LCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICAgIGNvbnN0IHBlcnNwZWN0aXZlID0gbmV3IFBlcnNwZWN0aXZlKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gcGVyc3BlY3RpdmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzcGVjdGl2ZTtcbiJdfQ==