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
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var _this3 = this;

      var program = this.getProgram();

      canvas.useProgram(program);

      this.bindBuffers(canvas);

      var renderer = this; ///

      canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJUZXh0dXJlUmVuZGVyZXIiLCJwdXNoIiwiZmlyc3QiLCJhZGQiLCJJbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmYWNldHMiLCJwcm9ncmFtIiwicmVuZGVyZXJEYXRhIiwicmVuZGVyZXJCdWZmZXJzIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImltYWdlTmFtZXMiLCJmYWNldHNNYXAiLCJvZmZzZXRzIiwidGV4dHVyZWRGYWNldHMiLCJ0ZXh0dXJlZEZhY2V0c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VGV4dHVyZWRGYWNldCIsInRleHR1cmVkRmFjZXQiLCJpbWFnZU5hbWUiLCJnZXRJbWFnZU5hbWUiLCJjYW52YXMiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiaW5kZXgiLCJmb3JFYWNoIiwiZmFjZXQiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsImZhY2V0VmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJvZmZzZXQiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJzdGFydCIsImZpbmlzaCIsInVzZVRleHR1cmUiLCJkcmF3RWxlbWVudHMiLCJpbWFnZXMiLCJpbWFnZVRpbGluZyIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlVGV4dHVyZSIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUR4Qjs7SUFHUUUsSSxHQUFnQkgsYyxDQUFoQkcsSTtJQUFNQyxLLEdBQVVKLGMsQ0FBVkksSzs7O0FBRWQsSUFBTUMsTUFBTUYsSUFBWixDLENBQWtCOztJQUVaRyxxQjs7O0FBQ0wsaUNBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCQyxZQUE3QixFQUEyQ0MsZUFBM0MsRUFBNERDLGdCQUE1RCxFQUE4RUMsa0JBQTlFLEVBQWtHQyxVQUFsRyxFQUE4R0MsU0FBOUcsRUFBeUhDLE9BQXpILEVBQWtJO0FBQUE7O0FBQUEsOElBQzNIUixNQUQySCxFQUNuSEMsT0FEbUgsRUFDMUdDLFlBRDBHLEVBQzVGQyxlQUQ0RixFQUMzRUMsZ0JBRDJFLEVBQ3pEQyxrQkFEeUQ7O0FBR2pJLFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQVBpSTtBQVFqSTs7Ozs4QkFFU1IsTSxFQUFRO0FBQ2hCLFVBQU1TLGlCQUFpQlQsTUFBdkI7QUFBQSxVQUFnQztBQUN6QlUsNkJBQXVCRCxlQUFlRSxNQUQ3Qzs7QUFHQSxVQUFJRCx1QkFBdUIs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akYsVUFBTVIsVUFBVSxFQUFoQjtBQUFBLFVBQ01ELFlBQVksRUFEbEI7O0FBR0E4QyxhQUFPL0IsT0FBUCxDQUFlLFVBQUNpQyxLQUFELEVBQVFsQyxLQUFSLEVBQWtCO0FBQy9CLFlBQU1yQixTQUFTLEVBQWY7QUFBQSxZQUNNd0QsU0FBU0YsV0FEZjtBQUFBLFlBQzRCO0FBQ3RCeEMsb0JBQVlSLFdBQVdlLEtBQVgsQ0FGbEI7O0FBSUFkLGtCQUFVTyxTQUFWLElBQXVCZCxNQUF2Qjs7QUFFQWdCLGVBQU95QyxhQUFQLENBQXFCRixLQUFyQixFQUE0QmxDLEtBQTVCLEVBQW1DbUMsTUFBbkM7QUFDRCxPQVJEOztBQVVBLFVBQU1FLHdCQUF3Qi9ELGdCQUFnQmdFLFdBQWhCLENBQTRCNUQscUJBQTVCLEVBQW1EaUIsTUFBbkQsRUFBMkRWLFVBQTNELEVBQXVFQyxTQUF2RSxFQUFrRkMsT0FBbEYsQ0FBOUI7O0FBRUEsYUFBT2tELHFCQUFQO0FBQ0Q7Ozs7RUE3R2lDL0QsZTs7QUFnSHBDaUUsT0FBT0MsT0FBUCxHQUFpQjlELHFCQUFqQiIsImZpbGUiOiJpbWFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuZmFjZXRzTWFwID0gZmFjZXRzTWFwO1xuXG5cdFx0dGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblx0fVxuXG5cdGFkZEZhY2V0cyhmYWNldHMpIHtcblx0ICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGZhY2V0cywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXRzTGVuZ3RoID0gdGV4dHVyZWRGYWNldHMubGVuZ3RoO1xuXG5cdCAgaWYgKHRleHR1cmVkRmFjZXRzTGVuZ3RoID4gMCkge1xuXHQgICAgY29uc3QgZmlyc3RUZXh0dXJlZEZhY2V0ID0gZmlyc3QodGV4dHVyZWRGYWNldHMpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IGZpcnN0VGV4dHVyZWRGYWNldCwgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuXHQgICAgYWRkKGZhY2V0cywgdGV4dHVyZWRGYWNldHMpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiJdfQ==