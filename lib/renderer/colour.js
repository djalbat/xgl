"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Renderer = require("../renderer"),
    arrayUtilities = require("../utilities/array"),
    ColourRendererData = require("../renderer/data/colour"),
    vertexShaderSource = require("./source/colour/vertexShader"),
    fragmentShaderSource = require("./source/colour/fragmentShader"),
    ColourRendererBuffers = require("../renderer/buffers/colour"),
    ColourUniformLocations = require("./locations/colour/uniform"),
    ColourAttributeLocations = require("./locations/colour/attribute");

var push = arrayUtilities.push,
    createProgram = Renderer.createProgram;
var add = push; ///

var ColourRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer() {
    _classCallCheck(this, ColourRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColourRenderer).apply(this, arguments));
  }

  _createClass(ColourRenderer, [{
    key: "getVertexColourAttributeLocation",
    value: function getVertexColourAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
      return vertexColourAttributeLocation;
    }
  }, {
    key: "createBuffers",
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
    key: "bindBuffers",
    value: function bindBuffers(canvas) {
      var rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
      rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
    }
  }, {
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var program = this.getProgram();
      canvas.useProgram(program);
      this.bindBuffers(canvas);
      var renderer = this; ///

      canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      var count = this.getCount(),
          start = 0,
          finish = count; ///

      canvas.drawElements(start, finish);
    }
  }], [{
    key: "fromNothing",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91ci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIkNvbG91clJlbmRlcmVyRGF0YSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiQ29sb3VyUmVuZGVyZXJCdWZmZXJzIiwiQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyIsIkNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyIsInB1c2giLCJjcmVhdGVQcm9ncmFtIiwiYWRkIiwiQ29sb3VyUmVuZGVyZXIiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiY2FudmFzIiwiZmFjZXRzIiwiZ2V0RmFjZXRzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZm9yRWFjaCIsImZhY2V0IiwiaW5kZXgiLCJjb2xvdXJlZEZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsImNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzIiwiZ2V0VmVydGV4Q29sb3VycyIsInJlbmRlcmVyRGF0YSIsImdldFJlbmRlcmVyRGF0YSIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsImFkZFZlcnRleFBvc2l0aW9ucyIsInJlbmRlcmVyQnVmZmVycyIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiZ2V0VmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhDb2xvdXJzRGF0YSIsImdldFZlcnRleENvbG91cnNEYXRhIiwiY3JlYXRlQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXJzIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJwcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJyZW5kZXJlciIsInJlbmRlciIsImNvdW50IiwiZ2V0Q291bnQiLCJzdGFydCIsImZpbmlzaCIsImRyYXdFbGVtZW50cyIsImNvbG91clJlbmRlcmVyRGF0YSIsImZyb21Ob3RoaW5nIiwiY29sb3VyUmVuZGVyZXJCdWZmZXJzIiwiY29sb3VyVW5pZm9ybUxvY2F0aW9ucyIsImZyb21Qcm9ncmFtIiwiY29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwidW5pZm9ybUxvY2F0aW9ucyIsImNvbG91clJlbmRlcmVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF4QjtBQUFBLElBQ01DLGNBQWMsR0FBR0QsT0FBTyxDQUFDLG9CQUFELENBRDlCO0FBQUEsSUFFTUUsa0JBQWtCLEdBQUdGLE9BQU8sQ0FBQyx5QkFBRCxDQUZsQztBQUFBLElBR01HLGtCQUFrQixHQUFHSCxPQUFPLENBQUMsOEJBQUQsQ0FIbEM7QUFBQSxJQUlNSSxvQkFBb0IsR0FBR0os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d0IsR0FBR3RFLHdCQUF3QixDQUFDcUUsV0FBekIsQ0FBcUNkLE9BQXJDLEVBQThDOUMsTUFBOUMsQ0FMakM7QUFBQSxVQU1NbUIsWUFBWSxHQUFHcUMsa0JBTnJCO0FBQUEsVUFNMEM7QUFDcEMvQixNQUFBQSxlQUFlLEdBQUdpQyxxQkFQeEI7QUFBQSxVQU9nRDtBQUMxQ0ksTUFBQUEsZ0JBQWdCLEdBQUdILHNCQVJ6QjtBQUFBLFVBUWtEO0FBQzVDL0QsTUFBQUEsa0JBQWtCLEdBQUdpRSx3QkFUM0I7QUFBQSxVQVNzRDtBQUNoREUsTUFBQUEsY0FBYyxHQUFHLElBQUlwRSxjQUFKLENBQW1CTSxNQUFuQixFQUEyQjZDLE9BQTNCLEVBQW9DM0IsWUFBcEMsRUFBa0RNLGVBQWxELEVBQW1FcUMsZ0JBQW5FLEVBQXFGbEUsa0JBQXJGLENBVnZCO0FBWUEsYUFBT21FLGNBQVA7QUFDRDs7OztFQXJGMEJoRixROztBQXdGN0JpRixNQUFNLENBQUNDLE9BQVAsR0FBaUJ0RSxjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlclwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIENvbG91clJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlci9kYXRhL2NvbG91clwiKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCIpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCIpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyXCIpLFxuICAgICAgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiKSxcbiAgICAgIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCIpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q291bnQoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIl19