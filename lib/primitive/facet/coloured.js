'use strict';

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

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
    Vertex = require('../vertex'),
    facetUtilities = require('../../utilities/facet'),
    verticesUtilities = require('../../utilities/vertices'),
    approximateUtilities = require('../../utilities/approximate');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91cmVkLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJyZXF1aXJlIiwiRmFjZXQiLCJOb3JtYWwiLCJWZXJ0ZXgiLCJmYWNldFV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwiY2xvbmVFZGdlcyIsImNsb25lTm9ybWFsIiwiY2xvbmVWZXJ0aWNlcyIsImNhbGN1bGF0ZUFyZWEiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsIkNvbG91cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImVkZ2VzIiwicmdiYSIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJjb2xvdXJlZEZhY2V0IiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImFyZWEiLCJhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwibGFyZ2VFbm91Z2giLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsImNvbG91ciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01DLEtBQUssR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FEckI7QUFBQSxJQUVNRSxNQUFNLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBRnRCO0FBQUEsSUFHTUcsTUFBTSxHQUFHSCxPQUFPLENBQUMsV0FBRCxDQUh0QjtBQUFBLElBSU1JLGNBQWMsR0FBR0osT0FBTyxDQUFDLHVCQUFELENBSjlCO0FBQUEsSUFLTUssaUJBQWlCLEdBQUdMLE9BQU8sQ0FBQywwQkFBRCxDQUxqQztBQUFBLElBTU1NLG9CQUFvQixHQUFHTixPQUFP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SHJCLENBSG1GLENBTS9COztBQUVwRCxVQUFJQyxXQUFKLEVBQWlCO0FBQ2YsWUFBTVgsTUFBTSxHQUFHSCxlQUFlLENBQUNFLFFBQUQsRUFBV2QsTUFBWCxDQUE5QjtBQUFBLFlBQ01nQixLQUFLLEdBQUdMLGNBQWMsQ0FBQ0csUUFBRCxFQUFXakIsSUFBWCxDQUQ1QjtBQUFBLFlBRU1vQixJQUFJLGdDQUFRWSxNQUFSLElBQWdCLENBQWhCLEVBRlYsQ0FEZSxDQUdpQjs7QUFFaENSLFFBQUFBLGFBQWEsR0FBRyxJQUFJUixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxJQUEzQyxDQUFoQjtBQUNEOztBQUVELGFBQU9JLGFBQVA7QUFDRDs7OztFQXBFeUJ0QixLOztBQXVFNUIrQixNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91cikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWyAuLi5jb2xvdXIsIDEgXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcbiJdfQ==