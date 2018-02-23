'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColouredCanvasElement = require('../../element/canvas/coloured');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vY29sb3VyZWQvY3Vib2lkLmpzIl0sIm5hbWVzIjpbImN1Ym9pZCIsInJlcXVpcmUiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMiLCJkZWZhdWx0SW5kZXhlcyIsImRlZmF1bHRDb2xvdXIiLCJDb2xvdXJlZEN1Ym9pZCIsInByb3BlcnRpZXMiLCJ2ZXJ0ZXhDb29yZGluYXRlcyIsImluZGV4ZXMiLCJjb2xvdXIiLCJjb2xvdXJlZEN1Ym9pZCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSwrQkFBUixDQUQ5Qjs7SUFHUUUsd0IsR0FBNERILE0sQ0FBNURHLHdCO0lBQTBCQyxjLEdBQWtDSixNLENBQWxDSSxjO0lBQWdCQyxhLEdBQWtCTCxNLENBQWxCSyxhOztJQUU1Q0MsYzs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxrQ0FDMkVBLFVBRDNFLENBQ3hCQyxpQkFEd0I7QUFBQSxVQUN4QkEsaUJBRHdCLHlDQUNKTCx3QkFESTtBQUFBLGdDQUMyRUksVUFEM0UsQ0FDc0JFLE9BRHRCO0FBQUEsVUFDc0JBLE9BRHRCLHVDQUNnQ0wsY0FEaEM7QUFBQSwrQkFDMkVHLFVBRDNFLENBQ2dERyxNQURoRDtBQUFBLFVBQ2dEQSxNQURoRCxzQ0FDeURMLGFBRHpEO0FBQUEsVUFFMUJNLGNBRjBCLEdBRVRULHNCQUFzQlUsY0FBdEIsQ0FBcUNOLGNBQXJDLEVBQXFEQyxVQUFyRCxFQUFpRUMsaUJBQWpFLEVBQW9GQyxPQUFwRixFQUE2RkMsTUFBN0YsQ0FGUzs7O0FBSWhDLGFBQU9DLGNBQVA7QUFDRDs7OztFQU4wQlQscUI7O0FBUzdCVyxPQUFPQyxPQUFQLEdBQWlCUixjQUFqQiIsImZpbGUiOiJjdWJvaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgeyBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGRlZmF1bHRJbmRleGVzLCBkZWZhdWx0Q29sb3VyIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIENvbG91cmVkQ3Vib2lkIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRleENvb3JkaW5hdGVzID0gZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRDdWJvaWQgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRDdWJvaWQsIHByb3BlcnRpZXMsIHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ3Vib2lkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDdWJvaWQ7XG4iXX0=