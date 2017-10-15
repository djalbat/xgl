'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    translate = mat4.translate;

var PositionMatrix = function (_Matrix) {
      _inherits(PositionMatrix, _Matrix);

      function PositionMatrix() {
            _classCallCheck(this, PositionMatrix);

            return _possibleConstructorReturn(this, (PositionMatrix.__proto__ || Object.getPrototypeOf(PositionMatrix)).apply(this, arguments));
      }

      _createClass(PositionMatrix, null, [{
            key: 'fromDistance',
            value: function fromDistance(distance) {
                  var x = 0,
                      y = 0,
                      z = -distance,
                      ///
                  positionMatrix = PositionMatrix.fromCoordinates(x, y, z);

                  return positionMatrix;
            }
      }, {
            key: 'fromCoordinates',
            value: function fromCoordinates(x, y, z) {
                  var mat4 = create(),
                      positionMatrix = new PositionMatrix(mat4);

                  translate(mat4, mat4, [x, y, z]);

                  return positionMatrix;
            }
      }]);

      return PositionMatrix;
}(Matrix);

module.exports = PositionMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvcG9zaXRpb24uanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJNYXRyaXgiLCJjcmVhdGUiLCJ0cmFuc2xhdGUiLCJQb3NpdGlvbk1hdHJpeCIsImRpc3RhbmNlIiwieCIsInkiLCJ6IiwicG9zaXRpb25NYXRyaXgiLCJmcm9tQ29vcmRpbmF0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxXQUFSLENBRGY7O0lBR1FFLE0sR0FBc0JILEksQ0FBdEJHLE07SUFBUUMsUyxHQUFjSixJLENBQWRJLFM7O0lBRVZDLGM7Ozs7Ozs7Ozs7O3lDQUNnQkMsUSxFQUFVO0FBQzVCLHNCQUFNQyxJQUFJLENBQVY7QUFBQSxzQkFDTUMsSUFBSSxDQURWO0FBQUEsc0JBRU1DLElBQUksQ0FBQ0gsUUFGWDtBQUFBLHNCQUVxQjtBQUNmSSxtQ0FBaUJMLGVBQWVNLGVBQWYsQ0FBK0JKLENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQ0MsQ0FBckMsQ0FIdkI7O0FBS0EseUJBQU9DLGNBQVA7QUFDRDs7OzRDQUVzQkgsQyxFQUFHQyxDLEVBQUdDLEMsRUFBRztBQUM5QixzQkFBTVQsT0FBT0csUUFBYjtBQUFBLHNCQUNNTyxpQkFBaUIsSUFBSUwsY0FBSixDQUFtQkwsSUFBbkIsQ0FEdkI7O0FBR0FJLDRCQUFVSixJQUFWLEVBQWdCQSxJQUFoQixFQUFzQixDQUFFTyxDQUFGLEVBQUtDLENBQUwsRUFBUUMsQ0FBUixDQUF0Qjs7QUFFQSx5QkFBT0MsY0FBUDtBQUNEOzs7O0VBakIwQlIsTTs7QUFvQjdCVSxPQUFPQyxPQUFQLEdBQWlCUixjQUFqQiIsImZpbGUiOiJwb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJy4uL21hdGhzL21hdDQnKSxcbiAgICAgIE1hdHJpeCA9IHJlcXVpcmUoJy4uL21hdHJpeCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgdHJhbnNsYXRlIH0gPSBtYXQ0O1xuXG5jbGFzcyBQb3NpdGlvbk1hdHJpeCBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBmcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICB6ID0gLWRpc3RhbmNlLCAvLy9cbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IFBvc2l0aW9uTWF0cml4LmZyb21Db29yZGluYXRlcyh4LCB5LCB6KTtcblxuICAgIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoeCwgeSwgeikge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IG5ldyBQb3NpdGlvbk1hdHJpeChtYXQ0KTtcblxuICAgIHRyYW5zbGF0ZShtYXQ0LCBtYXQ0LCBbIHgsIHksIHogXSk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbk1hdHJpeDtcbiJdfQ==