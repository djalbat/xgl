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

      function TexturedCanvasElement(width, height, depth, dimensions, position, rotations, transformations, imageName) {
            _classCallCheck(this, TexturedCanvasElement);

            var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, width, height, depth, dimensions, position, rotations, transformations));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJmbGF0dGVuIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicm90YXRpb25zIiwidHJhbnNmb3JtYXRpb25zIiwiaW1hZ2VOYW1lIiwidmVydGV4UG9zaXRpb25EYXRhIiwidmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIiwibGVuZ3RoIiwiaW1hZ2VOYW1lc0xlbmd0aCIsImltYWdlTmFtZXMiLCJpbmRleCIsInB1c2giLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsImNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFRleHR1cmVDb29yZGluYXRlRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsdUJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsMEJBQVIsQ0FGMUI7O0FBSU0sSUFBRUcsT0FBRixHQUFjRixjQUFkLENBQUVFLE9BQUY7QUFBQSxJQUNFQyxnQ0FERixHQUN1Q0YsaUJBRHZDLENBQ0VFLGdDQURGOztJQUdBQyxxQjs7O0FBQ0oscUNBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCQyxLQUEzQixFQUFrQ0MsVUFBbEMsRUFBOENDLFFBQTlDLEVBQXdEQyxTQUF4RCxFQUFtRUMsZUFBbkUsRUFBb0ZDLFNBQXBGLEVBQStGO0FBQUE7O0FBQUEsc0pBQ3ZGUCxLQUR1RixFQUNoRkMsTUFEZ0YsRUFDeEVDLEtBRHdFLEVBQ2pFQyxVQURpRSxFQUNyREMsUUFEcUQsRUFDM0NDLFNBRDJDLEVBQ2hDQyxlQURnQzs7QUFHN0Ysa0JBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBSDZGO0FBSTlGOzs7OzJEQUU4QkMsa0IsRUFBb0I7QUFDakQsc0JBQU1DLDJCQUEyQkQsbUJBQW1CRSxNQUFwRDtBQUFBLHNCQUNNQyxtQkFBbUJGLDJCQUEyQixFQURwRDtBQUFBLHNCQUN5RDtBQUNuREcsK0JBQWEsRUFGbkI7O0FBSUEsdUJBQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUYsZ0JBQTVCLEVBQThDRSxPQUE5QyxFQUF1RDtBQUNyREQsbUNBQVdFLElBQVgsQ0FBZ0IsS0FBS1AsU0FBckI7QUFDRDs7QUFFRCxzQkFBTVEscUJBQXFCakIsaUNBQWlDYyxVQUFqQyxDQUEzQjtBQUFBLHNCQUNNSSx3QkFBd0JuQixRQUFRa0Isa0JBQVIsQ0FEOUI7O0FBR0EseUJBQU9DLHFCQUFQO0FBQ0Q7OzttQ0FFTUMsYyxFQUFnQkMsZSxFQUFpQjtBQUN0QyxzQkFBTVYscUJBQXFCLEtBQUtXLDJCQUFMLEVBQTNCO0FBQUEsc0JBQ01DLGtCQUFrQixLQUFLQyx3QkFBTCxDQUE4QmIsa0JBQTlCLENBRHhCO0FBQUEsc0JBRU1jLG1CQUFtQixLQUFLQyx5QkFBTCxDQUErQmYsa0JBQS9CLENBRnpCO0FBQUEsc0JBR01RLHdCQUF3QixLQUFLUSw4QkFBTCxDQUFvQ2hCLGtCQUFwQyxDQUg5Qjs7QUFLQVUsa0NBQWdCTyxxQkFBaEIsQ0FBc0NqQixrQkFBdEM7QUFDQVUsa0NBQWdCUSxrQkFBaEIsQ0FBbUNOLGVBQW5DO0FBQ0FGLGtDQUFnQlMsbUJBQWhCLENBQW9DTCxnQkFBcEM7QUFDQUosa0NBQWdCVSx3QkFBaEIsQ0FBeUNaLHFCQUF6QztBQUNEOzs7MkNBRXFCYSxLLEVBQU9DLFUsRUFBWTtBQUNqQyxzQkFBRXZCLFNBQUYsR0FBZ0J1QixVQUFoQixDQUFFdkIsU0FBRjtBQUFBLHNCQUNBd0IscUJBREEsR0FDd0J0QyxjQUFjdUMsY0FBZCxDQUE2QkgsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEdkIsU0FBaEQsQ0FEeEI7OztBQUdOLHlCQUFPd0IscUJBQVA7QUFDRDs7OztFQXZDaUN0QyxhOztBQTBDcEN3QyxPQUFPQyxPQUFQLEdBQWlCbkMscUJBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lcyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zLCBpbWFnZU5hbWUpIHtcbiAgICBzdXBlcih3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG5cbiAgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YS5sZW5ndGgsXG4gICAgICAgICAgaW1hZ2VOYW1lc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDEyLCAgLy8vXG4gICAgICAgICAgaW1hZ2VOYW1lcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlTmFtZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGltYWdlTmFtZXMucHVzaCh0aGlzLmltYWdlTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcyksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gZmxhdHRlbih0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0aGlzLmNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGltYWdlTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==