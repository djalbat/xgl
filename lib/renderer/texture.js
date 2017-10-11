'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Renderer = require('../renderer'),
    UniformLocations = require('./locations/uniform'),
    AttributeLocations = require('./locations/attribute'),
    vertexShaderSource = require('./source/texture/vertex'),
    fragmentShaderSource = require('./source/texture/fragment');

var textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName,
    samplerName = fragmentShaderSource.samplerName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var TextureRenderer = function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData) {
    _classCallCheck(this, TextureRenderer);

    var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.samplerUniformLocation = samplerUniformLocation;
    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureRenderer, [{
    key: 'addTextureCoordinateData',
    value: function addTextureCoordinateData(textureCoordinateData) {
      add(this.textureCoordinateData, textureCoordinateData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createTextureCoordinateBuffer(canvas);

      _get(TextureRenderer.prototype.__proto__ || Object.getPrototypeOf(TextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
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

      _get(TextureRenderer.prototype.__proto__ || Object.getPrototypeOf(TextureRenderer.prototype), 'bindBuffers', this).call(this, canvas);
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
      var vertexShader = canvas.createVertexShader(vertexShaderSource),
          fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
          program = canvas.createProgram(vertexShader, fragmentShader),
          uniformLocations = UniformLocations.fromProgram(program, canvas),
          attributeLocations = AttributeLocations.fromProgram(program, canvas),
          samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureCoordinateData = [],
          textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations, samplerUniformLocation, textureCoordinateAttributeLocation, textureCoordinateData);

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJSZW5kZXJlciIsIlVuaWZvcm1Mb2NhdGlvbnMiLCJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSIsInNhbXBsZXJOYW1lIiwiYXJyYXlVdGlsaXRpZXMiLCJtZXJnZSIsImFkZCIsIlRleHR1cmVSZW5kZXJlciIsInByb2dyYW0iLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjYW52YXMiLCJjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImltYWdlIiwiY3JlYXRlVGV4dHVyZSIsImdldENvbnRleHQiLCJURVhUVVJFMCIsImNvbnRleHQiLCJ0YXJnZXQiLCJ1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsImFjdGl2YXRlVGV4dHVyZSIsInNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVQcm9ncmFtIiwiZnJvbVByb2dyYW0iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVSZW5kZXJlciIsIm1vZHVs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QUEsVUFNTVMscUNBQXFDRSxPQUFPdUIsb0JBQVAsQ0FBNEI3QixPQUE1QixFQUFxQ04sOEJBQXJDLENBTjNDO0FBQUEsVUFPTVcsd0JBQXdCLEVBUDlCO0FBQUEsVUFRTXlCLGtCQUFrQixJQUFJL0IsZUFBSixDQUFvQkMsT0FBcEIsRUFBNkJDLGdCQUE3QixFQUErQ0Msa0JBQS9DLEVBQW1FQyxzQkFBbkUsRUFBMkZDLGtDQUEzRixFQUErSEMscUJBQS9ILENBUnhCOztBQVVBLGFBQU95QixlQUFQO0FBQ0Q7Ozs7RUE5RDJCekMsUTs7QUFpRTlCMEMsT0FBT0MsT0FBUCxHQUFpQmpDLGVBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdW5pZm9ybScpLFxuICAgICAgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleCcpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50Jyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXG4gICAgICB7IHNhbXBsZXJOYW1lIH0gPSBmcmFnbWVudFNoYWRlclNvdXJjZSxcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlRGF0YSkge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgVGV4dHVyZVJlbmRlcmVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iXX0=