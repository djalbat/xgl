'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertices = cuboid.defaultVertices,
    defaultIndexes = cuboid.defaultIndexes,
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
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          imageName = properties.imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedCuboid = TexturedCanvasElement.fromProperties(TexturedCuboid, properties, vertices, indexes, imageName, textureCoordinates);


      return texturedCuboid;
    }
  }]);

  return TexturedCuboid;
}(TexturedCanvasElement);

module.exports = TexturedCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvY3Vib2lkLmpzIl0sIm5hbWVzIjpbImN1Ym9pZCIsInJlcXVpcmUiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGljZXMiLCJkZWZhdWx0SW5kZXhlcyIsImRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJUZXh0dXJlZEN1Ym9pZCIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZEN1Ym9pZCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUUUsZSxHQUErREgsTSxDQUEvREcsZTtJQUFpQkMsYyxHQUE4Q0osTSxDQUE5Q0ksYztJQUFnQkMseUIsR0FBOEJMLE0sQ0FBOUJLLHlCOztJQUVuQ0MsYzs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxpQ0FDNEZBLFVBRDVGLENBQ3hCQyxRQUR3QjtBQUFBLFVBQ3hCQSxRQUR3Qix3Q0FDYkwsZUFEYTtBQUFBLGdDQUM0RkksVUFENUYsQ0FDSUUsT0FESjtBQUFBLFVBQ0lBLE9BREosdUNBQ2NMLGNBRGQ7QUFBQSxVQUM4Qk0sU0FEOUIsR0FDNEZILFVBRDVGLENBQzhCRyxTQUQ5QjtBQUFBLGtDQUM0RkgsVUFENUYsQ0FDeUNJLGtCQUR6QztBQUFBLFVBQ3lDQSxrQkFEekMseUNBQzhETix5QkFEOUQ7QUFBQSxVQUUxQk8sY0FGMEIsR0FFVFYsc0JBQXNCVyxjQUF0QixDQUFxQ1AsY0FBckMsRUFBcURDLFVBQXJELEVBQWlFQyxRQUFqRSxFQUEyRUMsT0FBM0UsRUFBb0ZDLFNBQXBGLEVBQStGQyxrQkFBL0YsQ0FGUzs7O0FBSWhDLGFBQU9DLGNBQVA7QUFDRDs7OztFQU4wQlYscUI7O0FBUzdCWSxPQUFPQyxPQUFQLEdBQWlCVCxjQUFqQiIsImZpbGUiOiJjdWJvaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgVGV4dHVyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWQnKTtcblxuY29uc3QgeyBkZWZhdWx0VmVydGljZXMsIGRlZmF1bHRJbmRleGVzLCBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIFRleHR1cmVkQ3Vib2lkIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZEN1Ym9pZCA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZEN1Ym9pZCwgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEN1Ym9pZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ3Vib2lkO1xuIl19