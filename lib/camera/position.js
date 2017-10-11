'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4');

var create = mat4.create,
    translate = mat4.translate;

var Position = function () {
  function Position(mat4) {
    _classCallCheck(this, Position);

    this.mat4 = mat4;
  }

  _createClass(Position, [{
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
    key: 'fromDistance',
    value: function fromDistance(distance) {
      var xCoordinate = 0,
          yCoordinate = 0,
          zCoordinate = -distance,
          ///
      position = Position.fromCoordinates(xCoordinate, yCoordinate, zCoordinate);

      return position;
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates(xCoordinate, yCoordinate, zCoordinate) {
      var mat4 = create(),
          position = new Position(mat4);

      translate(mat4, mat4, [xCoordinate, yCoordinate, zCoordinate]);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcG9zaXRpb24uanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJjcmVhdGUiLCJ0cmFuc2xhdGUiLCJQb3NpdGlvbiIsInVuaWZvcm1Mb2NhdGlvbiIsImNhbnZhcyIsImFwcGx5TWF0cml4IiwiZGlzdGFuY2UiLCJ4Q29vcmRpbmF0ZSIsInlDb29yZGluYXRlIiwiekNvb3JkaW5hdGUiLCJwb3NpdGlvbiIsImZyb21Db29yZGluYXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFlBQVIsQ0FBYjs7SUFFUUMsTSxHQUFzQkYsSSxDQUF0QkUsTTtJQUFRQyxTLEdBQWNILEksQ0FBZEcsUzs7SUFFVkMsUTtBQUNKLG9CQUFZSixJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0ssZSxFQUFpQkMsTSxFQUFRO0FBQzdCQSxhQUFPQyxXQUFQLENBQW1CRixlQUFuQixFQUFvQyxLQUFLTCxJQUF6QztBQUNEOzs7aUNBRW1CUSxRLEVBQVU7QUFDNUIsVUFBTUMsY0FBYyxDQUFwQjtBQUFBLFVBQ01DLGNBQWMsQ0FEcEI7QUFBQSxVQUVNQyxjQUFjLENBQUNILFFBRnJCO0FBQUEsVUFFK0I7QUFDekJJLGlCQUFXUixTQUFTUyxlQUFULENBQXlCSixXQUF6QixFQUFzQ0MsV0FBdEMsRUFBbURDLFdBQW5ELENBSGpCOztBQUtBLGFBQU9DLFFBQVA7QUFDRDs7O29DQUVzQkgsVyxFQUFhQyxXLEVBQWFDLFcsRUFBYTtBQUM1RCxVQUFNWCxPQUFPRSxRQUFiO0FBQUEsVUFDTVUsV0FBVyxJQUFJUixRQUFKLENBQWFKLElBQWIsQ0FEakI7O0FBR0FHLGdCQUFVSCxJQUFWLEVBQWdCQSxJQUFoQixFQUFzQixDQUFFUyxXQUFGLEVBQWVDLFdBQWYsRUFBNEJDLFdBQTVCLENBQXRCOztBQUVBLGFBQU9DLFFBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJYLFFBQWpCIiwiZmlsZSI6InBvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vZ2wvbWF0NCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgdHJhbnNsYXRlIH0gPSBtYXQ0O1xuXG5jbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuXG4gIGFwcGx5KHVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgdGhpcy5tYXQ0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IDAsXG4gICAgICAgICAgeUNvb3JkaW5hdGUgPSAwLFxuICAgICAgICAgIHpDb29yZGluYXRlID0gLWRpc3RhbmNlLCAvLy9cbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Db29yZGluYXRlcyh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIHpDb29yZGluYXRlKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoeENvb3JkaW5hdGUsIHlDb29yZGluYXRlLCB6Q29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihtYXQ0KTtcblxuICAgIHRyYW5zbGF0ZShtYXQ0LCBtYXQ0LCBbIHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgXSk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcbiJdfQ==