'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jiggle = require('../../../index');

var ColouredCanvasElement = jiggle.ColouredCanvasElement;


var coordinates = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0]],
    indexes = [[0, 1, 2], [2, 3, 0]],
    colour = [1, 0, 0];

var ColouredSquare = function (_ColouredCanvasElemen) {
  _inherits(ColouredSquare, _ColouredCanvasElemen);

  function ColouredSquare() {
    _classCallCheck(this, ColouredSquare);

    return _possibleConstructorReturn(this, (ColouredSquare.__proto__ || Object.getPrototypeOf(ColouredSquare)).apply(this, arguments));
  }

  _createClass(ColouredSquare, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);
    }
  }]);

  return ColouredSquare;
}(ColouredCanvasElement);

module.exports = ColouredSquare;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsIkNvbG91cmVkU3F1YXJlIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGdCQUFSLENBQWY7O0lBRVFDLHFCLEdBQTBCRixNLENBQTFCRSxxQjs7O0FBRVIsSUFBTUMsY0FBYyxDQUVaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlksRUFHWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhZLEVBSVosQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FKWSxFQUtaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBTFksQ0FBcEI7QUFBQSxJQVFNQyxVQUFVLENBRVIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGUSxFQUdSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSFEsQ0FSaEI7QUFBQSxJQWNNQyxTQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBZGY7O0lBZ0JNQyxjOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9MLHNCQUFzQk0sY0FBdEIsQ0FBcUNGLGNBQXJDLEVBQXFEQyxVQUFyRCxFQUFpRUosV0FBakUsRUFBOEVDLE9BQTlFLEVBQXVGQyxNQUF2RixDQUFQO0FBQXdHOzs7O0VBRGpISCxxQjs7QUFJN0JPLE9BQU9DLE9BQVAsR0FBaUJKLGNBQWpCIiwiZmlsZSI6ImNvbG91cmVkU3F1YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpO1xuXG5jb25zdCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9ID0gamlnZ2xlO1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG4gICAgICAgIFsgMiwgMywgMCBdLFxuXG4gICAgICBdLFxuICAgICAgY29sb3VyID0gWyAxLCAwLCAwIF07XG5cbmNsYXNzIENvbG91cmVkU3F1YXJlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFNxdWFyZTtcbiJdfQ==