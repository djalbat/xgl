'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../renderer'),
    UniformLocations = require('./locations/uniform'),
    AttributeLocations = require('./locations/attribute'),
    vertexShaderSource = require('./source/texture/vertex'),
    fragmentShaderSource = require('./source/texture/fragment');

var textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName,
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
      var vertexShader = canvas.createVertexShader(vertexShaderSource),
          fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU2hhZGVyIiwiVW5pZm9ybUxvY2F0aW9ucyIsIkF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIiwic2FtcGxlck5hbWUiLCJhcnJheVV0aWxpdGllcyIsIm1lcmdlIiwiYWRkIiwiVGV4dHVyZVNoYWRlciIsInByb2dyYW0iLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjYW52YXMiLCJjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImltYWdlIiwiY3JlYXRlVGV4dHVyZSIsImdldENvbnRleHQiLCJURVhUVVJFMCIsImNvbnRleHQiLCJ0YXJnZXQiLCJ1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsImFjdGl2YXRlVGV4dHVyZSIsInNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVQcm9ncmFtIiwiZnJvbVByb2dyYW0iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVTaGFkZXIiLCJtb2R1bGUiLCJleHBv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cUNBQXFDRSxPQUFPdUIsb0JBQVAsQ0FBNEI3QixPQUE1QixFQUFxQ04sOEJBQXJDLENBTjNDO0FBQUEsVUFPTVcsd0JBQXdCLEVBUDlCO0FBQUEsVUFRTXlCLGdCQUFnQixJQUFJL0IsYUFBSixDQUFrQkMsT0FBbEIsRUFBMkJDLGdCQUEzQixFQUE2Q0Msa0JBQTdDLEVBQWlFQyxzQkFBakUsRUFBeUZDLGtDQUF6RixFQUE2SEMscUJBQTdILENBUnRCOztBQVVBLGFBQU95QixhQUFQO0FBQ0Q7Ozs7RUE5RHlCekMsTTs7QUFpRTVCMEMsT0FBT0MsT0FBUCxHQUFpQmpDLGFBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3VuaWZvcm0nKSxcbiAgICAgIEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXgnKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudCcpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlLFxuICAgICAgeyBzYW1wbGVyTmFtZSB9ID0gZnJhZ21lbnRTaGFkZXJTb3VyY2UsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlRGF0YSkge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlU2hhZGVyID0gbmV3IFRleHR1cmVTaGFkZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIl19