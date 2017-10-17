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
                      offset = properties.offset,
                      rotations = properties.rotations,
                      imageName = properties.imageName,
                      textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotations),
                      vertexNormalData = calculateVertexNormalData(vertexPositionData),
                      texturePlane = TextureElement.fromProperties(TexturePlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return texturePlane;
            }
      }]);

      return TexturePlane;
}(TextureElement);

module.exports = TexturePlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJwbGFuZSIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZVBsYW5lIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJvZmZzZXQiLCJyb3RhdGlvbnMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidGV4dHVyZVBsYW5lIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCOztJQUlRRywyQixHQUEyRkQsZSxDQUEzRkMsMkI7SUFBNkJDLHlCLEdBQThERixlLENBQTlERSx5QjtJQUEyQkMsOEIsR0FBbUNILGUsQ0FBbkNHLDhCO0lBQ3hEQyxlLEdBQStDUCxLLENBQS9DTyxlO0lBQWlCQyx5QixHQUE4QlIsSyxDQUE5QlEseUI7O0lBRW5CQyxZOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDK0JELFVBRC9CLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsTUFEaUIsR0FDK0JGLFVBRC9CLENBQ2pCRSxNQURpQjtBQUFBLHNCQUNUQyxLQURTLEdBQytCSCxVQUQvQixDQUNURyxLQURTO0FBQUEsc0JBQ0ZDLE1BREUsR0FDK0JKLFVBRC9CLENBQ0ZJLE1BREU7QUFBQSxzQkFDTUMsU0FETixHQUMrQkwsVUFEL0IsQ0FDTUssU0FETjtBQUFBLHNCQUNpQkMsU0FEakIsR0FDK0JOLFVBRC9CLENBQ2lCTSxTQURqQjtBQUFBLHNCQUUxQkMscUJBRjBCLEdBRUZYLCtCQUErQkUseUJBQS9CLEVBQTBEUSxTQUExRCxDQUZFO0FBQUEsc0JBRzFCRSxrQkFIMEIsR0FHTGQsNEJBQTRCSSx5QkFBNUIsRUFBdURHLEtBQXZELEVBQThEQyxNQUE5RCxFQUFzRUMsS0FBdEUsRUFBNkVDLE1BQTdFLEVBQXFGQyxTQUFyRixDQUhLO0FBQUEsc0JBSTFCSSxnQkFKMEIsR0FJUGQsMEJBQTBCYSxrQkFBMUIsQ0FKTztBQUFBLHNCQUsxQkUsWUFMMEIsR0FLWGxCLGVBQWVtQixjQUFmLENBQThCWixZQUE5QixFQUE0Q0MsVUFBNUMsRUFBd0RRLGtCQUF4RCxFQUE0RUMsZ0JBQTVFLEVBQThGWixlQUE5RixFQUErR1UscUJBQS9HLENBTFc7OztBQU9oQyx5QkFBT0csWUFBUDtBQUNEOzs7O0VBVHdCbEIsYzs7QUFZM0JvQixPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBUZXh0dXJlRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvdGV4dHVyZScpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSwgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSwgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gcGxhbmU7XG5cbmNsYXNzIFRleHR1cmVQbGFuZSBleHRlbmRzIFRleHR1cmVFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9ucywgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCBpbWFnZU5hbWUpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb2Zmc2V0LCByb3RhdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdGV4dHVyZVBsYW5lID0gVGV4dHVyZUVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZVBsYW5lLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUGxhbmU7XG4iXX0=