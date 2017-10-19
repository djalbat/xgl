'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    vertexUtilities = require('../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateTextureCoordinateData = vertexUtilities.calculateTextureCoordinateData;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(width, height, depth, dimensions, position, rotations, transformations, imageName) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, width, height, depth, dimensions, position, rotations, transformations));

    _this.imageName = imageName;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      var initialVertexPositionData = this.getInitialVertexPositionData(),
          width = this.getWidth(),
          height = this.getHeight(),
          depth = this.getDepth(),
          dimensions = this.getDimensions(),
          position = this.getPosition(),
          rotations = this.getRotations(),
          transformations = this.getTransformations(),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, this.imageName);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsInZlcnRleFV0aWxpdGllcyIsImNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEiLCJjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicm90YXRpb25zIiwidHJhbnNmb3JtYXRpb25zIiwiaW1hZ2VOYW1lIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiZ2V0RGVwdGgiLCJnZXREaW1lbnNpb25zIiwiZ2V0UG9zaXRpb24iLCJnZXRSb3RhdGlvbnMiLCJnZXRUcmFuc2Zvcm1hdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25EYXRhIiwiYWRkVmVydGV4SW5kZXhEYXRhIiwiYWRkVmVydGV4Tm9ybWFsRGF0YSIsImFkZFRleHR1cmVDb29yZGluYXRlRGF0YSIsIkNsYXNzIiwicHJvcGVydGllcyIsInRleHR1cmVkQ2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsc0JBQVIsQ0FBdEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsd0JBQVIsQ0FEeEI7O0lBR1FFLDJCLEdBQXFIRCxlLENBQXJIQywyQjtJQUE2QkMseUIsR0FBd0ZGLGUsQ0FBeEZFLHlCO0lBQTJCQyx3QixHQUE2REgsZSxDQUE3REcsd0I7SUFBMEJDLDhCLEdBQW1DSixlLENBQW5DSSw4Qjs7SUFFcEZDLHFCOzs7QUFDSixpQ0FBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLEtBQTNCLEVBQWtDQyxVQUFsQyxFQUE4Q0MsUUFBOUMsRUFBd0RDLFNBQXhELEVBQW1FQyxlQUFuRSxFQUFvRkMsU0FBcEYsRUFBK0Y7QUFBQTs7QUFBQSw4SUFDdkZQLEtBRHVGLEVBQ2hGQyxNQURnRixFQUN4RUMsS0FEd0UsRUFDakVDLFVBRGlFLEVBQ3JEQyxRQURxRCxFQUMzQ0MsU0FEMkMsRUFDaENDLGVBRGdDOztBQUc3RixVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUg2RjtBQUk5Rjs7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQjtBQUN0QyxVQUFNQyw0QkFBNEIsS0FBS0MsNEJBQUwsRUFBbEM7QUFBQSxVQUNNWCxRQUFRLEtBQUtZLFFBQUwsRUFEZDtBQUFBLFVBRU1YLFNBQVMsS0FBS1ksU0FBTCxFQUZmO0FBQUEsVUFHTVgsUUFBUSxLQUFLWSxRQUFMLEVBSGQ7QUFBQSxVQUlNWCxhQUFhLEtBQUtZLGFBQUwsRUFKbkI7QUFBQSxVQUtNWCxXQUFXLEtBQUtZLFdBQUwsRUFMakI7QUFBQSxVQU1NWCxZQUFZLEtBQUtZLFlBQUwsRUFObEI7QUFBQSxVQU9NWCxrQkFBa0IsS0FBS1ksa0JBQUwsRUFQeEI7QUFBQSxVQVFNQyxxQkFBcUJ4Qiw0QkFBNEJlLHlCQUE1QixFQUF1RFYsS0FBdkQsRUFBOERDLE1BQTlELEVBQXNFQyxLQUF0RSxFQUE2RUMsVUFBN0UsRUFBeUZDLFFBQXpGLEVBQW1HQyxTQUFuRyxFQUE4R0MsZUFBOUcsQ0FSM0I7QUFBQSxVQVNNYyxrQkFBa0J2Qix5QkFBeUJhLHlCQUF6QixDQVR4QjtBQUFBLFVBVU1XLG1CQUFtQnpCLDBCQUEwQnVCLGtCQUExQixDQVZ6QjtBQUFBLFVBV01HLHdCQUF3QnhCLCtCQUErQlkseUJBQS9CLEVBQTBELEtBQUtILFNBQS9ELENBWDlCOztBQWFBRSxzQkFBZ0JjLHFCQUFoQixDQUFzQ0osa0JBQXRDO0FBQ0FWLHNCQUFnQmUsa0JBQWhCLENBQW1DSixlQUFuQztBQUNBWCxzQkFBZ0JnQixtQkFBaEIsQ0FBb0NKLGdCQUFwQztBQUNBWixzQkFBZ0JpQix3QkFBaEIsQ0FBeUNKLHFCQUF6QztBQUNEOzs7bUNBRXFCSyxLLEVBQU9DLFUsRUFBWTtBQUNqQyxVQUFFckIsU0FBRixHQUFnQnFCLFVBQWhCLENBQUVyQixTQUFGO0FBQUEsVUFDQXNCLHFCQURBLEdBQ3dCckMsY0FBY3NDLGNBQWQsQ0FBNkJILEtBQTdCLEVBQW9DQyxVQUFwQyxFQUFnRHJCLFNBQWhELENBRHhCOzs7QUFHTixhQUFPc0IscUJBQVA7QUFDRDs7OztFQWhDaUNyQyxhOztBQW1DcEN1QyxPQUFPQyxPQUFQLEdBQWlCakMscUJBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSwgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zLCBpbWFnZU5hbWUpIHtcbiAgICBzdXBlcih3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5nZXRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBkZXB0aCA9IHRoaXMuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBkaW1lbnNpb25zID0gdGhpcy5nZXREaW1lbnNpb25zKCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zID0gdGhpcy5nZXRSb3RhdGlvbnMoKSxcbiAgICAgICAgICB0cmFuc2Zvcm1hdGlvbnMgPSB0aGlzLmdldFRyYW5zZm9ybWF0aW9ucygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgdGhpcy5pbWFnZU5hbWUpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGltYWdlTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiJdfQ==