"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.push; ///

var ImagesTextureRenderer = /*#__PURE__*/function (_TextureRenderer) {
  _inherits(ImagesTextureRenderer, _TextureRenderer);

  var _super = _createSuper(ImagesTextureRenderer);

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
    var _this;

    _classCallCheck(this, ImagesTextureRenderer);

    _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
    _this.imageNames = imageNames;
    _this.facetsMap = facetsMap;
    _this.offsets = offsets;
    return _this;
  }

  _createClass(ImagesTextureRenderer, [{
    key: "addFacets",
    value: function addFacets(facets) {
      var texturedFacets = facets,
          ///
      texturedFacetsLength = texturedFacets.length;

      if (texturedFacetsLength > 0) {
        var firstTexturedFacet = (0, _array.first)(texturedFacets),
            texturedFacet = firstTexturedFacet,
            ///
        imageName = texturedFacet.getImageName(),
            _facets = this.facetsMap[imageName];
        add(_facets, texturedFacets);
      }
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(canvas) {
      var _this2 = this;

      var vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];
      var index = 0;
      this.imageNames.forEach(function (imageName) {
        var facets = _this2.facetsMap[imageName];
        facets.forEach(function (facet) {
          var texturedFacet = facet,
              ///
          facetVertexIndexes = facet.getVertexIndexes(index),
              facetVertexNormals = facet.getVertexNormals(),
              facetVertexPositions = facet.getVertexPositions(),
              texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(),
              texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples; ///

          add(vertexIndexes, facetVertexIndexes);
          add(vertexNormals, facetVertexNormals);
          add(vertexPositions, facetVertexPositions);
          add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
          index++;
        });
        var offset = index * 3; ///

        _this2.offsets.push(offset);
      });
      var rendererData = this.getRendererData();
      rendererData.addVertexIndexes(vertexIndexes);
      rendererData.addVertexNormals(vertexNormals);
      rendererData.addVertexPositions(vertexPositions);
      rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

      _get(_getPrototypeOf(ImagesTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
    }
  }, {
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this3 = this;

      var program = this.getProgram();
      canvas.useProgram(program);
      this.bindBuffers(canvas);
      var renderer = this; ///

      canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      var start,
          finish = 0; ///

      this.offsets.forEach(function (offset, index) {
        start = finish; ///

        finish = offset; ///

        _this3.useTexture(index, canvas);

        canvas.drawElements(start, finish);
      });
    }
  }], [{
    key: "fromImagesImageNamesAndImageTiling",
    value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
      var offsets = [],
          facetsMap = {};
      images.forEach(function (image, index) {
        var facets = [],
            repeat = imageTiling,
            ///
        imageName = imageNames[index];
        facetsMap[imageName] = facets;
        canvas.createTexture(image, index, repeat);
      });

      var imagesTextureRenderer = _texture["default"].fromNothing(ImagesTextureRenderer, canvas, imageNames, facetsMap, offsets);

      return imagesTextureRenderer;
    }
  }]);

  return ImagesTextureRenderer;
}(_texture["default"]);

exports["default"] = ImagesTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy5qcyJdLCJuYW1lcyI6WyJhZGQiLCJwdXNoIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwiZmFjZXRzTWFwIiwib2Zmc2V0cyIsInRleHR1cmVkRmFjZXRzIiwidGV4dHVyZWRGYWNldHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRleHR1cmVkRmFjZXQiLCJ0ZXh0dXJlZEZhY2V0IiwiaW1hZ2VOYW1lIiwiZ2V0SW1hZ2VOYW1lIiwiY2FudmFzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImluZGV4IiwiZm9yRWFjaCIsImZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0IiwiZ2V0UmVuZGVyZXJEYXRhIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlcmVyIiwicmVuZGVyIiwic3RhcnQiLCJmaW5pc2giLCJ1c2VUZXh0dXJlIiwiZHJhd0VsZW1lbnRzIiwiaW1hZ2VzIiwiaW1hZ2VUaWxpbmciLCJpbWFnZSIsInJlcGVhdCIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJUZXh0dXJlUmVuZGVyZXIiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLFdBQVosQyxDQUFrQjs7SUFFR0MscUI7Ozs7O0FBQ3BCLGlDQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsWUFBN0IsRUFBMkNDLGVBQTNDLEVBQTREQyxnQkFBNUQsRUFBOEVDLGtCQUE5RSxFQUFrR0MsVUFBbEcsRUFBOEdDLFNBQTlHLEVBQXlIQyxPQUF6SCxFQUFrSTtBQUFBOztBQUFBOztBQUNqSSw4QkFBTVIsTUFBTixFQUFjQyxPQUFkLEVBQXVCQyxZQUF2QixFQUFxQ0MsZUFBckMsRUFBc0RDLGdCQUF0RCxFQUF3RUMsa0JBQXhFO0FBRUEsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQVBpSTtBQVFqSTs7Ozs4QkFFU1IsTSxFQUFRO0FBQ2hCLFVBQU1TLGNBQWMsR0FBR1QsTUFBdkI7QUFBQSxVQUFnQztBQUN6QlUsTUFBQUEsb0JBQW9CLEdBQUdELGNBQWMsQ0FBQ0UsTUFEN0M7O0FBR0EsVUFBSUQsb0JBQW9CLEdBQUcsQ0FBM0IsRUFBOEI7QUFDNUIsWUFBTUUsa0JBQWtCLEdBQUcsa0JBQU1ILGNBQU4sQ0FBM0I7QUFBQSxZQUNPSSxhQUFhLEdBQUdELGtCQUR2QjtBQUFBLFlBQzJDO0FBQ3BDRSxRQUFBQSxTQUFTLEdB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LENBRHNDLENBQ3RCOztBQUVoQkEsUUFBQUEsTUFBTSxHQUFHakIsTUFBVCxDQUhzQyxDQUdwQjs7QUFFbEIsUUFBQSxNQUFJLENBQUNrQixVQUFMLENBQWdCOUIsS0FBaEIsRUFBdUJMLE1BQXZCOztBQUVBQSxRQUFBQSxNQUFNLENBQUNvQyxZQUFQLENBQW9CSCxLQUFwQixFQUEyQkMsTUFBM0I7QUFDRCxPQVJEO0FBU0Q7Ozt1REFFeUNHLE0sRUFBUS9DLFUsRUFBWWdELFcsRUFBYXRDLE0sRUFBUTtBQUNqRixVQUFNUixPQUFPLEdBQUcsRUFBaEI7QUFBQSxVQUNNRCxTQUFTLEdBQUcsRUFEbEI7QUFHQThDLE1BQUFBLE1BQU0sQ0FBQy9CLE9BQVAsQ0FBZSxVQUFDaUMsS0FBRCxFQUFRbEMsS0FBUixFQUFrQjtBQUMvQixZQUFNckIsTUFBTSxHQUFHLEVBQWY7QUFBQSxZQUNNd0QsTUFBTSxHQUFHRixXQURmO0FBQUEsWUFDNEI7QUFDdEJ4QyxRQUFBQSxTQUFTLEdBQUdSLFVBQVUsQ0FBQ2UsS0FBRCxDQUY1QjtBQUlBZCxRQUFBQSxTQUFTLENBQUNPLFNBQUQsQ0FBVCxHQUF1QmQsTUFBdkI7QUFFQWdCLFFBQUFBLE1BQU0sQ0FBQ3lDLGFBQVAsQ0FBcUJGLEtBQXJCLEVBQTRCbEMsS0FBNUIsRUFBbUNtQyxNQUFuQztBQUNELE9BUkQ7O0FBVUEsVUFBTUUscUJBQXFCLEdBQUdDLG9CQUFnQkMsV0FBaEIsQ0FBNEI3RCxxQkFBNUIsRUFBbURpQixNQUFuRCxFQUEyRFYsVUFBM0QsRUFBdUVDLFNBQXZFLEVBQWtGQyxPQUFsRixDQUE5Qjs7QUFFQSxhQUFPa0QscUJBQVA7QUFDRDs7OztFQTdHZ0RDLG1CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iXX0=