'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var arrayUtilities = require('../../utilities/array'),
    TextureRenderer = require('../../renderer/texture');

var push = arrayUtilities.push,
    first = arrayUtilities.first;
var add = push; ///

var ImagesTextureRenderer = /*#__PURE__*/function (_TextureRenderer) {
  _inherits(ImagesTextureRenderer, _TextureRenderer);

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
    var _this;

    _classCallCheck(this, ImagesTextureRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImagesTextureRenderer).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));
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
        var firstTexturedFacet = first(texturedFacets),
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
      var imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, facetsMap, offsets);
      return imagesTextureRenderer;
    }
  }]);

  return ImagesTextureRenderer;
}(TextureRenderer);

module.exports = ImagesTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJUZXh0dXJlUmVuZGVyZXIiLCJwdXNoIiwiZmlyc3QiLCJhZGQiLCJJbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmYWNldHMiLCJwcm9ncmFtIiwicmVuZGVyZXJEYXRhIiwicmVuZGVyZXJCdWZmZXJzIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImltYWdlTmFtZXMiLCJmYWNldHNNYXAiLCJvZmZzZXRzIiwidGV4dHVyZWRGYWNldHMiLCJ0ZXh0dXJlZEZhY2V0c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VGV4dHVyZWRGYWNldCIsInRleHR1cmVkRmFjZXQiLCJpbWFnZU5hbWUiLCJnZXRJbWFnZU5hbWUiLCJjYW52YXMiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiaW5kZXgiLCJmb3JFYWNoIiwiZmFjZXQiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsImZhY2V0VmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJvZmZzZXQiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJzdGFydCIsImZpbmlzaCIsInVzZVRleHR1cmUiLCJkcmF3RWxlbWVudHMiLCJpbWFnZXMiLCJpbWFnZVRpbGluZyIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlVGV4dHVyZSIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLHVCQUFELENBQTlCO0FBQUEsSUFDTUMsZUFBZSxHQUFHRCxPQUFPLENBQUMsd0JBQUQsQ0FEL0I7O0lBR1FFLEksR0FBZ0JILGMsQ0FBaEJHLEk7SUFBTUMsSyxHQUFVSixjLENBQVZJLEs7QUFFZCxJQUFNQyxHQUFHLEdBQUdGLElBQVosQyxDQUFrQjs7SUFFWkcscUI7OztBQUNMLGlDQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsWUFBN0IsRUFBMkNDLGVBQTNDLEVBQTREQyxnQkFBNUQsRUFBOEVDLGtCQUE5RSxFQUFrR0MsVUFBbEcsRUFBOEdDLFNBQTlHLEVBQXlIQyxPQUF6SCxFQUFrSTtBQUFBOztBQUFBOztBQUNqSSwrRkFBTVIsTUFBTixFQUFjQyxPQUFkLEVBQXVCQyxZQUF2QixFQUFxQ0MsZUFBckMsRUFBc0RDLGdCQUF0RCxFQUF3RUMsa0JBQXhFO0FBRUEsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQVBpSTtBQVFqSTs7Ozs4QkFFU1IsTSxFQUFRO0FBQ2hCLFVBQU1TLGNBQWMsR0FBR1QsTUFBdkI7QUFBQSxVQUFnQztBQUN6QlUsTUFBQUEsb0JBQW9CLEdBQUdELGNBQWMsQ0FBQ0UsTUFE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QU0sQ0FBQ0MsT0FBUCxHQUFpQjlELHFCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuIl19