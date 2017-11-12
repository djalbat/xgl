'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    imageMapUtilities = require('../../utilities/imageMap');

var textureCoordinatesFromImageNames = imageMapUtilities.textureCoordinatesFromImageNames;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(transform, imageName) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform));

    _this.imageName = imageName;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: 'calculateTextureCoordinates',
    value: function calculateTextureCoordinates(vertexPositions) {
      var vertexPositionsLength = vertexPositions.length,
          imageNamesLength = vertexPositionsLength / 4,
          ///
      imageNames = [];

      for (var index = 0; index < imageNamesLength; index++) {
        imageNames.push(this.imageName);
      }

      var textureCoordinates = textureCoordinatesFromImageNames(imageNames);

      return textureCoordinates;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          textureCoordinates = this.calculateTextureCoordinates(vertexPositions);

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addTextureCoordinates(textureCoordinates);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsImltYWdlTWFwVXRpbGl0aWVzIiwidGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJpbWFnZU5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJpbWFnZU5hbWVzTGVuZ3RoIiwiaW1hZ2VOYW1lcyIsImluZGV4IiwicHVzaCIsInRleHR1cmVDb29yZGluYXRlcyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyIsInZlcnRleEluZGV4ZXMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZXMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFRleHR1cmVDb29yZGluYXRlcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSwwQkFBUixDQUQxQjs7SUFHUUUsZ0MsR0FBcUNELGlCLENBQXJDQyxnQzs7SUFFRkMscUI7OztBQUNKLGlDQUFZQyxTQUFaLEVBQXVCQyxTQUF2QixFQUFrQztBQUFBOztBQUFBLDhJQUMxQkQsU0FEMEI7O0FBR2hDLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBSGdDO0FBSWpDOzs7O2dEQUUyQkMsZSxFQUFpQjtBQUMzQyxVQUFNQyx3QkFBd0JELGdCQUFnQkUsTUFBOUM7QUFBQSxVQUNNQyxtQkFBbUJGLHdCQUF3QixDQURqRDtBQUFBLFVBQ3FEO0FBQy9DRyxtQkFBYSxFQUZuQjs7QUFJQSxXQUFLLElBQUlDLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFGLGdCQUE1QixFQUE4Q0UsT0FBOUMsRUFBdUQ7QUFDckRELG1CQUFXRSxJQUFYLENBQWdCLEtBQUtQLFNBQXJCO0FBQ0Q7O0FBRUQsVUFBTVEscUJBQXFCWCxpQ0FBaUNRLFVBQWpDLENBQTNCOztBQUVBLGFBQU9HLGtCQUFQO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELFVBQU1WLGtCQUFrQixLQUFLVyx3QkFBTCxDQUE4QkQsVUFBOUIsQ0FBeEI7QUFBQSxVQUNNRSxnQkFBZ0IsS0FBS0Msc0JBQUwsQ0FBNEJiLGVBQTVCLENBRHRCO0FBQUEsVUFFTWMsZ0JBQWdCLEtBQUtDLHNCQUFMLENBQTRCZixlQUE1QixDQUZ0QjtBQUFBLFVBR01PLHFCQUFxQixLQUFLUywyQkFBTCxDQUFpQ2hCLGVBQWpDLENBSDNCOztBQUtBUyxzQkFBZ0JRLGtCQUFoQixDQUFtQ2pCLGVBQW5DO0FBQ0FTLHNCQUFnQlMsZ0JBQWhCLENBQWlDTixhQUFqQztBQUNBSCxzQkFBZ0JVLGdCQUFoQixDQUFpQ0wsYUFBakM7QUFDQUwsc0JBQWdCVyxxQkFBaEIsQ0FBc0NiLGtCQUF0Qzs7QUFFQSwySUFBYUMsY0FBYixFQUE2QkMsZUFBN0IsRUFBOENDLFVBQTlDO0FBQ0Q7OzttQ0FFcUJXLEssRUFBT0MsVSxFQUFZO0FBQ2pDLFVBQUV2QixTQUFGLEdBQWdCdUIsVUFBaEIsQ0FBRXZCLFNBQUY7QUFBQSxVQUNBd0IscUJBREEsR0FDd0I5QixjQUFjK0IsY0FBZCxDQUE2QkgsS0FBN0IsRUFBb0NDLFVBQXBDLEVBQWdEdkIsU0FBaEQsQ0FEeEI7OztBQUdOLGFBQU93QixxQkFBUDtBQUNEOzs7O0VBeENpQzlCLGE7O0FBMkNwQ2dDLE9BQU9DLE9BQVAsR0FBaUI3QixxQkFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lcyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGltYWdlTmFtZSkge1xuICAgIHN1cGVyKHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGltYWdlTmFtZXNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggLyA0LCAgLy8vXG4gICAgICAgICAgaW1hZ2VOYW1lcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlTmFtZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGltYWdlTmFtZXMucHVzaCh0aGlzLmltYWdlTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRoaXMuY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgaW1hZ2VOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIl19