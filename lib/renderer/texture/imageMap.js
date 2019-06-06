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
                  index = 0,
                      repeat = false;

                  canvas.createTexture(image, index, repeat);

                  var imageMapTextureRenderer = TextureRenderer.fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);

                  return imageMapTextureRenderer;
            }
      }]);

      return ImageMapTextureRenderer;
}(TextureRenderer);

module.exports = ImageMapTextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIlRleHR1cmVSZW5kZXJlciIsInB1c2giLCJhZGQiLCJJbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsInByb2dyYW0iLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiaW1hZ2VNYXBKU09OIiwiY2FudmFzIiwiZ2V0RmFjZXRzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImZvckVhY2giLCJmYWNldCIsImluZGV4IiwidGV4dHVyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ0ZXh0dXJlZEZhY2V0SW1hZ2VOYW1lIiwiZ2V0SW1hZ2VOYW1lIiwianNvbiIsImV4dGVudCIsIm1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0UmVuZGVyZXJCdWZmZXJzIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVycyIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsImdldFByb2dyYW0iLCJ1c2VQcm9ncmFtIiwicmVuZGVyZXIiLCJyZW5kZXIiLCJjb3VudCIsImdldENvdW50Iiwic3RhcnQiLCJmaW5pc2giLCJ1c2VUZXh0dXJlIiwiZHJhd0VsZW1lbnRzIiwiaW1hZ2VNYXAiLCJpbWFnZSIsInJlcGVhdCIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSx3QkFBUixDQUR4Qjs7SUFHUUUsSSxHQUFTSCxjLENBQVRHLEk7OztBQUVSLElBQU1DLE1BQU1ELElBQVosQyxDQUFrQjs7SUFFWkUsdUI7OztBQUNMLHVDQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsWUFBN0IsRUFBMkNDLGVBQTNDLEVBQTREQyxnQkFBNUQsRUFBOEVDLGtCQUE5RSxFQUFrR0MsWUFBbEcsRUFBZ0g7QUFBQTs7QUFBQSwwSkFDekdO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QSxzQkFBTWxELGVBQWUsS0FBSzRCLGVBQUwsRUFBckI7QUFBQSxzQkFDTTJCLFFBQVF2RCxhQUFhd0QsUUFBYixFQURkO0FBQUEsc0JBRU0zQyxRQUFRLENBRmQ7QUFBQSxzQkFHTTRDLFFBQVEsQ0FIZDtBQUFBLHNCQUlNQyxTQUFTSCxLQUpmLENBWDJGLENBZXJFOztBQUV0Qix1QkFBS0ksVUFBTCxDQUFnQjlDLEtBQWhCLEVBQXVCUixNQUF2Qjs7QUFFQUEseUJBQU91RCxZQUFQLENBQW9CSCxLQUFwQixFQUEyQkMsTUFBM0I7QUFDRDs7O3dEQUVrQ0csUSxFQUFVekQsWSxFQUFjQyxNLEVBQVE7QUFDakUsc0JBQU15RCxRQUFRRCxRQUFkO0FBQUEsc0JBQXdCO0FBQ2xCaEQsMEJBQVEsQ0FEZDtBQUFBLHNCQUVNa0QsU0FBUyxLQUZmOztBQUlBMUQseUJBQU8yRCxhQUFQLENBQXFCRixLQUFyQixFQUE0QmpELEtBQTVCLEVBQW1Da0QsTUFBbkM7O0FBRUEsc0JBQU1FLDBCQUEwQnZFLGdCQUFnQndFLFdBQWhCLENBQTRCckUsdUJBQTVCLEVBQXFEUSxNQUFyRCxFQUE2REQsWUFBN0QsQ0FBaEM7O0FBRUEseUJBQU82RCx1QkFBUDtBQUNEOzs7O0VBMUZtQ3ZFLGU7O0FBNkZ0Q3lFLE9BQU9DLE9BQVAsR0FBaUJ2RSx1QkFBakIiLCJmaWxlIjoiaW1hZ2VNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldEltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBqc29uID0gdGhpcy5pbWFnZU1hcEpTT05bdGV4dHVyZWRGYWNldEltYWdlTmFtZV0sXG4gICAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoZXh0ZW50KSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuIl19