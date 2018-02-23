'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quadrangle = require('../quadrangle'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertexCoordinates = quadrangle.defaultVertexCoordinates,
    defaultIndexes = quadrangle.defaultIndexes,
    defaultColour = quadrangle.defaultColour;

var ColouredQuadrangle = function (_ColouredCanvasElemen) {
  _inherits(ColouredQuadrangle, _ColouredCanvasElemen);

  function ColouredQuadrangle() {
    _classCallCheck(this, ColouredQuadrangle);

    return _possibleConstructorReturn(this, (ColouredQuadrangle.__proto__ || Object.getPrototypeOf(ColouredQuadrangle)).apply(this, arguments));
  }

  _createClass(ColouredQuadrangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertexCoo = properties.vertexCoordinates,
          vertexCoordinates = _properties$vertexCoo === undefined ? defaultVertexCoordinates : _properties$vertexCoo,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, vertexCoordinates, indexes, colour);


      return colouredQuadrangle;
    }
  }]);

  return ColouredQuadrangle;
}(ColouredCanvasElement);

module.exports = ColouredQuadrangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9lbGVtZW50L2NvbW1vbi9jb2xvdXJlZC9xdWFkcmFuZ2xlLmpzIl0sIm5hbWVzIjpbInF1YWRyYW5nbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50IiwiZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzIiwiZGVmYXVsdEluZGV4ZXMiLCJkZWZhdWx0Q29sb3VyIiwiQ29sb3VyZWRRdWFkcmFuZ2xlIiwicHJvcGVydGllcyIsInZlcnRleENvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsImNvbG91cmVkUXVhZHJhbmdsZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsa0NBQVIsQ0FEOUI7O0lBR1FFLHdCLEdBQTRESCxVLENBQTVERyx3QjtJQUEwQkMsYyxHQUFrQ0osVSxDQUFsQ0ksYztJQUFnQkMsYSxHQUFrQkwsVSxDQUFsQkssYTs7SUFFNUNDLGtCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGtDQUMyRUEsVUFEM0UsQ0FDeEJDLGlCQUR3QjtBQUFBLFVBQ3hCQSxpQkFEd0IseUNBQ0pMLHdCQURJO0FBQUEsZ0NBQzJFSSxVQUQzRSxDQUNzQkUsT0FEdEI7QUFBQSxVQUNzQkEsT0FEdEIsdUNBQ2dDTCxjQURoQztBQUFBLCtCQUMyRUcsVUFEM0UsQ0FDZ0RHLE1BRGhEO0FBQUEsVUFDZ0RBLE1BRGhELHNDQUN5REwsYUFEekQ7QUFBQSxVQUUxQk0sa0JBRjBCLEdBRUxULHNCQUFzQlUsY0FBdEIsQ0FBcUNOLGtCQUFyQyxFQUF5REMsVUFBekQsRUFBcUVDLGlCQUFyRSxFQUF3RkMsT0FBeEYsRUFBaUdDLE1BQWpHLENBRks7OztBQUloQyxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBTjhCVCxxQjs7QUFTakNXLE9BQU9DLE9BQVAsR0FBaUJSLGtCQUFqQiIsImZpbGUiOiJxdWFkcmFuZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBxdWFkcmFuZ2xlID0gcmVxdWlyZSgnLi4vcXVhZHJhbmdsZScpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgeyBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGRlZmF1bHRJbmRleGVzLCBkZWZhdWx0Q29sb3VyIH0gPSBxdWFkcmFuZ2xlO1xuXG5jbGFzcyBDb2xvdXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGV4Q29vcmRpbmF0ZXMgPSBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZFF1YWRyYW5nbGUgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhDb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFF1YWRyYW5nbGU7XG4iXX0=