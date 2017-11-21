'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quadrangle = require('../quadrangle'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var indexes = quadrangle.indexes,
    defaultVertices = quadrangle.defaultVertices;

var ColouredQuadrangle = function (_ColouredCanvasElemen) {
  _inherits(ColouredQuadrangle, _ColouredCanvasElemen);

  function ColouredQuadrangle() {
    _classCallCheck(this, ColouredQuadrangle);

    return _possibleConstructorReturn(this, (ColouredQuadrangle.__proto__ || Object.getPrototypeOf(ColouredQuadrangle)).apply(this, arguments));
  }

  _createClass(ColouredQuadrangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, vertices, indexes);


      return colouredQuadrangle;
    }
  }]);

  return ColouredQuadrangle;
}(ColouredCanvasElement);

module.exports = ColouredQuadrangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvcXVhZHJhbmdsZS5qcyJdLCJuYW1lcyI6WyJxdWFkcmFuZ2xlIiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImluZGV4ZXMiLCJkZWZhdWx0VmVydGljZXMiLCJDb2xvdXJlZFF1YWRyYW5nbGUiLCJwcm9wZXJ0aWVzIiwidmVydGljZXMiLCJjb2xvdXJlZFF1YWRyYW5nbGUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLGtDQUFSLENBRDlCOztJQUdRRSxPLEdBQTZCSCxVLENBQTdCRyxPO0lBQVNDLGUsR0FBb0JKLFUsQ0FBcEJJLGU7O0lBRVhDLGtCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGlDQUNPQSxVQURQLENBQ3hCQyxRQUR3QjtBQUFBLFVBQ3hCQSxRQUR3Qix3Q0FDYkgsZUFEYTtBQUFBLFVBRTFCSSxrQkFGMEIsR0FFTE4sc0JBQXNCTyxjQUF0QixDQUFxQ0osa0JBQXJDLEVBQXlEQyxVQUF6RCxFQUFxRUMsUUFBckUsRUFBK0VKLE9BQS9FLENBRks7OztBQUloQyxhQUFPSyxrQkFBUDtBQUNEOzs7O0VBTjhCTixxQjs7QUFTakNRLE9BQU9DLE9BQVAsR0FBaUJOLGtCQUFqQiIsImZpbGUiOiJxdWFkcmFuZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBxdWFkcmFuZ2xlID0gcmVxdWlyZSgnLi4vcXVhZHJhbmdsZScpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgeyBpbmRleGVzLCBkZWZhdWx0VmVydGljZXMgfSA9IHF1YWRyYW5nbGU7XG5cbmNsYXNzIENvbG91cmVkUXVhZHJhbmdsZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB2ZXJ0aWNlcyA9IGRlZmF1bHRWZXJ0aWNlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZFF1YWRyYW5nbGUgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcyk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRRdWFkcmFuZ2xlO1xuIl19