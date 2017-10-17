'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TextureElement = require('../../../element/texture'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateTextureCoordinateData = vertexUtilities.calculateTextureCoordinateData,
    vertexIndexData = cuboid.vertexIndexData,
    initialVertexPositionData = cuboid.initialVertexPositionData;

var TextureCuboid = function (_TextureElement) {
      _inherits(TextureCuboid, _TextureElement);

      function TextureCuboid() {
            _classCallCheck(this, TextureCuboid);

            return _possibleConstructorReturn(this, (TextureCuboid.__proto__ || Object.getPrototypeOf(TextureCuboid)).apply(this, arguments));
      }

      _createClass(TextureCuboid, null, [{
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
                      textureCuboid = TextureElement.fromProperties(TextureCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return textureCuboid;
            }
      }]);

      return TextureCuboid;
}(TextureElement);

module.exports = TextureCuboid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL3RleHR1cmUuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIlRleHR1cmVFbGVtZW50IiwidmVydGV4VXRpbGl0aWVzIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSIsImNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJUZXh0dXJlQ3Vib2lkIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ0ZXh0dXJlQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRnhCOztJQUlRRywyQixHQUEyRkQsZSxDQUEzRkMsMkI7SUFBNkJDLHlCLEdBQThERixlLENBQTlERSx5QjtJQUEyQkMsOEIsR0FBbUNILGUsQ0FBbkNHLDhCO0lBQ3hEQyxlLEdBQStDUCxNLENBQS9DTyxlO0lBQWlCQyx5QixHQUE4QlIsTSxDQUE5QlEseUI7O0lBRW5CQyxhOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDaUNELFVBRGpDLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsTUFEaUIsR0FDaUNGLFVBRGpDLENBQ2pCRSxNQURpQjtBQUFBLHNCQUNUQyxLQURTLEdBQ2lDSCxVQURqQyxDQUNURyxLQURTO0FBQUEsc0JBQ0ZDLFFBREUsR0FDaUNKLFVBRGpDLENBQ0ZJLFFBREU7QUFBQSxzQkFDUUMsU0FEUixHQUNpQ0wsVUFEakMsQ0FDUUssU0FEUjtBQUFBLHNCQUNtQkMsU0FEbkIsR0FDaUNOLFVBRGpDLENBQ21CTSxTQURuQjtBQUFBLHNCQUUxQkMscUJBRjBCLEdBRUZYLCtCQUErQkUseUJBQS9CLEVBQTBEUSxTQUExRCxDQUZFO0FBQUEsc0JBRzFCRSxrQkFIMEIsR0FHTGQsNEJBQTRCSSx5QkFBNUIsRUFBdURHLEtBQXZELEVBQThEQyxNQUE5RCxFQUFzRUMsS0FBdEUsRUFBNkVDLFFBQTdFLEVBQXVGQyxTQUF2RixDQUhLO0FBQUEsc0JBSTFCSSxnQkFKMEIsR0FJUGQsMEJBQTBCYSxrQkFBMUIsQ0FKTztBQUFBLHNCQUsxQkUsYUFMMEIsR0FLVmxCLGVBQWVtQixjQUFmLENBQThCWixhQUE5QixFQUE2Q0MsVUFBN0MsRUFBeURRLGtCQUF6RCxFQUE2RUMsZ0JBQTdFLEVBQStGWixlQUEvRixFQUFnSFUscUJBQWhILENBTFU7OztBQU9oQyx5QkFBT0csYUFBUDtBQUNEOzs7O0VBVHlCbEIsYzs7QUFZNUJvQixPQUFPQyxPQUFQLEdBQWlCZCxhQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIFRleHR1cmVDdWJvaWQgZXh0ZW5kcyBUZXh0dXJlRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucywgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCBpbWFnZU5hbWUpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB0ZXh0dXJlQ3Vib2lkID0gVGV4dHVyZUVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZUN1Ym9pZCwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUN1Ym9pZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVDdWJvaWQ7XG4iXX0=