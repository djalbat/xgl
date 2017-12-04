'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = cylinder.defaultVertices,
    defaultIndexes = cylinder.defaultIndexes,
    defaultColour = cylinder.defaultColour;

var ColouredCylinder = function (_ColouredCanvasElemen) {
  _inherits(ColouredCylinder, _ColouredCanvasElemen);

  function ColouredCylinder() {
    _classCallCheck(this, ColouredCylinder);

    return _possibleConstructorReturn(this, (ColouredCylinder.__proto__ || Object.getPrototypeOf(ColouredCylinder)).apply(this, arguments));
  }

  _createClass(ColouredCylinder, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredCylinder = ColouredCanvasElement.fromProperties(ColouredCylinder, properties, vertices, indexes, colour);


      return colouredCylinder;
    }
  }]);

  return ColouredCylinder;
}(ColouredCanvasElement);

module.exports = ColouredCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvY3lsaW5kZXIuanMiXSwibmFtZXMiOlsiY3lsaW5kZXIiLCJyZXF1aXJlIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50IiwiZGVmYXVsdFZlcnRpY2VzIiwiZGVmYXVsdEluZGV4ZXMiLCJkZWZhdWx0Q29sb3VyIiwiQ29sb3VyZWRDeWxpbmRlciIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImluZGV4ZXMiLCJjb2xvdXIiLCJjb2xvdXJlZEN5bGluZGVyIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUUUsZSxHQUFtREgsUSxDQUFuREcsZTtJQUFpQkMsYyxHQUFrQ0osUSxDQUFsQ0ksYztJQUFnQkMsYSxHQUFrQkwsUSxDQUFsQkssYTs7SUFFbkNDLGdCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGlDQUN5REEsVUFEekQsQ0FDeEJDLFFBRHdCO0FBQUEsVUFDeEJBLFFBRHdCLHdDQUNiTCxlQURhO0FBQUEsZ0NBQ3lESSxVQUR6RCxDQUNJRSxPQURKO0FBQUEsVUFDSUEsT0FESix1Q0FDY0wsY0FEZDtBQUFBLCtCQUN5REcsVUFEekQsQ0FDOEJHLE1BRDlCO0FBQUEsVUFDOEJBLE1BRDlCLHNDQUN1Q0wsYUFEdkM7QUFBQSxVQUUxQk0sZ0JBRjBCLEdBRVBULHNCQUFzQlUsY0FBdEIsQ0FBcUNOLGdCQUFyQyxFQUF1REMsVUFBdkQsRUFBbUVDLFFBQW5FLEVBQTZFQyxPQUE3RSxFQUFzRkMsTUFBdEYsQ0FGTzs7O0FBSWhDLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUFONEJULHFCOztBQVMvQlcsT0FBT0MsT0FBUCxHQUFpQlIsZ0JBQWpCIiwiZmlsZSI6ImN5bGluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0aWNlcywgZGVmYXVsdEluZGV4ZXMsIGRlZmF1bHRDb2xvdXIgfSA9IGN5bGluZGVyO1xuXG5jbGFzcyBDb2xvdXJlZEN5bGluZGVyIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRDeWxpbmRlciA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZEN5bGluZGVyLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEN5bGluZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDeWxpbmRlcjtcbiJdfQ==