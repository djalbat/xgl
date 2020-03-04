'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    TextureRendererData = require('../renderer/data/texture'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureRendererBuffers = require('../renderer/buffers/texture'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram;

var TextureRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer() {
    _classCallCheck(this, TextureRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextureRenderer).apply(this, arguments));
  }

  _createClass(TextureRenderer, [{
    key: "getTextureCoordinateAttributeLocation",
    value: function getTextureCoordinateAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();
      return textureCoordinateAttributeLocation;
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(canvas) {
      var rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();
      rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(canvas) {
      var rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
      rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
    }
  }, {
    key: "useTexture",
    value: function useTexture(index, canvas) {
      var uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          samplerUniformLocationIntegerValue = index; ///

      canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class, canvas) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var facets = [],
          program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          textureRendererBuffers = TextureRendererBuffers.fromNothing(),
          textureUniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          textureAttributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          rendererData = textureRendererData,
          ///
      rendererBuffers = textureRendererBuffers,
          ///
      uniformLocations = textureUniformLocations,
          ///
      attributeLocations = textureAttributeLocations,
          ///
      textureRenderer = _construct(Class, [facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations].concat(remainingArguments));

      canvas.enableAnisotropicFiltering(); ///

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmUuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJyZXF1aXJlIiwidmVydGV4U2hhZGVyU291cmNlIiwiVGV4dHVyZVJlbmRlcmVyRGF0YSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsIlRleHR1cmVVbmlmb3JtTG9jYXRpb25zIiwiVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyIsImNyZWF0ZVByb2dyYW0iLCJUZXh0dXJlUmVuZGVyZXIiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImNhbnZhcyIsInJlbmRlcmVyRGF0YSIsImdldFJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiZ2V0VmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhIiwiZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImNyZWF0ZUJ1ZmZlcnMiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVycyIsImluZGV4IiwidW5pZm9ybUxvY2F0aW9ucyIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZhY2V0cyIsInByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJEYXRhIiwiZnJvbU5vdGhpbmciLCJ0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzIiwidGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMiLCJmcm9tUHJvZ3JhbSIsInRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCO0FBQUEsSUFDTUMsa0JBQWtCLEdBQUdELE9BQU8sQ0FBQywrQkFBRCxDQURsQztBQUFBLElBRU1FLG1CQUFtQixHQUFHRixPQUFPLENBQUMsMEJBQUQsQ0FGbkM7QUFBQSxJQUdNRyxvQkFBb0IsR0FBR0gsT0FBTyxDQUFDLGlDQUFELENBSHBDO0FBQUEsSUFJTUksc0JBQXNCLEdBQUdKLE9BQU8sQ0FBQyw2QkFBRCxDQUp0QztBQUFBLElBS01LLHVCQUF1QixHQUFHTCxPQUFPLENBQUMsNkJBQUQsQ0FMdkM7QUFBQSxJQU1NTSx5QkFBeUIsR0FBR04sT0FBTyxDQUFDLCtCQUFELENBTnpDOztJQVFRTyxhLEdBQWtCUixRLENBQWxCUSxhOztJQUVGQyxlOzs7Ozs7Ozs7Ozs0REFDb0M7QUFDdEMsVUFBTUMsa0JBQWtCLEdBQUcsS0FBS0MscUJBQUwsRUFBM0I7QUFBQSxVQUNNQyxrQ0FBa0MsR0FBR0Ysa0JBQWtCLENBQUNHLHFDQUFuQixFQUQzQztBQUdBLGFBQU9ELGtDQUFQO0FBQ0Q7OztrQ0FFYUUsTSxFQUFRO0FBQ3BCLFVBQU1DLFlBQVksR0FBRyxLQUFLQyxlQUFMLEVBQXJCO0FBQUEsVUFDTUMsZUFBZSxHQUFHLEtBQUtDLGtCQUFMLEVBRHhCO0FBQUEsVUFFTUMsbUJBQW1CLEdBQUdKLFlBQVksQ0FBQ0ssc0JBQWIsRUFGNUI7QUFBQSxVQUdNQyxpQkFBaUIsR0FBR04sWUFBWSxDQUFDTyxvQkFBYixFQUgxQjtBQUFBLFVBSU1DLGlCQUFpQixHQUFHUixZQUFZLENBQUNTLG9CQUFiLEVBSjFCO0FBQUEsVUFLTUMsNEJBQTRCLEdBQUdWLFlBQVksQ0FBQ1csK0JBQWIsRUFMckM7QUFPQVQsTUFBQUEsZUFBZSxDQUFDVSxhQUFoQixDQUE4QlIsbUJBQTlCLEVBQW1ERSxpQkFBbkQsRUFBc0VFLGlCQUF0RSxFQUF5RkUsNEJBQXpGLEVBQXVIWCxNQUF2SDtBQUNEOzs7Z0NBRVdBLE0sRUFBUTtBQUNsQixVQUFNRyxlQUFlLEdBQUcsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxVQUNNVSw2QkFBNkIsR0FBRyxLQUFLQyxnQ0FBTCxFQUR0QztBQUFBLFVBRU1DLCtCQUErQixHQUFHLEtBQUtDLGtDQUFMLEVBRnhDO0FBQUEsVUFHTW5CLGtDQUFrQyxHQUFHLEtBQUtDLHFDQUFMLEVBSDNDO0FBS0FJLE1BQUFBLGVBQWUsQ0FBQ2UsV0FBaEIsQ0FBNEJKLDZCQUE1QixFQUEyREUsK0JBQTNELEVBQTRGbEIsa0NBQTVGLEVBQWdJRSxNQUFoSTtBQUNEOzs7K0JBRVVtQixLLEVBQU9uQixNLEVBQVE7QUFDeEIsVUFBTW9CLGdCQUFnQixHQUFHLEtBQUtDLG1CQUFMLEVBQXpCO0FBQUEsVUFDTUMsc0JBQXNCLEdBQUdGLGdCQUFnQixDQUFDRyx5QkFBakIsRUFEL0I7QUFBQSxVQUVNQyxrQ0FBa0MsR0FBR0wsS0FGM0MsQ0FEd0IsQ0FHMEI7O0FBRWxEbkIsTUFBQUEsTUFBTSxDQUFDeUIsOEJBQVAsQ0FBc0NILHNCQUF0QyxFQUE4REUsa0NBQTlEO0FBQ0Q7OztnQ0FFa0JFLEssRUFBTzFCLE0sRUFBK0I7QUFBQSx3Q0FBcEIyQixrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUN2RCxVQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUFBLFVBQ01DLE9BQU8sR0FBR25DLGFBQWEsQ0FBQ04sa0JBQUQsRUFBcUJFLG9CQUFyQixFQUEyQ1UsTUFBM0MsQ0FEN0I7QUFBQSxVQUVNOEIsbUJBQW1CLEdBQUd6QyxtQkFBbUIsQ0FBQzBDLFdBQXBCLEVBRjVCO0FBQUEsVUFHTUMsc0JBQXNCLEdBQUd6QyxzQkFBc0IsQ0FBQ3dDLFdBQXZCLEVBSC9CO0FBQUEsVUFJTUUsdUJBQXVCLEdBQUd6Qyx1QkFBdUIsQ0FBQzBDLFdBQXhCLENBQW9DTCxPQUFwQyxFQUE2QzdCLE1BQTdDLENBSmhDO0FBQUEsVUFLTW1DLHlCQUF5QixHQUFHMUMseUJBQXlCLENBQUN5QyxXQUExQixDQUFzQ0wsT0FBdEMsRUFBK0M3QixNQUEvQyxDQUxsQztBQUFBLFVBTU1DLFlBQVksR0FBRzZCLG1CQU5yQjtBQUFBLFVBTTJDO0FBQ3JDM0IsTUFBQUEsZUFBZSxHQUFHNkIsc0JBUHhCO0FBQUEsVUFPZ0Q7QUFDMUNaLE1BQUFBLGdCQUFnQixHQUFHYSx1QkFSekI7QUFBQSxVQVFrRDtBQUM1Q3JDLE1BQUFBLGtCQUFrQixHQUFHdUMseUJBVDNCO0FBQUEsVUFTc0Q7QUFDaERDLE1BQUFBLGVBQWUsY0FBT1YsS0FBUCxHQUFhRSxNQUFiLEVBQXFCQyxPQUFyQixFQUE4QjVCLFlBQTlCLEVBQTRDRSxlQUE1QyxFQUE2RGlCLGdCQUE3RCxFQUErRXhCLGtCQUEvRSxTQUFzRytCLGtCQUF0RyxFQVZyQjs7QUFZQTNCLE1BQUFBLE1BQU0sQ0FBQ3FDLDBCQUFQLEdBYnVELENBYWpCOztBQUV0QyxhQUFPRCxlQUFQO0FBQ0Q7Ozs7RUFwRDJCbEQsUTs7QUF1RDlCb0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUMsZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUnKSxcbiAgICAgIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtJyksXG4gICAgICBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIl19