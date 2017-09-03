'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4');

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 0.1,
    defaultZFar = 100.0;

var Perspective = function () {
  function Perspective(clientWidth, clientHeight) {
    var fieldOfView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFieldOfView;
    var zNear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultZNear;
    var zFar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultZFar;

    _classCallCheck(this, Perspective);

    this.matrix = mat4.create();

    var aspectRatio = clientWidth / clientHeight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wZXJzcGVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRGaWVsZE9mVmlldyIsIk1hdGgiLCJQSSIsImRlZmF1bHRaTmVhciIsImRlZmF1bHRaRmFyIiwiUGVyc3BlY3RpdmUiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImZpZWxkT2ZWaWV3Iiwiek5lYXIiLCJ6RmFyIiwibWF0cml4IiwiY3JlYXRlIiwiYXNwZWN0UmF0aW8iLCJwZXJzcGVjdGl2ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxJQUFNQyxxQkFBcUIsS0FBS0MsS0FBS0MsRUFBVixHQUFlLEdBQTFDO0FBQUEsSUFDTUMsZUFBZSxHQURyQjtBQUFBLElBRU1DLGNBQWMsS0FGcEI7O0lBSU1DLFc7QUFDSix1QkFBWUMsV0FBWixFQUF5QkMsWUFBekIsRUFBbUg7QUFBQSxRQUE1RUMsV0FBNEUsdUVBQTlEUixrQkFBOEQ7QUFBQSxRQUExQ1MsS0FBMEMsdUVBQWxDTixZQUFrQztBQUFBLFFBQXBCTyxJQUFvQix1RUFBYk4sV0FBYTs7QUFBQTs7QUFDakgsU0FBS08sTUFBTCxHQUFjYixLQUFLYyxNQUFMLEVBQWQ7O0FBRUEsUUFBTUMsY0FBY1AsY0FBY0MsWUFBbEM7O0FBRUFULFNBQUtnQixXQUFMLENBQWlCLEtBQUtILE1BQXRCLEVBQThCSCxXQUE5QixFQUEyQ0ssV0FBM0MsRUFBd0RKLEtBQXhELEVBQStEQyxJQUEvRDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCWCxXQUFqQiIsImZpbGUiOiJwZXJzcGVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTtcblxuY29uc3QgZGVmYXVsdEZpZWxkT2ZWaWV3ID0gNDUgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgZGVmYXVsdFpOZWFyID0gMC4xLFxuICAgICAgZGVmYXVsdFpGYXIgPSAxMDAuMDtcblxuY2xhc3MgUGVyc3BlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0LCBmaWVsZE9mVmlldyA9IGRlZmF1bHRGaWVsZE9mVmlldywgek5lYXIgPSBkZWZhdWx0Wk5lYXIsIHpGYXIgPSBkZWZhdWx0WkZhcikge1xuICAgIHRoaXMubWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcbiAgICBcbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGNsaWVudFdpZHRoIC8gY2xpZW50SGVpZ2h0O1xuXG4gICAgbWF0NC5wZXJzcGVjdGl2ZSh0aGlzLm1hdHJpeCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzcGVjdGl2ZTtcbiJdfQ==