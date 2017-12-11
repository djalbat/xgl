'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quadrangle = require('../quadrangle'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertexCoordinates = quadrangle.defaultVertexCoordinates,
    defaultIndexes = quadrangle.defaultIndexes,
    defaultImageName = quadrangle.defaultImageName,
    defaultTextureCoordinates = quadrangle.defaultTextureCoordinates;

var TexturedQuadrangle = function (_TexturedCanvasElemen) {
  _inherits(TexturedQuadrangle, _TexturedCanvasElemen);

  function TexturedQuadrangle() {
    _classCallCheck(this, TexturedQuadrangle);

    return _possibleConstructorReturn(this, (TexturedQuadrangle.__proto__ || Object.getPrototypeOf(TexturedQuadrangle)).apply(this, arguments));
  }

  _createClass(TexturedQuadrangle, null, [{
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
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, vertexCoordinates, indexes, imageName, textureCoordinates);


      return texturedQuadrangle;
    }
  }]);

  return TexturedQuadrangle;
}(TexturedCanvasElement);

module.exports = TexturedQuadrangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvcXVhZHJhbmdsZS5qcyJdLCJuYW1lcyI6WyJxdWFkcmFuZ2xlIiwicmVxdWlyZSIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImRlZmF1bHRWZXJ0ZXhDb29yZGluYXRlcyIsImRlZmF1bHRJbmRleGVzIiwiZGVmYXVsdEltYWdlTmFtZSIsImRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJUZXh0dXJlZFF1YWRyYW5nbGUiLCJwcm9wZXJ0aWVzIiwidmVydGV4Q29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwidGV4dHVyZWRRdWFkcmFuZ2xlIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUUUsd0IsR0FBMEZILFUsQ0FBMUZHLHdCO0lBQTBCQyxjLEdBQWdFSixVLENBQWhFSSxjO0lBQWdCQyxnQixHQUFnREwsVSxDQUFoREssZ0I7SUFBa0JDLHlCLEdBQThCTixVLENBQTlCTSx5Qjs7SUFFOURDLGtCOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGtDQUNpSUEsVUFEakksQ0FDeEJDLGlCQUR3QjtBQUFBLFVBQ3hCQSxpQkFEd0IseUNBQ0pOLHdCQURJO0FBQUEsZ0NBQ2lJSyxVQURqSSxDQUNzQkUsT0FEdEI7QUFBQSxVQUNzQkEsT0FEdEIsdUNBQ2dDTixjQURoQztBQUFBLGtDQUNpSUksVUFEakksQ0FDZ0RHLFNBRGhEO0FBQUEsVUFDZ0RBLFNBRGhELHlDQUM0RE4sZ0JBRDVEO0FBQUEsa0NBQ2lJRyxVQURqSSxDQUM4RUksa0JBRDlFO0FBQUEsVUFDOEVBLGtCQUQ5RSx5Q0FDbUdOLHlCQURuRztBQUFBLFVBRTFCTyxrQkFGMEIsR0FFTFgsc0JBQXNCWSxjQUF0QixDQUFxQ1Asa0JBQXJDLEVBQXlEQyxVQUF6RCxFQUFxRUMsaUJBQXJFLEVBQXdGQyxPQUF4RixFQUFpR0MsU0FBakcsRUFBNEdDLGtCQUE1RyxDQUZLOzs7QUFJaEMsYUFBT0Msa0JBQVA7QUFDRDs7OztFQU44QlgscUI7O0FBU2pDYSxPQUFPQyxPQUFQLEdBQWlCVCxrQkFBakIiLCJmaWxlIjoicXVhZHJhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcXVhZHJhbmdsZSA9IHJlcXVpcmUoJy4uL3F1YWRyYW5nbGUnKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBkZWZhdWx0SW5kZXhlcywgZGVmYXVsdEltYWdlTmFtZSwgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcXVhZHJhbmdsZTtcblxuY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRleENvb3JkaW5hdGVzID0gZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgdmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZFF1YWRyYW5nbGU7XG4iXX0=