'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader'),
    UniformLocations = require('./locations/uniform'),
    AttributeLocations = require('./locations/attribute'),
    vertexShaderSource = require('./source/texture/vertex'),
    fragmentShaderSource = require('./source/texture/fragment');

var createVertexShader = Shader.createVertexShader,
    createFragmentShader = Shader.createFragmentShader,
    textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName,
    samplerName = fragmentShaderSource.samplerName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData) {
    _classCallCheck(this, TextureShader);

    var _this = _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).call(this, program, uniformLocations, attributeLocations));

    _this.samplerUniformLocation = samplerUniformLocation;
    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureShader, [{
    key: 'addTextureCoordinateData',
    value: function addTextureCoordinateData(textureCoordinateData) {
      add(this.textureCoordinateData, textureCoordinateData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createTextureCoordinateBuffer',
    value: function createTextureCoordinateBuffer(canvas) {
      this.textureCoordinateBuffer = canvas.createBuffer(this.textureCoordinateData);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindTextureCoordinateBuffer',
    value: function bindTextureCoordinateBuffer(canvas) {
      var textureCoordinateComponents = 2;

      canvas.bindBuffer(this.textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
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
          uSamplerUniformLocationIntegerValue = 0;


      canvas.activateTexture(target);

      canvas.setUniformLocationIntegerValue(this.samplerUniformLocation, uSamplerUniformLocationIntegerValue);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          program = canvas.createProgram(vertexShader, fragmentShader),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureCoordinateData = [],
          textureShader = new TextureShader(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData);

      return textureShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2hhZGVyIiwiVW5pZm9ybUxvY2F0aW9ucyIsIkF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUiLCJzYW1wbGVyTmFtZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJUZXh0dXJlU2hhZGVyIiwicHJvZ3JhbSIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsImNhbnZhcyIsImNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVQcm9ncmFtIiwiZnJvbVByb2dyYW0iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVTaGFkZXIiLCJtb2R1bGUiLCJleHBv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QU9xQixvQkFBUCxDQUE0QjNCLE9BQTVCLEVBQXFDTiw4QkFBckMsQ0FOM0M7QUFBQSxVQU9NVyx3QkFBd0IsRUFQOUI7QUFBQSxVQVFNdUIsZ0JBQWdCLElBQUk3QixhQUFKLENBQWtCQyxPQUFsQixFQUEyQkMsZ0JBQTNCLEVBQTZDQyxrQkFBN0MsRUFBaUVDLHNCQUFqRSxFQUF5RkMsa0NBQXpGLEVBQTZIQyxxQkFBN0gsQ0FSdEI7O0FBVUEsYUFBT3VCLGFBQVA7QUFDRDs7OztFQTlEeUJ6QyxNOztBQWlFNUIwQyxPQUFPQyxPQUFQLEdBQWlCL0IsYUFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpLFxuICAgICAgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3VuaWZvcm0nKSxcbiAgICAgIEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXgnKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudCcpO1xuXG5jb25zdCB7IGNyZWF0ZVZlcnRleFNoYWRlciwgY3JlYXRlRnJhZ21lbnRTaGFkZXIgfSA9IFNoYWRlcixcbiAgICAgIHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXG4gICAgICB7IHNhbXBsZXJOYW1lIH0gPSBmcmFnbWVudFNoYWRlclNvdXJjZSxcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRleHR1cmVDb29yZGluYXRlRGF0YTtcbiAgfVxuXG4gIGFkZFRleHR1cmVDb29yZGluYXRlRGF0YSh0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBhZGQodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyLCB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKGltYWdlLCBjYW52YXMpIHtcbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBURVhUVVJFMCB9ID0gY29udGV4dCxcbiAgICAgICAgICB0YXJnZXQgPSBURVhUVVJFMCwgIC8vL1xuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IG5ldyBUZXh0dXJlU2hhZGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlU2hhZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVNoYWRlcjtcbiJdfQ==