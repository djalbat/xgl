'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TextureElement = require('../../../element/texture'),
    imageMapUtilities = require('../../../utilities/imageMap');

var textureCoordinateDataFromImageNames = imageMapUtilities.textureCoordinateDataFromImageNames,
    vertexIndexData = cuboid.vertexIndexData,
    vertexNormalData = cuboid.vertexNormalData,
    calculateVertexPositionData = cuboid.calculateVertexPositionData;

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
                      vertexPositionData = calculateVertexPositionData(width, depth, height, offset),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL3RleHR1cmUuanMiXSwibmFtZXMiOlsiY3Vib2lkIiwicmVxdWlyZSIsIlRleHR1cmVFbGVtZW50IiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJUZXh0dXJlQ3Vib2lkIiwicHJvcGVydGllcyIsIndpZHRoIiwiZGVwdGgiLCJoZWlnaHQiLCJvZmZzZXQiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ0ZXh0dXJlQ3Vib2lkIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1hZ2VOYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSw2QkFBUixDQUYxQjs7QUFJTSxJQUFFRyxtQ0FBRixHQUEwQ0QsaUJBQTFDLENBQUVDLG1DQUFGO0FBQUEsSUFDRUMsZUFERixHQUNxRUwsTUFEckUsQ0FDRUssZUFERjtBQUFBLElBQ21CQyxnQkFEbkIsR0FDcUVOLE1BRHJFLENBQ21CTSxnQkFEbkI7QUFBQSxJQUNxQ0MsMkJBRHJDLEdBQ3FFUCxNQURyRSxDQUNxQ08sMkJBRHJDOztJQUdBQyxhOzs7Ozs7Ozs7OzsyQ0FDa0JDLFUsRUFBWTtBQUFBLHNCQUN4QkMsS0FEd0IsR0FDb0JELFVBRHBCLENBQ3hCQyxLQUR3QjtBQUFBLHNCQUNqQkMsS0FEaUIsR0FDb0JGLFVBRHBCLENBQ2pCRSxLQURpQjtBQUFBLHNCQUNWQyxNQURVLEdBQ29CSCxVQURwQixDQUNWRyxNQURVO0FBQUEsc0JBQ0ZDLE1BREUsR0FDb0JKLFVBRHBCLENBQ0ZJLE1BREU7QUFBQSxzQkFDTUMsU0FETixHQUNvQkwsVUFEcEIsQ0FDTUssU0FETjtBQUFBLHNCQUUxQkMscUJBRjBCLEdBRUZDLCtCQUErQkYsU0FBL0IsQ0FGRTtBQUFBLHNCQUcxQkcsa0JBSDBCLEdBR0xWLDRCQUE0QkcsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDQyxNQUExQyxFQUFrREMsTUFBbEQsQ0FISztBQUFBLHNCQUkxQkssYUFKMEIsR0FJVmhCLGVBQWVpQixjQUFmLENBQThCWCxhQUE5QixFQUE2Q0MsVUFBN0MsRUFBeURRLGtCQUF6RCxFQUE2RVgsZ0JBQTdFLEVBQStGRCxlQUEvRixFQUFnSFUscUJBQWhILENBSlU7OztBQU1oQyx5QkFBT0csYUFBUDtBQUNEOzs7O0VBUnlCaEIsYzs7QUFXNUJrQixPQUFPQyxPQUFQLEdBQWlCYixhQUFqQjs7QUFFQSxTQUFTUSw4QkFBVCxDQUF3Q0YsU0FBeEMsRUFBbUQ7QUFDakQsVUFBTVEsYUFBYSxDQUNiUixTQURhLEVBRWJBLFNBRmEsRUFHYkEsU0FIYSxFQUliQSxTQUphLEVBS2JBLFNBTGEsRUFNYkEsU0FOYSxDQUFuQjtBQUFBLFVBUUlDLHdCQUF3Qlgsb0NBQW9Da0IsVUFBcEMsQ0FSNUI7O0FBVUEsYUFBT1AscUJBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN1Ym9pZDtcblxuY2xhc3MgVGV4dHVyZUN1Ym9pZCBleHRlbmRzIFRleHR1cmVFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQsIGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW1hZ2VOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEod2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCksXG4gICAgICAgICAgdGV4dHVyZUN1Ym9pZCA9IFRleHR1cmVFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVDdWJvaWQsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQ3Vib2lkO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW1hZ2VOYW1lKSB7XG4gIGNvbnN0IGltYWdlTmFtZXMgPSBbXG4gICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICBpbWFnZU5hbWVcbiAgICAgIF0sXG4gICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyhpbWFnZU5hbWVzKTtcblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xufVxuIl19