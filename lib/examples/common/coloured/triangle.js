'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../../../facet'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = [[0, 0, 0], [1, 0, 0], [0, 1, 0]],
    indexes = [0, 1, 2];

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
          facet = Facet.fromVerticesAndIndexes(vertices, indexes),
          facets = [facet],
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, facets);


      return colouredTriangle;
    }
  }]);

  return ColouredTriangle;
}(ColouredCanvasElement);

module.exports = ColouredTriangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvdHJpYW5nbGUuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50IiwiZGVmYXVsdFZlcnRpY2VzIiwiaW5kZXhlcyIsIkNvbG91cmVkVHJpYW5nbGUiLCJwcm9wZXJ0aWVzIiwidmVydGljZXMiLCJmYWNldCIsImZyb21WZXJ0aWNlc0FuZEluZGV4ZXMiLCJmYWNldHMiLCJjb2xvdXJlZFRyaWFuZ2xlIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsZ0JBQVIsQ0FBZDtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7QUFHQSxJQUFNRSxrQkFBa0IsQ0FFbEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGa0IsRUFHbEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FIa0IsRUFJbEIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FKa0IsQ0FBeEI7QUFBQSxJQU9JQyxVQUFVLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBUGQ7O0lBU01DLGdCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGlDQUNPQSxVQURQLENBQ3hCQyxRQUR3QjtBQUFBLFVBQ3hCQSxRQUR3Qix3Q0FDYkosZUFEYTtBQUFBLFVBRTFCSyxLQUYwQixHQUVsQlIsTUFBTVMsc0JBQU4sQ0FBNkJGLFFBQTdCLEVBQXVDSCxPQUF2QyxDQUZrQjtBQUFBLFVBRzFCTSxNQUgwQixHQUdqQixDQUNQRixLQURPLENBSGlCO0FBQUEsVUFNMUJHLGdCQU4wQixHQU1QVCxzQkFBc0JVLGNBQXRCLENBQXFDUCxnQkFBckMsRUFBdURDLFVBQXZELEVBQW1FSSxNQUFuRSxDQU5POzs7QUFRaEMsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQVY0QlQscUI7O0FBYS9CVyxPQUFPQyxPQUFQLEdBQWlCVCxnQkFBakIiLCJmaWxlIjoidHJpYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjZXQnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IGRlZmF1bHRWZXJ0aWNlcyA9IFtcbiAgICAgICAgXG4gICAgICBbIDAsIDAsIDAgXSxcbiAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFxuICAgIF0sXG4gICAgaW5kZXhlcyA9IFsgMCwgMSwgMiBdO1xuXG5jbGFzcyBDb2xvdXJlZFRyaWFuZ2xlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzQW5kSW5kZXhlcyh2ZXJ0aWNlcywgaW5kZXhlcyksXG4gICAgICAgICAgZmFjZXRzID0gW1xuICAgICAgICAgICAgZmFjZXRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbG91cmVkVHJpYW5nbGUgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgZmFjZXRzKTtcblxuICAgIHJldHVybiBjb2xvdXJlZFRyaWFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRUcmlhbmdsZTtcbiJdfQ==