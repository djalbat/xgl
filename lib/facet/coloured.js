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

var verticesFromVertexCoordinatesAndIndexes = verticesUtilities.verticesFromVertexCoordinatesAndIndexes,
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
    key: 'fromVertexCoordinatesIndexesAndColour',
    value: function fromVertexCoordinatesIndexesAndColour(vertexCoordinates, indexes, colour) {
      var vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiZmFjZXRVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsInZlcnRpY2VzRnJvbVZlcnRleENvb3JkaW5hdGVzQW5kSW5kZXhlcyIsImNsb25lRWRnZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lVmVydGljZXMiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsIkNvbG91cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImVkZ2VzIiwiY29sb3VyIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsImNvbG91cmVkRmFjZXQiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwidmVydGV4Q29vcmRpbmF0ZXMiLCJpbmRleGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFFBQVFELFFBQVEsVUFBUixDQURkO0FBQUEsSUFFTUUsU0FBU0YsUUFBUSxXQUFSLENBRmY7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLFdBQVIsQ0FIZjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxvQkFBUixDQUp2QjtBQUFBLElBS01LLG9CQUFvQkwsUUFBUSx1QkFBUixDQUwxQjs7QUFPTSxJQUFFTSx1Q0FBRixHQUE4Q0QsaUJBQTlDLENBQUVDLHVDQUFGO0FBQUEsSUFDRUMsVUFERixHQUM4RUgsY0FEOUUsQ0FDRUcsVUFERjtBQUFBLElBQ2NDLFdBRGQsR0FDOEVKLGNBRDlFLENBQ2NJLFdBRGQ7QUFBQSxJQUMyQkMsYUFEM0IsR0FDOEVMLGNBRDlFLENBQzJCSyxhQUQzQjtBQUFBLElBQzBDQyxjQUQxQyxHQUM4RU4sY0FEOUUsQ0FDMENNLGNBRDFDO0FBQUEsSUFDMERDLGVBRDFELEdBQzhFUCxjQUQ5RSxDQUMwRE8sZUFEMUQ7O0lBR0FDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUNDLE1BQXJDLEVBQTZDO0FBQUE7O0FBQUEsOEhBQ3JDSCxRQURxQyxFQUMzQkMsTUFEMkIsRUFDbkJDLEtBRG1COztBQUczQyxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIMkM7QUFJNUM7Ozs7NEJBRU87QUFDTixVQUFJSCxXQUFXLEtBQUtJLFdBQUwsRUFBZjtBQUFBLFVBQ0lILFNBQVMsS0FBS0ksU0FBTCxFQURiO0FBQUEsVUFFSUgsUUFBUSxLQUFLSSxRQUFMLEVBRlo7O0FBSUFOLGlCQUFXSixjQUFjSSxRQUFkLENBQVg7QUFDQUMsZUFBU04sWUFBWU0sTUFBWixDQUFUO0FBQ0FDLGNBQVFSLFdBQVdRLEtBQVgsQ0FBUjs7QUFFQSxVQUFNQyxTQUFTLEtBQUtBLE1BQXBCO0FBQUEsVUFDTUksZ0JBQWdCLElBQUlSLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLE1BQTNDLENBRHRCOztBQUdBLGFBQU9JLGFBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLSixNQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUssZUFBZSxLQUFLTCxNQUExQjtBQUFBLFVBQWtDO0FBQzVCTSxzQkFBZ0IsQ0FDZEQsWUFEYyxFQUVkQSxZQUZjLEVBR2RBLFlBSGMsQ0FEdEI7O0FBT0EsYUFBT0MsYUFBUDtBQUNEOzs7aUNBRVlULFEsRUFBVTtBQUNyQixVQUFNRyxTQUFTLEtBQUtBLE1BQXBCO0FBQUEsVUFDTUYsU0FBU0gsZ0JBQWdCRSxRQUFoQixFQUEwQlgsTUFBMUIsQ0FEZjtBQUFBLFVBRU1hLFFBQVFMLGVBQWVHLFFBQWYsRUFBeUJkLElBQXpCLENBRmQ7QUFBQSxVQUdNcUIsZ0JBQWdCLElBQUlSLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLE1BQTNDLENBSHRCOztBQUtBLGFBQU9JLGFBQVA7QUFDRDs7OzBEQUU0Q0csaUIsRUFBbUJDLE8sRUFBU1IsTSxFQUFRO0FBQy9FLFVBQU1ILFdBQVdQLHdDQUF3Q2lCLGlCQUF4QyxFQUEyREMsT0FBM0QsRUFBb0VyQixNQUFwRSxDQUFqQjtBQUFBLFVBQ01XLFNBQVNILGdCQUFnQkUsUUFBaEIsRUFBMEJYLE1BQTFCLENBRGY7QUFBQSxVQUVNYSxRQUFRTCxlQUFlRyxRQUFmLEVBQXlCZCxJQUF6QixDQUZkO0FBQUEsVUFHTXFCLGdCQUFnQixJQUFJUixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxNQUEzQyxDQUh0Qjs7QUFLQSxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFyRHlCbkIsSzs7QUF3RDVCd0IsT0FBT0MsT0FBUCxHQUFpQmQsYUFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgZmFjZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZmFjZXQnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyk7XG5cbmNvbnN0IHsgdmVydGljZXNGcm9tVmVydGV4Q29vcmRpbmF0ZXNBbmRJbmRleGVzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMuY29sb3VyLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBjb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleENvb3JkaW5hdGVzSW5kZXhlc0FuZENvbG91cih2ZXJ0ZXhDb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIFZlcnRleCksXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkRmFjZXQ7XG4iXX0=