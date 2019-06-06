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

var ImageMapTextureRenderer = function (_TextureRenderer) {
      _inherits(ImageMapTextureRenderer, _TextureRenderer);

      function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
            _classCallCheck(this, ImageMapTextureRenderer);

            var _this = _possibleConstructorReturn(this, (ImageMapTextureRenderer.__proto__ || Object.getPrototypeOf(ImageMapTextureRenderer)).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

            _this.imageMapJSON = imageMapJSON;
            return _this;
      }

      _createClass(ImageMapTextureRenderer, [{
            key: 'createBuffers',
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
                            texturedFacetImageName = texturedFacet.getImageName(),
                            json = _this2.imageMapJSON[texturedFacetImageName],
                            extent = json,
                            ///
                        mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(extent),
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

                  _get(ImageMapTextureRenderer.prototype.__proto__ || Object.getPrototypeOf(ImageMapTextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
            }
      }, {
            key: 'bindBuffers',
            value: function bindBuffers(canvas) {
                  var rendererBuffers = this.getRendererBuffers(),
                      vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
                      vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
                      textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

                  rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
      }, {
            key: 'useTexture',
            value: function useTexture(index, canvas) {
                  var uniformLocations = this.getUniformLocations(),
                      samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
                      samplerUniformLocationIntegerValue = index; ///

                  canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
      }, {
            key: 'render',
            value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
                  var program = this.getProgram();

                  canvas.useProgram(program);

                  this.bindBuffers(canvas);

                  var renderer = this; ///

                  canvas.render(renderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

                  var rendererData = this.getRendererData(),
                      count = rendererData.getCount(),
                      index = 0,
                      start = 0,
                      finish = count; ///

                  this.useTexture(index, canvas);

                  canvas.drawElements(start, finish);
            }
      }], [{
            key: 'fromImageMapAndImageMapJSON',
            value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
                  var image = imageMap,
                      ///
                  index = 0;

                  canvas.createTexture(image, index);

                  var imageMapTextureRenderer = TextureRenderer.fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);

                  return imageMapTextureRenderer;
            }
      }]);

      return ImageMapTextureRenderer;
}(TextureRenderer);

module.exports = ImageMapTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIlRleHR1cmVSZW5kZXJlciIsInB1c2giLCJhZGQiLCJJbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsInByb2dyYW0iLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiaW1hZ2VNYXBKU09OIiwiY2FudmFzIiwiZ2V0RmFjZXRzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImZvckVhY2giLCJmYWNldCIsImluZGV4IiwidGV4dHVyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ0ZXh0dXJlZEZhY2V0SW1hZ2VOYW1lIiwiZ2V0SW1hZ2VOYW1lIiwianNvbiIsImV4dGVudCIsIm1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0UmVuZGVyZXJCdWZmZXJzIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVycyIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFByb2dyYW0iLCJ1c2VQcm9ncmFtIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJjb3VudCIsImdldENvdW50Iiwic3RhcnQiLCJmaW5pc2giLCJ1c2VUZXh0dXJlIiwiZHJhd0VsZW1lbnRzIiwiaW1hZ2VNYXAiLCJpbWFnZSIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUR4Qjs7SUFHUUUsSSxHQUFTSCxjLENBQVRHLEk7OztBQUVSLElBQU1DLE1BQU1ELElBQVosQyxDQUFrQjs7SUFFWkUsdUI7OztBQUNMLHVDQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsWUFBN0IsRUFBMkNDLGVBQTNDLEVBQTREQyxnQkFBNUQsRUFBOEVDLGtCQUE5RSxFQUFrR0MsWUFBbEcsRUFBZ0g7QUFBQTs7QUFBQSwwSkFDekdOLE1BRHlHLEVB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LGVBQWUsS0FBSzRCLGVBQUwsRUFBckI7QUFBQSxzQkFDTTJCLFFBQVF2RCxhQUFhd0QsUUFBYixFQURkO0FBQUEsc0JBRU0zQyxRQUFRLENBRmQ7QUFBQSxzQkFHTTRDLFFBQVEsQ0FIZDtBQUFBLHNCQUlNQyxTQUFTSCxLQUpmLENBWDJGLENBZXJFOztBQUV0Qix1QkFBS0ksVUFBTCxDQUFnQjlDLEtBQWhCLEVBQXVCUixNQUF2Qjs7QUFFQUEseUJBQU91RCxZQUFQLENBQW9CSCxLQUFwQixFQUEyQkMsTUFBM0I7QUFDRDs7O3dEQUVrQ0csUSxFQUFVekQsWSxFQUFjQyxNLEVBQVE7QUFDakUsc0JBQU15RCxRQUFRRCxRQUFkO0FBQUEsc0JBQXdCO0FBQ2xCaEQsMEJBQVEsQ0FEZDs7QUFHQVIseUJBQU8wRCxhQUFQLENBQXFCRCxLQUFyQixFQUE0QmpELEtBQTVCOztBQUVBLHNCQUFNbUQsMEJBQTBCdEUsZ0JBQWdCdUUsV0FBaEIsQ0FBNEJwRSx1QkFBNUIsRUFBcURRLE1BQXJELEVBQTZERCxZQUE3RCxDQUFoQzs7QUFFQSx5QkFBTzRELHVCQUFQO0FBQ0Q7Ozs7RUF6Rm1DdEUsZTs7QUE0RnRDd0UsT0FBT0MsT0FBUCxHQUFpQnRFLHVCQUFqQiIsImZpbGUiOiJpbWFnZU1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU1hcEpTT04pIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0SW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGpzb24gPSB0aGlzLmltYWdlTWFwSlNPTlt0ZXh0dXJlZEZhY2V0SW1hZ2VOYW1lXSxcbiAgICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhleHRlbnQpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7IC8vL1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIGNvdW50ID0gcmVuZGVyZXJEYXRhLmdldENvdW50KCksXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTihpbWFnZU1hcCwgaW1hZ2VNYXBKU09OLCBjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTWFwLCAvLy9cbiAgICAgICAgICBpbmRleCA9IDA7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuIl19