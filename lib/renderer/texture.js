'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    TextureRendererData = require('../rendererData/texture'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram;

var TextureRenderer = function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer(program, uniformLocations, attributeLocations, rendererData) {
    _classCallCheck(this, TextureRenderer);

    var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, program, uniformLocations, attributeLocations, rendererData));

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
      textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations, rendererData);

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwicmVxdWlyZSIsIlRleHR1cmVSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIlRleHR1cmVVbmlmb3JtTG9jYXRpb25zIiwiVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyIsImNyZWF0ZVByb2dyYW0iLCJUZXh0dXJlUmVuZGVyZXIiLCJwcm9ncmFtIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsInJlbmRlcmVyRGF0YSIsInRleHR1cmVDb29yZGluYXRlc0J1ZmZlciIsImdldEF0dHJpYnV0ZUxvY2F0aW9ucyIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwiYWRkVGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FudmFzIiwidGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImdldFRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJjcmVhdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiZnJvbVByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJEYXRhIiwiZnJvbU5vdGhpbmciLCJ0ZXh0dXJlUmVuZGVyZXIiLCJt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QiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXJEYXRhL3RleHR1cmUnKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtJyksXG4gICAgICBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHJlbmRlcmVyRGF0YSkge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgcmVuZGVyZXJEYXRhKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbDsgIC8vL1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpOyB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdGhpcy5yZW5kZXJlckRhdGEuZ2V0VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSAwO1xuXG4gICAgY2FudmFzLmFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpO1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFRleHR1cmVSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IFRleHR1cmVSZW5kZXJlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHJlbmRlcmVyRGF0YSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIl19