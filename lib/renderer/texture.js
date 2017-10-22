'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    RendererBuffers = require('../rendererBuffers'),
    TextureRendererData = require('../rendererData/texture'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram;

var TextureRenderer = function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer(program, uniformLocations, attributeLocations, rendererData, rendererBuffers) {
    _classCallCheck(this, TextureRenderer);

    var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, program, uniformLocations, attributeLocations, rendererData, rendererBuffers));

    _this.textureCoordinatesBuffer = null; ///
    return _this;
  }

  _createClass(TextureRenderer, [{
    key: 'getTextureCoordinateAttributeLocation',
    value: function getTextureCoordinateAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

      return textureCoordinateAttributeLocation;
    }
  }, {
    key: 'addTextureCoordinates',
    value: function addTextureCoordinates(textureCoordinates) {
      this.rendererData.addTextureCoordinates(textureCoordinates);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var textureCoordinatesData = this.rendererData.getTextureCoordinatesData();

      this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);

      _get(TextureRenderer.prototype.__proto__ || Object.getPrototypeOf(TextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation(),
          textureCoordinateComponents = 2;

      canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);

      _get(TextureRenderer.prototype.__proto__ || Object.getPrototypeOf(TextureRenderer.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createTexture',
    value: function createTexture(image, canvas) {
      canvas.createTexture(image);
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
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          rendererData = textureRendererData,
          ///
      rendererBuffers = RendererBuffers.fromNothing(),
          textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations, rendererData, rendererBuffers);

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwicmVxdWlyZSIsIlJlbmRlcmVyQnVmZmVycyIsIlRleHR1cmVSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIlRleHR1cmVVbmlmb3JtTG9jYXRpb25zIiwiVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyIsImNyZWF0ZVByb2dyYW0iLCJUZXh0dXJlUmVuZGVyZXIiLCJwcm9ncmFtIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInRleHR1cmVDb29yZGluYXRlc0J1ZmZlciIsImdldEF0dHJpYnV0ZUxvY2F0aW9ucyIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FudmFzIiwidGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImdldFRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJjcmVhdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiZnJvbVByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJEYXRh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QUlqQyxlQUFKLENBQW9CQyxPQUFwQixFQUE2QkMsZ0JBQTdCLEVBQStDQyxrQkFBL0MsRUFBbUVDLFlBQW5FLEVBQWlGQyxlQUFqRixDQU54Qjs7QUFRQSxhQUFPNEIsZUFBUDtBQUNEOzs7O0VBNUQyQjFDLFE7O0FBK0Q5QjJDLE9BQU9DLE9BQVAsR0FBaUJuQyxlQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi9yZW5kZXJlckJ1ZmZlcnMnKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi9yZW5kZXJlckRhdGEvdGV4dHVyZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0nKSxcbiAgICAgIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbDsgIC8vL1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpOyB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdGhpcy5yZW5kZXJlckRhdGEuZ2V0VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSAwO1xuXG4gICAgY2FudmFzLmFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpO1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFRleHR1cmVSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IFRleHR1cmVSZW5kZXJlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iXX0=