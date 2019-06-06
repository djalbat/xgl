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
            key: 'fromImagesImageNamesAndImageTiling',
            value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
                  var repeat = imageTiling; ///

                  images.map(function (image, index) {
                        return canvas.createTexture(image, index, repeat);
                  });

                  var textureOffsets = [],
                      imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, textureOffsets);

                  return imagesTextureRenderer;
            }
      }]);

      return ImagesTextureRenderer;
}(TextureRenderer);

module.exports = ImagesTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJUZXh0dXJlUmVuZGVyZXIiLCJwdXNoIiwiYWRkIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwidGV4dHVyZU9mZnNldHMiLCJjYW52YXMiLCJnZXRGYWNldHMiLCJ2ZXJ0ZXhJbmRleGVzTWFwIiwidmVydGV4Tm9ybWFsc01hcCIsInZlcnRleFBvc2l0aW9uc01hcCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzTWFwIiwiZm9yRWFjaCIsImltYWdlTmFtZSIsImZhY2V0IiwiaW5kZXgiLCJ0ZXh0dXJlZEZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInRleHR1cmVkRmFjZXRJbWFnZU5hbWUiLCJnZXRJbWFnZU5hbWUiLCJ0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlT2Zmc2V0IiwiY29tYmluZWRWZXJ0ZXhJbmRleGVzIiwiY29tYmluZWRWZXJ0ZXhOb3JtYWxzIiwiY29tYmluZWRWZXJ0ZXhQb3NpdGlvbnMiLCJjb21iaW5lZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidmVydGV4SW5kZXhMZW5ndGgiLCJsZW5ndGgiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJzdGFydCIsImZpbmlzaCIsInVzZVRleHR1cmUiLCJkcmF3RWxlbWVudHMiLCJpbWFnZXMiLCJpbWFnZVRpbGluZyIsInJlcGVhdCIsIm1hcCIsImltYWdlIiwiY3JlYXRlVGV4dHVyZSIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUR4Qjs7SUFHUUUsSSxHQUFTSCxjLENBQVRHLEk7OztBQUVSLElBQU1DLE1BQU1ELElBQVosQyxDQUFrQjs7SUFFWkUscUI7OztBQUNMLHFDQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsWUFBN0IsRUFBMkNDLGVBQTNDLEVBQTREQyxnQkFBNUQsRUFBOEVDLGtCQUE5RSxFQUFrR0MsVUFBbEcsRUFBOEdDLGNBQTlHLEVBQThIO0FBQUE7O0FBQUEsc0pBQ3ZIUCxNQUR1SCxFQUMvR0MsT0FEK0csRUFDdEdDLFlBRHNHLEVBQ3hGQyxlQUR3RixFQUN2RUMsZ0JBRHVFLEVBQ3JEQyxrQkFEcUQ7O0FBRzdILGtCQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjs7QUFF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LEtBQUQsRUFBUS9DLEtBQVI7QUFBQSwrQkFBa0JULE9BQU95RCxhQUFQLENBQXFCRCxLQUFyQixFQUE0Qi9DLEtBQTVCLEVBQW1DNkMsTUFBbkMsQ0FBbEI7QUFBQSxtQkFBWDs7QUFFQSxzQkFBTXZELGlCQUFpQixFQUF2QjtBQUFBLHNCQUNNMkQsd0JBQXdCdEUsZ0JBQWdCdUUsV0FBaEIsQ0FBNEJwRSxxQkFBNUIsRUFBbURTLE1BQW5ELEVBQTJERixVQUEzRCxFQUF1RUMsY0FBdkUsQ0FEOUI7O0FBR0EseUJBQU8yRCxxQkFBUDtBQUNEOzs7O0VBcEhpQ3RFLGU7O0FBdUhwQ3dFLE9BQU9DLE9BQVAsR0FBaUJ0RSxxQkFBakIiLCJmaWxlIjoiaW1hZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCB0ZXh0dXJlT2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy50ZXh0dXJlT2Zmc2V0cyA9IHRleHR1cmVPZmZzZXRzO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNNYXAgPSB7fSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzTWFwID0ge30sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zTWFwID0ge30sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNNYXAgPSB7fTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIHZlcnRleEluZGV4ZXNNYXBbaW1hZ2VOYW1lXSA9IFtdO1xuICAgICAgdmVydGV4Tm9ybWFsc01hcFtpbWFnZU5hbWVdID0gW107XG4gICAgICB2ZXJ0ZXhQb3NpdGlvbnNNYXBbaW1hZ2VOYW1lXSA9IFtdO1xuICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNNYXBbaW1hZ2VOYW1lXSA9IFtdO1xuICAgIH0pO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0SW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldEltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdmVydGV4SW5kZXhlc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHZlcnRleE5vcm1hbHNNYXBbaW1hZ2VOYW1lXSxcbiAgICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9uc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgbGV0IHRleHR1cmVPZmZzZXQgPSAwO1xuXG4gICAgY29uc3QgY29tYmluZWRWZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgY29tYmluZWRWZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgY29tYmluZWRWZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdmVydGV4SW5kZXhlc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHZlcnRleE5vcm1hbHNNYXBbaW1hZ2VOYW1lXSxcbiAgICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9uc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBhZGQoY29tYmluZWRWZXJ0ZXhJbmRleGVzLCB2ZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZChjb21iaW5lZFZlcnRleE5vcm1hbHMsIHZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKGNvbWJpbmVkVmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKGNvbWJpbmVkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgY29uc3QgdmVydGV4SW5kZXhMZW5ndGggPSB2ZXJ0ZXhJbmRleGVzLmxlbmd0aDtcblxuICAgICAgdGV4dHVyZU9mZnNldCA9IHZlcnRleEluZGV4TGVuZ3RoOyAgLy8vXG5cbiAgICAgIHRoaXMudGV4dHVyZU9mZnNldHMucHVzaCh0ZXh0dXJlT2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IGNvbWJpbmVkVmVydGV4SW5kZXhlcyxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gY29tYmluZWRWZXJ0ZXhOb3JtYWxzLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IGNvbWJpbmVkVmVydGV4UG9zaXRpb25zLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY29tYmluZWRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KVxuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVPZmZzZXRzLmZvckVhY2goKHRleHR1cmVPZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCArPSB0ZXh0dXJlT2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuXHQgIGNvbnN0IHJlcGVhdCA9IGltYWdlVGlsaW5nOyAvLy9cblxuICAgIGltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpKTtcblxuICAgIGNvbnN0IHRleHR1cmVPZmZzZXRzID0gW10sXG4gICAgICAgICAgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCB0ZXh0dXJlT2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuIl19