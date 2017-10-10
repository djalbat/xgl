'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var constants = require('../constants');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcHJvamVjdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImNvbnN0YW50cyIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwiRklFTERfT0ZfVklFVyIsIlpfTkVBUiIsIlpfRkFSIiwiUHJvamVjdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsInpOZWFyIiwiekZhciIsInByb2plY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWIsQyxDQUFrQzs7QUFFbEMsSUFBTUMsWUFBWUQsUUFBUSxjQUFSLENBQWxCOztJQUVRRSxNLEdBQXdCSCxJLENBQXhCRyxNO0lBQVFDLFcsR0FBZ0JKLEksQ0FBaEJJLFc7SUFDUkMsYSxHQUFpQ0gsUyxDQUFqQ0csYTtJQUFlQyxNLEdBQWtCSixTLENBQWxCSSxNO0lBQVFDLEssR0FBVUwsUyxDQUFWSyxLOztJQUV6QkMsVTtBQUNKLHNCQUFZUixJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7Ozt1Q0FFeUJTLEssRUFBT0MsTSxFQUFRO0FBQ3ZDLFVBQU1WLE9BQU9HLFFBQWI7QUFBQSxVQUNNUSxjQUFjTixhQURwQjtBQUFBLFVBRU1PLGNBQWNILFFBQVFDLE1BRjVCO0FBQUEsVUFHTUcsUUFBUVAsTUFIZDtBQUFBLFVBSU1RLE9BQU9QLEtBSmI7QUFBQSxVQUtNUSxhQUFhLElBQUlQLFVBQUosQ0FBZVIsSUFBZixDQUxuQjs7QUFPQUksa0JBQVlKLElBQVosRUFBa0JXLFdBQWxCLEVBQStCQyxXQUEvQixFQUE0Q0MsS0FBNUMsRUFBbURDLElBQW5EOztBQUVBLGFBQU9DLFVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJULFVBQWpCIiwiZmlsZSI6InByb2plY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgY3JlYXRlLCBwZXJzcGVjdGl2ZSB9ID0gbWF0NCxcbiAgICAgIHsgRklFTERfT0ZfVklFVywgWl9ORUFSLCBaX0ZBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBQcm9qZWN0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0NCkge1xuICAgIHRoaXMubWF0NCA9IG1hdDQ7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXQ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIGZpZWxkT2ZWaWV3ID0gRklFTERfT0ZfVklFVyxcbiAgICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICAgIHpOZWFyID0gWl9ORUFSLFxuICAgICAgICAgIHpGYXIgPSBaX0ZBUixcbiAgICAgICAgICBwcm9qZWN0aW9uID0gbmV3IFByb2plY3Rpb24obWF0NCk7XG5cbiAgICBwZXJzcGVjdGl2ZShtYXQ0LCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICAgIHJldHVybiBwcm9qZWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvamVjdGlvbjtcbiJdfQ==