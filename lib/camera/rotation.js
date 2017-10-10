'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    rotate = mat4.rotate;


var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 0.0;

var Rotation = function () {
  function Rotation(mat4) {
    _classCallCheck(this, Rotation);

    this.mat4 = mat4;
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromXAngleYAngleAndZAngle',
    value: function fromXAngleYAngleAndZAngle() {
      var xAngle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXAngle;
      var yAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYAngle;
      var zAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZAngle;

      var mat4 = create(),
          rotation = new Rotation(mat4);

      rotate(mat4, mat4, xAngle, [1, 0, 0]);
      rotate(mat4, mat4, yAngle, [0, 1, 0]);
      rotate(mat4, mat4, zAngle, [0, 0, 1]);

      return rotation;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcm90YXRpb24uanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJjcmVhdGUiLCJyb3RhdGUiLCJkZWZhdWx0WEFuZ2xlIiwiZGVmYXVsdFlBbmdsZSIsImRlZmF1bHRaQW5nbGUiLCJSb3RhdGlvbiIsInhBbmdsZSIsInlBbmdsZSIsInpBbmdsZSIsInJvdGF0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0lBRTFCQyxNLEdBQW1CRixJLENBQW5CRSxNO0lBQVFDLE0sR0FBV0gsSSxDQUFYRyxNOzs7QUFFaEIsSUFBTUMsZ0JBQWdCLEdBQXRCO0FBQUEsSUFDTUMsZ0JBQWdCLEdBRHRCO0FBQUEsSUFFTUMsZ0JBQWdCLEdBRnRCOztJQUlNQyxRO0FBQ0osb0JBQVlQLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLElBQVo7QUFDRDs7O2dEQUV3RztBQUFBLFVBQXhFUSxNQUF3RSx1RUFBL0RKLGFBQStEO0FBQUEsVUFBaERLLE1BQWdELHVFQUF2Q0osYUFBdUM7QUFBQSxVQUF4QkssTUFBd0IsdUVBQWZKLGFBQWU7O0FBQ3ZHLFVBQU1OLE9BQU9FLFFBQWI7QUFBQSxVQUNNUyxXQUFXLElBQUlKLFFBQUosQ0FBYVAsSUFBYixDQURqQjs7QUFHQUcsYUFBT0gsSUFBUCxFQUFhQSxJQUFiLEVBQW1CUSxNQUFuQixFQUEyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUEzQjtBQUNBTCxhQUFPSCxJQUFQLEVBQWFBLElBQWIsRUFBbUJTLE1BQW5CLEVBQTJCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTNCO0FBQ0FOLGFBQU9ILElBQVAsRUFBYUEsSUFBYixFQUFtQlUsTUFBbkIsRUFBMkIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBM0I7O0FBRUEsYUFBT0MsUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQk4sUUFBakIiLCJmaWxlIjoicm90YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgeyBjcmVhdGUsIHJvdGF0ZSB9ID0gbWF0NDtcblxuY29uc3QgZGVmYXVsdFhBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRZQW5nbGUgPSAwLjAsXG4gICAgICBkZWZhdWx0WkFuZ2xlID0gMC4wO1xuXG5jbGFzcyBSb3RhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSA9IGRlZmF1bHRYQW5nbGUsIHlBbmdsZSA9IGRlZmF1bHRZQW5nbGUsIHpBbmdsZSA9IGRlZmF1bHRaQW5nbGUpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgcm90YXRpb24gPSBuZXcgUm90YXRpb24obWF0NCk7XG5cbiAgICByb3RhdGUobWF0NCwgbWF0NCwgeEFuZ2xlLCBbMSwgMCwgMF0pO1xuICAgIHJvdGF0ZShtYXQ0LCBtYXQ0LCB5QW5nbGUsIFswLCAxLCAwXSk7XG4gICAgcm90YXRlKG1hdDQsIG1hdDQsIHpBbmdsZSwgWzAsIDAsIDFdKTtcblxuICAgIHJldHVybiByb3RhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdGF0aW9uO1xuIl19