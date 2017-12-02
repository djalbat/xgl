'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quadrangle = require('../quadrangle'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertices = quadrangle.defaultVertices,
    defaultIndexes = quadrangle.defaultIndexes,
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
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, vertices, indexes, textureCoordinates);


      return texturedQuadrangle;
    }
  }]);

  return TexturedQuadrangle;
}(TexturedCanvasElement);

module.exports = TexturedQuadrangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvcXVhZHJhbmdsZS5qcyJdLCJuYW1lcyI6WyJxdWFkcmFuZ2xlIiwicmVxdWlyZSIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImRlZmF1bHRWZXJ0aWNlcyIsImRlZmF1bHRJbmRleGVzIiwiZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyIsIlRleHR1cmVkUXVhZHJhbmdsZSIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImluZGV4ZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFF1YWRyYW5nbGUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLGtDQUFSLENBRDlCOztJQUdRRSxlLEdBQStESCxVLENBQS9ERyxlO0lBQWlCQyxjLEdBQThDSixVLENBQTlDSSxjO0lBQWdCQyx5QixHQUE4QkwsVSxDQUE5QksseUI7O0lBRW5DQyxrQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxpQ0FDaUZBLFVBRGpGLENBQ3hCQyxRQUR3QjtBQUFBLFVBQ3hCQSxRQUR3Qix3Q0FDYkwsZUFEYTtBQUFBLGdDQUNpRkksVUFEakYsQ0FDSUUsT0FESjtBQUFBLFVBQ0lBLE9BREosdUNBQ2NMLGNBRGQ7QUFBQSxrQ0FDaUZHLFVBRGpGLENBQzhCRyxrQkFEOUI7QUFBQSxVQUM4QkEsa0JBRDlCLHlDQUNtREwseUJBRG5EO0FBQUEsVUFFMUJNLGtCQUYwQixHQUVMVCxzQkFBc0JVLGNBQXRCLENBQXFDTixrQkFBckMsRUFBeURDLFVBQXpELEVBQXFFQyxRQUFyRSxFQUErRUMsT0FBL0UsRUFBd0ZDLGtCQUF4RixDQUZLOzs7QUFJaEMsYUFBT0Msa0JBQVA7QUFDRDs7OztFQU44QlQscUI7O0FBU2pDVyxPQUFPQyxPQUFQLEdBQWlCUixrQkFBakIiLCJmaWxlIjoicXVhZHJhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcXVhZHJhbmdsZSA9IHJlcXVpcmUoJy4uL3F1YWRyYW5nbGUnKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRpY2VzLCBkZWZhdWx0SW5kZXhlcywgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcXVhZHJhbmdsZTtcblxuY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRRdWFkcmFuZ2xlO1xuIl19