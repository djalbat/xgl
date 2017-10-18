'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vertexUtilities = require('../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData,
    calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateTextureCoordinateData = vertexUtilities.calculateTextureCoordinateData;

var TexturedElement = function (_Element) {
  _inherits(TexturedElement, _Element);

  function TexturedElement(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData) {
    _classCallCheck(this, TexturedElement);

    var _this = _possibleConstructorReturn(this, (TexturedElement.__proto__ || Object.getPrototypeOf(TexturedElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexNormalData = vertexNormalData;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TexturedElement, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData() {
      return this.vertexPositionData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return this.vertexIndexData;
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return this.vertexNormalData;
    }
  }, {
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      textureRenderer.addVertexPositionData(this.vertexPositionData);
      textureRenderer.addVertexIndexData(this.vertexIndexData);
      textureRenderer.addVertexNormalData(this.vertexNormalData);
      textureRenderer.addTextureCoordinateData(this.textureCoordinateData);
    }
  }], [{
    key: 'fromPropertiesAndInitialVertexPositionData',
    value: function fromPropertiesAndInitialVertexPositionData(Class, properties, initialVertexPositionData) {
      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          dimensions = properties.dimensions,
          position = properties.position,
          rotations = properties.rotations,
          transformations = properties.transformations,
          imageName = properties.imageName,
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, height, depth, dimensions, position, rotations, transformations),
          vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
          vertexNormalData = calculateVertexNormalData(vertexPositionData),
          textureCoordinateData = calculateTextureCoordinateData(initialVertexPositionData, imageName),
          texturedElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData);


      return texturedElement;
    }
  }]);

  return TexturedElement;
}(Element);

module.exports = TexturedElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RleHR1cmVkLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwidmVydGV4VXRpbGl0aWVzIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YSIsImNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSIsImNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSIsIlRleHR1cmVkRWxlbWVudCIsInZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImFkZFZlcnRleFBvc2l0aW9uRGF0YSIsImFkZFZlcnRleEluZGV4RGF0YSIsImFkZFZlcnRleE5vcm1hbERhdGEiLCJhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsInRyYW5zZm9ybWF0aW9ucyIsImltYWdlTmFtZSIsInRleHR1cmVkRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLHFCQUFSLENBRHhCOztJQUdRRSwyQixHQUFxSEQsZSxDQUFySEMsMkI7SUFBNkJDLHlCLEdBQXdGRixlLENBQXhGRSx5QjtJQUEyQkMsd0IsR0FBNkRILGUsQ0FBN0RHLHdCO0lBQTBCQyw4QixHQUFtQ0osZSxDQUFuQ0ksOEI7O0lBRXBGQyxlOzs7QUFDSiwyQkFBWUMsa0JBQVosRUFBZ0NDLGVBQWhDLEVBQWlEQyxnQkFBakQsRUFBbUVDLHFCQUFuRSxFQUEwRjtBQUFBOztBQUFBOztBQUd4RixVQUFLSCxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsVUFBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQU53RjtBQU96Rjs7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLSCxrQkFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0MsZ0JBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtDLHFCQUFaO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQjtBQUN0Q0Esc0JBQWdCQyxxQkFBaEIsQ0FBc0MsS0FBS04sa0JBQTNDO0FBQ0FLLHNCQUFnQkUsa0JBQWhCLENBQW1DLEtBQUtOLGVBQXhDO0FBQ0FJLHNCQUFnQkcsbUJBQWhCLENBQW9DLEtBQUtOLGdCQUF6QztBQUNBRyxzQkFBZ0JJLHdCQUFoQixDQUF5QyxLQUFLTixxQkFBOUM7QUFDRDs7OytEQUVpRE8sSyxFQUFPQyxVLEVBQVlDLHlCLEVBQTJCO0FBQUEsVUFDdEZDLEtBRHNGLEdBQ0FGLFVBREEsQ0FDdEZFLEtBRHNGO0FBQUEsVUFDL0VDLE1BRCtFLEdBQ0FILFVBREEsQ0FDL0VHLE1BRCtFO0FBQUEsVUFDdkVDLEtBRHVFLEdBQ0FKLFVBREEsQ0FDdkVJLEtBRHVFO0FBQUEsVUFDaEVDLFVBRGdFLEdBQ0FMLFVBREEsQ0FDaEVLLFVBRGdFO0FBQUEsVUFDcERDLFFBRG9ELEdBQ0FOLFVBREEsQ0FDcERNLFFBRG9EO0FBQUEsVUFDMUNDLFNBRDBDLEdBQ0FQLFVBREEsQ0FDMUNPLFNBRDBDO0FBQUEsVUFDL0JDLGVBRCtCLEdBQ0FSLFVBREEsQ0FDL0JRLGVBRCtCO0FBQUEsVUFDZEMsU0FEYyxHQUNBVCxVQURBLENBQ2RTLFNBRGM7QUFBQSxVQUV4RnBCLGtCQUZ3RixHQUVuRUwsNEJBQTRCaUIseUJBQTVCLEVBQXVEQyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxVQUE3RSxFQUF5RkMsUUFBekYsRUFBbUdDLFNBQW5HLEVBQThHQyxlQUE5RyxDQUZtRTtBQUFBLFVBR3hGbEIsZUFId0YsR0FHdEVKLHlCQUF5QmUseUJBQXpCLENBSHNFO0FBQUEsVUFJeEZWLGdCQUp3RixHQUlyRU4sMEJBQTBCSSxrQkFBMUIsQ0FKcUU7QUFBQSxVQUt4RkcscUJBTHdGLEdBS2hFTCwrQkFBK0JjLHlCQUEvQixFQUEwRFEsU0FBMUQsQ0FMZ0U7QUFBQSxVQU14RkMsZUFOd0YsR0FNdEUsSUFBSVgsS0FBSixDQUFVVixrQkFBVixFQUE4QkMsZUFBOUIsRUFBK0NDLGdCQUEvQyxFQUFpRUMscUJBQWpFLENBTnNFOzs7QUFROUYsYUFBT2tCLGVBQVA7QUFDRDs7OztFQTFDMkI3QixPOztBQTZDOUI4QixPQUFPQyxPQUFQLEdBQWlCeEIsZUFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEsIGNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gdGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleERhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHRoaXMudmVydGV4UG9zaXRpb25EYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhEYXRhKHRoaXMudmVydGV4SW5kZXhEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICAgIHRleHR1cmVSZW5kZXJlci5hZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKENsYXNzLCBwcm9wZXJ0aWVzLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKSB7IFxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucywgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBjYWxjdWxhdGVUZXh0dXJlQ29vcmRpbmF0ZURhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgaW1hZ2VOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlZEVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkRWxlbWVudDtcbiJdfQ==