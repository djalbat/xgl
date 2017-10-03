'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = -6.0;

var Position = function () {
  function Position(matrix) {
    _classCallCheck(this, Position);

    this.matrix = matrix;
  }

  _createClass(Position, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
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

      var translationVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create(),
          position = new Position(matrix);

      mat4.translate(matrix, matrix, translationVector);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9wb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYQ29vcmRpbmF0ZSIsImRlZmF1bHRZQ29vcmRpbmF0ZSIsImRlZmF1bHRaQ29vcmRpbmF0ZSIsIlBvc2l0aW9uIiwibWF0cml4IiwiekNvb3JkaW5hdGUiLCJmcm9tQ29vcmRpbmF0ZXMiLCJ1bmRlZmluZWQiLCJ4Q29vcmRpbmF0ZSIsInlDb29yZGluYXRlIiwidHJhbnNsYXRpb25WZWN0b3IiLCJjcmVhdGUiLCJwb3NpdGlvbiIsInRyYW5zbGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYixDLENBQWtDOztBQUVsQyxJQUFNQyxxQkFBcUIsQ0FBQyxHQUE1QjtBQUFBLElBQ01DLHFCQUFxQixDQUFDLEdBRDVCO0FBQUEsSUFFTUMscUJBQXFCLENBQUMsR0FGNUI7O0lBSU1DLFE7QUFDSixvQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7b0NBRXNCQyxXLEVBQWE7QUFBRSxhQUFPRixTQUFTRyxlQUFULENBQXlCQyxTQUF6QixFQUFvQ0EsU0FBcEMsRUFBK0NGLFdBQS9DLENBQVA7QUFBcUU7OztzQ0FFa0I7QUFBQSxVQUF0R0csV0FBc0csdUVBQXhGUixrQkFBd0Y7QUFBQSxVQUFwRVMsV0FBb0UsdUVBQXREUixrQkFBc0Q7QUFBQSxVQUFsQ0ksV0FBa0MsdUVBQXBCSCxrQkFBb0I7O0FBQzNILFVBQU1RLG9CQUFvQixDQUNsQkYsV0FEa0IsRUFFbEJDLFdBRmtCLEVBR2xCSixXQUhrQixDQUExQjtBQUFBLFVBS01ELFNBQVNOLEtBQUthLE1BQUwsRUFMZjtBQUFBLFVBTU1DLFdBQVcsSUFBSVQsUUFBSixDQUFhQyxNQUFiLENBTmpCOztBQVFBTixXQUFLZSxTQUFMLENBQWVULE1BQWYsRUFBdUJBLE1BQXZCLEVBQStCTSxpQkFBL0I7O0FBRUEsYUFBT0UsUUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQlosUUFBakIiLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdFhDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRZQ29vcmRpbmF0ZSA9ICswLjAsXG4gICAgICBkZWZhdWx0WkNvb3JkaW5hdGUgPSAtNi4wO1xuXG5jbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSkgeyByZXR1cm4gUG9zaXRpb24uZnJvbUNvb3JkaW5hdGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB6Q29vcmRpbmF0ZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKHhDb29yZGluYXRlID0gZGVmYXVsdFhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSA9IGRlZmF1bHRZQ29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgPSBkZWZhdWx0WkNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvblZlY3RvciA9IFtcbiAgICAgICAgICAgIHhDb29yZGluYXRlLFxuICAgICAgICAgICAgeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICB6Q29vcmRpbmF0ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihtYXRyaXgpO1xuXG4gICAgbWF0NC50cmFuc2xhdGUobWF0cml4LCBtYXRyaXgsIHRyYW5zbGF0aW9uVmVjdG9yKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc2l0aW9uO1xuIl19