'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('./maths/mat4');

var Matrix = function () {
  function Matrix(mat4) {
    _classCallCheck(this, Matrix);

    this.mat4 = mat4;
  }

  _createClass(Matrix, [{
    key: 'getMat4',
    value: function getMat4() {
      return this.mat4;
    }
  }, {
    key: 'apply',
    value: function apply(uniformLocation, canvas) {
      canvas.applyMatrix(uniformLocation, this.mat4);
    }
  }]);

  return Matrix;
}();

module.exports = Matrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXRyaXguanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJNYXRyaXgiLCJ1bmlmb3JtTG9jYXRpb24iLCJjYW52YXMiLCJhcHBseU1hdHJpeCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGNBQVIsQ0FBYjs7SUFFTUMsTTtBQUNKLGtCQUFZRixJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0csZSxFQUFpQkMsTSxFQUFRO0FBQzdCQSxhQUFPQyxXQUFQLENBQW1CRixlQUFuQixFQUFvQyxLQUFLSCxJQUF6QztBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQkwsTUFBakIiLCJmaWxlIjoibWF0cml4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi9tYXRocy9tYXQ0Jyk7XG5cbmNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXQ0KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cbiAgXG4gIGFwcGx5KHVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgdGhpcy5tYXQ0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHJpeDtcbiJdfQ==