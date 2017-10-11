'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4'),
    constants = require('../constants');

var create = mat4.create,
    perspective = mat4.perspective,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR;

var Projection = function () {
  function Projection(mat4) {
    _classCallCheck(this, Projection);

    this.mat4 = mat4;
  }

  _createClass(Projection, [{
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
    key: 'fromWidthAndHeight',
    value: function fromWidthAndHeight(width, height) {
      var mat4 = create(),
          fieldOfView = FIELD_OF_VIEW,
          aspectRatio = width / height,
          zNear = Z_NEAR,
          zFar = Z_FAR,
          projection = new Projection(mat4);

      perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

      return projection;
    }
  }]);

  return Projection;
}();

module.exports = Projection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcHJvamVjdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImNvbnN0YW50cyIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwiRklFTERfT0ZfVklFVyIsIlpfTkVBUiIsIlpfRkFSIiwiUHJvamVjdGlvbiIsInVuaWZvcm1Mb2NhdGlvbiIsImNhbnZhcyIsImFwcGx5TWF0cml4Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWVsZE9mVmlldyIsImFzcGVjdFJhdGlvIiwiek5lYXIiLCJ6RmFyIiwicHJvamVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjtBQUFBLElBQ01DLFlBQVlELFFBQVEsY0FBUixDQURsQjs7SUFHUUUsTSxHQUF3QkgsSSxDQUF4QkcsTTtJQUFRQyxXLEdBQWdCSixJLENBQWhCSSxXO0lBQ1JDLGEsR0FBaUNILFMsQ0FBakNHLGE7SUFBZUMsTSxHQUFrQkosUyxDQUFsQkksTTtJQUFRQyxLLEdBQVVMLFMsQ0FBVkssSzs7SUFFekJDLFU7QUFDSixzQkFBWVIsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7MEJBRUtTLGUsRUFBaUJDLE0sRUFBUTtBQUM3QkEsYUFBT0MsV0FBUCxDQUFtQkYsZUFBbkIsRUFBb0MsS0FBS1QsSUFBekM7QUFDRDs7O3VDQUV5QlksSyxFQUFPQyxNLEVBQVE7QUFDdkMsVUFBTWIsT0FBT0csUUFBYjtBQUFBLFVBQ01XLGNBQWNULGFBRHBCO0FBQUEsVUFFTVUsY0FBY0gsUUFBUUMsTUFGNUI7QUFBQSxVQUdNRyxRQUFRVixNQUhkO0FBQUEsVUFJTVcsT0FBT1YsS0FKYjtBQUFBLFVBS01XLGFBQWEsSUFBSVYsVUFBSixDQUFlUixJQUFmLENBTG5COztBQU9BSSxrQkFBWUosSUFBWixFQUFrQmMsV0FBbEIsRUFBK0JDLFdBQS9CLEVBQTRDQyxLQUE1QyxFQUFtREMsSUFBbkQ7O0FBRUEsYUFBT0MsVUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlosVUFBakIiLCJmaWxlIjoicHJvamVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJy4uL2dsL21hdDQnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IGNyZWF0ZSwgcGVyc3BlY3RpdmUgfSA9IG1hdDQsXG4gICAgICB7IEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUHJvamVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuXG4gIGFwcGx5KHVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgdGhpcy5tYXQ0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBmaWVsZE9mVmlldyA9IEZJRUxEX09GX1ZJRVcsXG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICB6TmVhciA9IFpfTkVBUixcbiAgICAgICAgICB6RmFyID0gWl9GQVIsXG4gICAgICAgICAgcHJvamVjdGlvbiA9IG5ldyBQcm9qZWN0aW9uKG1hdDQpO1xuXG4gICAgcGVyc3BlY3RpdmUobWF0NCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgICByZXR1cm4gcHJvamVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Rpb247XG4iXX0=