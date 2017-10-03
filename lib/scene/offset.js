'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = +0.0;

var Offset = function () {
  function Offset(matrix) {
    _classCallCheck(this, Offset);

    this.matrix = matrix;
  }

  _createClass(Offset, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromXCoordinateAndYCoordinate',
    value: function fromXCoordinateAndYCoordinate(xCoordinate, yCoordinate) {
      return Offset.fromCoordinates(xCoordinate, yCoordinate, undefined);
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates() {
      var xCoordinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXCoordinate;
      var yCoordinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYCoordinate;
      var zCoordinate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZCoordinate;

      var coordinateVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create(),
          offset = new Offset(matrix);

      mat4.translate(matrix, matrix, coordinateVector);

      return offset;
    }
  }]);

  return Offset;
}();

module.exports = Offset;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9vZmZzZXQuanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJkZWZhdWx0WENvb3JkaW5hdGUiLCJkZWZhdWx0WUNvb3JkaW5hdGUiLCJkZWZhdWx0WkNvb3JkaW5hdGUiLCJPZmZzZXQiLCJtYXRyaXgiLCJ4Q29vcmRpbmF0ZSIsInlDb29yZGluYXRlIiwiZnJvbUNvb3JkaW5hdGVzIiwidW5kZWZpbmVkIiwiekNvb3JkaW5hdGUiLCJjb29yZGluYXRlVmVjdG9yIiwiY3JlYXRlIiwib2Zmc2V0IiwidHJhbnNsYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0FBRWxDLElBQU1DLHFCQUFxQixDQUFDLEdBQTVCO0FBQUEsSUFDTUMscUJBQXFCLENBQUMsR0FENUI7QUFBQSxJQUVNQyxxQkFBcUIsQ0FBQyxHQUY1Qjs7SUFJTUMsTTtBQUNKLGtCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztrREFFb0NDLFcsRUFBYUMsVyxFQUFhO0FBQUUsYUFBT0gsT0FBT0ksZUFBUCxDQUF1QkYsV0FBdkIsRUFBb0NDLFdBQXBDLEVBQWlERSxTQUFqRCxDQUFQO0FBQXFFOzs7c0NBRVQ7QUFBQSxVQUF0R0gsV0FBc0csdUVBQXhGTCxrQkFBd0Y7QUFBQSxVQUFwRU0sV0FBb0UsdUVBQXRETCxrQkFBc0Q7QUFBQSxVQUFsQ1EsV0FBa0MsdUVBQXBCUCxrQkFBb0I7O0FBQzNILFVBQU1RLG1CQUFtQixDQUNqQkwsV0FEaUIsRUFFakJDLFdBRmlCLEVBR2pCRyxXQUhpQixDQUF6QjtBQUFBLFVBS01MLFNBQVNOLEtBQUthLE1BQUwsRUFMZjtBQUFBLFVBTU1DLFNBQVMsSUFBSVQsTUFBSixDQUFXQyxNQUFYLENBTmY7O0FBUUFOLFdBQUtlLFNBQUwsQ0FBZVQsTUFBZixFQUF1QkEsTUFBdkIsRUFBK0JNLGdCQUEvQjs7QUFFQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCWixNQUFqQiIsImZpbGUiOiJvZmZzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdFhDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRZQ29vcmRpbmF0ZSA9ICswLjAsXG4gICAgICBkZWZhdWx0WkNvb3JkaW5hdGUgPSArMC4wO1xuXG5jbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWENvb3JkaW5hdGVBbmRZQ29vcmRpbmF0ZSh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUpIHsgcmV0dXJuIE9mZnNldC5mcm9tQ29vcmRpbmF0ZXMoeENvb3JkaW5hdGUsIHlDb29yZGluYXRlLCB1bmRlZmluZWQpOyB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlcyh4Q29vcmRpbmF0ZSA9IGRlZmF1bHRYQ29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUgPSBkZWZhdWx0WUNvb3JkaW5hdGUsIHpDb29yZGluYXRlID0gZGVmYXVsdFpDb29yZGluYXRlKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZVZlY3RvciA9IFtcbiAgICAgICAgICAgIHhDb29yZGluYXRlLFxuICAgICAgICAgICAgeUNvb3JkaW5hdGUsXG4gICAgICAgICAgICB6Q29vcmRpbmF0ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKSxcbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KG1hdHJpeCk7XG5cbiAgICBtYXQ0LnRyYW5zbGF0ZShtYXRyaXgsIG1hdHJpeCwgY29vcmRpbmF0ZVZlY3Rvcik7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIl19