"use strict";

var _renderer = _interopRequireWildcard(require("../renderer"));

var _colour = _interopRequireDefault(require("../renderer/data/colour"));

var _vertexShader = _interopRequireDefault(require("./source/colour/vertexShader"));

var _fragmentShader = _interopRequireDefault(require("./source/colour/fragmentShader"));

var _colour2 = _interopRequireDefault(require("../renderer/buffers/colour"));

var _uniform = _interopRequireDefault(require("./locations/colour/uniform"));

var _attribute = _interopRequireDefault(require("./locations/colour/attribute"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var add = _array.push; ///

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
          program = (0, _renderer.createProgram)(_vertexShader["default"], _fragmentShader["default"], canvas),
          colourRendererData = _colour["default"].fromNothing(),
          colourRendererBuffers = _colour2["default"].fromNothing(),
          colourUniformLocations = _uniform["default"].fromProgram(program, canvas),
          colourAttributeLocations = _attribute["default"].fromProgram(program, canvas),
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
}(_renderer["default"]);

module.exports = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91ci5qcyJdLCJuYW1lcyI6WyJhZGQiLCJwdXNoIiwiQ29sb3VyUmVuZGVyZXIiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiY2FudmFzIiwiZmFjZXRzIiwiZ2V0RmFjZXRzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZm9yRWFjaCIsImZhY2V0IiwiaW5kZXgiLCJjb2xvdXJlZEZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsImNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzIiwiZ2V0VmVydGV4Q29sb3VycyIsInJlbmRlcmVyRGF0YSIsImdldFJlbmRlcmVyRGF0YSIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsImFkZFZlcnRleFBvc2l0aW9ucyIsInJlbmRlcmVyQnVmZmVycyIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiZ2V0VmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhDb2xvdXJzRGF0YSIsImdldFZlcnRleENvbG91cnNEYXRhIiwiY3JlYXRlQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXJzIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJwcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJyZW5kZXJlciIsInJlbmRlciIsImNvdW50IiwiZ2V0Q291bnQiLCJzdGFydCIsImZpbmlzaCIsImRyYXdFbGVtZW50cyIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiY29sb3VyUmVuZGVyZXJEYXRhIiwiQ29sb3VyUmVuZGVyZXJEYXRhIiwiZnJvbU5vdGhpbmciLCJjb2xvdXJSZW5kZXJlckJ1ZmZlcnMiLCJDb2xvdXJSZW5kZXJlckJ1ZmZlcnMiLCJjb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyIsImZyb21Qcm9ncmFtIiwiY29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwidW5pZm9ybUxvY2F0aW9ucyIsImNvbG91clJlbmRlcmVyIiwiUmVuZGVyZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxHQUFHLEdBQUdDLFdBQVosQyxDQUFrQjs7SUFFWkMsYzs7Ozs7Ozs7Ozs7dURBQytCO0FBQ2pDLFVBQU1DLGtCQUFrQixHQUFHLEtBQUtDLHFCQUFMLEVBQTNCO0FBQUEsVUFDTUMsNkJBQTZCLEdBQUdGLGtCQUFrQixDQUFDRyxnQ0FBbkIsRUFEdEM7QUFHQSxhQUFPRCw2QkFBUDtBQUNEOzs7a0NBRWFFLE0sRUFBUTtB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dXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJEYXRhIGZyb20gXCIuLi9yZW5kZXJlci9kYXRhL2NvbG91clwiO1xuaW1wb3J0IHZlcnRleFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyXCI7XG5pbXBvcnQgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm1cIjtcbmltcG9ydCBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q291bnQoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIl19