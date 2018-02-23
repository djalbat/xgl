'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertexCoordinates = cuboid.defaultVertexCoordinates,
    defaultIndexes = cuboid.defaultIndexes,
    defaultImageName = cuboid.defaultImageName,
    defaultTextureCoordinates = cuboid.defaultTextureCoordinates;

var TexturedCuboid = function (_TexturedCanvasElemen) {
  _inherits(TexturedCuboid, _TexturedCanvasElemen);

  function TexturedCuboid() {
    _classCallCheck(this, TexturedCuboid);

    return _possibleConstructorReturn(this, (TexturedCuboid.__proto__ || Object.getPrototypeOf(TexturedCuboid)).apply(this, arguments));
  }

  _createClass(TexturedCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertexCoo = properties.vertexCoordinates,
          vertexCoordinates = _properties$vertexCoo === undefined ? defaultVertexCoordinates : _properties$vertexCoo,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          _properties$imageName = properties.imageName,
          imageName = _properties$imageName === undefined ? defaultImageName : _properties$imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedCuboid = TexturedCanvasElement.fromProperties(TexturedCuboid, properties, vertexCoordinates, indexes, imageName, textureCoordinates);


      return texturedCuboid;
    }
  }]);

  return TexturedCuboid;
}(TexturedCanvasElement);

module.exports = TexturedCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9lbGVtZW50L2NvbW1vbi90ZXh0dXJlZC9jdWJvaWQuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImRlZmF1bHRWZXJ0ZXhDb29yZGluYXRlcyIsImRlZmF1bHRJbmRleGVzIiwiZGVmYXVsdEltYWdlTmFtZSIsImRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJUZXh0dXJlZEN1Ym9pZCIsInByb3BlcnRpZXMiLCJ2ZXJ0ZXhDb29yZGluYXRlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZEN1Ym9pZCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUUUsd0IsR0FBMEZILE0sQ0FBMUZHLHdCO0lBQTBCQyxjLEdBQWdFSixNLENBQWhFSSxjO0lBQWdCQyxnQixHQUFnREwsTSxDQUFoREssZ0I7SUFBa0JDLHlCLEdBQThCTixNLENBQTlCTSx5Qjs7SUFFOURDLGM7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUEsa0NBQ2lJQSxVQURqSSxDQUN4QkMsaUJBRHdCO0FBQUEsVUFDeEJBLGlCQUR3Qix5Q0FDSk4sd0JBREk7QUFBQSxnQ0FDaUlLLFVBRGpJLENBQ3NCRSxPQUR0QjtBQUFBLFVBQ3NCQSxPQUR0Qix1Q0FDZ0NOLGNBRGhDO0FBQUEsa0NBQ2lJSSxVQURqSSxDQUNnREcsU0FEaEQ7QUFBQSxVQUNnREEsU0FEaEQseUNBQzRETixnQkFENUQ7QUFBQSxrQ0FDaUlHLFVBRGpJLENBQzhFSSxrQkFEOUU7QUFBQSxVQUM4RUEsa0JBRDlFLHlDQUNtR04seUJBRG5HO0FBQUEsVUFFMUJPLGNBRjBCLEdBRVRYLHNCQUFzQlksY0FBdEIsQ0FBcUNQLGNBQXJDLEVBQXFEQyxVQUFyRCxFQUFpRUMsaUJBQWpFLEVBQW9GQyxPQUFwRixFQUE2RkMsU0FBN0YsRUFBd0dDLGtCQUF4RyxDQUZTOzs7QUFJaEMsYUFBT0MsY0FBUDtBQUNEOzs7O0VBTjBCWCxxQjs7QUFTN0JhLE9BQU9DLE9BQVAsR0FBaUJULGNBQWpCIiwiZmlsZSI6ImN1Ym9pZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vib2lkID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBUZXh0dXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0ZXhDb29yZGluYXRlcywgZGVmYXVsdEluZGV4ZXMsIGRlZmF1bHRJbWFnZU5hbWUsIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IGN1Ym9pZDtcblxuY2xhc3MgVGV4dHVyZWRDdWJvaWQgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGV4Q29vcmRpbmF0ZXMgPSBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZEN1Ym9pZCA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZEN1Ym9pZCwgcHJvcGVydGllcywgdmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEN1Ym9pZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ3Vib2lkO1xuIl19