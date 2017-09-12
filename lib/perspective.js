'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 0.1,
    defaultZFar = 100.0;

var Perspective = function () {
  function Perspective(clientWidth, clientHeight) {
    var fieldOfView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFieldOfView;
    var zNear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultZNear;
    var zFar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultZFar;

    _classCallCheck(this, Perspective);

    var aspectRatio = clientWidth / clientHeight;

    this.matrix = mat4.create();

    mat4.perspective(this.matrix, fieldOfView, aspectRatio, zNear, zFar);
  }

  _createClass(Perspective, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wZXJzcGVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRGaWVsZE9mVmlldyIsIk1hdGgiLCJQSSIsImRlZmF1bHRaTmVhciIsImRlZmF1bHRaRmFyIiwiUGVyc3BlY3RpdmUiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImZpZWxkT2ZWaWV3Iiwiek5lYXIiLCJ6RmFyIiwiYXNwZWN0UmF0aW8iLCJtYXRyaXgiLCJjcmVhdGUiLCJwZXJzcGVjdGl2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztBQUVsQyxJQUFNQyxxQkFBcUIsS0FBS0MsS0FBS0MsRUFBVixHQUFlLEdBQTFDO0FBQUEsSUFDTUMsZUFBZSxHQURyQjtBQUFBLElBRU1DLGNBQWMsS0FGcEI7O0lBSU1DLFc7QUFDSix1QkFBWUMsV0FBWixFQUF5QkMsWUFBekIsRUFBbUg7QUFBQSxRQUE1RUMsV0FBNEUsdUVBQTlEUixrQkFBOEQ7QUFBQSxRQUExQ1MsS0FBMEMsdUVBQWxDTixZQUFrQztBQUFBLFFBQXBCTyxJQUFvQix1RUFBYk4sV0FBYTs7QUFBQTs7QUFDakgsUUFBTU8sY0FBY0wsY0FBY0MsWUFBbEM7O0FBRUEsU0FBS0ssTUFBTCxHQUFjZCxLQUFLZSxNQUFMLEVBQWQ7O0FBRUFmLFNBQUtnQixXQUFMLENBQWlCLEtBQUtGLE1BQXRCLEVBQThCSixXQUE5QixFQUEyQ0csV0FBM0MsRUFBd0RGLEtBQXhELEVBQStEQyxJQUEvRDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRSxNQUFaO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCWCxXQUFqQiIsImZpbGUiOiJwZXJzcGVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0RmllbGRPZlZpZXcgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICBkZWZhdWx0Wk5lYXIgPSAwLjEsXG4gICAgICBkZWZhdWx0WkZhciA9IDEwMC4wO1xuXG5jbGFzcyBQZXJzcGVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQsIGZpZWxkT2ZWaWV3ID0gZGVmYXVsdEZpZWxkT2ZWaWV3LCB6TmVhciA9IGRlZmF1bHRaTmVhciwgekZhciA9IGRlZmF1bHRaRmFyKSB7XG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSBjbGllbnRXaWR0aCAvIGNsaWVudEhlaWdodDtcblxuICAgIHRoaXMubWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIG1hdDQucGVyc3BlY3RpdmUodGhpcy5tYXRyaXgsIGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc3BlY3RpdmU7XG4iXX0=