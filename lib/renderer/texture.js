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

  function TextureRenderer(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, TextureRenderer);

    var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.textureCoordinateData = [];

    _this.textureCoordinateBuffer = null; ///
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
      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureRenderer = new TextureRenderer(program, uniformLocations, attributeLocations);

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJSZW5kZXJlciIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMiLCJUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIiwiY3JlYXRlUHJvZ3JhbSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJUZXh0dXJlUmVuZGVyZXIiLCJwcm9ncmFtIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsInRleHR1cmVDb29yZGluYXRlRGF0YSIsInRleHR1cmVDb29yZGluYXRlQnVmZmVyIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMiLCJiaW5kQnVmZmVyIiwiaW1hZ2UiLCJjcmVhdGVUZXh0dXJlIiwiZ2V0Q29udGV4dCIsIlRFWFRVUkUwIiwiY29udGV4dCIsInRhcmdldCIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiYWN0aXZhdGVUZXh0dXJlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiZnJvbVByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFdBQVdELFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01FLHFCQUFxQkYsUUFBUSwrQkFBUixDQUQzQjtBQUFBLElBRU1HLHVCQUF1QkgsUUFBUSxpQ0FBUixDQUY3QjtBQUFBLElBR01JLDBCQUEwQkosUUFBUSw2QkFBUixDQUhoQztBQUFBLElBSU1LLDRCQUE0QkwsUUFBUSwrQkFBUixDQUpsQzs7QUFNTSxJQUFFTSxhQUFGLEdBQW9CTCxRQUFwQixDQUFFSyxhQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlIsU0FEckIsQ0FDRVEsY0FERjtBQUFBLElBRUVDLEtBRkYsR0FFWUQsY0FGWixDQUVFQyxLQUZGO0FBQUEsSUFHQUMsR0FIQSxHQUdNRCxLQUhOLEMsQ0FHYzs7SUFFZEUsZTs7O0FBQ0osMkJBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msa0JBQXZDLEVBQTJEO0FBQUE7O0FBQUEsa0lBQ25ERixPQURtRCxFQUMxQ0MsZ0JBRDBDLEVBQ3hCQyxrQkFEd0I7O0FBR3pELFVBQUtDLHFCQUFMLEdBQTZCLEVBQTdCOztBQUVBLFVBQUtDLHVCQUFMLEdBQStCLElBQS9CLENBTHlELENBS25CO0FBTG1CO0FBTTFEOzs7OzREQUV1QztBQUN0QyxVQUFNRixxQkFBcUIsS0FBS0cscUJBQUwsRUFBM0I7QUFBQSxVQUNNQyxxQ0FBcUNKLG1CQUFtQksscUNBQW5CLEVBRDNDOztBQUdBLGFBQU9ELGtDQUFQO0FBQ0Q7Ozs2Q0FFd0JILHFCLEVBQXVCO0FBQzlDTCxVQUFJLEtBQUtLLHFCQUFULEVBQWdDQSxxQkFBaEM7QUFDRDs7O2tDQUVhSyxNLEVBQVE7QUFDcEIsV0FBS0osdUJBQUwsR0FBK0JJLE9BQU9DLFlBQVAsQ0FBb0IsS0FBS04scUJBQXpCLENBQS9COztBQUVBLHNJQUFvQkssTUFBcEI7QUFDRDs7O2dDQUVXQSxNLEVBQVE7QUFDbEIsVUFBTUYscUNBQXFDLEtBQUtDLHFDQUFMLEVBQTNDO0FBQUEsVUFDTUcsOEJBQThCLENBRHBDOztBQUdBRixhQUFPRyxVQUFQLENBQWtCLEtBQUtQLHVCQUF2QixFQUFnREUsa0NBQWhELEVBQW9GSSwyQkFBcEY7O0FBRUEsb0lBQWtCRixNQUFsQjtBQUNEOzs7a0NBRWFJLEssRUFBT0osTSxFQUFRO0FBQzNCQSxhQUFPSyxhQUFQLENBQXFCRCxLQUFyQjtBQUNEOzs7b0NBRWVKLE0sRUFBUTtBQUNoQixvQkFBVUEsT0FBT00sVUFBUCxFQUFWO0FBQUEsVUFDRUMsUUFERixHQUNlQyxPQURmLENBQ0VELFFBREY7QUFBQSxVQUVBRSxNQUZBLEdBRVNGLFFBRlQ7QUFBQSxVQUdBZCxnQkFIQSxHQUdtQixLQUFLaUIsbUJBQUwsRUFIbkI7QUFBQSxVQUlBQyxzQkFKQSxHQUl5QmxCLGlCQUFpQm1CLHlCQUFqQixFQUp6QjtBQUFBLFVBS0FDLG1DQUxBLEdBS3NDLENBTHRDOzs7QUFPTmIsYUFBT2MsZUFBUCxDQUF1QkwsTUFBdkI7O0FBRUFULGFBQU9lLDhCQUFQLENBQXNDSixzQkFBdEMsRUFBOERFLG1DQUE5RDtBQUNEOzs7Z0NBRWtCYixNLEVBQVE7QUFDekIsVUFBTVIsVUFBVUwsY0FBY0osa0JBQWQsRUFBa0NDLG9CQUFsQyxFQUF3RGdCLE1BQXhELENBQWhCO0FBQUEsVUFDTVAsbUJBQW1CUix3QkFBd0IrQixXQUF4QixDQUFvQ3hCLE9BQXBDLEVBQTZDUSxNQUE3QyxDQUR6QjtBQUFBLFVBRU1OLHFCQUFxQlIsMEJBQTBCOEIsV0FBMUIsQ0FBc0N4QixPQUF0QyxFQUErQ1EsTUFBL0MsQ0FGM0I7QUFBQSxVQUdNaUIsa0JBQWtCLElBQUkxQixlQUFKLENBQW9CQyxPQUFwQixFQUE2QkMsZ0JBQTdCLEVBQStDQyxrQkFBL0MsQ0FIeEI7O0FBS0EsYUFBT3VCLGVBQVA7QUFDRDs7OztFQTNEMkJuQyxROztBQThEOUJvQyxPQUFPQyxPQUFQLEdBQWlCNUIsZUFBakIiLCJmaWxlIjoidGV4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtJyksXG4gICAgICBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBbXTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gbnVsbDsgIC8vL1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iXX0=