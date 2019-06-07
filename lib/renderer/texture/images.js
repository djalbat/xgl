'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    TextureRenderer = require('../../renderer/texture');

var push = arrayUtilities.push;


var add = push; ///

var ImagesTextureRenderer = function (_TextureRenderer) {
  _inherits(ImagesTextureRenderer, _TextureRenderer);

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, offsets) {
    _classCallCheck(this, ImagesTextureRenderer);

    var _this = _possibleConstructorReturn(this, (ImagesTextureRenderer.__proto__ || Object.getPrototypeOf(ImagesTextureRenderer)).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

    _this.imageNames = imageNames;

    _this.offsets = offsets;
    return _this;
  }

  _createClass(ImagesTextureRenderer, [{
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var _this2 = this;

      var facets = this.getFacets(),
          facetsMap = {};

      this.imageNames.forEach(function (imageName) {
        facetsMap[imageName] = [];
      });

      facets.forEach(function (facet) {
        var texturedFacet = facet,
            ///
        imageName = texturedFacet.getImageName(),
            facets = facetsMap[imageName];

        facets.push(facet);
      });

      var vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];

      var index = 0;

      this.imageNames.forEach(function (imageName) {
        var facets = facetsMap[imageName];

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
      var repeat = imageTiling; ///

      images.map(function (image, index) {
        return canvas.createTexture(image, index, repeat);
      });

      var offsets = [],
          imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, offsets);

      return imagesTextureRenderer;
    }
  }]);

  return ImagesTextureRenderer;
}(TextureRenderer);

module.exports = ImagesTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJUZXh0dXJlUmVuZGVyZXIiLCJwdXNoIiwiYWRkIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwib2Zmc2V0cyIsImNhbnZhcyIsImdldEZhY2V0cyIsImZhY2V0c01hcCIsImZvckVhY2giLCJpbWFnZU5hbWUiLCJmYWNldCIsInRleHR1cmVkRmFjZXQiLCJnZXRJbWFnZU5hbWUiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiaW5kZXgiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsImZhY2V0VmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJvZmZzZXQiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJzdGFydCIsImZpbmlzaCIsInVzZVRleHR1cmUiLCJkcmF3RWxlbWVudHMiLCJpbWFnZXMiLCJpbWFnZVRpbGluZyIsInJlcGVhdCIsIm1hcCIsImltYWdlIiwiY3JlYXRlVGV4dHVyZSIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUR4Qjs7SUFHUUUsSSxHQUFTSCxjLENBQVRHLEk7OztBQUVSLElBQU1DLE1BQU1ELElBQVosQyxDQUFrQjs7SUFFWkUscUI7OztBQUNMLGlDQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsWUFBN0IsRUFBMkNDLGVBQTNDLEVBQTREQyxnQkFBNUQsRUFBOEVDLGtCQUE5RSxFQUFrR0MsVUFBbEcsRUFBOEdDLE9BQTlHLEVBQXVIO0FBQUE7O0FBQUEsOElBQ2hIUCxNQURnSCxFQUN4R0MsT0FEd0csRUFDL0ZDLFlBRCtGLEVBQ2pGQyxlQURpRixFQUNoRUMsZ0JBRGdFLEVBQzlDQyxrQkFEOEM7O0FBR3RILFVBQUtDLFVBQUwsR0FBa0JBLFVBQWxCOztBQUVBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUxzSDtBQU10SDs7OztrQ0FFY0MsTSxFQUFRO0FBQUE7O0FBQ3BCLFVBQU1SLFNBQVMsS0FBS1MsU0FBTCxFQUFmO0FBQUEsVUFDTUMsWUFBWSxFQURsQjs7QUFHQSxXQUFLSixVQUFMLENBQWdCSyxPQUFoQixDQUF3QixVQUFDQyxTQUFELEVBQWU7QUFDckNGLGtCQUFVRSxTQUFWLElBQXVCLEVBQXZCO0FBQ0QsT0FGRDs7QUFJQVosYUFBT1csT0FBUCxDQUFlLFVBQUNFLEtBQUQsRUFBVztBQUN4QixZQUFNQyxnQkFBZ0JE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QixFQUE0QmxDLEtBQTVCLEVBQW1DZ0MsTUFBbkMsQ0FBbEI7QUFBQSxPQUFYOztBQUVBLFVBQU03QyxVQUFVLEVBQWhCO0FBQUEsVUFDTWlELHdCQUF3QjVELGdCQUFnQjZELFdBQWhCLENBQTRCMUQscUJBQTVCLEVBQW1EUyxNQUFuRCxFQUEyREYsVUFBM0QsRUFBdUVDLE9BQXZFLENBRDlCOztBQUdBLGFBQU9pRCxxQkFBUDtBQUNEOzs7O0VBcEdpQzVELGU7O0FBdUdwQzhELE9BQU9DLE9BQVAsR0FBaUI1RCxxQkFBakIiLCJmaWxlIjoiaW1hZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBbXTtcbiAgICB9KTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5wdXNoKGZhY2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBmYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcblx0ICBjb25zdCByZXBlYXQgPSBpbWFnZVRpbGluZzsgLy8vXG5cbiAgICBpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KSk7XG5cbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4iXX0=