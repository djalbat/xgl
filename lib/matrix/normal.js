'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matrix = require('../matrix'),
    matrixUtilities = require('../utilities/matrix');

var identity4 = matrixUtilities.identity4,
    invert4 = matrixUtilities.invert4,
    transpose4 = matrixUtilities.transpose4;

var NormalMatrix = function (_Matrix) {
  _inherits(NormalMatrix, _Matrix);

  function NormalMatrix() {
    _classCallCheck(this, NormalMatrix);

    return _possibleConstructorReturn(this, (NormalMatrix.__proto__ || Object.getPrototypeOf(NormalMatrix)).apply(this, arguments));
  }

  _createClass(NormalMatrix, null, [{
    key: 'fromRotationMatrix',
    value: function fromRotationMatrix(rotationMatrix) {
      rotationMatrix = rotationMatrix.getMat4(); ///

      var matrix = identity4();

      matrix = invert4(matrix, rotationMatrix);

      matrix = transpose4(matrix);

      var normalMatrix = new NormalMatrix(matrix);

      return normalMatrix;
    }
  }]);

  return NormalMatrix;
}(Matrix);

module.exports = NormalMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvbm9ybWFsLmpzIl0sIm5hbWVzIjpbIk1hdHJpeCIsInJlcXVpcmUiLCJtYXRyaXhVdGlsaXRpZXMiLCJpZGVudGl0eTQiLCJpbnZlcnQ0IiwidHJhbnNwb3NlNCIsIk5vcm1hbE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwiZ2V0TWF0NCIsIm1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7O0lBR1FFLFMsR0FBbUNELGUsQ0FBbkNDLFM7SUFBV0MsTyxHQUF3QkYsZSxDQUF4QkUsTztJQUFTQyxVLEdBQWVILGUsQ0FBZkcsVTs7SUFFdEJDLFk7Ozs7Ozs7Ozs7O3VDQUNzQkMsYyxFQUFnQjtBQUN4Q0EsdUJBQWlCQSxlQUFlQyxPQUFmLEVBQWpCLENBRHdDLENBQ0k7O0FBRTVDLFVBQUlDLFNBQVNOLFdBQWI7O0FBRUFNLGVBQVNMLFFBQVFLLE1BQVIsRUFBZ0JGLGNBQWhCLENBQVQ7O0FBRUFFLGVBQVNKLFdBQVdJLE1BQVgsQ0FBVDs7QUFFQSxVQUFNQyxlQUFlLElBQUlKLFlBQUosQ0FBaUJHLE1BQWpCLENBQXJCOztBQUVBLGFBQU9DLFlBQVA7QUFDRDs7OztFQWJ3QlYsTTs7QUFnQjNCVyxPQUFPQyxPQUFQLEdBQWlCTixZQUFqQiIsImZpbGUiOiJub3JtYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1hdHJpeCA9IHJlcXVpcmUoJy4uL21hdHJpeCcpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IGlkZW50aXR5NCwgaW52ZXJ0NCwgdHJhbnNwb3NlNCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jbGFzcyBOb3JtYWxNYXRyaXggZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSB7XG4gICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeC5nZXRNYXQ0KCk7ICAvLy9cblxuICAgIGxldCBtYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICAgIG1hdHJpeCA9IGludmVydDQobWF0cml4LCByb3RhdGlvbk1hdHJpeCk7XG5cbiAgICBtYXRyaXggPSB0cmFuc3Bvc2U0KG1hdHJpeCk7XG5cbiAgICBjb25zdCBub3JtYWxNYXRyaXggPSBuZXcgTm9ybWFsTWF0cml4KG1hdHJpeCk7XG5cbiAgICByZXR1cm4gbm9ybWFsTWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsTWF0cml4O1xuIl19