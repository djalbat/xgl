'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var triangle = require('../triangle'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertexCoordinates = triangle.defaultVertexCoordinates,
    defaultIndexes = triangle.defaultIndexes,
    defaultImageName = triangle.defaultImageName,
    defaultTextureCoordinates = triangle.defaultTextureCoordinates;

var TexturedTriangle = function (_TexturedCanvasElemen) {
  _inherits(TexturedTriangle, _TexturedCanvasElemen);

  function TexturedTriangle() {
    _classCallCheck(this, TexturedTriangle);

    return _possibleConstructorReturn(this, (TexturedTriangle.__proto__ || Object.getPrototypeOf(TexturedTriangle)).apply(this, arguments));
  }

  _createClass(TexturedTriangle, null, [{
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
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, vertexCoordinates, indexes, imageName, textureCoordinates);


      return texturedTriangle;
    }
  }]);

  return TexturedTriangle;
}(TexturedCanvasElement);

module.exports = TexturedTriangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9lbGVtZW50L2NvbW1vbi90ZXh0dXJlZC90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJ0cmlhbmdsZSIsInJlcXVpcmUiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMiLCJkZWZhdWx0SW5kZXhlcyIsImRlZmF1bHRJbWFnZU5hbWUiLCJkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRUcmlhbmdsZSIsInByb3BlcnRpZXMiLCJ2ZXJ0ZXhDb29yZGluYXRlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFRyaWFuZ2xlIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUUUsd0IsR0FBMEZILFEsQ0FBMUZHLHdCO0lBQTBCQyxjLEdBQWdFSixRLENBQWhFSSxjO0lBQWdCQyxnQixHQUFnREwsUSxDQUFoREssZ0I7SUFBa0JDLHlCLEdBQThCTixRLENBQTlCTSx5Qjs7SUFFOURDLGdCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGtDQUNpSUEsVUFEakksQ0FDeEJDLGlCQUR3QjtBQUFBLFVBQ3hCQSxpQkFEd0IseUNBQ0pOLHdCQURJO0FBQUEsZ0NBQ2lJSyxVQURqSSxDQUNzQkUsT0FEdEI7QUFBQSxVQUNzQkEsT0FEdEIsdUNBQ2dDTixjQURoQztBQUFBLGtDQUNpSUksVUFEakksQ0FDZ0RHLFNBRGhEO0FBQUEsVUFDZ0RBLFNBRGhELHlDQUM0RE4sZ0JBRDVEO0FBQUEsa0NBQ2lJRyxVQURqSSxDQUM4RUksa0JBRDlFO0FBQUEsVUFDOEVBLGtCQUQ5RSx5Q0FDbUdOLHlCQURuRztBQUFBLFVBRTFCTyxnQkFGMEIsR0FFUFgsc0JBQXNCWSxjQUF0QixDQUFxQ1AsZ0JBQXJDLEVBQXVEQyxVQUF2RCxFQUFtRUMsaUJBQW5FLEVBQXNGQyxPQUF0RixFQUErRkMsU0FBL0YsRUFBMEdDLGtCQUExRyxDQUZPOzs7QUFJaEMsYUFBT0MsZ0JBQVA7QUFDRDs7OztFQU40QlgscUI7O0FBUy9CYSxPQUFPQyxPQUFQLEdBQWlCVCxnQkFBakIiLCJmaWxlIjoidHJpYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vdHJpYW5nbGUnKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBkZWZhdWx0SW5kZXhlcywgZGVmYXVsdEltYWdlTmFtZSwgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gdHJpYW5nbGU7XG5cbmNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGV4Q29vcmRpbmF0ZXMgPSBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkVHJpYW5nbGU7XG4iXX0=