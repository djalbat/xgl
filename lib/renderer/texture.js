'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var TextureRenderer = function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer(program, uniformLocations, attributeLocations, textureCoordinateData, textureCoordinateBuffer) {
    _classCallCheck(this, TextureRenderer);

    var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.textureCoordinateData = textureCoordinateData;
    _this.textureCoordinateBuffer = textureCoordinateBuffer;
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
    key: 'addTextureCoordinateData',
    value: function addTextureCoordinateData(textureCoordinateData) {
      add(this.textureCoordinateData, textureCoordinateData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.textureCoordinateBuffer = canvas.createBuffer(this.textureCoordinateData);

      _get(TextureRenderer.prototype.__proto__ || Object.getPrototypeOf(TextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation(),
          textureCoordinateComponents = 2;

      canvas.bindBuffer(this.textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);

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
      var program = createProgram(vertexShaderSource, fragmentShaderSource),
          textureUniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          textureAttributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          uniformLocations = textureUniformLocations,
          ///
      attributeLocations = textureAttributeLocations,
          ///
      textureCoordinateData = [],
          textureCoordinateBuffer = null,
          ///
      textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations, textureCoordinateData, textureCoordinateBuffer);

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJSZW5kZXJlciIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMiLCJUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIiwiY3JlYXRlUHJvZ3JhbSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJUZXh0dXJlUmVuZGVyZXIiLCJwcm9ncmFtIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsInRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwidGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMiLCJmcm9tUHJvZ3JhbSIsInRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEs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cUJBQW5FLEVBQTBGQyx1QkFBMUYsQ0FQeEI7O0FBU0EsYUFBT3VCLGVBQVA7QUFDRDs7OztFQTlEMkJyQyxROztBQWlFOUJzQyxPQUFPQyxPQUFQLEdBQWlCOUIsZUFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtJyksXG4gICAgICBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIpIHtcbiAgICBzdXBlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IHRleHR1cmVDb29yZGluYXRlQnVmZmVyO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIHRleHR1cmVDb29yZGluYXRlQnVmZmVyKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iXX0=