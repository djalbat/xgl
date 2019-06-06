'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    arrayUtilities = require('../utilities/array'),
    ColourRendererData = require('../renderer/data/colour'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourRendererBuffers = require('../renderer/buffers/colour'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var push = arrayUtilities.push,
    createProgram = Renderer.createProgram;


var add = push; ///

var ColourRenderer = function (_Renderer) {
      _inherits(ColourRenderer, _Renderer);

      function ColourRenderer() {
            _classCallCheck(this, ColourRenderer);

            return _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).apply(this, arguments));
      }

      _createClass(ColourRenderer, [{
            key: 'getVertexColourAttributeLocation',
            value: function getVertexColourAttributeLocation() {
                  var attributeLocations = this.getAttributeLocations(),
                      vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

                  return vertexColourAttributeLocation;
            }
      }, {
            key: 'createBuffers',
            value: function createBuffers(canvas) {
                  var facets = this.getFacets(),
                      vertexIndexes = [],
                      vertexNormals = [],
                      vertexPositions = [],
                      vertexColours = [];

                  facets.forEach(function (facet, index) {
                        var colouredFacet = facet,
                            ///
                        facetVertexIndexes = facet.getVertexIndexes(index),
                            facetVertexNormals = facet.getVertexNormals(),
                            facetVertexPositions = facet.getVertexPositions(),
                            colouredFacetVertexColours = colouredFacet.getVertexColours();

                        add(vertexIndexes, facetVertexIndexes);
                        add(vertexNormals, facetVertexNormals);
                        add(vertexPositions, facetVertexPositions);
                        add(vertexColours, colouredFacetVertexColours);
                  });

                  var rendererData = this.getRendererData();

                  rendererData.addVertexIndexes(vertexIndexes);
                  rendererData.addVertexNormals(vertexNormals);
                  rendererData.addVertexColours(vertexColours);
                  rendererData.addVertexPositions(vertexPositions);

                  var rendererBuffers = this.getRendererBuffers(),
                      vertexPositionsData = rendererData.getVertexPositionsData(),
                      vertexNormalsData = rendererData.getVertexNormalsData(),
                      vertexIndexesData = rendererData.getVertexIndexesData(),
                      vertexColoursData = rendererData.getVertexColoursData();

                  rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
            }
      }, {
            key: 'bindBuffers',
            value: function bindBuffers(canvas) {
                  var rendererBuffers = this.getRendererBuffers(),
                      vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
                      vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
                      vertexColourAttributeLocation = this.getVertexColourAttributeLocation();

                  rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
            }
      }], [{
            key: 'fromNothing',
            value: function fromNothing(canvas) {
                  var facets = [],
                      program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
                      colourRendererData = ColourRendererData.fromNothing(),
                      colourRendererBuffers = ColourRendererBuffers.fromNothing(),
                      colourUniformLocations = ColourUniformLocations.fromProgram(program, canvas),
                      colourAttributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
                      rendererData = colourRendererData,
                      ///
                  rendererBuffers = colourRendererBuffers,
                      ///
                  uniformLocations = colourUniformLocations,
                      ///
                  attributeLocations = colourAttributeLocations,
                      ///
                  colourRenderer = new ColourRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

                  return colourRenderer;
            }
      }]);

      return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9jb2xvdXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJDb2xvdXJSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkNvbG91clJlbmRlcmVyQnVmZmVycyIsIkNvbG91clVuaWZvcm1Mb2NhdGlvbnMiLCJDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJwdXNoIiwiY3JlYXRlUHJvZ3JhbSIsImFkZCIsIkNvbG91clJlbmRlcmVyIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImNhbnZhcyIsImZhY2V0cyIsImdldEZhY2V0cyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4Q29sb3VycyIsImZvckVhY2giLCJmYWNldCIsImluZGV4IiwiY29sb3VyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyIsImdldFZlcnRleENvbG91cnMiLCJyZW5kZXJlckRhdGEiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJyZW5kZXJlckJ1ZmZlcnMiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiZ2V0VmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwiZ2V0VmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4Q29sb3Vyc0RhdGEiLCJnZXRWZXJ0ZXhDb2xvdXJzRGF0YSIsImNyZWF0ZUJ1ZmZlcnMiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVycyIsInByb2dyYW0iLCJjb2xvdXJSZW5kZXJlckRhdGEiLCJmcm9tTm90aGluZyIsImNvbG91clJlbmRlcmVyQnVmZmVycyIsImNvbG91clVuaWZvcm1Mb2NhdGlvbnMiLCJmcm9tUHJvZ3JhbSIsImNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJjb2xvdXJSZW5kZXJlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHlCQUFSLENBRjNCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLDhCQUFSLENBSDNCO0FBQUEsSUFJTUksdUJBQXVCSixRQUFRLGdDQUFSLENBSjdCO0FBQUEsSUFLTUssd0JBQXdCTCxRQUFRLDRCQUFSLENBTDlCO0FBQUEsSUFNTU0seUJBQXlCTixRQUFRLDRCQUFSLENBTi9CO0FBQUEsSUFPTU8sMkJBQTJCUCxRQUFRLDhCQUFSLENBUGpDOztBQVNNLElBQUVRLElBQUYsR0FBV1AsY0FBWCxDQUFFTyxJQUFGO0FBQUEsSUFDRUMsYUFERixHQUNvQlYsUUFEcEIsQ0FDRVUsYUFERjs7O0FBR04sSUFBTUMs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Z0Q7QUFDMUNJLHFDQUFtQkgsc0JBUnpCO0FBQUEsc0JBUWtEO0FBQzVDakQsdUNBQXFCbUQsd0JBVDNCO0FBQUEsc0JBU3NEO0FBQ2hERSxtQ0FBaUIsSUFBSXRELGNBQUosQ0FBbUJNLE1BQW5CLEVBQTJCd0MsT0FBM0IsRUFBb0N0QixZQUFwQyxFQUFrRE0sZUFBbEQsRUFBbUV1QixnQkFBbkUsRUFBcUZwRCxrQkFBckYsQ0FWdkI7O0FBWUEseUJBQU9xRCxjQUFQO0FBQ0Q7Ozs7RUFuRTBCbEUsUTs7QUFzRTdCbUUsT0FBT0MsT0FBUCxHQUFpQnhELGNBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIENvbG91clJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXInKSxcbiAgICAgIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybScpLFxuICAgICAgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIl19