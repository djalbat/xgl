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
                      depth = properties.depth,
                      height = properties.height,
                      offset = properties.offset,
                      imageName = properties.imageName,
                      textureCoordinateData = calculateTextureCoordinateData(imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL3RleHR1cmUuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIlRleHR1cmVFbGVtZW50IiwidmVydGV4VXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZUN1Ym9pZCIsInByb3BlcnRpZXMiLCJ3aWR0aCIsImRlcHRoIiwiaGVpZ2h0Iiwib2Zmc2V0IiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwidmVydGV4UG9zaXRpb25EYXRhIiwidGV4dHVyZUN1Ym9pZCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImltYWdlTmFtZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsNkJBQVIsQ0FIMUI7O0FBS00sSUFBRUksMkJBQUYsR0FBa0NGLGVBQWxDLENBQUVFLDJCQUFGO0FBQUEsSUFDRUMsbUNBREYsR0FDMENGLGlCQUQxQyxDQUNFRSxtQ0FERjtBQUFBLElBRUVDLGVBRkYsR0FFbUVQLE1BRm5FLENBRUVPLGVBRkY7QUFBQSxJQUVtQkMsZ0JBRm5CLEdBRW1FUixNQUZuRSxDQUVtQlEsZ0JBRm5CO0FBQUEsSUFFcUNDLHlCQUZyQyxHQUVtRVQsTUFGbkUsQ0FFcUNTLHlCQUZyQzs7SUFJQUMsYTs7Ozs7Ozs7Ozs7MkNBQ2tCQyxVLEVBQVk7QUFBQSxzQkFDeEJDLEtBRHdCLEdBQ29CRCxVQURwQixDQUN4QkMsS0FEd0I7QUFBQSxzQkFDakJDLEtBRGlCLEdBQ29CRixVQURwQixDQUNqQkUsS0FEaUI7QUFBQSxzQkFDVkMsTUFEVSxHQUNvQkgsVUFEcEIsQ0FDVkcsTUFEVTtBQUFBLHNCQUNGQyxNQURFLEdBQ29CSixVQURwQixDQUNGSSxNQURFO0FBQUEsc0JBQ01DLFNBRE4sR0FDb0JMLFVBRHBCLENBQ01LLFNBRE47QUFBQSxzQkFFMUJDLHFCQUYwQixHQUVGQywrQkFBK0JGLFNBQS9CLENBRkU7QUFBQSxzQkFHMUJHLGtCQUgwQixHQUdMZCw0QkFBNEJJLHlCQUE1QixFQUF1REcsS0FBdkQsRUFBOERDLEtBQTlELEVBQXFFQyxNQUFyRSxFQUE2RUMsTUFBN0UsQ0FISztBQUFBLHNCQUkxQkssYUFKMEIsR0FJVmxCLGVBQWVtQixjQUFmLENBQThCWCxhQUE5QixFQUE2Q0MsVUFBN0MsRUFBeURRLGtCQUF6RCxFQUE2RVgsZ0JBQTdFLEVBQStGRCxlQUEvRixFQUFnSFUscUJBQWhILENBSlU7OztBQU1oQyx5QkFBT0csYUFBUDtBQUNEOzs7O0VBUnlCbEIsYzs7QUFXNUJvQixPQUFPQyxPQUFQLEdBQWlCYixhQUFqQjs7QUFFQSxTQUFTUSw4QkFBVCxDQUF3Q0YsU0FBeEMsRUFBbUQ7QUFDakQsVUFBTVEsYUFBYSxDQUNYUixTQURXLEVBRVhBLFNBRlcsRUFHWEEsU0FIVyxFQUlYQSxTQUpXLEVBS1hBLFNBTFcsRUFNWEEsU0FOVyxDQUFuQjtBQUFBLFVBUU1DLHdCQUF3Qlgsb0NBQW9Da0IsVUFBcEMsQ0FSOUI7O0FBVUEsYUFBT1AscUJBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvdmVydGV4JyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3Vib2lkO1xuXG5jbGFzcyBUZXh0dXJlQ3Vib2lkIGV4dGVuZHMgVGV4dHVyZUVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCwgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YShpbWFnZU5hbWUpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0KSxcbiAgICAgICAgICB0ZXh0dXJlQ3Vib2lkID0gVGV4dHVyZUVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZUN1Ym9pZCwgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUN1Ym9pZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVDdWJvaWQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YShpbWFnZU5hbWUpIHtcbiAgY29uc3QgaW1hZ2VOYW1lcyA9IFtcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICAgIGltYWdlTmFtZVxuICAgICAgICBdLFxuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyhpbWFnZU5hbWVzKTtcblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xufVxuIl19