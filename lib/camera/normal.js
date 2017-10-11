'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4');

var create = mat4.create,
    invert = mat4.invert,
    transpose = mat4.transpose;

var Normal = function () {
  function Normal(mat4) {
    _classCallCheck(this, Normal);

    this.mat4 = mat4;
  }

  _createClass(Normal, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }, {
    key: 'apply',
    value: function apply(uniformLocation, canvas) {
      canvas.applyMatrix(uniformLocation, this.mat4);
    }
  }], [{
    key: 'fromRotationMatrix',
    value: function fromRotationMatrix(rotationMatrix) {
      var mat4 = create(),
          rotationMat4 = rotationMatrix.getMatrix(),
          normal = new Normal(mat4);

      invert(mat4, rotationMat4);

      transpose(mat4, mat4);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbm9ybWFsLmpzIl0sIm5hbWVzIjpbIm1hdDQiLCJyZXF1aXJlIiwiY3JlYXRlIiwiaW52ZXJ0IiwidHJhbnNwb3NlIiwiTm9ybWFsIiwidW5pZm9ybUxvY2F0aW9uIiwiY2FudmFzIiwiYXBwbHlNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInJvdGF0aW9uTWF0NCIsImdldE1hdHJpeCIsIm5vcm1hbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjs7SUFFUUMsTSxHQUE4QkYsSSxDQUE5QkUsTTtJQUFRQyxNLEdBQXNCSCxJLENBQXRCRyxNO0lBQVFDLFMsR0FBY0osSSxDQUFkSSxTOztJQUVsQkMsTTtBQUNKLGtCQUFZTCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS00sZSxFQUFpQkMsTSxFQUFRO0FBQzdCQSxhQUFPQyxXQUFQLENBQW1CRixlQUFuQixFQUFvQyxLQUFLTixJQUF6QztBQUNEOzs7dUNBRXlCUyxjLEVBQWdCO0FBQ3hDLFVBQU1ULE9BQU9FLFFBQWI7QUFBQSxVQUNNUSxlQUFlRCxlQUFlRSxTQUFmLEVBRHJCO0FBQUEsVUFFTUMsU0FBUyxJQUFJUCxNQUFKLENBQVdMLElBQVgsQ0FGZjs7QUFJQUcsYUFBT0gsSUFBUCxFQUFhVSxZQUFiOztBQUVBTixnQkFBVUosSUFBVixFQUFnQkEsSUFBaEI7O0FBRUEsYUFBT1ksTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlQsTUFBakIiLCJmaWxlIjoibm9ybWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vZ2wvbWF0NCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgaW52ZXJ0LCB0cmFuc3Bvc2UgfSA9IG1hdDQ7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuXG4gIGFwcGx5KHVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgdGhpcy5tYXQ0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgcm90YXRpb25NYXQ0ID0gcm90YXRpb25NYXRyaXguZ2V0TWF0cml4KCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChtYXQ0KTtcblxuICAgIGludmVydChtYXQ0LCByb3RhdGlvbk1hdDQpO1xuICAgIFxuICAgIHRyYW5zcG9zZShtYXQ0LCBtYXQ0KTtcbiAgICBcbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuIl19