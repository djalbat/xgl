'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quadrangle = require('../quadrangle'),
    ColouredCanvasElement = require('../../element/canvas/coloured');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vY29sb3VyZWQvcXVhZHJhbmdsZS5qcyJdLCJuYW1lcyI6WyJxdWFkcmFuZ2xlIiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImRlZmF1bHRWZXJ0ZXhDb29yZGluYXRlcyIsImRlZmF1bHRJbmRleGVzIiwiZGVmYXVsdENvbG91ciIsIkNvbG91cmVkUXVhZHJhbmdsZSIsInByb3BlcnRpZXMiLCJ2ZXJ0ZXhDb29yZGluYXRlcyIsImluZGV4ZXMiLCJjb2xvdXIiLCJjb2xvdXJlZFF1YWRyYW5nbGUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLCtCQUFSLENBRDlCOztJQUdRRSx3QixHQUE0REgsVSxDQUE1REcsd0I7SUFBMEJDLGMsR0FBa0NKLFUsQ0FBbENJLGM7SUFBZ0JDLGEsR0FBa0JMLFUsQ0FBbEJLLGE7O0lBRTVDQyxrQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxrQ0FDMkVBLFVBRDNFLENBQ3hCQyxpQkFEd0I7QUFBQSxVQUN4QkEsaUJBRHdCLHlDQUNKTCx3QkFESTtBQUFBLGdDQUMyRUksVUFEM0UsQ0FDc0JFLE9BRHRCO0FBQUEsVUFDc0JBLE9BRHRCLHVDQUNnQ0wsY0FEaEM7QUFBQSwrQkFDMkVHLFVBRDNFLENBQ2dERyxNQURoRDtBQUFBLFVBQ2dEQSxNQURoRCxzQ0FDeURMLGFBRHpEO0FBQUEsVUFFMUJNLGtCQUYwQixHQUVMVCxzQkFBc0JVLGNBQXRCLENBQXFDTixrQkFBckMsRUFBeURDLFVBQXpELEVBQXFFQyxpQkFBckUsRUFBd0ZDLE9BQXhGLEVBQWlHQyxNQUFqRyxDQUZLOzs7QUFJaEMsYUFBT0Msa0JBQVA7QUFDRDs7OztFQU44QlQscUI7O0FBU2pDVyxPQUFPQyxPQUFQLEdBQWlCUixrQkFBakIiLCJmaWxlIjoicXVhZHJhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcXVhZHJhbmdsZSA9IHJlcXVpcmUoJy4uL3F1YWRyYW5nbGUnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBkZWZhdWx0SW5kZXhlcywgZGVmYXVsdENvbG91ciB9ID0gcXVhZHJhbmdsZTtcblxuY2xhc3MgQ29sb3VyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRleENvb3JkaW5hdGVzID0gZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRRdWFkcmFuZ2xlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgdmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRRdWFkcmFuZ2xlO1xuIl19