'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jiggle = require('../../../index');

var ColouredCanvasElement = jiggle.ColouredCanvasElement;


var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultColour = [1, 0, 0];

var ColouredSquare = function (_ColouredCanvasElemen) {
  _inherits(ColouredSquare, _ColouredCanvasElemen);

  function ColouredSquare() {
    _classCallCheck(this, ColouredSquare);

    return _possibleConstructorReturn(this, (ColouredSquare.__proto__ || Object.getPrototypeOf(ColouredSquare)).apply(this, arguments));
  }

  _createClass(ColouredSquare, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredSquare = ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);


      return colouredSquare;
    }
  }]);

  return ColouredSquare;
}(ColouredCanvasElement);

module.exports = ColouredSquare;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImRlZmF1bHRDb2xvdXIiLCJDb2xvdXJlZFNxdWFyZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJjb2xvdXJlZFNxdWFyZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGdCQUFSLENBQWY7O0lBRVFDLHFCLEdBQTBCRixNLENBQTFCRSxxQjs7O0FBRVIsSUFBTUMsY0FBYyxDQUVaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlksRUFHWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhZLEVBSVosQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FKWSxFQUtaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBTFksQ0FBcEI7QUFBQSxJQVFNQyxVQUFVLENBRVIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGUSxFQUdSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSFEsQ0FSaEI7QUFBQSxJQWNNQyxnQkFBZ0IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FkdEI7O0lBZ0JNQyxjOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLCtCQUNFQSxVQURGLENBQ3pCQyxNQUR5QjtBQUFBLFVBQ3pCQSxNQUR5QixzQ0FDaEJILGFBRGdCO0FBQUEsVUFFN0JJLGNBRjZCLEdBRVpQLHNCQUFzQlEsY0FBdEIsQ0FBcUNKLGNBQXJDLEVBQXFEQyxVQUFyRCxFQUFpRUosV0FBakUsRUFBOEVDLE9BQTlFLEVBQXVGSSxNQUF2RixDQUZZOzs7QUFJakMsYUFBT0MsY0FBUDtBQUNBOzs7O0VBTjBCUCxxQjs7QUFTN0JTLE9BQU9DLE9BQVAsR0FBaUJOLGNBQWpCIiwiZmlsZSI6ImNvbG91cmVkU3F1YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpO1xuXG5jb25zdCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9ID0gamlnZ2xlO1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5jbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkU3F1YXJlO1xuIl19