"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.push; ///

var ColourRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  var _super = _createSuper(ColourRenderer);

  function ColourRenderer() {
    _classCallCheck(this, ColourRenderer);

    return _super.apply(this, arguments);
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

exports["default"] = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91ci5qcyJdLCJuYW1lcyI6WyJhZGQiLCJwdXNoIiwiQ29sb3VyUmVuZGVyZXIiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiY2FudmFzIiwiZmFjZXRzIiwiZ2V0RmFjZXRzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZm9yRWFjaCIsImZhY2V0IiwiaW5kZXgiLCJjb2xvdXJlZEZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsImNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzIiwiZ2V0VmVydGV4Q29sb3VycyIsInJlbmRlcmVyRGF0YSIsImdldFJlbmRlcmVyRGF0YSIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4Q29sb3VycyIsImFkZFZlcnRleFBvc2l0aW9ucyIsInJlbmRlcmVyQnVmZmVycyIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiZ2V0VmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhDb2xvdXJzRGF0YSIsImdldFZlcnRleENvbG91cnNEYXRhIiwiY3JlYXRlQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXJzIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJwcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJyZW5kZXJlciIsInJlbmRlciIsImNvdW50IiwiZ2V0Q291bnQiLCJzdGFydCIsImZpbmlzaCIsImRyYXdFbGVtZW50cyIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiY29sb3VyUmVuZGVyZXJEYXRhIiwiQ29sb3VyUmVuZGVyZXJEYXRhIiwiZnJvbU5vdGhpbmciLCJjb2xvdXJSZW5kZXJlckJ1ZmZlcnMiLCJDb2xvdXJSZW5kZXJlckJ1ZmZlcnMiLCJjb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyIsImZyb21Qcm9ncmFtIiwiY29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwidW5pZm9ybUxvY2F0aW9ucyIsImNvbG91clJlbmRlcmVyIiwiUmVuZGVyZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU1BLEdBQUcsR0FBR0MsV0FBWixDLENBQWtCOztJQUVHQyxjOzs7Ozs7Ozs7Ozs7O3VEQUNnQjtBQUNqQyxVQUFNQyxrQkFBa0IsR0FBRyxLQUFLQyxxQkFBTCxFQUEzQjtBQUFBLFVBQ01DLDZCQUE2QixHQUFHRixrQkFBa0IsQ0FBQ0csZ0NBQW5CLEVBRHRDO0FBR0EsYUFBT0QsNkJBQVA7QUFDRDs7O2tDQUVhRSxNLEVBQVE7QUFDcEIsVUFB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ZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiJdfQ==