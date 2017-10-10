'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    translate = mat4.translate;


var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = -6.0;

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
  }], [{
    key: 'fromZCoordinate',
    value: function fromZCoordinate(zCoordinate) {
      return Position.fromCoordinates(undefined, undefined, zCoordinate);
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates() {
      var xCoordinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXCoordinate;
      var yCoordinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYCoordinate;
      var zCoordinate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZCoordinate;

      var mat4 = create(),
          position = new Position(mat4);

      translate(mat4, mat4, [xCoordinate, yCoordinate, zCoordinate]);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcG9zaXRpb24uanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJjcmVhdGUiLCJ0cmFuc2xhdGUiLCJkZWZhdWx0WENvb3JkaW5hdGUiLCJkZWZhdWx0WUNvb3JkaW5hdGUiLCJkZWZhdWx0WkNvb3JkaW5hdGUiLCJQb3NpdGlvbiIsInpDb29yZGluYXRlIiwiZnJvbUNvb3JkaW5hdGVzIiwidW5kZWZpbmVkIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0lBRTFCQyxNLEdBQXNCRixJLENBQXRCRSxNO0lBQVFDLFMsR0FBY0gsSSxDQUFkRyxTOzs7QUFFaEIsSUFBTUMscUJBQXFCLENBQUMsR0FBNUI7QUFBQSxJQUNNQyxxQkFBcUIsQ0FBQyxHQUQ1QjtBQUFBLElBRU1DLHFCQUFxQixDQUFDLEdBRjVCOztJQUlNQyxRO0FBQ0osb0JBQVlQLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLElBQVo7QUFDRDs7O29DQUVzQlEsVyxFQUFhO0FBQUUsYUFBT0QsU0FBU0UsZUFBVCxDQUF5QkMsU0FBekIsRUFBb0NBLFNBQXBDLEVBQStDRixXQUEvQyxDQUFQO0FBQXFFOzs7c0NBRWtCO0FBQUEsVUFBdEdHLFdBQXNHLHVFQUF4RlAsa0JBQXdGO0FBQUEsVUFBcEVRLFdBQW9FLHVFQUF0RFAsa0JBQXNEO0FBQUEsVUFBbENHLFdBQWtDLHVFQUFwQkYsa0JBQW9COztBQUMzSCxVQUFNTixPQUFPRSxRQUFiO0FBQUEsVUFDTVcsV0FBVyxJQUFJTixRQUFKLENBQWFQLElBQWIsQ0FEakI7O0FBR0FHLGdCQUFVSCxJQUFWLEVBQWdCQSxJQUFoQixFQUFzQixDQUFFVyxXQUFGLEVBQWVDLFdBQWYsRUFBNEJKLFdBQTVCLENBQXRCOztBQUVBLGFBQU9LLFFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJSLFFBQWpCIiwiZmlsZSI6InBvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlLCB0cmFuc2xhdGUgfSA9IG1hdDQ7XG5cbmNvbnN0IGRlZmF1bHRYQ29vcmRpbmF0ZSA9ICswLjAsXG4gICAgICBkZWZhdWx0WUNvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFpDb29yZGluYXRlID0gLTYuMDtcblxuY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSB7IHJldHVybiBQb3NpdGlvbi5mcm9tQ29vcmRpbmF0ZXModW5kZWZpbmVkLCB1bmRlZmluZWQsIHpDb29yZGluYXRlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoeENvb3JkaW5hdGUgPSBkZWZhdWx0WENvb3JkaW5hdGUsIHlDb29yZGluYXRlID0gZGVmYXVsdFlDb29yZGluYXRlLCB6Q29vcmRpbmF0ZSA9IGRlZmF1bHRaQ29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihtYXQ0KTtcblxuICAgIHRyYW5zbGF0ZShtYXQ0LCBtYXQ0LCBbIHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgXSk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcbiJdfQ==