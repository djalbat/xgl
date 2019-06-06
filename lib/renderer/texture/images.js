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

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, textureOffsets) {
    _classCallCheck(this, ImagesTextureRenderer);

    var _this = _possibleConstructorReturn(this, (ImagesTextureRenderer.__proto__ || Object.getPrototypeOf(ImagesTextureRenderer)).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

    _this.imageNames = imageNames;

    _this.textureOffsets = textureOffsets;
    return _this;
  }

  _createClass(ImagesTextureRenderer, [{
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var _this2 = this;

      var facets = this.getFacets(),
          vertexIndexesMap = {},
          vertexNormalsMap = {},
          vertexPositionsMap = {},
          vertexTextureCoordinateTuplesMap = {};

      this.imageNames.forEach(function (imageName) {
        vertexIndexesMap[imageName] = [];
        vertexNormalsMap[imageName] = [];
        vertexPositionsMap[imageName] = [];
        vertexTextureCoordinateTuplesMap[imageName] = [];
      });

      facets.forEach(function (facet, index) {
        var texturedFacet = facet,
            ///
        facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            texturedFacetImageName = texturedFacet.getImageName(),
            texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(),
            texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples,
            ///
        imageName = texturedFacetImageName,
            ///
        vertexIndexes = vertexIndexesMap[imageName],
            vertexNormals = vertexNormalsMap[imageName],
            vertexPositions = vertexPositionsMap[imageName],
            vertexTextureCoordinateTuples = vertexTextureCoordinateTuplesMap[imageName];

        add(vertexIndexes, facetVertexIndexes);
        add(vertexNormals, facetVertexNormals);
        add(vertexPositions, facetVertexPositions);
        add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
      });

      var textureOffset = 0;

      var combinedVertexIndexes = [],
          combinedVertexNormals = [],
          combinedVertexPositions = [],
          combinedVertexTextureCoordinateTuples = [];

      this.imageNames.forEach(function (imageName) {
        var vertexIndexes = vertexIndexesMap[imageName],
            vertexNormals = vertexNormalsMap[imageName],
            vertexPositions = vertexPositionsMap[imageName],
            vertexTextureCoordinateTuples = vertexTextureCoordinateTuplesMap[imageName];

        add(combinedVertexIndexes, vertexIndexes);
        add(combinedVertexNormals, vertexNormals);
        add(combinedVertexPositions, vertexPositions);
        add(combinedVertexTextureCoordinateTuples, vertexTextureCoordinateTuples);

        var vertexIndexLength = vertexIndexes.length;

        textureOffset = vertexIndexLength; ///

        _this2.textureOffsets.push(textureOffset);
      });

      var rendererData = this.getRendererData(),
          vertexIndexes = combinedVertexIndexes,
          vertexNormals = combinedVertexNormals,
          vertexPositions = combinedVertexPositions,
          vertexTextureCoordinateTuples = combinedVertexTextureCoordinateTuples;

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

      this.textureOffsets.forEach(function (textureOffset, index) {
        start = finish; ///

        finish += textureOffset; ///

        _this3.useTexture(index, canvas);

        canvas.drawElements(start, finish);
      });
    }
  }], [{
    key: 'fromImagesAndImageNames',
    value: function fromImagesAndImageNames(images, imageNames, canvas) {
      images.map(function (image, index) {
        return canvas.createTexture(image, index);
      });

      var textureOffsets = [],
          imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, textureOffsets);

      return imagesTextureRenderer;
    }
  }]);

  return ImagesTextureRenderer;
}(TextureRenderer);

module.exports = ImagesTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJUZXh0dXJlUmVuZGVyZXIiLCJwdXNoIiwiYWRkIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwidGV4dHVyZU9mZnNldHMiLCJjYW52YXMiLCJnZXRGYWNldHMiLCJ2ZXJ0ZXhJbmRleGVzTWFwIiwidmVydGV4Tm9ybWFsc01hcCIsInZlcnRleFBvc2l0aW9uc01hcCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzTWFwIiwiZm9yRWFjaCIsImltYWdlTmFtZSIsImZhY2V0IiwiaW5kZXgiLCJ0ZXh0dXJlZEZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInRleHR1cmVkRmFjZXRJbWFnZU5hbWUiLCJnZXRJbWFnZU5hbWUiLCJ0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlT2Zmc2V0IiwiY29tYmluZWRWZXJ0ZXhJbmRleGVzIiwiY29tYmluZWRWZXJ0ZXhOb3JtYWxzIiwiY29tYmluZWRWZXJ0ZXhQb3NpdGlvbnMiLCJjb21iaW5lZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidmVydGV4SW5kZXhMZW5ndGgiLCJsZW5ndGgiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJzdGFydCIsImZpbmlzaCIsInVzZVRleHR1cmUiLCJkcmF3RWxlbWVudHMiLCJpbWFnZXMiLCJtYXAiLCJpbWFnZSIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsd0JBQVIsQ0FEeEI7O0lBR1FFLEksR0FBU0gsYyxDQUFURyxJOzs7QUFFUixJQUFNQyxNQUFNRCxJQUFaLEMsQ0FBa0I7O0lBRVpFLHFCOzs7QUFDTCxpQ0FBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkJDLFlBQTdCLEVBQTJDQyxlQUEzQyxFQUE0REMsZ0JBQTVELEVBQThFQyxrQkFBOUUsRUFBa0dDLFVBQWxHLEVBQThHQyxjQUE5RyxFQUE4SDtBQUFBOztBQUFBLDhJQUN2SFAsTUFEdUgsRUFDL0dDLE9BRCtHLEVBQ3RHQyxZQURzRyxFQUN4RkMsZUFEd0YsRUFDdkVDLGdCQUR1RSxFQUNyREMsa0JBRHFEOztBQUc3SCxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxVQUFLQyxjQUFMLEdBQXNCQSxjQUF0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Z0JBQWdCcUUsV0FBaEIsQ0FBNEJsRSxxQkFBNUIsRUFBbURTLE1BQW5ELEVBQTJERixVQUEzRCxFQUF1RUMsY0FBdkUsQ0FEOUI7O0FBR0EsYUFBT3lELHFCQUFQO0FBQ0Q7Ozs7RUFsSGlDcEUsZTs7QUFxSHBDc0UsT0FBT0MsT0FBUCxHQUFpQnBFLHFCQUFqQiIsImZpbGUiOiJpbWFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIHRleHR1cmVPZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLnRleHR1cmVPZmZzZXRzID0gdGV4dHVyZU9mZnNldHM7XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc01hcCA9IHt9LFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNNYXAgPSB7fSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNNYXAgPSB7fSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc01hcCA9IHt9O1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgdmVydGV4SW5kZXhlc01hcFtpbWFnZU5hbWVdID0gW107XG4gICAgICB2ZXJ0ZXhOb3JtYWxzTWFwW2ltYWdlTmFtZV0gPSBbXTtcbiAgICAgIHZlcnRleFBvc2l0aW9uc01hcFtpbWFnZU5hbWVdID0gW107XG4gICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc01hcFtpbWFnZU5hbWVdID0gW107XG4gICAgfSk7XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRJbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCAgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0SW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB2ZXJ0ZXhJbmRleGVzTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdmVydGV4Tm9ybWFsc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBsZXQgdGV4dHVyZU9mZnNldCA9IDA7XG5cbiAgICBjb25zdCBjb21iaW5lZFZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZFZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZFZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmVkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB2ZXJ0ZXhJbmRleGVzTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdmVydGV4Tm9ybWFsc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGFkZChjb21iaW5lZFZlcnRleEluZGV4ZXMsIHZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKGNvbWJpbmVkVmVydGV4Tm9ybWFscywgdmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQoY29tYmluZWRWZXJ0ZXhQb3NpdGlvbnMsIHZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQoY29tYmluZWRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleExlbmd0aCA9IHZlcnRleEluZGV4ZXMubGVuZ3RoO1xuXG4gICAgICB0ZXh0dXJlT2Zmc2V0ID0gdmVydGV4SW5kZXhMZW5ndGg7ICAvLy9cblxuICAgICAgdGhpcy50ZXh0dXJlT2Zmc2V0cy5wdXNoKHRleHR1cmVPZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gY29tYmluZWRWZXJ0ZXhJbmRleGVzLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBjb21iaW5lZFZlcnRleE5vcm1hbHMsXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gY29tYmluZWRWZXJ0ZXhQb3NpdGlvbnMsXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjb21iaW5lZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpXG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZU9mZnNldHMuZm9yRWFjaCgodGV4dHVyZU9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoICs9IHRleHR1cmVPZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNBbmRJbWFnZU5hbWVzKGltYWdlcywgaW1hZ2VOYW1lcywgY2FudmFzKSB7XG4gICAgaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgpKTtcblxuICAgIGNvbnN0IHRleHR1cmVPZmZzZXRzID0gW10sXG4gICAgICAgICAgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCB0ZXh0dXJlT2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuIl19