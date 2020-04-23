"use strict";

var _texture = _interopRequireDefault(require("../../renderer/texture"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.push; ///

var ImageMapTextureRenderer = /*#__PURE__*/function (_TextureRenderer) {
  _inherits(ImageMapTextureRenderer, _TextureRenderer);

  var _super = _createSuper(ImageMapTextureRenderer);

  function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
    var _this;

    _classCallCheck(this, ImageMapTextureRenderer);

    _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
    _this.imageMapJSON = imageMapJSON;
    return _this;
  }

  _createClass(ImageMapTextureRenderer, [{
    key: "createBuffers",
    value: function createBuffers(canvas) {
      var _this2 = this;

      var facets = this.getFacets(),
          vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];
      facets.forEach(function (facet, index) {
        var texturedFacet = facet,
            ///
        facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(_this2.imageMapJSON),
            texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples; ///

        add(vertexIndexes, facetVertexIndexes);
        add(vertexNormals, facetVertexNormals);
        add(vertexPositions, facetVertexPositions);
        add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
      });
      var rendererData = this.getRendererData();
      rendererData.addVertexIndexes(vertexIndexes);
      rendererData.addVertexNormals(vertexNormals);
      rendererData.addVertexPositions(vertexPositions);
      rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

      _get(_getPrototypeOf(ImageMapTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
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
  }, {
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var program = this.getProgram();
      canvas.useProgram(program);
      this.bindBuffers(canvas);
      var renderer = this; ///

      canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      var rendererData = this.getRendererData(),
          count = rendererData.getCount(),
          index = 0,
          start = 0,
          finish = count; ///

      this.useTexture(index, canvas);
      canvas.drawElements(start, finish);
    }
  }], [{
    key: "fromImageMapAndImageMapJSON",
    value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
      var image = imageMap,
          ///
      index = 0,
          repeat = false;
      canvas.createTexture(image, index, repeat);

      var imageMapTextureRenderer = _texture["default"].fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);

      return imageMapTextureRenderer;
    }
  }]);

  return ImageMapTextureRenderer;
}(_texture["default"]);

module.exports = ImageMapTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlTWFwLmpzIl0sIm5hbWVzIjpbImFkZCIsInB1c2giLCJJbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsInByb2dyYW0iLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiaW1hZ2VNYXBKU09OIiwiY2FudmFzIiwiZ2V0RmFjZXRzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImZvckVhY2giLCJmYWNldCIsImluZGV4IiwidGV4dHVyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0UmVuZGVyZXJEYXRhIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlcnMiLCJnZXRVbmlmb3JtTG9jYXRpb25zIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsImdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsInJlbmRlcmVyIiwicmVuZGVyIiwiY291bnQiLCJnZXRDb3VudCIsInN0YXJ0IiwiZmluaXNoIiwidXNlVGV4dHVyZSIsImRyYXdFbGVtZW50cyIsImltYWdlTWFwIiwiaW1hZ2UiLCJyZXBlYXQiLCJjcmVhdGVUZXh0dXJlIiwiaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIiLCJUZXh0dXJlUmVuZGVyZXIiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLFdBQVosQyxDQUFrQjs7SUFFWkMsdUI7Ozs7O0FBQ0wsbUNBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCQyxZQUE3QixFQUEyQ0MsZUFBM0MsRUFBNERDLGdCQUE1RCxFQUE4RUMsa0JBQTlFLEVBQWtHQyxZQUFsRyxFQUFnSDtBQUFBOztBQUFBOztBQUMvRyw4QkFBTU4sTUFBTixFQUFjQyxPQUFkLEVBQXVCQyxZQUF2QixFQUFxQ0MsZUFBckMsRUFBc0RDLGdCQUF0RCxFQUF3RUMsa0JBQXhFO0FBRUEsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFIK0c7QUFJL0c7Ozs7a0NBRWNDLE0sRUFBUTtBQUFBOztBQUNwQixVQUFNUCxNQUFNLEdBQUcsS0FBS1EsU0FB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ckI7QUFBQSxVQUNNMkIsS0FBSyxHQUFHbkQsWUFBWSxDQUFDb0QsUUFBYixFQURkO0FBQUEsVUFFTXZDLEtBQUssR0FBRyxDQUZkO0FBQUEsVUFHTXdDLEtBQUssR0FBRyxDQUhkO0FBQUEsVUFJTUMsTUFBTSxHQUFHSCxLQUpmLENBWDhGLENBZXhFOztBQUV0QixXQUFLSSxVQUFMLENBQWdCMUMsS0FBaEIsRUFBdUJSLE1BQXZCO0FBRUFBLE1BQUFBLE1BQU0sQ0FBQ21ELFlBQVAsQ0FBb0JILEtBQXBCLEVBQTJCQyxNQUEzQjtBQUNEOzs7Z0RBRWtDRyxRLEVBQVVyRCxZLEVBQWNDLE0sRUFBUTtBQUNqRSxVQUFNcUQsS0FBSyxHQUFHRCxRQUFkO0FBQUEsVUFBd0I7QUFDbEI1QyxNQUFBQSxLQUFLLEdBQUcsQ0FEZDtBQUFBLFVBRU04QyxNQUFNLEdBQUcsS0FGZjtBQUlBdEQsTUFBQUEsTUFBTSxDQUFDdUQsYUFBUCxDQUFxQkYsS0FBckIsRUFBNEI3QyxLQUE1QixFQUFtQzhDLE1BQW5DOztBQUVBLFVBQU1FLHVCQUF1QixHQUFHQyxvQkFBZ0JDLFdBQWhCLENBQTRCbEUsdUJBQTVCLEVBQXFEUSxNQUFyRCxFQUE2REQsWUFBN0QsQ0FBaEM7O0FBRUEsYUFBT3lELHVCQUFQO0FBQ0Q7Ozs7RUF2Rm1DQyxtQjs7QUEwRnRDRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJwRSx1QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiJdfQ==