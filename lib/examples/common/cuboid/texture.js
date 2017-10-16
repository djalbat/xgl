'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TextureElement = require('../../../element/texture'),
    vertexUtilities = require('../../../utilities/vertex'),
    imageMapUtilities = require('../../../utilities/imageMap');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    textureCoordinateDataFromImageNames = imageMapUtilities.textureCoordinateDataFromImageNames,
    vertexIndexData = cuboid.vertexIndexData,
    vertexNormalData = cuboid.vertexNormalData,
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
                      offset = properties.offset,
                      rotation = properties.rotation,
                      imageName = properties.imageName,
                      textureCoordinateData = calculateTextureCoordinateData(imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, offset, rotation),
                      textureCuboid = TextureElement.fromProperties(TextureCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return textureCuboid;
            }
      }]);

      return TextureCuboid;
}(TextureElement);

module.exports = TextureCuboid;

function calculateTextureCoordinateData(imageName) {
      var imageNames = [imageName, imageName, imageName, imageName, imageName, imageName],
          textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);

      return textureCoordinateData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL3RleHR1cmUuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIlRleHR1cmVFbGVtZW50IiwidmVydGV4VXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZUN1Ym9pZCIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwib2Zmc2V0Iiwicm90YXRpb24iLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ0ZXh0dXJlQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1hZ2VOYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwyQkFBUixDQUZ4QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSw2QkFBUixDQUgxQjs7QUFLTSxJQUFFSSwyQkFBRixHQUFrQ0YsZUFBbEMsQ0FBRUUsMkJBQUY7QUFBQSxJQUNFQyxtQ0FERixHQUMwQ0YsaUJBRDFDLENBQ0VFLG1DQURGO0FBQUEsSUFFRUMsZUFGRixHQUVtRVAsTUFGbkUsQ0FFRU8sZUFGRjtBQUFBLElBRW1CQyxnQkFGbkIsR0FFbUVSLE1BRm5FLENBRW1CUSxnQkFGbkI7QUFBQSxJQUVxQ0MseUJBRnJDLEdBRW1FVCxNQUZuRSxDQUVxQ1MseUJBRnJDOztJQUlBQyxhOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDOEJELFVBRDlCLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsTUFEaUIsR0FDOEJGLFVBRDlCLENBQ2pCRSxNQURpQjtBQUFBLHNCQUNUQyxLQURTLEdBQzhCSCxVQUQ5QixDQUNURyxLQURTO0FBQUEsc0JBQ0ZDLE1BREUsR0FDOEJKLFVBRDlCLENBQ0ZJLE1BREU7QUFBQSxzQkFDTUMsUUFETixHQUM4QkwsVUFEOUIsQ0FDTUssUUFETjtBQUFBLHNCQUNnQkMsU0FEaEIsR0FDOEJOLFVBRDlCLENBQ2dCTSxTQURoQjtBQUFBLHNCQUUxQkMscUJBRjBCLEdBRUZDLCtCQUErQkYsU0FBL0IsQ0FGRTtBQUFBLHNCQUcxQkcsa0JBSDBCLEdBR0xmLDRCQUE0QkkseUJBQTVCLEVBQXVERyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxNQUE3RSxFQUFxRkMsUUFBckYsQ0FISztBQUFBLHNCQUkxQkssYUFKMEIsR0FJVm5CLGVBQWVvQixjQUFmLENBQThCWixhQUE5QixFQUE2Q0MsVUFBN0MsRUFBeURTLGtCQUF6RCxFQUE2RVosZ0JBQTdFLEVBQStGRCxlQUEvRixFQUFnSFcscUJBQWhILENBSlU7OztBQU1oQyx5QkFBT0csYUFBUDtBQUNEOzs7O0VBUnlCbkIsYzs7QUFXNUJxQixPQUFPQyxPQUFQLEdBQWlCZCxhQUFqQjs7QUFFQSxTQUFTUyw4QkFBVCxDQUF3Q0YsU0FBeEMsRUFBbUQ7QUFDakQsVUFBTVEsYUFBYSxDQUNYUixTQURXLEVBRVhBLFNBRlcsRUFHWEEsU0FIVyxFQUlYQSxTQUpXLEVBS1hBLFNBTFcsRUFNWEEsU0FOVyxDQUFuQjtBQUFBLFVBUU1DLHdCQUF3Qlosb0NBQW9DbUIsVUFBcEMsQ0FSOUI7O0FBVUEsYUFBT1AscUJBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4JyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3Vib2lkO1xuXG5jbGFzcyBUZXh0dXJlQ3Vib2lkIGV4dGVuZHMgVGV4dHVyZUVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb24sIGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW1hZ2VOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIG9mZnNldCwgcm90YXRpb24pLFxuICAgICAgICAgIHRleHR1cmVDdWJvaWQgPSBUZXh0dXJlRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ3Vib2lkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN1Ym9pZDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGltYWdlTmFtZSkge1xuICBjb25zdCBpbWFnZU5hbWVzID0gW1xuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG4iXX0=