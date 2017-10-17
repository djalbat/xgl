'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TextureElement = require('../../../element/texture'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateTextureCoordinateData = vertexUtilities.calculateTextureCoordinateData,
    vertexIndexData = plane.vertexIndexData,
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
                      position = properties.position,
                      rotations = properties.rotations,
                      imageName = properties.imageName,
                      textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
                      vertexNormalData = calculateVertexNormalData(vertexPositionData),
                      texturePlane = TextureElement.fromProperties(TexturePlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return texturePlane;
            }
      }]);

      return TexturePlane;
}(TextureElement);

module.exports = TexturePlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJwbGFuZSIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZVBsYW5lIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ0ZXh0dXJlUGxhbmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7O0lBSVFHLDJCLEdBQTJGRCxlLENBQTNGQywyQjtJQUE2QkMseUIsR0FBOERGLGUsQ0FBOURFLHlCO0lBQTJCQyw4QixHQUFtQ0gsZSxDQUFuQ0csOEI7SUFDeERDLGUsR0FBK0NQLEssQ0FBL0NPLGU7SUFBaUJDLHlCLEdBQThCUixLLENBQTlCUSx5Qjs7SUFFbkJDLFk7Ozs7Ozs7Ozs7OzJDQUNrQkMsVSxFQUFZO0FBQUEsc0JBQ3hCQyxLQUR3QixHQUNpQ0QsVUFEakMsQ0FDeEJDLEtBRHdCO0FBQUEsc0JBQ2pCQyxNQURpQixHQUNpQ0YsVUFEakMsQ0FDakJFLE1BRGlCO0FBQUEsc0JBQ1RDLEtBRFMsR0FDaUNILFVBRGpDLENBQ1RHLEtBRFM7QUFBQSxzQkFDRkMsUUFERSxHQUNpQ0osVUFEakMsQ0FDRkksUUFERTtBQUFBLHNCQUNRQyxTQURSLEdBQ2lDTCxVQURqQyxDQUNRSyxTQURSO0FBQUEsc0JBQ21CQyxTQURuQixHQUNpQ04sVUFEakMsQ0FDbUJNLFNBRG5CO0FBQUEsc0JBRTFCQyxxQkFGMEIsR0FFRlgsK0JBQStCRSx5QkFBL0IsRUFBMERRLFNBQTFELENBRkU7QUFBQSxzQkFHMUJFLGtCQUgwQixHQUdMZCw0QkFBNEJJLHlCQUE1QixFQUF1REcsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsUUFBN0UsRUFBdUZDLFNBQXZGLENBSEs7QUFBQSxzQkFJMUJJLGdCQUowQixHQUlQZCwwQkFBMEJhLGtCQUExQixDQUpPO0FBQUEsc0JBSzFCRSxZQUwwQixHQUtYbEIsZUFBZW1CLGNBQWYsQ0FBOEJaLFlBQTlCLEVBQTRDQyxVQUE1QyxFQUF3RFEsa0JBQXhELEVBQTRFQyxnQkFBNUUsRUFBOEZaLGVBQTlGLEVBQStHVSxxQkFBL0csQ0FMVzs7O0FBT2hDLHlCQUFPRyxZQUFQO0FBQ0Q7Ozs7RUFUd0JsQixjOztBQVkzQm9CLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBsYW5lID0gcmVxdWlyZSgnLi4vcGxhbmUnKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBwbGFuZTtcblxuY2xhc3MgVGV4dHVyZVBsYW5lIGV4dGVuZHMgVGV4dHVyZUVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMsIGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgaW1hZ2VOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdGV4dHVyZVBsYW5lID0gVGV4dHVyZUVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZVBsYW5lLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUGxhbmU7XG4iXX0=