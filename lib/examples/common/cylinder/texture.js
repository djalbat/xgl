'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    TextureElement = require('../../../element/texture'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateTextureCoordinateData = vertexUtilities.calculateTextureCoordinateData,
    vertexIndexData = cylinder.vertexIndexData,
    initialVertexPositionData = cylinder.initialVertexPositionData;

var TextureCylinder = function (_TextureElement) {
      _inherits(TextureCylinder, _TextureElement);

      function TextureCylinder() {
            _classCallCheck(this, TextureCylinder);

            return _possibleConstructorReturn(this, (TextureCylinder.__proto__ || Object.getPrototypeOf(TextureCylinder)).apply(this, arguments));
      }

      _createClass(TextureCylinder, null, [{
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
                      textureCylinder = TextureElement.fromProperties(TextureCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return textureCylinder;
            }
      }]);

      return TextureCylinder;
}(TextureElement);

module.exports = TextureCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJjeWxpbmRlciIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZUN5bGluZGVyIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJvZmZzZXQiLCJyb3RhdGlvbnMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidGV4dHVyZUN5bGluZGVyIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwyQkFBUixDQUZ4Qjs7SUFJUUcsMkIsR0FBMkZELGUsQ0FBM0ZDLDJCO0lBQTZCQyx5QixHQUE4REYsZSxDQUE5REUseUI7SUFBMkJDLDhCLEdBQW1DSCxlLENBQW5DRyw4QjtJQUN4REMsZSxHQUErQ1AsUSxDQUEvQ08sZTtJQUFpQkMseUIsR0FBOEJSLFEsQ0FBOUJRLHlCOztJQUVuQkMsZTs7Ozs7Ozs7Ozs7MkNBQ2tCQyxVLEVBQVk7QUFBQSxzQkFDeEJDLEtBRHdCLEdBQytCRCxVQUQvQixDQUN4QkMsS0FEd0I7QUFBQSxzQkFDakJDLE1BRGlCLEdBQytCRixVQUQvQixDQUNqQkUsTUFEaUI7QUFBQSxzQkFDVEMsS0FEUyxHQUMrQkgsVUFEL0IsQ0FDVEcsS0FEUztBQUFBLHNCQUNGQyxNQURFLEdBQytCSixVQUQvQixDQUNGSSxNQURFO0FBQUEsc0JBQ01DLFNBRE4sR0FDK0JMLFVBRC9CLENBQ01LLFNBRE47QUFBQSxzQkFDaUJDLFNBRGpCLEdBQytCTixVQUQvQixDQUNpQk0sU0FEakI7QUFBQSxzQkFFMUJDLHFCQUYwQixHQUVGWCwrQkFBK0JFLHlCQUEvQixFQUEwRFEsU0FBMUQsQ0FGRTtBQUFBLHNCQUcxQkUsa0JBSDBCLEdBR0xkLDRCQUE0QkkseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxNQUE3RSxFQUFxRkMsU0FBckYsQ0FISztBQUFBLHNCQUkxQkksZ0JBSjBCLEdBSVBkLDBCQUEwQmEsa0JBQTFCLENBSk87QUFBQSxzQkFLMUJFLGVBTDBCLEdBS1JsQixlQUFlbUIsY0FBZixDQUE4QlosZUFBOUIsRUFBK0NDLFVBQS9DLEVBQTJEUSxrQkFBM0QsRUFBK0VDLGdCQUEvRSxFQUFpR1osZUFBakcsRUFBa0hVLHFCQUFsSCxDQUxROzs7QUFPaEMseUJBQU9HLGVBQVA7QUFDRDs7OztFQVQyQmxCLGM7O0FBWTlCb0IsT0FBT0MsT0FBUCxHQUFpQmQsZUFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpLFxuICAgICAgVGV4dHVyZUVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L3RleHR1cmUnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0ZXhJbmRleERhdGEsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN5bGluZGVyO1xuXG5jbGFzcyBUZXh0dXJlQ3lsaW5kZXIgZXh0ZW5kcyBUZXh0dXJlRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb2Zmc2V0LCByb3RhdGlvbnMsIGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgaW1hZ2VOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHRleHR1cmVDeWxpbmRlciA9IFRleHR1cmVFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVDeWxpbmRlciwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUN5bGluZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN5bGluZGVyO1xuIl19