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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9wb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImNyZWF0ZSIsInRyYW5zbGF0ZSIsImRlZmF1bHRYQ29vcmRpbmF0ZSIsImRlZmF1bHRZQ29vcmRpbmF0ZSIsImRlZmF1bHRaQ29vcmRpbmF0ZSIsIlBvc2l0aW9uIiwiekNvb3JkaW5hdGUiLCJmcm9tQ29vcmRpbmF0ZXMiLCJ1bmRlZmluZWQiLCJ4Q29vcmRpbmF0ZSIsInlDb29yZGluYXRlIiwicG9zaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWIsQyxDQUFrQzs7SUFFMUJDLE0sR0FBc0JGLEksQ0FBdEJFLE07SUFBUUMsUyxHQUFjSCxJLENBQWRHLFM7OztBQUVoQixJQUFNQyxxQkFBcUIsQ0FBQyxHQUE1QjtBQUFBLElBQ01DLHFCQUFxQixDQUFDLEdBRDVCO0FBQUEsSUFFTUMscUJBQXFCLENBQUMsR0FGNUI7O0lBSU1DLFE7QUFDSixvQkFBWVAsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsSUFBWjtBQUNEOzs7b0NBRXNCUSxXLEVBQWE7QUFBRSxhQUFPRCxTQUFTRSxlQUFULENBQXlCQyxTQUF6QixFQUFvQ0EsU0FBcEMsRUFBK0NGLFdBQS9DLENBQVA7QUFBcUU7OztzQ0FFa0I7QUFBQSxVQUF0R0csV0FBc0csdUVBQXhGUCxrQkFBd0Y7QUFBQSxVQUFwRVEsV0FBb0UsdUVBQXREUCxrQkFBc0Q7QUFBQSxVQUFsQ0csV0FBa0MsdUVBQXBCRixrQkFBb0I7O0FBQzNILFVBQU1OLE9BQU9FLFFBQWI7QUFBQSxVQUNNVyxXQUFXLElBQUlOLFFBQUosQ0FBYVAsSUFBYixDQURqQjs7QUFHQUcsZ0JBQVVILElBQVYsRUFBZ0JBLElBQWhCLEVBQXNCLENBQUVXLFdBQUYsRUFBZUMsV0FBZixFQUE0QkosV0FBNUIsQ0FBdEI7O0FBRUEsYUFBT0ssUUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlIsUUFBakIiLCJmaWxlIjoicG9zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgeyBjcmVhdGUsIHRyYW5zbGF0ZSB9ID0gbWF0NDtcblxuY29uc3QgZGVmYXVsdFhDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRZQ29vcmRpbmF0ZSA9ICswLjAsXG4gICAgICBkZWZhdWx0WkNvb3JkaW5hdGUgPSAtNi4wO1xuXG5jbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpIHsgcmV0dXJuIFBvc2l0aW9uLmZyb21Db29yZGluYXRlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCwgekNvb3JkaW5hdGUpOyB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlcyh4Q29vcmRpbmF0ZSA9IGRlZmF1bHRYQ29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUgPSBkZWZhdWx0WUNvb3JkaW5hdGUsIHpDb29yZGluYXRlID0gZGVmYXVsdFpDb29yZGluYXRlKSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKG1hdDQpO1xuXG4gICAgdHJhbnNsYXRlKG1hdDQsIG1hdDQsIFsgeENvb3JkaW5hdGUsIHlDb29yZGluYXRlLCB6Q29vcmRpbmF0ZSBdKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc2l0aW9uO1xuIl19