'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array'),
    imageMapUtilities = require('../../utilities/imageMap');

var flatten = arrayUtilities.flatten,
    textureCoordinatesFromImageNames = imageMapUtilities.textureCoordinatesFromImageNames;

var TexturedCanvasElement = function (_CanvasElement) {
      _inherits(TexturedCanvasElement, _CanvasElement);

      function TexturedCanvasElement(transform, imageName) {
            _classCallCheck(this, TexturedCanvasElement);

            var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform));

            _this.imageName = imageName;
            return _this;
      }

      _createClass(TexturedCanvasElement, [{
            key: 'calculateTextureCoordinateData',
            value: function calculateTextureCoordinateData(vertexPositionData) {
                  var vertexPositionDataLength = vertexPositionData.length,
                      imageNamesLength = vertexPositionDataLength / 12,
                      ///
                  imageNames = [];

                  for (var index = 0; index < imageNamesLength; index++) {
                        imageNames.push(this.imageName);
                  }

                  var textureCoordinates = textureCoordinatesFromImageNames(imageNames),
                      textureCoordinateData = flatten(textureCoordinates);

                  return textureCoordinateData;
            }
      }, {
            key: 'create',
            value: function create(colourRenderer, textureRenderer, transforms) {
                  var vertexPositionData = this.calculateVertexPositionData(transforms),
                      vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
                      vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
                      textureCoordinateData = this.calculateTextureCoordinateData(vertexPositionData);

                  textureRenderer.addVertexPositionData(vertexPositionData);
                  textureRenderer.addVertexIndexData(vertexIndexData);
                  textureRenderer.addVertexNormalData(vertexNormalData);
                  textureRenderer.addTextureCoordinateData(textureCoordinateData);

                  _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
            }
      }], [{
            key: 'fromProperties',
            value: function fromProperties(Class, properties) {
                  var imageName = properties.imageName,
                      texturedCanvasElement = CanvasElement.fromProperties(Class, properties, imageName);


                  return texturedCanvasElement;
            }
      }]);

      return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJmbGF0dGVuIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJpbWFnZU5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGgiLCJsZW5ndGgiLCJpbWFnZU5hbWVzTGVuZ3RoIiwiaW1hZ2VOYW1lcyIsImluZGV4IiwicHVzaCIsInRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFRleHR1cmVDb29yZGluYXRlRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSwwQkFBUixDQUYxQjs7QUFJTSxJQUFFRyxPQUFGLEdBQWNGLGNBQWQsQ0FBRUUsT0FBRjtBQUFBLElBQ0VDLGdDQURGLEdBQ3VDRixpQkFEdkMsQ0FDRUUsZ0NBREY7O0lBR0FDLHFCOzs7QUFDSixxQ0FBWUMsU0FBWixFQUF1QkMsU0FBdkIsRUFBa0M7QUFBQTs7QUFBQSxzSkFDMUJELFNBRDBCOztBQUdoQyxrQkFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFIZ0M7QUFJakM7Ozs7MkRBRThCQyxrQixFQUFvQjtBQUNqRCxzQkFBTUMsMkJBQTJCRCxtQkFBbUJFLE1BQXBEO0FBQUEsc0JBQ01DLG1CQUFtQkYsMkJBQTJCLEVBRHBEO0FBQUEsc0JBQ3lEO0FBQ25ERywrQkFBYSxFQUZuQjs7QUFJQSx1QkFBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRixnQkFBNUIsRUFBOENFLE9BQTlDLEVBQXVEO0FBQ3JERCxtQ0FBV0UsSUFBWCxDQUFnQixLQUFLUCxTQUFyQjtBQUNEOztBQUVELHNCQUFNUSxxQkFBcUJYLGlDQUFpQ1EsVUFBakMsQ0FBM0I7QUFBQSxzQkFDTUksd0JBQXdCYixRQUFRWSxrQkFBUixDQUQ5Qjs7QUFHQSx5QkFBT0MscUJBQVA7QUFDRDs7O21DQUVNQyxjLEVBQWdCQyxlLEVBQWlCQyxVLEVBQVk7QUFDbEQsc0JBQU1YLHFCQUFxQixLQUFLWSwyQkFBTCxDQUFpQ0QsVUFBakMsQ0FBM0I7QUFBQSxzQkFDTUUsa0JBQWtCLEtBQUtDLHdCQUFMLENBQThCZCxrQkFBOUIsQ0FEeEI7QUFBQSxzQkFFTWUsbUJBQW1CLEtBQUtDLHlCQUFMLENBQStCaEIsa0JBQS9CLENBRnpCO0FBQUEsc0JBR01RLHdCQUF3QixLQUFLUyw4QkFBTCxDQUFvQ2pCLGtCQUFwQyxDQUg5Qjs7QUFLQVUsa0NBQWdCUSxxQkFBaEIsQ0FBc0NsQixrQkFBdEM7QUFDQVUsa0NBQWdCUyxrQkFBaEIsQ0FBbUNOLGVBQW5DO0FBQ0FILGtDQUFnQlUsbUJBQWhCLENBQW9DTCxnQkFBcEM7QUFDQUwsa0NBQWdCVyx3QkFBaEIsQ0FBeUNiLHFCQUF6Qzs7QUFFQSx1SkFBYUMsY0FBYixFQUE2QkMsZUFBN0IsRUFBOENDLFVBQTlDO0FBQ0Q7OzsyQ0FFcUJXLEssRUFBT0MsVSxFQUFZO0FBQ2pDLHNCQUFFeEIsU0FBRixHQUFnQndCLFVBQWhCLENBQUV4QixTQUFGO0FBQUEsc0JBQ0F5QixxQkFEQSxHQUN3QmpDLGNBQWNrQyxjQUFkLENBQTZCSCxLQUE3QixFQUFvQ0MsVUFBcEMsRUFBZ0R4QixTQUFoRCxDQUR4Qjs7O0FBR04seUJBQU95QixxQkFBUDtBQUNEOzs7O0VBekNpQ2pDLGE7O0FBNENwQ21DLE9BQU9DLE9BQVAsR0FBaUI5QixxQkFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgaW1hZ2VOYW1lKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG5cbiAgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgaW1hZ2VOYW1lc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDEyLCAgLy8vXG4gICAgICAgICAgaW1hZ2VOYW1lcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlTmFtZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGltYWdlTmFtZXMucHVzaCh0aGlzLmltYWdlTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcyksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gZmxhdHRlbih0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEodHJhbnNmb3JtcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGhpcy5jYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBpbWFnZU5hbWUpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iXX0=