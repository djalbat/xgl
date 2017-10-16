'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TextureElement = require('../../../element/texture'),
    vertexUtilities = require('../../../utilities/vertex'),
    imageMapUtilities = require('../../../utilities/imageMap');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    textureCoordinateDataFromImageNames = imageMapUtilities.textureCoordinateDataFromImageNames,
    vertexIndexData = plane.vertexIndexData,
    vertexNormalData = plane.vertexNormalData,
    initialVertexPositionData = plane.initialVertexPositionData;

var TexturePlane = function (_TextureElement) {
      _inherits(TexturePlane, _TextureElement);

      function TexturePlane() {
            _classCallCheck(this, TexturePlane);

            return _possibleConstructorReturn(this, (TexturePlane.__proto__ || Object.getPrototypeOf(TexturePlane)).apply(this, arguments));
      }

      _createClass(TexturePlane, null, [{
            key: 'fromProperties',
            value: function fromProperties(properties) {
                  var width = properties.width,
                      height = properties.height,
                      depth = properties.depth,
                      offset = properties.offset,
                      rotation = properties.rotation,
                      imageName = properties.imageName,
                      textureCoordinateData = calculateTextureCoordinateData(imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
                      texturePlane = TextureElement.fromProperties(TexturePlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return texturePlane;
            }
      }]);

      return TexturePlane;
}(TextureElement);

module.exports = TexturePlane;

function calculateTextureCoordinateData(imageName) {
      var imageNames = [imageName],
          textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);

      return textureCoordinateData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJwbGFuZSIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImltYWdlTWFwVXRpbGl0aWVzIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXMiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIlRleHR1cmVQbGFuZSIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwib2Zmc2V0Iiwicm90YXRpb24iLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ0ZXh0dXJlUGxhbmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbWFnZU5hbWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCO0FBQUEsSUFHTUcsb0JBQW9CSCxRQUFRLDZCQUFSLENBSDFCOztBQUtNLElBQUVJLDJCQUFGLEdBQWtDRixlQUFsQyxDQUFFRSwyQkFBRjtBQUFBLElBQ0VDLG1DQURGLEdBQzBDRixpQkFEMUMsQ0FDRUUsbUNBREY7QUFBQSxJQUVFQyxlQUZGLEdBRW1FUCxLQUZuRSxDQUVFTyxlQUZGO0FBQUEsSUFFbUJDLGdCQUZuQixHQUVtRVIsS0FGbkUsQ0FFbUJRLGdCQUZuQjtBQUFBLElBRXFDQyx5QkFGckMsR0FFbUVULEtBRm5FLENBRXFDUyx5QkFGckM7O0lBSUFDLFk7Ozs7Ozs7Ozs7OzJDQUNrQkMsVSxFQUFZO0FBQUEsc0JBQ3hCQyxLQUR3QixHQUM4QkQsVUFEOUIsQ0FDeEJDLEtBRHdCO0FBQUEsc0JBQ2pCQyxNQURpQixHQUM4QkYsVUFEOUIsQ0FDakJFLE1BRGlCO0FBQUEsc0JBQ1RDLEtBRFMsR0FDOEJILFVBRDlCLENBQ1RHLEtBRFM7QUFBQSxzQkFDRkMsTUFERSxHQUM4QkosVUFEOUIsQ0FDRkksTUFERTtBQUFBLHNCQUNNQyxRQUROLEdBQzhCTCxVQUQ5QixDQUNNSyxRQUROO0FBQUEsc0JBQ2dCQyxTQURoQixHQUM4Qk4sVUFEOUIsQ0FDZ0JNLFNBRGhCO0FBQUEsc0JBRTFCQyxxQkFGMEIsR0FFRkMsK0JBQStCRixTQUEvQixDQUZFO0FBQUEsc0JBRzFCRyxrQkFIMEIsR0FHTGYsNEJBQTRCSSx5QkFBNUIsRUFBdURHLEtBQXZELEVBQThEQyxNQUE5RCxFQUFzRUMsS0FBdEUsRUFBNkVDLE1BQTdFLEVBQXFGQyxRQUFyRixDQUhLO0FBQUEsc0JBSTFCSyxZQUowQixHQUlYbkIsZUFBZW9CLGNBQWYsQ0FBOEJaLFlBQTlCLEVBQTRDQyxVQUE1QyxFQUF3RFMsa0JBQXhELEVBQTRFWixnQkFBNUUsRUFBOEZELGVBQTlGLEVBQStHVyxxQkFBL0csQ0FKVzs7O0FBTWhDLHlCQUFPRyxZQUFQO0FBQ0Q7Ozs7RUFSd0JuQixjOztBQVczQnFCLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCOztBQUVBLFNBQVNTLDhCQUFULENBQXdDRixTQUF4QyxFQUFtRDtBQUNqRCxVQUFNUSxhQUFhLENBQ1hSLFNBRFcsQ0FBbkI7QUFBQSxVQUdNQyx3QkFBd0JaLG9DQUFvQ21CLFVBQXBDLENBSDlCOztBQUtBLGFBQU9QLHFCQUFQO0FBQ0QiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGxhbmUgPSByZXF1aXJlKCcuLi9wbGFuZScpLFxuICAgICAgVGV4dHVyZUVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L3RleHR1cmUnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBwbGFuZTtcblxuY2xhc3MgVGV4dHVyZVBsYW5lIGV4dGVuZHMgVGV4dHVyZUVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb24sIGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW1hZ2VOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb24pLFxuICAgICAgICAgIHRleHR1cmVQbGFuZSA9IFRleHR1cmVFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVQbGFuZSwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVBsYW5lO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW1hZ2VOYW1lKSB7XG4gIGNvbnN0IGltYWdlTmFtZXMgPSBbXG4gICAgICAgICAgaW1hZ2VOYW1lXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG4iXX0=