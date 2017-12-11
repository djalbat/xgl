'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertexCoordinates = cylinder.defaultVertexCoordinates,
    defaultIndexes = cylinder.defaultIndexes,
    defaultImageName = cylinder.defaultImageName,
    defaultTextureCoordinates = cylinder.defaultTextureCoordinates;

var TexturedCylinder = function (_TexturedCanvasElemen) {
  _inherits(TexturedCylinder, _TexturedCanvasElemen);

  function TexturedCylinder() {
    _classCallCheck(this, TexturedCylinder);

    return _possibleConstructorReturn(this, (TexturedCylinder.__proto__ || Object.getPrototypeOf(TexturedCylinder)).apply(this, arguments));
  }

  _createClass(TexturedCylinder, null, [{
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
          texturedCylinder = TexturedCanvasElement.fromProperties(TexturedCylinder, properties, vertexCoordinates, indexes, imageName, textureCoordinates);


      return texturedCylinder;
    }
  }]);

  return TexturedCylinder;
}(TexturedCanvasElement);

module.exports = TexturedCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvY3lsaW5kZXIuanMiXSwibmFtZXMiOlsiY3lsaW5kZXIiLCJyZXF1aXJlIiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwiZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzIiwiZGVmYXVsdEluZGV4ZXMiLCJkZWZhdWx0SW1hZ2VOYW1lIiwiZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyIsIlRleHR1cmVkQ3lsaW5kZXIiLCJwcm9wZXJ0aWVzIiwidmVydGV4Q29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwidGV4dHVyZWRDeWxpbmRlciIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsa0NBQVIsQ0FEOUI7O0lBR1FFLHdCLEdBQTBGSCxRLENBQTFGRyx3QjtJQUEwQkMsYyxHQUFnRUosUSxDQUFoRUksYztJQUFnQkMsZ0IsR0FBZ0RMLFEsQ0FBaERLLGdCO0lBQWtCQyx5QixHQUE4Qk4sUSxDQUE5Qk0seUI7O0lBRTlEQyxnQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxrQ0FDaUlBLFVBRGpJLENBQ3hCQyxpQkFEd0I7QUFBQSxVQUN4QkEsaUJBRHdCLHlDQUNKTix3QkFESTtBQUFBLGdDQUNpSUssVUFEakksQ0FDc0JFLE9BRHRCO0FBQUEsVUFDc0JBLE9BRHRCLHVDQUNnQ04sY0FEaEM7QUFBQSxrQ0FDaUlJLFVBRGpJLENBQ2dERyxTQURoRDtBQUFBLFVBQ2dEQSxTQURoRCx5Q0FDNEROLGdCQUQ1RDtBQUFBLGtDQUNpSUcsVUFEakksQ0FDOEVJLGtCQUQ5RTtBQUFBLFVBQzhFQSxrQkFEOUUseUNBQ21HTix5QkFEbkc7QUFBQSxVQUUxQk8sZ0JBRjBCLEdBRVBYLHNCQUFzQlksY0FBdEIsQ0FBcUNQLGdCQUFyQyxFQUF1REMsVUFBdkQsRUFBbUVDLGlCQUFuRSxFQUFzRkMsT0FBdEYsRUFBK0ZDLFNBQS9GLEVBQTBHQyxrQkFBMUcsQ0FGTzs7O0FBSWhDLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUFONEJYLHFCOztBQVMvQmEsT0FBT0MsT0FBUCxHQUFpQlQsZ0JBQWpCIiwiZmlsZSI6ImN5bGluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0ZXhDb29yZGluYXRlcywgZGVmYXVsdEluZGV4ZXMsIGRlZmF1bHRJbWFnZU5hbWUsIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IGN5bGluZGVyO1xuXG5jbGFzcyBUZXh0dXJlZEN5bGluZGVyIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRleENvb3JkaW5hdGVzID0gZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDeWxpbmRlciA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZEN5bGluZGVyLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhDb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEN5bGluZGVyO1xuIl19