'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TextureElement = require('../../../element/texture'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateTextureCoordinateData = vertexUtilities.calculateTextureCoordinateData,
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
                      textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
                      texturePlane = TextureElement.fromProperties(TexturePlane, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return texturePlane;
            }
      }]);

      return TexturePlane;
}(TextureElement);

module.exports = TexturePlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJwbGFuZSIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZVBsYW5lIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJvZmZzZXQiLCJyb3RhdGlvbiIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInRleHR1cmVQbGFuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwyQkFBUixDQUZ4Qjs7SUFJUUcsMkIsR0FBZ0VELGUsQ0FBaEVDLDJCO0lBQTZCQyw4QixHQUFtQ0YsZSxDQUFuQ0UsOEI7SUFDN0JDLGUsR0FBaUVOLEssQ0FBakVNLGU7SUFBaUJDLGdCLEdBQWdEUCxLLENBQWhETyxnQjtJQUFrQkMseUIsR0FBOEJSLEssQ0FBOUJRLHlCOztJQUVyQ0MsWTs7Ozs7Ozs7Ozs7MkNBQ2tCQyxVLEVBQVk7QUFBQSxzQkFDeEJDLEtBRHdCLEdBQzhCRCxVQUQ5QixDQUN4QkMsS0FEd0I7QUFBQSxzQkFDakJDLE1BRGlCLEdBQzhCRixVQUQ5QixDQUNqQkUsTUFEaUI7QUFBQSxzQkFDVEMsS0FEUyxHQUM4QkgsVUFEOUIsQ0FDVEcsS0FEUztBQUFBLHNCQUNGQyxNQURFLEdBQzhCSixVQUQ5QixDQUNGSSxNQURFO0FBQUEsc0JBQ01DLFFBRE4sR0FDOEJMLFVBRDlCLENBQ01LLFFBRE47QUFBQSxzQkFDZ0JDLFNBRGhCLEdBQzhCTixVQUQ5QixDQUNnQk0sU0FEaEI7QUFBQSxzQkFFMUJDLHFCQUYwQixHQUVGWiwrQkFBK0JHLHlCQUEvQixFQUEwRFEsU0FBMUQsQ0FGRTtBQUFBLHNCQUcxQkUsa0JBSDBCLEdBR0xkLDRCQUE0QkkseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxNQUE3RSxFQUFxRkMsUUFBckYsQ0FISztBQUFBLHNCQUkxQkksWUFKMEIsR0FJWGpCLGVBQWVrQixjQUFmLENBQThCWCxZQUE5QixFQUE0Q0MsVUFBNUMsRUFBd0RRLGtCQUF4RCxFQUE0RVgsZ0JBQTVFLEVBQThGRCxlQUE5RixFQUErR1cscUJBQS9HLENBSlc7OztBQU1oQyx5QkFBT0UsWUFBUDtBQUNEOzs7O0VBUndCakIsYzs7QUFXM0JtQixPQUFPQyxPQUFQLEdBQWlCYixZQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBUZXh0dXJlRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvdGV4dHVyZScpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSwgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gcGxhbmU7XG5cbmNsYXNzIFRleHR1cmVQbGFuZSBleHRlbmRzIFRleHR1cmVFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9uLCBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGltYWdlTmFtZSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvZmZzZXQsIHJvdGF0aW9uKSxcbiAgICAgICAgICB0ZXh0dXJlUGxhbmUgPSBUZXh0dXJlRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlUGxhbmUsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVQbGFuZTtcbiJdfQ==