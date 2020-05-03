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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy5qcyJdLCJuYW1lcyI6WyJhZGQiLCJwdXNoIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwiZmFjZXRzTWFwIiwib2Zmc2V0cyIsInRleHR1cmVkRmFjZXRzIiwidGV4dHVyZWRGYWNldHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRleHR1cmVkRmFjZXQiLCJ0ZXh0dXJlZEZhY2V0IiwiaW1hZ2VOYW1lIiwiZ2V0SW1hZ2VOYW1lIiwiY2FudmFzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImluZGV4IiwiZm9yRWFjaCIsImZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0IiwiZ2V0UmVuZGVyZXJEYXRhIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlcmVyIiwicmVuZGVyIiwic3RhcnQiLCJmaW5pc2giLCJ1c2VUZXh0dXJlIiwiZHJhd0VsZW1lbnRzIiwiaW1hZ2VzIiwiaW1hZ2VUaWxpbmciLCJpbWFnZSIsInJlcGVhdCIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJUZXh0dXJlUmVuZGVyZXIiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxXQUFaLEMsQ0FBa0I7O0lBRUdDLHFCOzs7OztBQUNwQixpQ0FBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkJDLFlBQTdCLEVBQTJDQyxlQUEzQyxFQUE0REMsZ0JBQTVELEVBQThFQyxrQkFBOUUsRUFBa0dDLFVBQWxHLEVBQThHQyxTQUE5RyxFQUF5SEMsT0FBekgsRUFBa0k7QUFBQTs7QUFBQTs7QUFDakksOEJBQU1SLE1BQU4sRUFBY0MsT0FBZCxFQUF1QkMsWUFBdkIsRUFBcUNDLGVBQXJDLEVBQXNEQyxnQkFBdEQsRUFBd0VDLGtCQUF4RTtBQUVBLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFFQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFQaUk7QUFRakk7Ozs7OEJBRVNSLE0sRUFBUTtBQUNoQixVQUFNUyxjQUFjLEdBQUdULE1BQXZCO0FBQUEsVUFBZ0M7QUFDekJVLE1BQUFBLG9CQUFvQixHQUFHRCxjQUFjLENBQUNFLE1BRDdDOztBQUdBLFVBQUlELG9CQUFvQixHQUFHLENBQTNCLEVBQThCO0FBQzVCLFlBQU1FLGtCQUFrQixHQUFHLGtCQUFNSCxjQUFOLENBQTNCO0FBQUEsWUFDT0ksYUFBYSxHQUFHRCxrQkFEdkI7QUFBQSxZQUMyQztBQUNwQ0UsUUFBQUEsU0FBUyxHQUFHRCxhQUFhLENBQUNFLFlBQWQsRUFGbkI7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LE1BQU0sR0FBR2pCLE1BQVQsQ0FIc0MsQ0FHcEI7O0FBRWxCLFFBQUEsTUFBSSxDQUFDa0IsVUFBTCxDQUFnQjlCLEtBQWhCLEVBQXVCTCxNQUF2Qjs7QUFFQUEsUUFBQUEsTUFBTSxDQUFDb0MsWUFBUCxDQUFvQkgsS0FBcEIsRUFBMkJDLE1BQTNCO0FBQ0QsT0FSRDtBQVNEOzs7dURBRXlDRyxNLEVBQVEvQyxVLEVBQVlnRCxXLEVBQWF0QyxNLEVBQVE7QUFDakYsVUFBTVIsT0FBTyxHQUFHLEVBQWhCO0FBQUEsVUFDTUQsU0FBUyxHQUFHLEVBRGxCO0FBR0E4QyxNQUFBQSxNQUFNLENBQUMvQixPQUFQLENBQWUsVUFBQ2lDLEtBQUQsRUFBUWxDLEtBQVIsRUFBa0I7QUFDL0IsWUFBTXJCLE1BQU0sR0FBRyxFQUFmO0FBQUEsWUFDTXdELE1BQU0sR0FBR0YsV0FEZjtBQUFBLFlBQzRCO0FBQ3RCeEMsUUFBQUEsU0FBUyxHQUFHUixVQUFVLENBQUNlLEtBQUQsQ0FGNUI7QUFJQWQsUUFBQUEsU0FBUyxDQUFDTyxTQUFELENBQVQsR0FBdUJkLE1BQXZCO0FBRUFnQixRQUFBQSxNQUFNLENBQUN5QyxhQUFQLENBQXFCRixLQUFyQixFQUE0QmxDLEtBQTVCLEVBQW1DbUMsTUFBbkM7QUFDRCxPQVJEOztBQVVBLFVBQU1FLHFCQUFxQixHQUFHQyxvQkFBZ0JDLFdBQWhCLENBQTRCN0QscUJBQTVCLEVBQW1EaUIsTUFBbkQsRUFBMkRWLFVBQTNELEVBQXVFQyxTQUF2RSxFQUFrRkMsT0FBbEYsQ0FBOUI7O0FBRUEsYUFBT2tELHFCQUFQO0FBQ0Q7Ozs7RUE3R2dEQyxtQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IHB1c2gsIGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuZmFjZXRzTWFwID0gZmFjZXRzTWFwO1xuXG5cdFx0dGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblx0fVxuXG5cdGFkZEZhY2V0cyhmYWNldHMpIHtcblx0ICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGZhY2V0cywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXRzTGVuZ3RoID0gdGV4dHVyZWRGYWNldHMubGVuZ3RoO1xuXG5cdCAgaWYgKHRleHR1cmVkRmFjZXRzTGVuZ3RoID4gMCkge1xuXHQgICAgY29uc3QgZmlyc3RUZXh0dXJlZEZhY2V0ID0gZmlyc3QodGV4dHVyZWRGYWNldHMpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IGZpcnN0VGV4dHVyZWRGYWNldCwgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuXHQgICAgYWRkKGZhY2V0cywgdGV4dHVyZWRGYWNldHMpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIl19