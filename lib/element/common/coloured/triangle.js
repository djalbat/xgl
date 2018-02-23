'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var triangle = require('../triangle'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertexCoordinates = triangle.defaultVertexCoordinates,
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
      var _properties$vertexCoo = properties.vertexCoordinates,
          vertexCoordinates = _properties$vertexCoo === undefined ? defaultVertexCoordinates : _properties$vertexCoo,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, vertexCoordinates, indexes, colour);


      return colouredTriangle;
    }
  }]);

  return ColouredTriangle;
}(ColouredCanvasElement);

module.exports = ColouredTriangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9lbGVtZW50L2NvbW1vbi9jb2xvdXJlZC90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJ0cmlhbmdsZSIsInJlcXVpcmUiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMiLCJkZWZhdWx0SW5kZXhlcyIsImRlZmF1bHRDb2xvdXIiLCJDb2xvdXJlZFRyaWFuZ2xlIiwicHJvcGVydGllcyIsInZlcnRleENvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsImNvbG91cmVkVHJpYW5nbGUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLGtDQUFSLENBRDlCOztJQUdRRSx3QixHQUE0REgsUSxDQUE1REcsd0I7SUFBMEJDLGMsR0FBa0NKLFEsQ0FBbENJLGM7SUFBZ0JDLGEsR0FBa0JMLFEsQ0FBbEJLLGE7O0lBRTVDQyxnQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxrQ0FDMkVBLFVBRDNFLENBQ3hCQyxpQkFEd0I7QUFBQSxVQUN4QkEsaUJBRHdCLHlDQUNKTCx3QkFESTtBQUFBLGdDQUMyRUksVUFEM0UsQ0FDc0JFLE9BRHRCO0FBQUEsVUFDc0JBLE9BRHRCLHVDQUNnQ0wsY0FEaEM7QUFBQSwrQkFDMkVHLFVBRDNFLENBQ2dERyxNQURoRDtBQUFBLFVBQ2dEQSxNQURoRCxzQ0FDeURMLGFBRHpEO0FBQUEsVUFFMUJNLGdCQUYwQixHQUVQVCxzQkFBc0JVLGNBQXRCLENBQXFDTixnQkFBckMsRUFBdURDLFVBQXZELEVBQW1FQyxpQkFBbkUsRUFBc0ZDLE9BQXRGLEVBQStGQyxNQUEvRixDQUZPOzs7QUFJaEMsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQU40QlQscUI7O0FBUy9CVyxPQUFPQyxPQUFQLEdBQWlCUixnQkFBakIiLCJmaWxlIjoidHJpYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vdHJpYW5nbGUnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBkZWZhdWx0SW5kZXhlcywgZGVmYXVsdENvbG91ciB9ID0gdHJpYW5nbGU7XG5cbmNsYXNzIENvbG91cmVkVHJpYW5nbGUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGV4Q29vcmRpbmF0ZXMgPSBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZFRyaWFuZ2xlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkVHJpYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFRyaWFuZ2xlO1xuIl19