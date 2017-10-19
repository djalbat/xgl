'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

      function TexturedCanvasElement(transform, transformations, imageName) {
            _classCallCheck(this, TexturedCanvasElement);

            var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform, transformations));

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
            value: function create(colourRenderer, textureRenderer) {
                  var vertexPositionData = this.calculateVertexPositionData(),
                      vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
                      vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
                      textureCoordinateData = this.calculateTextureCoordinateData(vertexPositionData);

                  textureRenderer.addVertexPositionData(vertexPositionData);
                  textureRenderer.addVertexIndexData(vertexIndexData);
                  textureRenderer.addVertexNormalData(vertexNormalData);
                  textureRenderer.addTextureCoordinateData(textureCoordinateData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJmbGF0dGVuIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbnMiLCJpbWFnZU5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGgiLCJsZW5ndGgiLCJpbWFnZU5hbWVzTGVuZ3RoIiwiaW1hZ2VOYW1lcyIsImluZGV4IiwicHVzaCIsInRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4SW5kZXhEYXRhIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhIiwidmVydGV4Tm9ybWFsRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidGV4dHVyZWRDYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSx1QkFBUixDQUR2QjtBQUFBLElBRU1FLG9CQUFvQkYsUUFBUSwwQkFBUixDQUYxQjs7QUFJTSxJQUFFRyxPQUFGLEdBQWNGLGNBQWQsQ0FBRUUsT0FBRjtBQUFBLElBQ0VDLGdDQURGLEdBQ3VDRixpQkFEdkMsQ0FDRUUsZ0NBREY7O0lBR0FDLHFCOzs7QUFDSixxQ0FBWUMsU0FBWixFQUF1QkMsZUFBdkIsRUFBd0NDLFNBQXhDLEVBQW1EO0FBQUE7O0FBQUEsc0pBQzNDRixTQUQyQyxFQUNoQ0MsZUFEZ0M7O0FBR2pELGtCQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUhpRDtBQUlsRDs7OzsyREFFOEJDLGtCLEVBQW9CO0FBQ2pELHNCQUFNQywyQkFBMkJELG1CQUFtQkUsTUFBcEQ7QUFBQSxzQkFDTUMsbUJBQW1CRiwyQkFBMkIsRUFEcEQ7QUFBQSxzQkFDeUQ7QUFDbkRHLCtCQUFhLEVBRm5COztBQUlBLHVCQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLGdCQUE1QixFQUE4Q0UsT0FBOUMsRUFBdUQ7QUFDckRELG1DQUFXRSxJQUFYLENBQWdCLEtBQUtQLFNBQXJCO0FBQ0Q7O0FBRUQsc0JBQU1RLHFCQUFxQlosaUNBQWlDUyxVQUFqQyxDQUEzQjtBQUFBLHNCQUNNSSx3QkFBd0JkLFFBQVFhLGtCQUFSLENBRDlCOztBQUdBLHlCQUFPQyxxQkFBUDtBQUNEOzs7bUNBRU1DLGMsRUFBZ0JDLGUsRUFBaUI7QUFDdEMsc0JBQU1WLHFCQUFxQixLQUFLVywyQkFBTCxFQUEzQjtBQUFBLHNCQUNNQyxrQkFBa0IsS0FBS0Msd0JBQUwsQ0FBOEJiLGtCQUE5QixDQUR4QjtBQUFBLHNCQUVNYyxtQkFBbUIsS0FBS0MseUJBQUwsQ0FBK0JmLGtCQUEvQixDQUZ6QjtBQUFBLHNCQUdNUSx3QkFBd0IsS0FBS1EsOEJBQUwsQ0FBb0NoQixrQkFBcEMsQ0FIOUI7O0FBS0FVLGtDQUFnQk8scUJBQWhCLENBQXNDakIsa0JBQXRDO0FBQ0FVLGtDQUFnQlEsa0JBQWhCLENBQW1DTixlQUFuQztBQUNBRixrQ0FBZ0JTLG1CQUFoQixDQUFvQ0wsZ0JBQXBDO0FBQ0FKLGtDQUFnQlUsd0JBQWhCLENBQXlDWixxQkFBekM7QUFDRDs7OzJDQUVxQmEsSyxFQUFPQyxVLEVBQVk7QUFDakMsc0JBQUV2QixTQUFGLEdBQWdCdUIsVUFBaEIsQ0FBRXZCLFNBQUY7QUFBQSxzQkFDQXdCLHFCQURBLEdBQ3dCakMsY0FBY2tDLGNBQWQsQ0FBNkJILEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRHZCLFNBQWhELENBRHhCOzs7QUFHTix5QkFBT3dCLHFCQUFQO0FBQ0Q7Ozs7RUF2Q2lDakMsYTs7QUEwQ3BDbUMsT0FBT0MsT0FBUCxHQUFpQjlCLHFCQUFqQiIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCB0cmFuc2Zvcm1hdGlvbnMsIGltYWdlTmFtZSkge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgdHJhbnNmb3JtYXRpb25zKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG5cbiAgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgaW1hZ2VOYW1lc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDEyLCAgLy8vXG4gICAgICAgICAgaW1hZ2VOYW1lcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlTmFtZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGltYWdlTmFtZXMucHVzaCh0aGlzLmltYWdlTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcyksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gZmxhdHRlbih0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0aGlzLmNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGltYWdlTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==