'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TexturedCanvasElement = require('../../element/canvas/textured');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdGV4dHVyZWQvY3Vib2lkLmpzIl0sIm5hbWVzIjpbImN1Ym9pZCIsInJlcXVpcmUiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMiLCJkZWZhdWx0SW5kZXhlcyIsImRlZmF1bHRJbWFnZU5hbWUiLCJkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRDdWJvaWQiLCJwcm9wZXJ0aWVzIiwidmVydGV4Q29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwidGV4dHVyZWRDdWJvaWQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsK0JBQVIsQ0FEOUI7O0lBR1FFLHdCLEdBQTBGSCxNLENBQTFGRyx3QjtJQUEwQkMsYyxHQUFnRUosTSxDQUFoRUksYztJQUFnQkMsZ0IsR0FBZ0RMLE0sQ0FBaERLLGdCO0lBQWtCQyx5QixHQUE4Qk4sTSxDQUE5Qk0seUI7O0lBRTlEQyxjOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFBLGtDQUNpSUEsVUFEakksQ0FDeEJDLGlCQUR3QjtBQUFBLFVBQ3hCQSxpQkFEd0IseUNBQ0pOLHdCQURJO0FBQUEsZ0NBQ2lJSyxVQURqSSxDQUNzQkUsT0FEdEI7QUFBQSxVQUNzQkEsT0FEdEIsdUNBQ2dDTixjQURoQztBQUFBLGtDQUNpSUksVUFEakksQ0FDZ0RHLFNBRGhEO0FBQUEsVUFDZ0RBLFNBRGhELHlDQUM0RE4sZ0JBRDVEO0FBQUEsa0NBQ2lJRyxVQURqSSxDQUM4RUksa0JBRDlFO0FBQUEsVUFDOEVBLGtCQUQ5RSx5Q0FDbUdOLHlCQURuRztBQUFBLFVBRTFCTyxjQUYwQixHQUVUWCxzQkFBc0JZLGNBQXRCLENBQXFDUCxjQUFyQyxFQUFxREMsVUFBckQsRUFBaUVDLGlCQUFqRSxFQUFvRkMsT0FBcEYsRUFBNkZDLFNBQTdGLEVBQXdHQyxrQkFBeEcsQ0FGUzs7O0FBSWhDLGFBQU9DLGNBQVA7QUFDRDs7OztFQU4wQlgscUI7O0FBUzdCYSxPQUFPQyxPQUFQLEdBQWlCVCxjQUFqQiIsImZpbGUiOiJjdWJvaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgVGV4dHVyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWQnKTtcblxuY29uc3QgeyBkZWZhdWx0VmVydGV4Q29vcmRpbmF0ZXMsIGRlZmF1bHRJbmRleGVzLCBkZWZhdWx0SW1hZ2VOYW1lLCBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIFRleHR1cmVkQ3Vib2lkIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRleENvb3JkaW5hdGVzID0gZGVmYXVsdFZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDdWJvaWQgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRDdWJvaWQsIHByb3BlcnRpZXMsIHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEN1Ym9pZDtcbiJdfQ==