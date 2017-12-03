'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var triangle = require('../triangle'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertices = triangle.defaultVertices,
    defaultIndexes = triangle.defaultIndexes,
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
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          imageName = properties.imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, vertices, indexes, imageName, textureCoordinates);


      return texturedTriangle;
    }
  }]);

  return TexturedTriangle;
}(TexturedCanvasElement);

module.exports = TexturedTriangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvdHJpYW5nbGUuanMiXSwibmFtZXMiOlsidHJpYW5nbGUiLCJyZXF1aXJlIiwiVGV4dHVyZWRDYW52YXNFbGVtZW50IiwiZGVmYXVsdFZlcnRpY2VzIiwiZGVmYXVsdEluZGV4ZXMiLCJkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRUcmlhbmdsZSIsInByb3BlcnRpZXMiLCJ2ZXJ0aWNlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFRyaWFuZ2xlIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSxrQ0FBUixDQUQ5Qjs7SUFHUUUsZSxHQUErREgsUSxDQUEvREcsZTtJQUFpQkMsYyxHQUE4Q0osUSxDQUE5Q0ksYztJQUFnQkMseUIsR0FBOEJMLFEsQ0FBOUJLLHlCOztJQUVuQ0MsZ0I7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUEsaUNBQzRGQSxVQUQ1RixDQUN4QkMsUUFEd0I7QUFBQSxVQUN4QkEsUUFEd0Isd0NBQ2JMLGVBRGE7QUFBQSxnQ0FDNEZJLFVBRDVGLENBQ0lFLE9BREo7QUFBQSxVQUNJQSxPQURKLHVDQUNjTCxjQURkO0FBQUEsVUFDOEJNLFNBRDlCLEdBQzRGSCxVQUQ1RixDQUM4QkcsU0FEOUI7QUFBQSxrQ0FDNEZILFVBRDVGLENBQ3lDSSxrQkFEekM7QUFBQSxVQUN5Q0Esa0JBRHpDLHlDQUM4RE4seUJBRDlEO0FBQUEsVUFFMUJPLGdCQUYwQixHQUVQVixzQkFBc0JXLGNBQXRCLENBQXFDUCxnQkFBckMsRUFBdURDLFVBQXZELEVBQW1FQyxRQUFuRSxFQUE2RUMsT0FBN0UsRUFBc0ZDLFNBQXRGLEVBQWlHQyxrQkFBakcsQ0FGTzs7O0FBSWhDLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUFONEJWLHFCOztBQVMvQlksT0FBT0MsT0FBUCxHQUFpQlQsZ0JBQWpCIiwiZmlsZSI6InRyaWFuZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0cmlhbmdsZSA9IHJlcXVpcmUoJy4uL3RyaWFuZ2xlJyksXG4gICAgICBUZXh0dXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0aWNlcywgZGVmYXVsdEluZGV4ZXMsIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHRyaWFuZ2xlO1xuXG5jbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkVHJpYW5nbGU7XG4iXX0=