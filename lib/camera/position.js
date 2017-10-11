'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('../gl/mat4');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcG9zaXRpb24uanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJjcmVhdGUiLCJ0cmFuc2xhdGUiLCJkZWZhdWx0WENvb3JkaW5hdGUiLCJkZWZhdWx0WUNvb3JkaW5hdGUiLCJkZWZhdWx0WkNvb3JkaW5hdGUiLCJQb3NpdGlvbiIsInpDb29yZGluYXRlIiwiZnJvbUNvb3JkaW5hdGVzIiwidW5kZWZpbmVkIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsWUFBUixDQUFiOztJQUVRQyxNLEdBQXNCRixJLENBQXRCRSxNO0lBQVFDLFMsR0FBY0gsSSxDQUFkRyxTOzs7QUFFaEIsSUFBTUMscUJBQXFCLENBQUMsR0FBNUI7QUFBQSxJQUNNQyxxQkFBcUIsQ0FBQyxHQUQ1QjtBQUFBLElBRU1DLHFCQUFxQixDQUFDLEdBRjVCOztJQUlNQyxRO0FBQ0osb0JBQVlQLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLElBQVo7QUFDRDs7O29DQUVzQlEsVyxFQUFhO0FBQUUsYUFBT0QsU0FBU0UsZUFBVCxDQUF5QkMsU0FBekIsRUFBb0NBLFNBQXBDLEVBQStDRixXQUEvQyxDQUFQO0FBQXFFOzs7c0NBRWtCO0FBQUEsVUFBdEdHLFdBQXNHLHVFQUF4RlAsa0JBQXdGO0FBQUEsVUFBcEVRLFdBQW9FLHVFQUF0RFAsa0JBQXNEO0FBQUEsVUFBbENHLFdBQWtDLHVFQUFwQkYsa0JBQW9COztBQUMzSCxVQUFNTixPQUFPRSxRQUFiO0FBQUEsVUFDTVcsV0FBVyxJQUFJTixRQUFKLENBQWFQLElBQWIsQ0FEakI7O0FBR0FHLGdCQUFVSCxJQUFWLEVBQWdCQSxJQUFoQixFQUFzQixDQUFFVyxXQUFGLEVBQWVDLFdBQWYsRUFBNEJKLFdBQTVCLENBQXRCOztBQUVBLGFBQU9LLFFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJSLFFBQWpCIiwiZmlsZSI6InBvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vZ2wvbWF0NCcpO1xuXG5jb25zdCB7IGNyZWF0ZSwgdHJhbnNsYXRlIH0gPSBtYXQ0O1xuXG5jb25zdCBkZWZhdWx0WENvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFlDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRaQ29vcmRpbmF0ZSA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0NCkge1xuICAgIHRoaXMubWF0NCA9IG1hdDQ7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXQ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSkgeyByZXR1cm4gUG9zaXRpb24uZnJvbUNvb3JkaW5hdGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB6Q29vcmRpbmF0ZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKHhDb29yZGluYXRlID0gZGVmYXVsdFhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSA9IGRlZmF1bHRZQ29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgPSBkZWZhdWx0WkNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24obWF0NCk7XG5cbiAgICB0cmFuc2xhdGUobWF0NCwgbWF0NCwgWyB4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIHpDb29yZGluYXRlIF0pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9zaXRpb247XG4iXX0=