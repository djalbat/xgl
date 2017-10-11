'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    invert = mat4.invert,
    transpose = mat4.transpose;

var NormalMatrix = function (_Matrix) {
      _inherits(NormalMatrix, _Matrix);

      function NormalMatrix() {
            _classCallCheck(this, NormalMatrix);

            return _possibleConstructorReturn(this, (NormalMatrix.__proto__ || Object.getPrototypeOf(NormalMatrix)).apply(this, arguments));
      }

      _createClass(NormalMatrix, null, [{
            key: 'fromRotationMatrix',
            value: function fromRotationMatrix(rotationMatrix) {
                  var mat4 = create(),
                      rotationMat4 = rotationMatrix.getMat4(),
                      normalMatrix = new NormalMatrix(mat4);

                  invert(mat4, rotationMat4);

                  transpose(mat4, mat4);

                  return normalMatrix;
            }
      }]);

      return NormalMatrix;
}(Matrix);

module.exports = NormalMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvbm9ybWFsLmpzIl0sIm5hbWVzIjpbIm1hdDQiLCJyZXF1aXJlIiwiTWF0cml4IiwiY3JlYXRlIiwiaW52ZXJ0IiwidHJhbnNwb3NlIiwiTm9ybWFsTWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJyb3RhdGlvbk1hdDQiLCJnZXRNYXQ0Iiwibm9ybWFsTWF0cml4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGVBQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsV0FBUixDQURmOztJQUdRRSxNLEdBQThCSCxJLENBQTlCRyxNO0lBQVFDLE0sR0FBc0JKLEksQ0FBdEJJLE07SUFBUUMsUyxHQUFjTCxJLENBQWRLLFM7O0lBRWxCQyxZOzs7Ozs7Ozs7OzsrQ0FDc0JDLGMsRUFBZ0I7QUFDeEMsc0JBQU1QLE9BQU9HLFFBQWI7QUFBQSxzQkFDTUssZUFBZUQsZUFBZUUsT0FBZixFQURyQjtBQUFBLHNCQUVNQyxlQUFlLElBQUlKLFlBQUosQ0FBaUJOLElBQWpCLENBRnJCOztBQUlBSSx5QkFBT0osSUFBUCxFQUFhUSxZQUFiOztBQUVBSCw0QkFBVUwsSUFBVixFQUFnQkEsSUFBaEI7O0FBRUEseUJBQU9VLFlBQVA7QUFDRDs7OztFQVh3QlIsTTs7QUFjM0JTLE9BQU9DLE9BQVAsR0FBaUJOLFlBQWpCIiwiZmlsZSI6Im5vcm1hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJy4uL21hdGhzL21hdDQnKSxcbiAgICAgIE1hdHJpeCA9IHJlcXVpcmUoJy4uL21hdHJpeCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgaW52ZXJ0LCB0cmFuc3Bvc2UgfSA9IG1hdDQ7XG5cbmNsYXNzIE5vcm1hbE1hdHJpeCBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBmcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgcm90YXRpb25NYXQ0ID0gcm90YXRpb25NYXRyaXguZ2V0TWF0NCgpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IG5ldyBOb3JtYWxNYXRyaXgobWF0NCk7XG5cbiAgICBpbnZlcnQobWF0NCwgcm90YXRpb25NYXQ0KTtcbiAgICBcbiAgICB0cmFuc3Bvc2UobWF0NCwgbWF0NCk7XG4gICAgXG4gICAgcmV0dXJuIG5vcm1hbE1hdHJpeDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vcm1hbE1hdHJpeDtcbiJdfQ==