"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Edge = require("../edge"),
    Facet = require("../facet"),
    Normal = require("../normal"),
    Vertex = require("../vertex"),
    facetUtilities = require("../../utilities/facet"),
    verticesUtilities = require("../../utilities/vertices"),
    approximateUtilities = require("../../utilities/approximate");

var isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateArea = facetUtilities.calculateArea,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal;

var ColouredFacet = /*#__PURE__*/function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, edges, rgba) {
    var _this;

    _classCallCheck(this, ColouredFacet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredFacet).call(this, vertices, normal, edges));
    _this.rgba = rgba;
    return _this;
  }

  _createClass(ColouredFacet, [{
    key: "clone",
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal(),
          edges = this.getEdges();
      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);
      var rgba = this.rgba,
          colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      return colouredFacet;
    }
  }, {
    key: "getVertexColours",
    value: function getVertexColours() {
      var vertexColour = this.rgba,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];
      return vertexColours;
    }
  }, {
    key: "fromVertices",
    value: function fromVertices(vertices) {
      var colouredFacet = null;
      var area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var rgba = this.rgba,
            normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);
        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }], [{
    key: "fromCoordinateTuplesIndexTupleAndColour",
    value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
      var colouredFacet = null;
      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge),
            rgba = [].concat(_toConsumableArray(colour), [1]); ///

        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91cmVkLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJyZXF1aXJlIiwiRmFjZXQiLCJOb3JtYWwiLCJWZXJ0ZXgiLCJmYWNldFV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwiY2xvbmVFZGdlcyIsImNsb25lTm9ybWFsIiwiY2xvbmVWZXJ0aWNlcyIsImNhbGN1bGF0ZUFyZWEiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsIkNvbG91cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImVkZ2VzIiwicmdiYSIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJjb2xvdXJlZEZhY2V0IiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImFyZWEiLCJhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwibGFyZ2VFbm91Z2giLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsImNvbG91ciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLEtBQUssR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FEckI7QUFBQSxJQUVNRSxNQUFNLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBRnRCO0FBQUEsSUFHTUcsTUFBTSxHQUFHSCxPQUFPLENBQUMsV0FBRCxDQUh0QjtBQUFBLElBSU1JLGNBQWMsR0FBR0osT0FBTyxDQUFDLHVCQUFELENBSjlCO0FBQUEsSUFLTUssaUJBQWlCLEdBQUdMLE9BQU8sQ0FBQywwQkFBRCxDQUxqQztBQUFBLElBTU1NLG9CQUFvQixHQUFHTixPQUFP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SHJCLENBSG1GLENBTS9COztBQUVwRCxVQUFJQyxXQUFKLEVBQWlCO0FBQ2YsWUFBTVgsTUFBTSxHQUFHSCxlQUFlLENBQUNFLFFBQUQsRUFBV2QsTUFBWCxDQUE5QjtBQUFBLFlBQ01nQixLQUFLLEdBQUdMLGNBQWMsQ0FBQ0csUUFBRCxFQUFXakIsSUFBWCxDQUQ1QjtBQUFBLFlBRU1vQixJQUFJLGdDQUFRWSxNQUFSLElBQWdCLENBQWhCLEVBRlYsQ0FEZSxDQUdpQjs7QUFFaENSLFFBQUFBLGFBQWEsR0FBRyxJQUFJUixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxJQUEzQyxDQUFoQjtBQUNEOztBQUVELGFBQU9JLGFBQVA7QUFDRDs7OztFQXBFeUJ0QixLOztBQXVFNUIrQixNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZShcIi4uL2VkZ2VcIiksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoXCIuLi9mYWNldFwiKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoXCIuLi9ub3JtYWxcIiksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKFwiLi4vdmVydGV4XCIpLFxuICAgICAgZmFjZXRVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCIpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCIpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCIpO1xuXG5jb25zdCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcyxcbiAgICAgIHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkRmFjZXQ7XG4iXX0=