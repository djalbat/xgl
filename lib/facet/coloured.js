'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
    Vertex = require('../vertex'),
    facetUtilities = require('../utilities/facet'),
    verticesUtilities = require('../utilities/vertices');

var verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal;

var ColouredFacet = function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, edges, rgba) {
    _classCallCheck(this, ColouredFacet);

    var _this = _possibleConstructorReturn(this, (ColouredFacet.__proto__ || Object.getPrototypeOf(ColouredFacet)).call(this, vertices, normal, edges));

    _this.rgba = rgba;
    return _this;
  }

  _createClass(ColouredFacet, [{
    key: 'clone',
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
    key: 'getVertexColours',
    value: function getVertexColours() {
      var vertexColour = this.rgba,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];

      return vertexColours;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var rgba = this.rgba,
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);

      return colouredFacet;
    }
  }], [{
    key: 'fromCoordinateTuplesIndexTupleAndColour',
    value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          rgba = [].concat(_toConsumableArray(colour), [1]),
          ///
      colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiZmFjZXRVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwiY2xvbmVFZGdlcyIsImNsb25lTm9ybWFsIiwiY2xvbmVWZXJ0aWNlcyIsImNhbGN1bGF0ZUVkZ2VzIiwiY2FsY3VsYXRlTm9ybWFsIiwiQ29sb3VyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJyZ2JhIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsImNvbG91cmVkRmFjZXQiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiY29vcmRpbmF0ZVR1cGxlcyIsImluZGV4VHVwbGUiLCJjb2xvdXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFVBQVIsQ0FEZDtBQUFBLElBRU1FLFNBQVNGLFFBQVEsV0FBUixDQUZmO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNSSxpQkFBaUJKLFFBQVEsb0JBQVIsQ0FKdkI7QUFBQSxJQUtNSyxvQkFBb0JMLFFBQVEsdUJBQVIsQ0FMMUI7O0FBT00sSUFBRU0seUNBQUYsR0FBZ0RELGlCQUFoRCxDQUFFQyx5Q0FBRjtBQUFBLElBQ0VDLFVBREYsR0FDOEVILGNBRDlFLENBQ0VHLFVBREY7QUFBQSxJQUNjQyxXQURkLEdBQzhFSixjQUQ5RSxDQUNjSSxXQURkO0FBQUEsSUFDMkJDLGFBRDNCLEdBQzhFTCxjQUQ5RSxDQUMyQkssYUFEM0I7QUFBQSxJQUMwQ0MsY0FEMUMsR0FDOEVOLGNBRDlFLENBQzBDTSxjQUQxQztBQUFBLElBQzBEQyxlQUQxRCxHQUM4RVAsY0FEOUUsQ0FDMERPLGVBRDFEOztJQUdBQyxhOzs7QUFDSix5QkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxJQUFyQyxFQUEyQztBQUFBOztBQUFBLDhIQUNuQ0gsUUFEbUMsRUFDekJDLE1BRHlCLEVBQ2pCQyxLQURpQjs7QUFHekMsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBSHlDO0FBSTFDOzs7OzRCQUVPO0FBQ04sVUFBSUgsV0FBVyxLQUFLSSxXQUFMLEVBQWY7QUFBQSxVQUNJSCxTQUFTLEtBQUtJLFNBQUwsRUFEYjtBQUFBLFVBRUlILFFBQVEsS0FBS0ksUUFBTCxFQUZaOztBQUlBTixpQkFBV0osY0FBY0ksUUFBZCxDQUFYO0FBQ0FDLGVBQVNOLFlBQVlNLE1BQVosQ0FBVDtBQUNBQyxjQUFRUixXQUFXUSxLQUFYLENBQVI7O0FBRUEsVUFBTUMsT0FBTyxLQUFLQSxJQUFsQjtBQUFBLFVBQ01JLGdCQUFnQixJQUFJUixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxJQUEzQyxDQUR0Qjs7QUFHQSxhQUFPSSxhQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsZUFBZSxLQUFLTCxJQUExQjtBQUFBLFVBQWdDO0FBQzFCTSxzQkFBZ0IsQ0FDZEQsWUFEYyxFQUVkQSxZQUZjLEVBR2RBLFlBSGMsQ0FEdEI7O0FBT0EsYUFBT0MsYUFBUDtBQUNEOzs7aUNBRVlULFEsRUFBVTtBQUNyQixVQUFNRyxPQUFPLEtBQUtBLElBQWxCO0FBQUEsVUFDTUYsU0FBU0gsZ0JBQWdCRSxRQUFoQixFQUEwQlgsTUFBMUIsQ0FEZjtBQUFBLFVBRU1hLFFBQVFMLGVBQWVHLFFBQWYsRUFBeUJkLElBQXpCLENBRmQ7QUFBQSxVQUdNcUIsZ0JBQWdCLElBQUlSLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLElBQTNDLENBSHRCOztBQUtBLGFBQU9JLGFBQVA7QUFDRDs7OzREQUU4Q0csZ0IsRUFBa0JDLFUsRUFBWUMsTSxFQUFRO0FBQ25GLFVBQU1aLFdBQVdQLDBDQUEwQ2lCLGdCQUExQyxFQUE0REMsVUFBNUQsRUFBd0VyQixNQUF4RSxDQUFqQjtBQUFBLFVBQ01XLFNBQVNILGdCQUFnQkUsUUFBaEIsRUFBMEJYLE1BQTFCLENBRGY7QUFBQSxVQUVNYSxRQUFRTCxlQUFlRyxRQUFmLEVBQXlCZCxJQUF6QixDQUZkO0FBQUEsVUFHTWlCLG9DQUFXUyxNQUFYLElBQW1CLENBQW5CLEVBSE47QUFBQSxVQUc4QjtBQUN4Qkwsc0JBQWdCLElBQUlSLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLElBQTNDLENBSnRCOztBQU1BLGFBQU9JLGFBQVA7QUFDRDs7OztFQWxEeUJuQixLOztBQXFENUJ5QixPQUFPQyxPQUFQLEdBQWlCZixhQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKTtcblxuY29uc3QgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICByZ2JhID0gWy4uLmNvbG91ciwgMV0sICAvLy9cbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcbiJdfQ==