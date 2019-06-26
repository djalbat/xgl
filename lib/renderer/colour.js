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
      }, {
            key: 'render',
            value: function render(canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
                  var program = this.getProgram();

                  canvas.useProgram(program);

                  this.bindBuffers(canvas);

                  var renderer = this; ///

                  canvas.render(renderer, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);

                  var count = this.getCount(),
                      start = 0,
                      finish = count; ///

                  canvas.drawElements(start, finish);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9jb2xvdXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJDb2xvdXJSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIkNvbG91clJlbmRlcmVyQnVmZmVycyIsIkNvbG91clVuaWZvcm1Mb2NhdGlvbnMiLCJDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJwdXNoIiwiY3JlYXRlUHJvZ3JhbSIsImFkZCIsIkNvbG91clJlbmRlcmVyIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImNhbnZhcyIsImZhY2V0cyIsImdldEZhY2V0cyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4Q29sb3VycyIsImZvckVhY2giLCJmYWNldCIsImluZGV4IiwiY29sb3VyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyIsImdldFZlcnRleENvbG91cnMiLCJyZW5kZXJlckRhdGEiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJyZW5kZXJlckJ1ZmZlcnMiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiZ2V0VmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwiZ2V0VmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4Q29sb3Vyc0RhdGEiLCJnZXRWZXJ0ZXhDb2xvdXJzRGF0YSIsImNyZWF0ZUJ1ZmZlcnMiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVycyIsIm9mZnNldE1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJwcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJyZW5kZXJlciIsInJlbmRlciIsImNvdW50IiwiZ2V0Q291bnQiLCJzdGFydCIsImZpbmlzaCIsImRyYXdFbGVtZW50cyIsImNvbG91clJlbmRlcmVyRGF0YSIsImZyb21Ob3RoaW5nIiwiY29sb3VyUmVuZGVyZXJCdWZmZXJzIiwiY29sb3VyVW5pZm9ybUxvY2F0aW9ucyIsImZyb21Qcm9ncmFtIiwiY29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwidW5pZm9ybUxvY2F0aW9ucyIsImNvbG91clJlbmRlcmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEseUJBQVIsQ0FGM0I7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsOEJBQVIsQ0FIM0I7QUFBQSxJQUlNSSx1QkFBdUJKLFFBQVEsZ0NBQVIsQ0FKN0I7QUFBQSxJQUtNSyx3QkFBd0JM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dXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBDb2xvdXJSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9kYXRhL2NvbG91cicpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlcicpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIENvbG91clJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyJyksXG4gICAgICBDb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0nKSxcbiAgICAgIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0TWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXI7XG4iXX0=