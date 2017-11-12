'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
  function Matrix(matrix) {
    _classCallCheck(this, Matrix);

    this.matrix = matrix;
  }

  _createClass(Matrix, [{
    key: 'getMat4',
    value: function getMat4() {
      ///
      return this.matrix;
    }
  }, {
    key: 'apply',
    value: function apply(uniformLocation, canvas) {
      canvas.applyMatrix(uniformLocation, this.matrix);
    }
  }]);

  return Matrix;
}();

module.exports = Matrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXRyaXguanMiXSwibmFtZXMiOlsiTWF0cml4IiwibWF0cml4IiwidW5pZm9ybUxvY2F0aW9uIiwiY2FudmFzIiwiYXBwbHlNYXRyaXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozs4QkFFUztBQUFFO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OzswQkFFS0MsZSxFQUFpQkMsTSxFQUFRO0FBQzdCQSxhQUFPQyxXQUFQLENBQW1CRixlQUFuQixFQUFvQyxLQUFLRCxNQUF6QztBQUNEOzs7Ozs7QUFHSEksT0FBT0MsT0FBUCxHQUFpQk4sTUFBakIiLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNYXRyaXgge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuICBcbiAgZ2V0TWF0NCgpIHsgLy8vXG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG4gIFxuICBhcHBseSh1bmlmb3JtTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5hcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIHRoaXMubWF0cml4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHJpeDtcbiJdfQ==