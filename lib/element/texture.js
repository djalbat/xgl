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

var TextureElement = function (_Element) {
  _inherits(TextureElement, _Element);

  function TextureElement(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData) {
    _classCallCheck(this, TextureElement);

    var _this = _possibleConstructorReturn(this, (TextureElement.__proto__ || Object.getPrototypeOf(TextureElement)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexIndexData = vertexIndexData;
    _this.vertexNormalData = vertexNormalData;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureElement, [{
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
          textureElement = new Class(vertexPositionData, vertexIndexData, vertexNormalData, textureCoordinateData);


      return textureElement;
    }
  }]);

  return TextureElement;
}(Element);

module.exports = TextureElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RleHR1cmUuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhIiwiY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiVGV4dHVyZUVsZW1lbnQiLCJ2ZXJ0ZXhQb3NpdGlvbkRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJ2ZXJ0ZXhOb3JtYWxEYXRhIiwidGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJhZGRWZXJ0ZXhJbmRleERhdGEiLCJhZGRWZXJ0ZXhOb3JtYWxEYXRhIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLHFCQUFSLENBRHhCOztJQUdRRSwyQixHQUFxSEQsZSxDQUFySEMsMkI7SUFBNkJDLHlCLEdBQXdGRixlLENBQXhGRSx5QjtJQUEyQkMsd0IsR0FBNkRILGUsQ0FBN0RHLHdCO0lBQTBCQyw4QixHQUFtQ0osZSxDQUFuQ0ksOEI7O0lBRXBGQyxjOzs7QUFDSiwwQkFBWUMsa0JBQVosRUFBZ0NDLGVBQWhDLEVBQWlEQyxnQkFBakQsRUFBbUVDLHFCQUFuRSxFQUEwRjtBQUFBOztBQUFBOztBQUd4RixVQUFLSCxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsVUFBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQU53RjtBQU96Rjs7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLSCxrQkFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS0MsZ0JBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixhQUFPLEtBQUtDLHFCQUFaO0FBQ0Q7OzsyQkFFTUMsYyxFQUFnQkMsZSxFQUFpQjtBQUN0Q0Esc0JBQWdCQyxxQkFBaEIsQ0FBc0MsS0FBS04sa0JBQTNDO0FBQ0FLLHNCQUFnQkUsa0JBQWhCLENBQW1DLEtBQUtOLGVBQXhDO0FBQ0FJLHNCQUFnQkcsbUJBQWhCLENBQW9DLEtBQUtOLGdCQUF6QztBQUNBRyxzQkFBZ0JJLHdCQUFoQixDQUF5QyxLQUFLTixxQkFBOUM7QUFDRDs7OytEQUVpRE8sSyxFQUFPQyxVLEVBQVlDLHlCLEVBQTJCO0FBQUEsVUFDdEZDLEtBRHNGLEdBQ0FGLFVBREEsQ0FDdEZFLEtBRHNGO0FBQUEsVUFDL0VDLE1BRCtFLEdBQ0FILFVBREEsQ0FDL0VHLE1BRCtFO0FBQUEsVUFDdkVDLEtBRHVFLEdBQ0FKLFVBREEsQ0FDdkVJLEtBRHVFO0FBQUEsVUFDaEVDLFVBRGdFLEdBQ0FMLFVBREEsQ0FDaEVLLFVBRGdFO0FBQUEsVUFDcERDLFFBRG9ELEdBQ0FOLFVBREEsQ0FDcERNLFFBRG9EO0FBQUEsVUFDMUNDLFNBRDBDLEdBQ0FQLFVBREEsQ0FDMUNPLFNBRDBDO0FBQUEsVUFDL0JDLGVBRCtCLEdBQ0FSLFVBREEsQ0FDL0JRLGVBRCtCO0FBQUEsVUFDZEMsU0FEYyxHQUNBVCxVQURBLENBQ2RTLFNBRGM7QUFBQSxVQUV4RnBCLGtCQUZ3RixHQUVuRUwsNEJBQTRCaUIseUJBQTVCLEVBQXVEQyxLQUF2RCxFQUE4REMsTUFBOUQsRUFBc0VDLEtBQXRFLEVBQTZFQyxVQUE3RSxFQUF5RkMsUUFBekYsRUFBbUdDLFNBQW5HLEVBQThHQyxlQUE5RyxDQUZtRTtBQUFBLFVBR3hGbEIsZUFId0YsR0FHdEVKLHlCQUF5QmUseUJBQXpCLENBSHNFO0FBQUEsVUFJeEZWLGdCQUp3RixHQUlyRU4sMEJBQTBCSSxrQkFBMUIsQ0FKcUU7QUFBQSxVQUt4RkcscUJBTHdGLEdBS2hFTCwrQkFBK0JjLHlCQUEvQixFQUEwRFEsU0FBMUQsQ0FMZ0U7QUFBQSxVQU14RkMsY0FOd0YsR0FNdkUsSUFBSVgsS0FBSixDQUFVVixrQkFBVixFQUE4QkMsZUFBOUIsRUFBK0NDLGdCQUEvQyxFQUFpRUMscUJBQWpFLENBTnVFOzs7QUFROUYsYUFBT2tCLGNBQVA7QUFDRDs7OztFQTFDMEI3QixPOztBQTZDN0I4QixPQUFPQyxPQUFQLEdBQWlCeEIsY0FBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSwgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleERhdGEgPSB2ZXJ0ZXhJbmRleERhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gdmVydGV4Tm9ybWFsRGF0YTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleEluZGV4RGF0YSh0aGlzLnZlcnRleEluZGV4RGF0YSk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbERhdGEodGhpcy52ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YShDbGFzcywgcHJvcGVydGllcywgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSkgeyBcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgcm90YXRpb25zLCB0cmFuc2Zvcm1hdGlvbnMsIGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucyksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIGltYWdlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUVsZW1lbnQ7XG4iXX0=