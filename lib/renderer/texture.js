'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    arrayUtilities = require('../utilities/array'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    TextureRendererData = require('../renderer/data/texture'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureRendererBuffers = require('../renderer/buffers/texture'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var push = arrayUtilities.push,
    createProgram = Renderer.createProgram;


var add = push; ///

var TextureRenderer = function (_Renderer) {
      _inherits(TextureRenderer, _Renderer);

      function TextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, imageMapJSON, textureOffsets) {
            _classCallCheck(this, TextureRenderer);

            var _this = _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

            _this.imageNames = imageNames;

            _this.imageMapJSON = imageMapJSON;

            _this.textureOffsets = textureOffsets;
            return _this;
      }

      _createClass(TextureRenderer, [{
            key: 'getImageNames',
            value: function getImageNames() {
                  return this.imageNames;
            }
      }, {
            key: 'getImageMapJSON',
            value: function getImageMapJSON() {
                  return this.imageMapJSON;
            }
      }, {
            key: 'getTextureOffsets',
            value: function getTextureOffsets() {
                  return this.textureOffsets;
            }
      }, {
            key: 'getTextureCoordinateAttributeLocation',
            value: function getTextureCoordinateAttributeLocation() {
                  var attributeLocations = this.getAttributeLocations(),
                      textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

                  return textureCoordinateAttributeLocation;
            }
      }, {
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
                            texturedFacetVertexTextureCoordinateTuples = texturedFacet.getVertexTextureCoordinateTuples(_this2.imageMapJSON),
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

                  var combinedVertexIndexes = [],
                      combinedVertexNormals = [],
                      combinedVertexPositions = [],
                      combinedVertexTextureCoordinateTuples = [];

                  var textureOffset = 0;

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

                  var rendererBuffers = this.getRendererBuffers(),
                      vertexPositionsData = rendererData.getVertexPositionsData(),
                      vertexNormalsData = rendererData.getVertexNormalsData(),
                      vertexIndexesData = rendererData.getVertexIndexesData(),
                      vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();

                  rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
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
      }], [{
            key: 'fromImageNamesImageMapJSONAndTextureOffsets',
            value: function fromImageNamesImageMapJSONAndTextureOffsets(imageNames, imageMapJSON, textureOffsets, canvas) {
                  var facets = [],
                      program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
                      textureRendererData = TextureRendererData.fromNothing(),
                      textureRendererBuffers = TextureRendererBuffers.fromNothing(),
                      textureUniformLocations = TextureUniformLocations.fromProgram(program, canvas),
                      textureAttributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
                      rendererData = textureRendererData,
                      ///
                  rendererBuffers = textureRendererBuffers,
                      ///
                  uniformLocations = textureUniformLocations,
                      ///
                  attributeLocations = textureAttributeLocations,
                      ///
                  textureRenderer = new TextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, imageMapJSON, textureOffsets);

                  canvas.enableAnisotropicFiltering(); ///

                  return textureRenderer;
            }
      }, {
            key: 'fromImagesAndImageNames',
            value: function fromImagesAndImageNames(images, imageNames, canvas) {
                  images.map(function (image, index) {
                        return canvas.createTexture(image, index);
                  });

                  var imageMapJSON = null,
                      textureOffsets = [],
                      textureRenderer = TextureRenderer.fromImageNamesImageMapJSONAndTextureOffsets(imageNames, imageMapJSON, textureOffsets, canvas);

                  return textureRenderer;
            }
      }, {
            key: 'fromImageMapAndImageMapJSON',
            value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
                  var image = imageMap; ///

                  canvas.createTexture(image);

                  var imageNames = null,
                      textureOffsets = null,
                      textureRenderer = TextureRenderer.fromImageNamesImageMapJSONAndTextureOffsets(imageNames, imageMapJSON, textureOffsets, canvas);

                  return textureRenderer;
            }
      }]);

      return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVydGV4U2hhZGVyU291cmNlIiwiVGV4dHVyZVJlbmRlcmVyRGF0YSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiVGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsIlRleHR1cmVVbmlmb3JtTG9jYXRpb25zIiwiVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyIsInB1c2giLCJjcmVhdGVQcm9ncmFtIiwiYWRkIiwiVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwiaW1hZ2VNYXBKU09OIiwidGV4dHVyZU9mZnNldHMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImNhbnZhcyIsImdldEZhY2V0cyIsInZlcnRleEluZGV4ZXNNYXAiLCJ2ZXJ0ZXhOb3JtYWxzTWFwIiwidmVydGV4UG9zaXRpb25zTWFwIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNNYXAiLCJmb3JFYWNoIiwiaW1hZ2VOYW1lIiwiZmFjZXQiLCJpbmRleCIsInRleHR1cmVkRmFjZXQiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsImZhY2V0VmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidGV4dHVyZWRGYWNldEltYWdlTmFtZSIsImdldEltYWdlTmFtZSIsInRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNvbWJpbmVkVmVydGV4SW5kZXhlcyIsImNvbWJpbmVkVmVydGV4Tm9ybWFscyIsImNvbWJpbmVkVmVydGV4UG9zaXRpb25zIiwiY29tYmluZWRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVPZmZzZXQiLCJ2ZXJ0ZXhJbmRleExlbmd0aCIsImxlbmd0aCIsImdldFJlbmRlcmVyRGF0YSIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiZ2V0VmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwiZ2V0VmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJjcmVhdGVCdWZmZXJzIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlcnMiLCJnZXRVbmlmb3JtTG9jYXRpb25zIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsImdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwidGV4dHVyZVJlbmRlcmVyRGF0YSIsImZyb21Ob3RoaW5nIiwidGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsInRleHR1cmVVbmlmb3JtTG9jYXRpb25zIiwiZnJvbVByb2dyYW0iLCJ0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIiwidGV4dHVyZVJlbmRlcmVyIiwiZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmciLCJpbWFnZXMiLCJtYXAiLCJpbWFnZSIsImNyZWF0ZVRleHR1cmUiLCJmcm9tSW1hZ2VOYW1lc0ltYWdlTWFwSlNPTkFuZFRleHR1cmVPZmZzZXRzIiwiaW1hZ2VNYXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSwrQkFBUixDQUYzQjtBQUFBLElBR01HLHNCQUFzQkgsUUFBUSwwQkFBUixDQUg1QjtBQUFBLElBSU1JLHVCQUF1QkosUUFBUSxpQ0FBUixDQUo3QjtBQUFBLElBS01LLHlCQUF5QkwsUUFBUSw2QkFBUixDQUwvQjtBQUFBLElBTU1NLDBCQUEwQk4sUUFBUSw2QkFBUixDQU5oQztBQUFBLElBT01PLDRCQUE0QlAsUUFBUSwrQkFBUixDQVBsQzs7QUFTTSxJQUFFUSxJQUFGLEdBQVdQLGNBQVgsQ0FBRU8sSUFBRjtBQUFBLElBQ0VDLGFBREYsR0FDb0JWLFFBRHBCLENBQ0VVLGFBREY7OztBQUdOLElBQU1DLE1BQU1GLElBQVosQyxDQUFrQjs7SUFFWkcsZTs7O0FBQ0wsK0JBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCQyxZQUE3QixFQUEyQ0MsZUFBM0MsRUFBNERDLGdCQUE1RCxFQUE4RUMsa0JBQTlFLEVBQWtHQyxVQUFsRyxFQUE4R0MsWUFBOUcsRUFBNEhDLGNBQTVILEVBQTRJO0FBQUE7O0FBQUEsMElBQ3JJUixNQURxSSxFQUM3SEMsT0FENkgsRUFDcEhDLFlBRG9ILEVBQ3RHQyxlQURzRyxFQUNyRkMsZ0JBRHFGLEVBQ25FQyxrQkFEbUU7O0FBRzNJLGtCQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxrQkFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsa0JBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBUDJJO0FBUTNJOzs7OzRDQUVlO0FBQ2QseUJBQU8sS0FBS0YsVUFBWjtBQUNBOzs7OENBRWdCO0FBQ2pCLHlCQUFPLEtBQUtDLFlBQVo7QUFDQTs7O2dEQUVtQjtBQUNsQix5QkFBTyxLQUFLQyxjQUFaO0FBQ0E7OztvRUFFdUM7QUFDdEMsc0JBQU1ILHFCQUFxQixLQUFLSSxxQkFBTCxFQUEzQjtBQUFBLHNCQUNNQyxxQ0FBcUNMLG1CQUFtQk0scUNBQW5CLEVBRDNDOztBQUdBLHlCQUFPRCxrQ0FBUDtBQUNEOzs7MENBRWFFLE0sRUFBUTtBQUFBOztBQUNwQixzQkFBTVosU0FBUyxLQUFLYSxTQUFMLEVBQWY7QUFBQSxzQkFDTUMsbUJBQW1CLEVBRHpCO0FBQUEsc0JBRU1DLG1CQUFtQixFQUZ6QjtBQUFBLHNCQUdNQyxxQkFBcUIsRUFIM0I7QUFBQSxzQkFJTUMsbUNBQW1DLEVBSnpDOztBQU1BLHVCQUFLWCxVQUFMLENBQWdCWSxPQUFoQixDQUF3QixVQUFDQyxTQUFELEVBQWU7QUFDckNMLHlDQUFpQkssU0FBakIsSUFBOEIsRUFBOUI7QUFDQUoseUNBQWlCSSxTQUFqQixJQUE4QixFQUE5QjtBQUNBSCwyQ0FBbUJHLFNBQW5CLElBQWdDLEVBQWhDO0FBQ0FGLHlEQUFpQ0UsU0FBakMsSUFBOEMsRUFBOUM7QUFDRCxtQkFMRDs7QUFPQW5CLHlCQUFPa0IsT0FBUCxDQUFlLFVBQUNFLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMvQiw0QkFBTUMsZ0JBQWdCRixLQUF0QjtBQUFBLDRCQUE4QjtBQUN4QkcsNkNBQXFCSCxNQUFNSSxnQkFBTixDQUF1QkgsS0FBdkIsQ0FEM0I7QUFBQSw0QkFFTUkscUJBQXFCTCxNQUFNTSxnQkFBTixFQUYzQjtBQUFBLDRCQUdNQyx1QkFBdUJQLE1BQU1RLGtCQUFOLEVBSDdCO0FBQUEsNEJBSU1DLHlCQUF5QlAsY0FBY1EsWUFBZCxFQUovQjtBQUFBLDRCQUtNQyw2Q0FBNkNULGNBQWNVLGdDQUFkLENBQStDLE9BQUt6QixZQUFwRCxDQUxuRDtBQUFBLDRCQU1NWSxZQUFZVSxzQkFObEI7QUFBQSw0QkFNMEM7QUFDcENJLHdDQUFnQm5CLGlCQUFpQkssU0FBakIsQ0FQdEI7QUFBQSw0QkFRTWUsZ0JBQWdCbkIsaUJBQWlCSSxTQUFqQixDQVJ0QjtBQUFBLDRCQVNNZ0Isa0JBQWtCbkIsbUJBQW1CRyxTQUFuQixDQVR4QjtBQUFBLDRCQVVNaUIsZ0NBQWdDbkIsaUNBQWlDRSxTQUFqQyxDQVZ0Qzs7QUFZQXJCLDRCQUFJbUMsYUFBSixFQUFtQlYsa0JBQW5CO0FBQ0F6Qiw0QkFBSW9DLGFBQUosRUFBbUJULGtCQUFuQjtBQUNBM0IsNEJBQUlxQyxlQUFKLEVBQXFCUixvQkFBckI7QUFDQTdCLDRCQUFJc0MsNkJBQUosRUFBbUNMLDBDQUFuQztBQUNELG1CQWpCRDs7QUFtQkEsc0JBQU1NLHdCQUF3QixFQUE5QjtBQUFBLHNCQUNNQyx3QkFBd0IsRUFEOUI7QUFBQSxzQkFFTUMsMEJBQTBCLEVBRmhDO0FBQUEsc0JBR01DLHdDQUF3QyxFQUg5Qzs7QUFLQSxzQkFBSUMsZ0JBQWdCLENBQXBCOztBQUVBLHVCQUFLbkMsVUFBTCxDQUFnQlksT0FBaEIsQ0FBd0IsVUFBQ0MsU0FBRCxFQUFlO0FBQ3JDLDRCQUFNYyxnQkFBZ0JuQixpQkFBaUJLLFNBQWpCLENBQXRCO0FBQUEsNEJBQ01lLGdCQUFnQm5CLGlCQUFpQkksU0FBakIsQ0FEdEI7QUFBQSw0QkFFTWdCLGtCQUFrQm5CLG1CQUFtQkcsU0FBbkIsQ0FGeEI7QUFBQSw0QkFHTWlCLGdDQUFnQ25CLGlDQUFpQ0UsU0FBakMsQ0FIdEM7O0FBS0FyQiw0QkFBSXVDLHFCQUFKLEVBQTJCSixhQUEzQjtBQUNBbkMsNEJBQUl3QyxxQkFBSixFQUEyQkosYUFBM0I7QUFDQXBDLDRCQUFJeUMsdUJBQUosRUFBNkJKLGVBQTdCO0FBQ0FyQyw0QkFBSTBDLHFDQUFKLEVBQTJDSiw2QkFBM0M7O0FBRUEsNEJBQU1NLG9CQUFvQlQsY0FBY1UsTUFBeEM7O0FBRUFGLHdDQUFnQkMsaUJBQWhCLENBYnFDLENBYUQ7O0FBRXBDLCtCQUFLbEMsY0FBTCxDQUFvQlosSUFBcEIsQ0FBeUI2QyxhQUF6QjtBQUNELG1CQWhCRDs7QUFrQkEsc0JBQU12QyxlQUFlLEtBQUswQyxlQUFMLEVBQXJCO0FBQUEsc0JBQ01YLGdCQUFnQkkscUJBRHRCO0FBQUEsc0JBRU1ILGdCQUFnQkkscUJBRnRCO0FBQUEsc0JBR01ILGtCQUFrQkksdUJBSHhCO0FBQUEsc0JBSU1ILGdDQUFnQ0kscUNBSnRDOztBQU1BdEMsK0JBQWEyQyxnQkFBYixDQUE4QlosYUFBOUI7QUFDQS9CLCtCQUFhNEMsZ0JBQWIsQ0FBOEJaLGFBQTlCO0FBQ0FoQywrQkFBYTZDLGtCQUFiLENBQWdDWixlQUFoQztBQUNBakMsK0JBQWE4QyxnQ0FBYixDQUE4Q1osNkJBQTlDOztBQUVBLHNCQUFNakMsa0JBQWtCLEtBQUs4QyxrQkFBTCxFQUF4QjtBQUFBLHNCQUNNQyxzQkFBc0JoRCxhQUFhaUQsc0JBQWIsRUFENUI7QUFBQSxzQkFFTUMsb0JBQW9CbEQsYUFBYW1ELG9CQUFiLEVBRjFCO0FBQUEsc0JBR01DLG9CQUFvQnBELGFBQWFxRCxvQkFBYixFQUgxQjtBQUFBLHNCQUlNQywrQkFBK0J0RCxhQUFhdUQsK0JBQWIsRUFKckM7O0FBTUF0RCxrQ0FBZ0J1RCxhQUFoQixDQUE4QlIsbUJBQTlCLEVBQW1ERSxpQkFBbkQsRUFBc0VFLGlCQUF0RSxFQUF5RkUsNEJBQXpGLEVBQXVINUMsTUFBdkg7QUFDRDs7O3dDQUVXQSxNLEVBQVE7QUFDbEIsc0JBQU1ULGtCQUFrQixLQUFLOEMsa0JBQUwsRUFBeEI7QUFBQSxzQkFDTVUsZ0NBQWdDLEtBQUtDLGdDQUFMLEVBRHRDO0FBQUEsc0JBRU1DLGtDQUFrQyxLQUFLQyxrQ0FBTCxFQUZ4QztBQUFBLHNCQUdNcEQscUNBQXFDLEtBQUtDLHFDQUFMLEVBSDNDOztBQUtBUixrQ0FBZ0I0RCxXQUFoQixDQUE0QkosNkJBQTVCLEVBQTJERSwrQkFBM0QsRUFBNEZuRCxrQ0FBNUYsRUFBZ0lFLE1BQWhJO0FBQ0Q7Ozt1Q0FFVVMsSyxFQUFPVCxNLEVBQVE7QUFDeEIsc0JBQU1SLG1CQUFtQixLQUFLNEQsbUJBQUwsRUFBekI7QUFBQSxzQkFDTUMseUJBQXlCN0QsaUJBQWlCOEQseUJBQWpCLEVBRC9CO0FBQUEsc0JBRU1DLHFDQUFxQzlDLEtBRjNDLENBRHdCLENBRzBCOztBQUVsRFQseUJBQU93RCw4QkFBUCxDQUFzQ0gsc0JBQXRDLEVBQThERSxrQ0FBOUQ7QUFDRDs7O3dFQUVrRDdELFUsRUFBWUMsWSxFQUFjQyxjLEVBQWdCSSxNLEVBQVE7QUFDbkcsc0JBQU1aLFNBQVMsRUFBZjtBQUFBLHNCQUNNQyxVQUFVSixjQUFjUCxrQkFBZCxFQUFrQ0Usb0JBQWxDLEVBQXdEb0IsTUFBeEQsQ0FEaEI7QUFBQSxzQkFFTXlELHNCQUFzQjlFLG9CQUFvQitFLFdBQXBCLEVBRjVCO0FBQUEsc0JBR01DLHlCQUF5QjlFLHVCQUF1QjZFLFdBQXZCLEVBSC9CO0FBQUEsc0JBSU1FLDBCQUEwQjlFLHdCQUF3QitFLFdBQXhCLENBQW9DeEUsT0FBcEMsRUFBNkNXLE1BQTdDLENBSmhDO0FBQUEsc0JBS004RCw0QkFBNEIvRSwwQkFBMEI4RSxXQUExQixDQUFzQ3hFLE9BQXRDLEVBQStDVyxNQUEvQyxDQUxsQztBQUFBLHNCQU1NVixlQUFlbUUsbUJBTnJCO0FBQUEsc0JBTTJDO0FBQ3JDbEUsb0NBQWtCb0Usc0JBUHhCO0FBQUEsc0JBT2dEO0FBQzFDbkUscUNBQW1Cb0UsdUJBUnpCO0FBQUEsc0JBUWtEO0FBQzVDbkUsdUNBQXFCcUUseUJBVDNCO0FBQUEsc0JBU3NEO0FBQ2hEQyxvQ0FBa0IsSUFBSTVFLGVBQUosQ0FBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQ0MsWUFBckMsRUFBbURDLGVBQW5ELEVBQW9FQyxnQkFBcEUsRUFBc0ZDLGtCQUF0RixFQUEwR0MsVUFBMUcsRUFBc0hDLFlBQXRILEVBQW9JQyxjQUFwSSxDQVZ4Qjs7QUFZQUkseUJBQU9nRSwwQkFBUCxHQWJtRyxDQWE3RDs7QUFFdEMseUJBQU9ELGVBQVA7QUFDRDs7O29EQUU4QkUsTSxFQUFRdkUsVSxFQUFZTSxNLEVBQVE7QUFDekRpRSx5QkFBT0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUTFELEtBQVI7QUFBQSwrQkFBa0JULE9BQU9vRSxhQUFQLENBQXFCRCxLQUFyQixFQUE0QjFELEtBQTVCLENBQWxCO0FBQUEsbUJBQVg7O0FBRUEsc0JBQU1kLGVBQWUsSUFBckI7QUFBQSxzQkFDTUMsaUJBQWlCLEVBRHZCO0FBQUEsc0JBRU1tRSxrQkFBa0I1RSxnQkFBZ0JrRiwyQ0FBaEIsQ0FBNEQzRSxVQUE1RCxFQUF3RUMsWUFBeEUsRUFBc0ZDLGNBQXRGLEVBQXNHSSxNQUF0RyxDQUZ4Qjs7QUFJQSx5QkFBTytELGVBQVA7QUFDRDs7O3dEQUVrQ08sUSxFQUFVM0UsWSxFQUFjSyxNLEVBQVE7QUFDakUsc0JBQU1tRSxRQUFRRyxRQUFkLENBRGlFLENBQ3pDOztBQUV4QnRFLHlCQUFPb0UsYUFBUCxDQUFxQkQsS0FBckI7O0FBRUEsc0JBQU16RSxhQUFhLElBQW5CO0FBQUEsc0JBQ01FLGlCQUFpQixJQUR2QjtBQUFBLHNCQUVNbUUsa0JBQWtCNUUsZ0JBQWdCa0YsMkNBQWhCLENBQTREM0UsVUFBNUQsRUFBd0VDLFlBQXhFLEVBQXNGQyxjQUF0RixFQUFzR0ksTUFBdEcsQ0FGeEI7O0FBSUEseUJBQU8rRCxlQUFQO0FBQ0Q7Ozs7RUFuSzJCeEYsUTs7QUFzSzlCZ0csT0FBT0MsT0FBUCxHQUFpQnJGLGVBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZScpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlJyksXG4gICAgICBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybScpLFxuICAgICAgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGltYWdlTWFwSlNPTiwgdGV4dHVyZU9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXG5cdFx0dGhpcy50ZXh0dXJlT2Zmc2V0cyA9IHRleHR1cmVPZmZzZXRzO1xuXHR9XG5cblx0Z2V0SW1hZ2VOYW1lcygpIHtcblx0ICByZXR1cm4gdGhpcy5pbWFnZU5hbWVzO1xuICB9XG5cblx0Z2V0SW1hZ2VNYXBKU09OKCkge1xuXHRcdHJldHVybiB0aGlzLmltYWdlTWFwSlNPTjtcblx0fVxuXG5cdGdldFRleHR1cmVPZmZzZXRzKCkge1xuXHQgIHJldHVybiB0aGlzLnRleHR1cmVPZmZzZXRzO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc01hcCA9IHt9LFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNNYXAgPSB7fSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNNYXAgPSB7fSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc01hcCA9IHt9O1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgdmVydGV4SW5kZXhlc01hcFtpbWFnZU5hbWVdID0gW107XG4gICAgICB2ZXJ0ZXhOb3JtYWxzTWFwW2ltYWdlTmFtZV0gPSBbXTtcbiAgICAgIHZlcnRleFBvc2l0aW9uc01hcFtpbWFnZU5hbWVdID0gW107XG4gICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc01hcFtpbWFnZU5hbWVdID0gW107XG4gICAgfSk7XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRJbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0SW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB2ZXJ0ZXhJbmRleGVzTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdmVydGV4Tm9ybWFsc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21iaW5lZFZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZFZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICBjb21iaW5lZFZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmVkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCB0ZXh0dXJlT2Zmc2V0ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB2ZXJ0ZXhJbmRleGVzTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdmVydGV4Tm9ybWFsc01hcFtpbWFnZU5hbWVdLFxuICAgICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zTWFwW2ltYWdlTmFtZV0sXG4gICAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGFkZChjb21iaW5lZFZlcnRleEluZGV4ZXMsIHZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKGNvbWJpbmVkVmVydGV4Tm9ybWFscywgdmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQoY29tYmluZWRWZXJ0ZXhQb3NpdGlvbnMsIHZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQoY29tYmluZWRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICBjb25zdCB2ZXJ0ZXhJbmRleExlbmd0aCA9IHZlcnRleEluZGV4ZXMubGVuZ3RoO1xuXG4gICAgICB0ZXh0dXJlT2Zmc2V0ID0gdmVydGV4SW5kZXhMZW5ndGg7ICAvLy9cblxuICAgICAgdGhpcy50ZXh0dXJlT2Zmc2V0cy5wdXNoKHRleHR1cmVPZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gY29tYmluZWRWZXJ0ZXhJbmRleGVzLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBjb21iaW5lZFZlcnRleE5vcm1hbHMsXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gY29tYmluZWRWZXJ0ZXhQb3NpdGlvbnMsXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjb21iaW5lZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTmFtZXNJbWFnZU1hcEpTT05BbmRUZXh0dXJlT2Zmc2V0cyhpbWFnZU5hbWVzLCBpbWFnZU1hcEpTT04sIHRleHR1cmVPZmZzZXRzLCBjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgVGV4dHVyZVJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgaW1hZ2VNYXBKU09OLCB0ZXh0dXJlT2Zmc2V0cyk7XG5cbiAgICBjYW52YXMuZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzQW5kSW1hZ2VOYW1lcyhpbWFnZXMsIGltYWdlTmFtZXMsIGNhbnZhcykge1xuICAgIGltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4KSk7XG5cbiAgICBjb25zdCBpbWFnZU1hcEpTT04gPSBudWxsLFxuICAgICAgICAgIHRleHR1cmVPZmZzZXRzID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU5hbWVzSW1hZ2VNYXBKU09OQW5kVGV4dHVyZU9mZnNldHMoaW1hZ2VOYW1lcywgaW1hZ2VNYXBKU09OLCB0ZXh0dXJlT2Zmc2V0cywgY2FudmFzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXA7IC8vL1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lcyA9IG51bGwsXG4gICAgICAgICAgdGV4dHVyZU9mZnNldHMgPSBudWxsLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VOYW1lc0ltYWdlTWFwSlNPTkFuZFRleHR1cmVPZmZzZXRzKGltYWdlTmFtZXMsIGltYWdlTWFwSlNPTiwgdGV4dHVyZU9mZnNldHMsIGNhbnZhcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIl19