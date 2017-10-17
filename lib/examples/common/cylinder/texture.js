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
                      position = properties.position,
                      rotations = properties.rotations,
                      imageName = properties.imageName,
                      textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, position, rotations),
                      vertexNormalData = calculateVertexNormalData(vertexPositionData),
                      textureCylinder = TextureElement.fromProperties(TextureCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return textureCylinder;
            }
      }]);

      return TextureCylinder;
}(TextureElement);

module.exports = TextureCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJjeWxpbmRlciIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZUN5bGluZGVyIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ0ZXh0dXJlQ3lsaW5kZXIiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCOztJQUlRRywyQixHQUEyRkQsZSxDQUEzRkMsMkI7SUFBNkJDLHlCLEdBQThERixlLENBQTlERSx5QjtJQUEyQkMsOEIsR0FBbUNILGUsQ0FBbkNHLDhCO0lBQ3hEQyxlLEdBQStDUCxRLENBQS9DTyxlO0lBQWlCQyx5QixHQUE4QlIsUSxDQUE5QlEseUI7O0lBRW5CQyxlOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDaUNELFVBRGpDLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsTUFEaUIsR0FDaUNGLFVBRGpDLENBQ2pCRSxNQURpQjtBQUFBLHNCQUNUQyxLQURTLEdBQ2lDSCxVQURqQyxDQUNURyxLQURTO0FBQUEsc0JBQ0ZDLFFBREUsR0FDaUNKLFVBRGpDLENBQ0ZJLFFBREU7QUFBQSxzQkFDUUMsU0FEUixHQUNpQ0wsVUFEakMsQ0FDUUssU0FEUjtBQUFBLHNCQUNtQkMsU0FEbkIsR0FDaUNOLFVBRGpDLENBQ21CTSxTQURuQjtBQUFBLHNCQUUxQkMscUJBRjBCLEdBRUZYLCtCQUErQkUseUJBQS9CLEVBQTBEUSxTQUExRCxDQUZFO0FBQUEsc0JBRzFCRSxrQkFIMEIsR0FHTGQsNEJBQTRCSSx5QkFBNUIsRUFBdURHLEtBQXZELEVBQThEQyxNQUE5RCxFQUFzRUMsS0FBdEUsRUFBNkVDLFFBQTdFLEVBQXVGQyxTQUF2RixDQUhLO0FBQUEsc0JBSTFCSSxnQkFKMEIsR0FJUGQsMEJBQTBCYSxrQkFBMUIsQ0FKTztBQUFBLHNCQUsxQkUsZUFMMEIsR0FLUmxCLGVBQWVtQixjQUFmLENBQThCWixlQUE5QixFQUErQ0MsVUFBL0MsRUFBMkRRLGtCQUEzRCxFQUErRUMsZ0JBQS9FLEVBQWlHWixlQUFqRyxFQUFrSFUscUJBQWxILENBTFE7OztBQU9oQyx5QkFBT0csZUFBUDtBQUNEOzs7O0VBVDJCbEIsYzs7QUFZOUJvQixPQUFPQyxPQUFQLEdBQWlCZCxlQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvdGV4dHVyZScpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSwgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSwgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIFRleHR1cmVDeWxpbmRlciBleHRlbmRzIFRleHR1cmVFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zLCBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGltYWdlTmFtZSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHRleHR1cmVDeWxpbmRlciA9IFRleHR1cmVFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVDeWxpbmRlciwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUN5bGluZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN5bGluZGVyO1xuIl19