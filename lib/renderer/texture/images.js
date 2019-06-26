'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    TextureRenderer = require('../../renderer/texture');

var push = arrayUtilities.push,
    first = arrayUtilities.first;


var add = push; ///

var ImagesTextureRenderer = function (_TextureRenderer) {
  _inherits(ImagesTextureRenderer, _TextureRenderer);

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
    _classCallCheck(this, ImagesTextureRenderer);

    var _this = _possibleConstructorReturn(this, (ImagesTextureRenderer.__proto__ || Object.getPrototypeOf(ImagesTextureRenderer)).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

    _this.imageNames = imageNames;

    _this.facetsMap = facetsMap;

    _this.offsets = offsets;
    return _this;
  }

  _createClass(ImagesTextureRenderer, [{
    key: 'addFacets',
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
    key: 'createBuffers',
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

      _get(ImagesTextureRenderer.prototype.__proto__ || Object.getPrototypeOf(ImagesTextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'render',
    value: function render(canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this3 = this;

      var program = this.getProgram();

      canvas.useProgram(program);

      this.bindBuffers(canvas);

      var renderer = this; ///

      canvas.render(renderer, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);

      var start = void 0,
          finish = 0; ///

      this.offsets.forEach(function (offset, index) {
        start = finish; ///

        finish = offset; ///

        _this3.useTexture(index, canvas);

        canvas.drawElements(start, finish);
      });
    }
  }], [{
    key: 'fromImagesImageNamesAndImageTiling',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJUZXh0dXJlUmVuZGVyZXIiLCJwdXNoIiwiZmlyc3QiLCJhZGQiLCJJbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmYWNldHMiLCJwcm9ncmFtIiwicmVuZGVyZXJEYXRhIiwicmVuZGVyZXJCdWZmZXJzIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImltYWdlTmFtZXMiLCJmYWNldHNNYXAiLCJvZmZzZXRzIiwidGV4dHVyZWRGYWNldHMiLCJ0ZXh0dXJlZEZhY2V0c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VGV4dHVyZWRGYWNldCIsInRleHR1cmVkRmFjZXQiLCJpbWFnZU5hbWUiLCJnZXRJbWFnZU5hbWUiLCJjYW52YXMiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiaW5kZXgiLCJmb3JFYWNoIiwiZmFjZXQiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsImZhY2V0VmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJvZmZzZXQiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0TWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImdldFByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiYmluZEJ1ZmZlcnMiLCJyZW5kZXJlciIsInJlbmRlciIsInN0YXJ0IiwiZmluaXNoIiwidXNlVGV4dHVyZSIsImRyYXdFbGVtZW50cyIsImltYWdlcyIsImltYWdlVGlsaW5nIiwiaW1hZ2UiLCJyZXBlYXQiLCJjcmVhdGVUZXh0dXJlIiwiaW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLHdCQUFSLENBRHhCOztJQUdRRSxJLEdBQWdCSCxjLENBQWhCRyxJO0lBQU1DLEssR0FBVUosYyxDQUFWSSxLOzs7QUFFZCxJQUFNQyxNQUFNRixJQUFaLEMsQ0FBa0I7O0lBRVpHLHFCOzs7QUFDTCxpQ0FBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkJDLFlBQTdCLEVBQTJDQyxlQUEzQyxFQUE0REMsZ0JBQTVELEVBQThFQyxrQkFBOUUsRUFBa0dDLFVBQWxHLEVBQThHQyxTQUE5RyxFQUF5SEMsT0FBekgsRUFBa0k7QUFBQTs7QUFBQSw4SUFDM0hSLE1BRDJILEVBQ25IQyxPQURtSCxFQUMxR0MsWUFEMEcsRUFDNUZDLGVBRDRGLEVBQzNFQyxnQkFEMkUsRUFDekRDLGtCQUR5RDs7QUFHakksVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBUGlJO0FBUWpJOzs7OzhCQUVTUixNLEVBQVE7QUFDaEIsVUFBTVMsaUJBQWlCVCxNQUF2QjtBQUFBLFVBQWdDO0FBQ3pCVSw2QkFBdUJELGVBQWVFLE1BRDdDOztBQUdBLFVBQUlELHVCQUF1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QUNqRixVQUFNUixVQUFVLEVBQWhCO0FBQUEsVUFDTUQsWUFBWSxFQURsQjs7QUFHQThDLGFBQU8vQixPQUFQLENBQWUsVUFBQ2lDLEtBQUQsRUFBUWxDLEtBQVIsRUFBa0I7QUFDL0IsWUFBTXJCLFNBQVMsRUFBZjtBQUFBLFlBQ013RCxTQUFTRixXQURmO0FBQUEsWUFDNEI7QUFDdEJ4QyxvQkFBWVIsV0FBV2UsS0FBWCxDQUZsQjs7QUFJQWQsa0JBQVVPLFNBQVYsSUFBdUJkLE1BQXZCOztBQUVBZ0IsZUFBT3lDLGFBQVAsQ0FBcUJGLEtBQXJCLEVBQTRCbEMsS0FBNUIsRUFBbUNtQyxNQUFuQztBQUNELE9BUkQ7O0FBVUEsVUFBTUUsd0JBQXdCL0QsZ0JBQWdCZ0UsV0FBaEIsQ0FBNEI1RCxxQkFBNUIsRUFBbURpQixNQUFuRCxFQUEyRFYsVUFBM0QsRUFBdUVDLFNBQXZFLEVBQWtGQyxPQUFsRixDQUE5Qjs7QUFFQSxhQUFPa0QscUJBQVA7QUFDRDs7OztFQTdHaUMvRCxlOztBQWdIcENpRSxPQUFPQyxPQUFQLEdBQWlCOUQscUJBQWpCIiwiZmlsZSI6ImltYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiJdfQ==