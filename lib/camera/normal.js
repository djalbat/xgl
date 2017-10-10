'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

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
  }], [{
    key: 'fromRotation',
    value: function fromRotation(rotation) {
      var mat4 = create(),
          rotationMatrix = rotation.getMatrix(),
          normal = new Normal(mat4);

      invert(mat4, rotationMatrix);

      transpose(mat4, mat4);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbm9ybWFsLmpzIl0sIm5hbWVzIjpbIm1hdDQiLCJyZXF1aXJlIiwiY3JlYXRlIiwiaW52ZXJ0IiwidHJhbnNwb3NlIiwiTm9ybWFsIiwicm90YXRpb24iLCJyb3RhdGlvbk1hdHJpeCIsImdldE1hdHJpeCIsIm5vcm1hbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztJQUUxQkMsTSxHQUE4QkYsSSxDQUE5QkUsTTtJQUFRQyxNLEdBQXNCSCxJLENBQXRCRyxNO0lBQVFDLFMsR0FBY0osSSxDQUFkSSxTOztJQUVsQkMsTTtBQUNKLGtCQUFZTCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OztpQ0FFbUJNLFEsRUFBVTtBQUM1QixVQUFNTixPQUFPRSxRQUFiO0FBQUEsVUFDTUssaUJBQWlCRCxTQUFTRSxTQUFULEVBRHZCO0FBQUEsVUFFTUMsU0FBUyxJQUFJSixNQUFKLENBQVdMLElBQVgsQ0FGZjs7QUFJQUcsYUFBT0gsSUFBUCxFQUFhTyxjQUFiOztBQUVBSCxnQkFBVUosSUFBVixFQUFnQkEsSUFBaEI7O0FBRUEsYUFBT1MsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQk4sTUFBakIiLCJmaWxlIjoibm9ybWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlLCBpbnZlcnQsIHRyYW5zcG9zZSB9ID0gbWF0NDtcblxuY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IobWF0NCkge1xuICAgIHRoaXMubWF0NCA9IG1hdDQ7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXQ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJvdGF0aW9uKHJvdGF0aW9uKSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChtYXQ0KTtcblxuICAgIGludmVydChtYXQ0LCByb3RhdGlvbk1hdHJpeCk7XG4gICAgXG4gICAgdHJhbnNwb3NlKG1hdDQsIG1hdDQpO1xuICAgIFxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3JtYWw7XG4iXX0=