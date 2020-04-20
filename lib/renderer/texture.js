"use strict";

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

var Renderer = require("../renderer"),
    vertexShaderSource = require("./source/texture/vertexShader"),
    TextureRendererData = require("../renderer/data/texture"),
    fragmentShaderSource = require("./source/texture/fragmentShader"),
    TextureRendererBuffers = require("../renderer/buffers/texture"),
    TextureUniformLocations = require("./locations/texture/uniform"),
    TextureAttributeLocations = require("./locations/texture/attribute");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmUuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJyZXF1aXJlIiwidmVydGV4U2hhZGVyU291cmNlIiwiVGV4dHVyZVJlbmRlcmVyRGF0YSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsIlRleHR1cmVVbmlmb3JtTG9jYXRpb25zIiwiVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyIsImNyZWF0ZVByb2dyYW0iLCJUZXh0dXJlUmVuZGVyZXIiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImNhbnZhcyIsInJlbmRlcmVyRGF0YSIsImdldFJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiZ2V0VmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhIiwiZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImNyZWF0ZUJ1ZmZlcnMiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVycyIsImluZGV4IiwidW5pZm9ybUxvY2F0aW9ucyIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZhY2V0cyIsInByb2dyYW0iLCJ0ZXh0dXJlUmVuZGVyZXJEYXRhIiwiZnJvbU5vdGhpbmciLCJ0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzIiwidGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMiLCJmcm9tUHJvZ3JhbSIsInRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXhCO0FBQUEsSUFDTUMsa0JBQWtCLEdBQUdELE9BQU8sQ0FBQywrQkFBRCxDQURsQztBQUFBLElBRU1FLG1CQUFtQixHQUFHRixPQUFPLENBQUMsMEJBQUQsQ0FGbkM7QUFBQSxJQUdNRyxvQkFBb0IsR0FBR0gsT0FBTyxDQUFDLGlDQUFELENBSHBDO0FBQUEsSUFJTUksc0JBQXNCLEdBQUdKLE9BQU8sQ0FBQyw2QkFBRCxDQUp0QztBQUFBLElBS01LLHVCQUF1QixHQUFHTCxPQUFPLENBQUMsNkJBQUQsQ0FMdkM7QUFBQSxJQU1NTSx5QkFBeUIsR0FBR04sT0FBTyxDQUFDLCtCQUFELENBTnpDOztJQVFRTyxhLEdBQWtCUixRLENBQWxCUSxhOztJQUVGQyxlOzs7Ozs7Ozs7Ozs0REFDb0M7QUFDdEMsVUFBTUMsa0JBQWtCLEdBQUcsS0FBS0MscUJBQUwsRUFBM0I7QUFBQSxVQUNNQyxrQ0FBa0MsR0FBR0Ysa0JBQWtCLENBQUNHLHFDQUFuQixFQUQzQztBQUdBLGFBQU9ELGtDQUFQO0FBQ0Q7OztrQ0FFYUUsTSxFQUFRO0FBQ3BCLFVBQU1DLFlBQVksR0FBRyxLQUFLQyxlQUFMLEVBQXJCO0FBQUEsVUFDTUMsZUFBZSxHQUFHLEtBQUtDLGtCQUFMLEVBRHhCO0FBQUEsVUFFTUMsbUJBQW1CLEdBQUdKLFlBQVksQ0FBQ0ssc0JBQWIsRUFGNUI7QUFBQSxVQUdNQyxpQkFBaUIsR0FBR04sWUFBWSxDQUFDTyxvQkFBYixFQUgxQjtBQUFBLFVBSU1DLGlCQUFpQixHQUFHUixZQUFZLENBQUNTLG9CQUFiLEVBSjFCO0FBQUEsVUFLTUMsNEJBQTRCLEdBQUdWLFlBQVksQ0FBQ1csK0JBQWIsRUFMckM7QUFPQVQsTUFBQUEsZUFBZSxDQUFDVSxhQUFoQixDQUE4QlIsbUJBQTlCLEVBQW1ERSxpQkFBbkQsRUFBc0VFLGlCQUF0RSxFQUF5RkUsNEJBQXpGLEVBQXVIWCxNQUF2SDtBQUNEOzs7Z0NBRVdBLE0sRUFBUTtBQUNsQixVQUFNRyxlQUFlLEdBQUcsS0FBS0Msa0JBQUwsRUFBeEI7QUFBQSxVQUNNVSw2QkFBNkIsR0FBRyxLQUFLQyxnQ0FBTCxFQUR0QztBQUFBLFVBRU1DLCtCQUErQixHQUFHLEtBQUtDLGtDQUFMLEVBRnhDO0FBQUEsVUFHTW5CLGtDQUFrQyxHQUFHLEtBQUtDLHFDQUFMLEVBSDNDO0FBS0FJLE1BQUFBLGVBQWUsQ0FBQ2UsV0FBaEIsQ0FBNEJKLDZCQUE1QixFQUEyREUsK0JBQTNELEVBQTRGbEIsa0NBQTVGLEVBQWdJRSxNQUFoSTtBQUNEOzs7K0JBRVVtQixLLEVBQU9uQixNLEVBQVE7QUFDeEIsVUFBTW9CLGdCQUFnQixHQUFHLEtBQUtDLG1CQUFMLEVBQXpCO0FBQUEsVUFDTUMsc0JBQXNCLEdBQUdGLGdCQUFnQixDQUFDRyx5QkFBakIsRUFEL0I7QUFBQSxVQUVNQyxrQ0FBa0MsR0FBR0wsS0FGM0MsQ0FEd0IsQ0FHMEI7O0FBRWxEbkIsTUFBQUEsTUFBTSxDQUFDeUIsOEJBQVAsQ0FBc0NILHNCQUF0QyxFQUE4REUsa0NBQTlEO0FBQ0Q7OztnQ0FFa0JFLEssRUFBTzFCLE0sRUFBK0I7QUFBQSx3Q0FBcEIyQixrQkFBb0I7QUFBcEJBLFFBQUFBLGtCQUFvQjtBQUFBOztBQUN2RCxVQUFNQyxNQUFNLEdBQUcsRUFBZjtBQUFBLFVBQ01DLE9BQU8sR0FBR25DLGFBQWEsQ0FBQ04sa0JBQUQsRUFBcUJFLG9CQUFyQixFQUEyQ1UsTUFBM0MsQ0FEN0I7QUFBQSxVQUVNOEIsbUJBQW1CLEdBQUd6QyxtQkFBbUIsQ0FBQzBDLFdBQXBCLEVBRjVCO0FBQUEsVUFHTUMsc0JBQXNCLEdBQUd6QyxzQkFBc0IsQ0FBQ3dDLFdBQXZCLEVBSC9CO0FBQUEsVUFJTUUsdUJBQXVCLEdBQUd6Qyx1QkFBdUIsQ0FBQzBDLFdBQXhCLENBQW9DTCxPQUFwQyxFQUE2QzdCLE1BQTdDLENBSmhDO0FBQUEsVUFLTW1DLHlCQUF5QixHQUFHMUMseUJBQXlCLENBQUN5QyxXQUExQixDQUFzQ0wsT0FBdEMsRUFBK0M3QixNQUEvQyxDQUxsQztBQUFBLFVBTU1DLFlBQVksR0FBRzZCLG1CQU5yQjtBQUFBLFVBTTJDO0FBQ3JDM0IsTUFBQUEsZUFBZSxHQUFHNkIsc0JBUHhCO0FBQUEsVUFPZ0Q7QUFDMUNaLE1BQUFBLGdCQUFnQixHQUFHYSx1QkFSekI7QUFBQSxVQVFrRDtBQUM1Q3JDLE1BQUFBLGtCQUFrQixHQUFHdUMseUJBVDNCO0FBQUEsVUFTc0Q7QUFDaERDLE1BQUFBLGVBQWUsY0FBT1YsS0FBUCxHQUFhRSxNQUFiLEVBQXFCQyxPQUFyQixFQUE4QjVCLFlBQTlCLEVBQTRDRSxlQUE1QyxFQUE2RGlCLGdCQUE3RCxFQUErRXhCLGtCQUEvRSxTQUFzRytCLGtCQUF0RyxFQVZyQjs7QUFZQTNCLE1BQUFBLE1BQU0sQ0FBQ3FDLDBCQUFQLEdBYnVELENBYWpCOztBQUV0QyxhQUFPRCxlQUFQO0FBQ0Q7Ozs7RUFwRDJCbEQsUTs7QUF1RDlCb0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUMsZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKFwiLi4vcmVuZGVyZXJcIiksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKFwiLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIiksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJEYXRhID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZVwiKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZShcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIiksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZVwiKSxcbiAgICAgIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZShcIi4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybVwiKSxcbiAgICAgIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIik7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFRleHR1cmVSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IHRleHR1cmVSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBDbGFzcyhmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjYW52YXMuZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlcjtcbiJdfQ==