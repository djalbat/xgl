'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matrix = require('../matrix'),
    matrixUtilities = require('../utilities/matrix');

var identity4 = matrixUtilities.identity4,
    rotate4 = matrixUtilities.rotate4;

var RotationMatrix = function (_Matrix) {
  _inherits(RotationMatrix, _Matrix);

  function RotationMatrix() {
    _classCallCheck(this, RotationMatrix);

    return _possibleConstructorReturn(this, (RotationMatrix.__proto__ || Object.getPrototypeOf(RotationMatrix)).apply(this, arguments));
  }

  _createClass(RotationMatrix, null, [{
    key: 'fromAngles',
    value: function fromAngles(angles) {
      var xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          zAngle = angles.getZAngle(),
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotationMatrix;
    }
  }, {
    key: 'fromXAngleYAngleAndZAngle',
    value: function fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
      var matrix = identity4();

      matrix = rotate4(matrix, xAngle, [1, 0, 0]);
      matrix = rotate4(matrix, yAngle, [0, 1, 0]);
      matrix = rotate4(matrix, zAngle, [0, 0, 1]);

      var rotationMatrix = new RotationMatrix(matrix);

      return rotationMatrix;
    }
  }]);

  return RotationMatrix;
}(Matrix);

module.exports = RotationMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvcm90YXRpb24uanMiXSwibmFtZXMiOlsiTWF0cml4IiwicmVxdWlyZSIsIm1hdHJpeFV0aWxpdGllcyIsImlkZW50aXR5NCIsInJvdGF0ZTQiLCJSb3RhdGlvbk1hdHJpeCIsImFuZ2xlcyIsInhBbmdsZSIsImdldFhBbmdsZSIsInlBbmdsZSIsImdldFlBbmdsZSIsInpBbmdsZSIsImdldFpBbmdsZSIsInJvdGF0aW9uTWF0cml4IiwiZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSIsIm1hdHJpeCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR1FFLFMsR0FBdUJELGUsQ0FBdkJDLFM7SUFBV0MsTyxHQUFZRixlLENBQVpFLE87O0lBRWJDLGM7Ozs7Ozs7Ozs7OytCQUNjQyxNLEVBQVE7QUFDeEIsVUFBTUMsU0FBU0QsT0FBT0UsU0FBUCxFQUFmO0FBQUEsVUFDTUMsU0FBU0gsT0FBT0ksU0FBUCxFQURmO0FBQUEsVUFFTUMsU0FBU0wsT0FBT00sU0FBUCxFQUZmO0FBQUEsVUFHTUMsaUJBQWlCUixlQUFlUyx5QkFBZixDQUF5Q1AsTUFBekMsRUFBaURFLE1BQWpELEVBQXlERSxNQUF6RCxDQUh2Qjs7QUFLQSxhQUFPRSxjQUFQO0FBQ0Q7Ozs4Q0FFZ0NOLE0sRUFBUUUsTSxFQUFRRSxNLEVBQVE7QUFDdkQsVUFBSUksU0FBU1osV0FBYjs7QUFFQVksZUFBU1gsUUFBUVcsTUFBUixFQUFnQlIsTUFBaEIsRUFBd0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBeEIsQ0FBVDtBQUNBUSxlQUFTWCxRQUFRVyxNQUFSLEVBQWdCTixNQUFoQixFQUF3QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF4QixDQUFUO0FBQ0FNLGVBQVNYLFFBQVFXLE1BQVIsRUFBZ0JKLE1BQWhCLEVBQXdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXhCLENBQVQ7O0FBRUEsVUFBTUUsaUJBQWlCLElBQUlSLGNBQUosQ0FBbUJVLE1BQW5CLENBQXZCOztBQUVBLGFBQU9GLGNBQVA7QUFDRDs7OztFQXBCMEJiLE07O0FBdUI3QmdCLE9BQU9DLE9BQVAsR0FBaUJaLGNBQWpCIiwiZmlsZSI6InJvdGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyBpZGVudGl0eTQsIHJvdGF0ZTQgfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY2xhc3MgUm90YXRpb25NYXRyaXggZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZnJvbUFuZ2xlcyhhbmdsZXMpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IGFuZ2xlcy5nZXRaQW5nbGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IFJvdGF0aW9uTWF0cml4LmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSk7XG5cbiAgICByZXR1cm4gcm90YXRpb25NYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSB7XG4gICAgbGV0IG1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gICAgbWF0cml4ID0gcm90YXRlNChtYXRyaXgsIHhBbmdsZSwgWzEsIDAsIDBdKTtcbiAgICBtYXRyaXggPSByb3RhdGU0KG1hdHJpeCwgeUFuZ2xlLCBbMCwgMSwgMF0pO1xuICAgIG1hdHJpeCA9IHJvdGF0ZTQobWF0cml4LCB6QW5nbGUsIFswLCAwLCAxXSk7XG5cbiAgICBjb25zdCByb3RhdGlvbk1hdHJpeCA9IG5ldyBSb3RhdGlvbk1hdHJpeChtYXRyaXgpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uTWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm90YXRpb25NYXRyaXg7XG4iXX0=