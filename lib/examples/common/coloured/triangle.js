'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var triangle = require('../triangle'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = triangle.defaultVertices,
    defaultIndexes = triangle.defaultIndexes,
    defaultColour = triangle.defaultColour;

var ColouredTriangle = function (_ColouredCanvasElemen) {
  _inherits(ColouredTriangle, _ColouredCanvasElemen);

  function ColouredTriangle() {
    _classCallCheck(this, ColouredTriangle);

    return _possibleConstructorReturn(this, (ColouredTriangle.__proto__ || Object.getPrototypeOf(ColouredTriangle)).apply(this, arguments));
  }

  _createClass(ColouredTriangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, vertices, indexes, colour);


      return colouredTriangle;
    }
  }]);

  return ColouredTriangle;
}(ColouredCanvasElement);

module.exports = ColouredTriangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvdHJpYW5nbGUuanMiXSwibmFtZXMiOlsidHJpYW5nbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50IiwiZGVmYXVsdFZlcnRpY2VzIiwiZGVmYXVsdEluZGV4ZXMiLCJkZWZhdWx0Q29sb3VyIiwiQ29sb3VyZWRUcmlhbmdsZSIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImluZGV4ZXMiLCJjb2xvdXIiLCJjb2xvdXJlZFRyaWFuZ2xlIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUUUsZSxHQUFtREgsUSxDQUFuREcsZTtJQUFpQkMsYyxHQUFrQ0osUSxDQUFsQ0ksYztJQUFnQkMsYSxHQUFrQkwsUSxDQUFsQkssYTs7SUFFbkNDLGdCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGlDQUN5REEsVUFEekQsQ0FDeEJDLFFBRHdCO0FBQUEsVUFDeEJBLFFBRHdCLHdDQUNiTCxlQURhO0FBQUEsZ0NBQ3lESSxVQUR6RCxDQUNJRSxPQURKO0FBQUEsVUFDSUEsT0FESix1Q0FDY0wsY0FEZDtBQUFBLCtCQUN5REcsVUFEekQsQ0FDOEJHLE1BRDlCO0FBQUEsVUFDOEJBLE1BRDlCLHNDQUN1Q0wsYUFEdkM7QUFBQSxVQUUxQk0sZ0JBRjBCLEdBRVBULHNCQUFzQlUsY0FBdEIsQ0FBcUNOLGdCQUFyQyxFQUF1REMsVUFBdkQsRUFBbUVDLFFBQW5FLEVBQTZFQyxPQUE3RSxFQUFzRkMsTUFBdEYsQ0FGTzs7O0FBSWhDLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUFONEJULHFCOztBQVMvQlcsT0FBT0MsT0FBUCxHQUFpQlIsZ0JBQWpCIiwiZmlsZSI6InRyaWFuZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0cmlhbmdsZSA9IHJlcXVpcmUoJy4uL3RyaWFuZ2xlJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0aWNlcywgZGVmYXVsdEluZGV4ZXMsIGRlZmF1bHRDb2xvdXIgfSA9IHRyaWFuZ2xlO1xuXG5jbGFzcyBDb2xvdXJlZFRyaWFuZ2xlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRUcmlhbmdsZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZFRyaWFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRUcmlhbmdsZTtcbiJdfQ==