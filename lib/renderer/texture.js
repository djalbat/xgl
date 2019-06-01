'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    TextureRendererData = require('../renderer/data/texture'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureRendererBuffers = require('../renderer/buffers/texture'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram;

var TextureRenderer = function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer(program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
    _classCallCheck(this, TextureRenderer);

    var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

    _this.imageMapJSON = imageMapJSON;
    return _this;
  }

  _createClass(TextureRenderer, [{
    key: 'getImageMapJSON',
    value: function getImageMapJSON() {
      return this.imageMapJSON;
    }
  }, {
    key: 'getTextureCoordinateAttributeLocation',
    value: function getTextureCoordinateAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

      return textureCoordinateAttributeLocation;
    }
  }, {
    key: 'addVertexTextureCoordinates',
    value: function addVertexTextureCoordinates(vertexTextureCoordinates) {
      this.rendererData.addVertexTextureCoordinates(vertexTextureCoordinates);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          textureCoordinatesData = rendererData.getVertexTextureCoordinatesData();

      rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

      rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {
      var context = canvas.getContext(),
          TEXTURE0 = context.TEXTURE0,
          target = TEXTURE0,
          uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          uSamplerUniformLocationIntegerValue = 0;


      canvas.activateTexture(target);

      canvas.setUniformLocationIntegerValue(samplerUniformLocation, uSamplerUniformLocationIntegerValue);
    }
  }], [{
    key: 'fromImageMapAndImageMapJSON',
    value: function fromImageMapAndImageMapJSON() {
      var imageMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var imageMapJSON = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var canvas = arguments[2];

      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          textureRendererBuffers = TextureRendererBuffers.fromNothing(),
          rendererData = textureRendererData,
          ///
      rendererBuffers = textureRendererBuffers,
          ///
      uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureRenderer = new TextureRenderer(program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON);

      if (imageMap !== null) {
        var image = imageMap; ///

        canvas.createTexture(image);

        canvas.enableAnisotropicFiltering(); ///
      }

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwicmVxdWlyZSIsInZlcnRleFNoYWRlclNvdXJjZSIsIlRleHR1cmVSZW5kZXJlckRhdGEiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIlRleHR1cmVSZW5kZXJlckJ1ZmZlcnMiLCJUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyIsIlRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMiLCJjcmVhdGVQcm9ncmFtIiwiVGV4dHVyZVJlbmRlcmVyIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU1hcEpTT04iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsImNhbnZhcyIsImdldFJlbmRlcmVyRGF0YSIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiZ2V0VmVydGV4SW5kZXhlc0RhdGEiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhIiwiZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImNyZWF0ZUJ1ZmZlcnMiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVycyIsImdldENvbnRleHQiLCJURVhUVVJFMCIsImNvbnRleHQiLCJ0YXJnZXQiLCJnZXRVbmlmb3JtTG9jYXRpb25zIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsImdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJ1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsImFjdGl2YXRlVGV4dHVyZSIsInNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsImltYWdlTWFwIiwidGV4dHVyZVJlbmRlcmVyRGF0YSIsImZyb21Ob3RoaW5nIiwidGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsImZyb21Qcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSwrQkFBUixDQUQzQjtBQUFBLElBRU1FLHNCQUFzQkYsUUFBUSwwQkFBUixDQUY1QjtBQUFBLElBR01HLHVCQUF1QkgsUUFBUSxpQ0FBUixDQUg3QjtBQUFBLElBSU1JLHlCQUF5QkosUUFBUSw2QkFBUixDQUovQjtBQUFBLElBS01LLDBCQUEwQkwsUUFBUSw2QkFBUixDQUxoQztBQUFBLElBTU1NLDRCQUE0Qk4sUUFBUSwrQkFBUixDQU5sQzs7SUFRUU8sYSxHQUFrQlIsUSxDQUFsQlEsYTs7SUFFRkMsZTs7O0FBQ0wsMkJBQVlDLE9BQVosRUFBcUJDLFlBQXJCLEVBQW1DQyxlQUFuQyxFQUFvREMsZ0JBQXBELEVBQXNFQyxrQkFBdEUsRUFBMEZDLFlBQTFGLEVBQXdHO0FBQUE7O0FBQUEsa0lBQ2pHTCxPQURpRyxFQUN4RkMsWUFEd0YsRUFDMUVDLGVBRDBFLEVBQ3pEQyxnQkFEeUQsRUFDdkNDLGtCQUR1Qzs7QUFH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S0FBckI7O0FBRUFqQyxlQUFPbUMsMEJBQVAsR0FMcUIsQ0FLaUI7QUFDdkM7O0FBRUQsYUFBT0gsZUFBUDtBQUNEOzs7O0VBeEUyQnJELFE7O0FBMkU5QnlELE9BQU9DLE9BQVAsR0FBaUJqRCxlQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZScpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlJyksXG4gICAgICBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybScpLFxuICAgICAgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IocHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIocHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG5cdGdldEltYWdlTWFwSlNPTigpIHtcblx0XHRyZXR1cm4gdGhpcy5pbWFnZU1hcEpTT047XG5cdH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpIHsgdGhpcy5yZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlcyk7IH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSAwO1xuXG4gICAgY2FudmFzLmFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpO1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwID0gbnVsbCwgaW1hZ2VNYXBKU09OID0gbnVsbCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgVGV4dHVyZVJlbmRlcmVyKHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTik7XG5cbiAgICBpZiAoaW1hZ2VNYXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXA7XHQvLy9cblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuXG4gICAgICBjYW52YXMuZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKTsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iXX0=