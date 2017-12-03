'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = cuboid.defaultVertices,
    defaultIndexes = cuboid.defaultIndexes;

var ColouredCuboid = function (_ColouredCanvasElemen) {
  _inherits(ColouredCuboid, _ColouredCanvasElemen);

  function ColouredCuboid() {
    _classCallCheck(this, ColouredCuboid);

    return _possibleConstructorReturn(this, (ColouredCuboid.__proto__ || Object.getPrototypeOf(ColouredCuboid)).apply(this, arguments));
  }

  _createClass(ColouredCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          colour = properties.colour,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertices, indexes, colour);


      return colouredCuboid;
    }
  }]);

  return ColouredCuboid;
}(ColouredCanvasElement);

module.exports = ColouredCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvY3Vib2lkLmpzIl0sIm5hbWVzIjpbImN1Ym9pZCIsInJlcXVpcmUiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGljZXMiLCJkZWZhdWx0SW5kZXhlcyIsIkNvbG91cmVkQ3Vib2lkIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsImNvbG91ciIsImNvbG91cmVkQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLGtDQUFSLENBRDlCOztJQUdRRSxlLEdBQW9DSCxNLENBQXBDRyxlO0lBQWlCQyxjLEdBQW1CSixNLENBQW5CSSxjOztJQUVuQkMsYzs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxpQ0FDeUNBLFVBRHpDLENBQ3hCQyxRQUR3QjtBQUFBLFVBQ3hCQSxRQUR3Qix3Q0FDYkosZUFEYTtBQUFBLGdDQUN5Q0csVUFEekMsQ0FDSUUsT0FESjtBQUFBLFVBQ0lBLE9BREosdUNBQ2NKLGNBRGQ7QUFBQSxVQUM4QkssTUFEOUIsR0FDeUNILFVBRHpDLENBQzhCRyxNQUQ5QjtBQUFBLFVBRTFCQyxjQUYwQixHQUVUUixzQkFBc0JTLGNBQXRCLENBQXFDTixjQUFyQyxFQUFxREMsVUFBckQsRUFBaUVDLFFBQWpFLEVBQTJFQyxPQUEzRSxFQUFvRkMsTUFBcEYsQ0FGUzs7O0FBSWhDLGFBQU9DLGNBQVA7QUFDRDs7OztFQU4wQlIscUI7O0FBUzdCVSxPQUFPQyxPQUFQLEdBQWlCUixjQUFqQiIsImZpbGUiOiJjdWJvaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgeyBkZWZhdWx0VmVydGljZXMsIGRlZmF1bHRJbmRleGVzIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIENvbG91cmVkQ3Vib2lkIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZEN1Ym9pZCA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZEN1Ym9pZCwgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEN1Ym9pZDtcbiJdfQ==