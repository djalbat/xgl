'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

  function ColouredFacet(vertices, normal, edges, colour) {
    _classCallCheck(this, ColouredFacet);

    var _this = _possibleConstructorReturn(this, (ColouredFacet.__proto__ || Object.getPrototypeOf(ColouredFacet)).call(this, vertices, normal, edges));

    _this.colour = colour;
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

      var colour = this.colour,
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }, {
    key: 'getColour',
    value: function getColour() {
      return this.colour;
    }
  }, {
    key: 'getVertexColours',
    value: function getVertexColours() {
      var vertexColour = this.colour,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];

      return vertexColours;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var colour = this.colour,
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }], [{
    key: 'fromCoordinateTuplesIndexTupleAndColour',
    value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiZmFjZXRVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwiY2xvbmVFZGdlcyIsImNsb25lTm9ybWFsIiwiY2xvbmVWZXJ0aWNlcyIsImNhbGN1bGF0ZUVkZ2VzIiwiY2FsY3VsYXRlTm9ybWFsIiwiQ29sb3VyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJjb2xvdXIiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiY29sb3VyZWRGYWNldCIsInZlcnRleENvbG91ciIsInZlcnRleENvbG91cnMiLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFVBQVIsQ0FEZDtBQUFBLElBRU1FLFNBQVNGLFFBQVEsV0FBUixDQUZmO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNSSxpQkFBaUJKLFFBQVEsb0JBQVIsQ0FKdkI7QUFBQSxJQUtNSyxvQkFBb0JMLFFBQVEsdUJBQVIsQ0FMMUI7O0FBT00sSUFBRU0seUNBQUYsR0FBZ0RELGlCQUFoRCxDQUFFQyx5Q0FBRjtBQUFBLElBQ0VDLFVBREYsR0FDOEVILGNBRDlFLENBQ0VHLFVBREY7QUFBQSxJQUNjQyxXQURkLEdBQzhFSixjQUQ5RSxDQUNjSSxXQURkO0FBQUEsSUFDMkJDLGFBRDNCLEdBQzhFTCxjQUQ5RSxDQUMyQkssYUFEM0I7QUFBQSxJQUMwQ0MsY0FEMUMsR0FDOEVOLGNBRDlFLENBQzBDTSxjQUQxQztBQUFBLElBQzBEQyxlQUQxRCxHQUM4RVAsY0FEOUUsQ0FDMERPLGVBRDFEOztJQUdBQyxhOzs7QUFDSix5QkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxNQUFyQyxFQUE2QztBQUFBOztBQUFBLDhIQUNyQ0gsUUFEcUMsRUFDM0JDLE1BRDJCLEVBQ25CQyxLQURtQjs7QUFHM0MsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSDJDO0FBSTVDOzs7OzRCQUVPO0FBQ04sVUFBSUgsV0FBVyxLQUFLSSxXQUFMLEVBQWY7QUFBQSxVQUNJSCxTQUFTLEtBQUtJLFNBQUwsRUFEYjtBQUFBLFVBRUlILFFBQVEsS0FBS0ksUUFBTCxFQUZaOztBQUlBTixpQkFBV0osY0FBY0ksUUFBZCxDQUFYO0FBQ0FDLGVBQVNOLFlBQVlNLE1BQVosQ0FBVDtBQUNBQyxjQUFRUixXQUFXUSxLQUFYLENBQVI7O0FBRUEsVUFBTUMsU0FBUyxLQUFLQSxNQUFwQjtBQUFBLFVBQ01JLGdCQUFnQixJQUFJUixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxNQUEzQyxDQUR0Qjs7QUFHQSxhQUFPSSxhQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0osTUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1LLGVBQWUsS0FBS0wsTUFBMUI7QUFBQSxVQUFrQztBQUM1Qk0sc0JBQWdCLENBQ2RELFlBRGMsRUFFZEEsWUFGYyxFQUdkQSxZQUhjLENBRHRCOztBQU9BLGFBQU9DLGFBQVA7QUFDRDs7O2lDQUVZVCxRLEVBQVU7QUFDckIsVUFBTUcsU0FBUyxLQUFLQSxNQUFwQjtBQUFBLFVBQ01GLFNBQVNILGdCQUFnQkUsUUFBaEIsRUFBMEJYLE1BQTFCLENBRGY7QUFBQSxVQUVNYSxRQUFRTCxlQUFlRyxRQUFmLEVBQXlCZCxJQUF6QixDQUZkO0FBQUEsVUFHTXFCLGdCQUFnQixJQUFJUixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxNQUEzQyxDQUh0Qjs7QUFLQSxhQUFPSSxhQUFQO0FBQ0Q7Ozs0REFFOENHLGdCLEVBQWtCQyxVLEVBQVlSLE0sRUFBUTtBQUNuRixVQUFNSCxXQUFXUCwwQ0FBMENpQixnQkFBMUMsRUFBNERDLFVBQTVELEVBQXdFckIsTUFBeEUsQ0FBakI7QUFBQSxVQUNNVyxTQUFTSCxnQkFBZ0JFLFFBQWhCLEVBQTBCWCxNQUExQixDQURmO0FBQUEsVUFFTWEsUUFBUUwsZUFBZUcsUUFBZixFQUF5QmQsSUFBekIsQ0FGZDtBQUFBLFVBR01xQixnQkFBZ0IsSUFBSVIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsTUFBM0MsQ0FIdEI7O0FBS0EsYUFBT0ksYUFBUDtBQUNEOzs7O0VBckR5Qm5CLEs7O0FBd0Q1QndCLE9BQU9DLE9BQVAsR0FBaUJkLGFBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpO1xuXG5jb25zdCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMuY29sb3VyLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBjb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91cikge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBjb2xvdXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcbiJdfQ==