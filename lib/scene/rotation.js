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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9yb3RhdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImNyZWF0ZSIsInJvdGF0ZSIsImRlZmF1bHRYQW5nbGUiLCJkZWZhdWx0WUFuZ2xlIiwiZGVmYXVsdFpBbmdsZSIsIlJvdGF0aW9uIiwieEFuZ2xlIiwieUFuZ2xlIiwiekFuZ2xlIiwicm90YXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWIsQyxDQUFrQzs7SUFFMUJDLE0sR0FBbUJGLEksQ0FBbkJFLE07SUFBUUMsTSxHQUFXSCxJLENBQVhHLE07OztBQUVoQixJQUFNQyxnQkFBZ0IsR0FBdEI7QUFBQSxJQUNNQyxnQkFBZ0IsR0FEdEI7QUFBQSxJQUVNQyxnQkFBZ0IsR0FGdEI7O0lBSU1DLFE7QUFDSixvQkFBWVAsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7Z0RBRXdHO0FBQUEsVUFBeEVRLE1BQXdFLHVFQUEvREosYUFBK0Q7QUFBQSxVQUFoREssTUFBZ0QsdUVBQXZDSixhQUF1QztBQUFBLFVBQXhCSyxNQUF3Qix1RUFBZkosYUFBZTs7QUFDdkcsVUFBTU4sT0FBT0UsUUFBYjtBQUFBLFVBQ01TLFdBQVcsSUFBSUosUUFBSixDQUFhUCxJQUFiLENBRGpCOztBQUdBRyxhQUFPSCxJQUFQLEVBQWFBLElBQWIsRUFBbUJRLE1BQW5CLEVBQTJCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQTNCO0FBQ0FMLGFBQU9ILElBQVAsRUFBYUEsSUFBYixFQUFtQlMsTUFBbkIsRUFBMkIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBM0I7QUFDQU4sYUFBT0gsSUFBUCxFQUFhQSxJQUFiLEVBQW1CVSxNQUFuQixFQUEyQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUEzQjs7QUFFQSxhQUFPQyxRQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTixRQUFqQiIsImZpbGUiOiJyb3RhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCB7IGNyZWF0ZSwgcm90YXRlIH0gPSBtYXQ0O1xuXG5jb25zdCBkZWZhdWx0WEFuZ2xlID0gMC4wLFxuICAgICAgZGVmYXVsdFlBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRaQW5nbGUgPSAwLjA7XG5cbmNsYXNzIFJvdGF0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0NCkge1xuICAgIHRoaXMubWF0NCA9IG1hdDQ7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXQ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlID0gZGVmYXVsdFhBbmdsZSwgeUFuZ2xlID0gZGVmYXVsdFlBbmdsZSwgekFuZ2xlID0gZGVmYXVsdFpBbmdsZSkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbiA9IG5ldyBSb3RhdGlvbihtYXQ0KTtcblxuICAgIHJvdGF0ZShtYXQ0LCBtYXQ0LCB4QW5nbGUsIFsxLCAwLCAwXSk7XG4gICAgcm90YXRlKG1hdDQsIG1hdDQsIHlBbmdsZSwgWzAsIDEsIDBdKTtcbiAgICByb3RhdGUobWF0NCwgbWF0NCwgekFuZ2xlLCBbMCwgMCwgMV0pO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm90YXRpb247XG4iXX0=