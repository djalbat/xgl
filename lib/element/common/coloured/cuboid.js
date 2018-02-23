'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertexCoordinates = cuboid.defaultVertexCoordinates,
    defaultIndexes = cuboid.defaultIndexes,
    defaultColour = cuboid.defaultColour;

var ColouredCuboid = function (_ColouredCanvasElemen) {
  _inherits(ColouredCuboid, _ColouredCanvasElemen);

  function ColouredCuboid() {
    _classCallCheck(this, ColouredCuboid);

    return _possibleConstructorReturn(this, (ColouredCuboid.__proto__ || Object.getPrototypeOf(ColouredCuboid)).apply(this, arguments));
  }

  _createClass(ColouredCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertexCoo = properties.vertexCoordinates,
          vertexCoordinates = _properties$vertexCoo === undefined ? defaultVertexCoordinates : _properties$vertexCoo,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertexCoordinates, indexes, colour);


      return colouredCuboid;
    }
  }]);

  return ColouredCuboid;
}(ColouredCanvasElement);

module.exports = ColouredCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9lbGVtZW50L2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImRlZmF1bHRWZXJ0ZXhDb29yZGluYXRlcyIsImRlZmF1bHRJbmRleGVzIiwiZGVmYXVsdENvbG91ciIsIkNvbG91cmVkQ3Vib2lkIiwicHJvcGVydGllcyIsInZlcnRleENvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsImNvbG91cmVkQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLGtDQUFSLENBRDlCOztJQUdRRSx3QixHQUE0REgsTSxDQUE1REcsd0I7SUFBMEJDLGMsR0FBa0NKLE0sQ0FBbENJLGM7SUFBZ0JDLGEsR0FBa0JMLE0sQ0FBbEJLLGE7O0lBRTVDQyxjOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGtDQUMyRUEsVUFEM0UsQ0FDeEJDLGlCQUR3QjtBQUFBLFVBQ3hCQSxpQkFEd0IseUNBQ0pMLHdCQURJO0FBQUEsZ0NBQzJFSSxVQUQzRSxDQUNzQkUsT0FEdEI7QUFBQSxVQUNzQkEsT0FEdEIsdUNBQ2dDTCxjQURoQztBQUFBLCtCQUMyRUcsVUFEM0UsQ0FDZ0RHLE1BRGhEO0FBQUEsVUFDZ0RBLE1BRGhELHNDQUN5REwsYUFEekQ7QUFBQSxVQUUxQk0sY0FGMEIsR0FFVFQsc0JBQXNCVSxjQUF0QixDQUFxQ04sY0FBckMsRUFBcURDLFVBQXJELEVBQWlFQyxpQkFBakUsRUFBb0ZDLE9BQXBGLEVBQTZGQyxNQUE3RixDQUZTOzs7QUFJaEMsYUFBT0MsY0FBUDtBQUNEOzs7O0VBTjBCVCxxQjs7QUFTN0JXLE9BQU9DLE9BQVAsR0FBaUJSLGNBQWpCIiwiZmlsZSI6ImN1Ym9pZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vib2lkID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0ZXhDb29yZGluYXRlcywgZGVmYXVsdEluZGV4ZXMsIGRlZmF1bHRDb2xvdXIgfSA9IGN1Ym9pZDtcblxuY2xhc3MgQ29sb3VyZWRDdWJvaWQgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGV4Q29vcmRpbmF0ZXMgPSBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZEN1Ym9pZCA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZEN1Ym9pZCwgcHJvcGVydGllcywgdmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEN1Ym9pZDtcbiJdfQ==