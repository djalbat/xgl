'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Vertex = require('../vertex'),
    facetUtilities = require('../utilities/facet');

var cloneEdges = facetUtilities.cloneEdges,
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
          normal = calculateNormal(vertices),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }], [{
    key: 'fromVertexCoordinatesIndexesAndColour',
    value: function fromVertexCoordinatesIndexesAndColour(vertexCoordinates, indexes, colour) {
      var vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes),
          normal = calculateNormal(vertices),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;

function verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes) {
  var vertices = indexes.map(function (index) {
    var coordinates = vertexCoordinates[index],
        ///
    vertex = Vertex.fromCoordinates(coordinates);

    return vertex;
  });

  return vertices;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiVmVydGV4IiwiZmFjZXRVdGlsaXRpZXMiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJDb2xvdXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImNvbG91ciIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJjb2xvdXJlZEZhY2V0IiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsInZlcnRleENvb3JkaW5hdGVzIiwiaW5kZXhlcyIsInZlcnRpY2VzRnJvbVZlcnRleENvb3JkaW5hdGVzQW5kSW5kZXhlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXAiLCJpbmRleCIsImNvb3JkaW5hdGVzIiwidmVydGV4IiwiZnJvbUNvb3JkaW5hdGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxTQUFTRixRQUFRLFdBQVIsQ0FGZjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUh2Qjs7SUFLUUksVSxHQUE0RUQsYyxDQUE1RUMsVTtJQUFZQyxXLEdBQWdFRixjLENBQWhFRSxXO0lBQWFDLGEsR0FBbURILGMsQ0FBbkRHLGE7SUFBZUMsYyxHQUFvQ0osYyxDQUFwQ0ksYztJQUFnQkMsZSxHQUFvQkwsYyxDQUFwQkssZTs7SUFFMURDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUNDLE1BQXJDLEVBQTZDO0FBQUE7O0FBQUEsOEhBQ3JDSCxRQURxQyxFQUMzQkMsTUFEMkIsRUFDbkJDLEtBRG1COztBQUczQyxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIMkM7QUFJNUM7Ozs7NEJBRU87QUFDTixVQUFJSCxXQUFXLEtBQUtJLFdBQUwsRUFBZjtBQUFBLFVBQ0lILFNBQVMsS0FBS0ksU0FBTCxFQURiO0FBQUEsVUFFSUgsUUFBUSxLQUFLSSxRQUFMLEVBRlo7O0FBSUFOLGlCQUFXSixjQUFjSSxRQUFkLENBQVg7QUFDQUMsZUFBU04sWUFBWU0sTUFBWixDQUFUO0FBQ0FDLGNBQVFSLFdBQVdRLEtBQVgsQ0FBUjs7QUFFQSxVQUFNQyxTQUFTLEtBQUtBLE1BQXBCO0FBQUEsVUFDTUksZ0JBQWdCLElBQUlSLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLE1BQTNDLENBRHRCOztBQUdBLGFBQU9JLGFBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLSixNQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUssZUFBZSxLQUFLTCxNQUExQjtBQUFBLFVBQWtDO0FBQzVCTSxzQkFBZ0IsQ0FDZEQsWUFEYyxFQUVkQSxZQUZjLEVBR2RBLFlBSGMsQ0FEdEI7O0FBT0EsYUFBT0MsYUFBUDtBQUNEOzs7aUNBRVlULFEsRUFBVTtBQUNyQixVQUFNRyxTQUFTLEtBQUtBLE1BQXBCO0FBQUEsVUFDTUYsU0FBU0gsZ0JBQWdCRSxRQUFoQixDQURmO0FBQUEsVUFFTUUsUUFBUUwsZUFBZUcsUUFBZixFQUF5QlgsSUFBekIsQ0FGZDtBQUFBLFVBR01rQixnQkFBZ0IsSUFBSVIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsTUFBM0MsQ0FIdEI7O0FBS0EsYUFBT0ksYUFBUDtBQUNEOzs7MERBRTRDRyxpQixFQUFtQkMsTyxFQUFTUixNLEVBQVE7QUFDL0UsVUFBTUgsV0FBV1ksd0NBQXdDRixpQkFBeEMsRUFBMkRDLE9BQTNELENBQWpCO0FBQUEsVUFDTVYsU0FBU0gsZ0JBQWdCRSxRQUFoQixDQURmO0FBQUEsVUFFTUUsUUFBUUwsZUFBZUcsUUFBZixFQUF5QlgsSUFBekIsQ0FGZDtBQUFBLFVBR01rQixnQkFBZ0IsSUFBSVIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsTUFBM0MsQ0FIdEI7O0FBS0EsYUFBT0ksYUFBUDtBQUNEOzs7O0VBckR5QmhCLEs7O0FBd0Q1QnNCLE9BQU9DLE9BQVAsR0FBaUJmLGFBQWpCOztBQUVBLFNBQVNhLHVDQUFULENBQWlERixpQkFBakQsRUFBb0VDLE9BQXBFLEVBQTZFO0FBQzNFLE1BQU1YLFdBQVdXLFFBQVFJLEdBQVIsQ0FBWSxVQUFTQyxLQUFULEVBQWdCO0FBQzNDLFFBQU1DLGNBQWNQLGtCQUFrQk0sS0FBbEIsQ0FBcEI7QUFBQSxRQUE4QztBQUMxQ0UsYUFBUzFCLE9BQU8yQixlQUFQLENBQXVCRixXQUF2QixDQURiOztBQUdBLFdBQU9DLE1BQVA7QUFDRCxHQUxnQixDQUFqQjs7QUFPQSxTQUFPbEIsUUFBUDtBQUNEIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9mYWNldCcpO1xuXG5jb25zdCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGNvbG91ciA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91ciwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbmRleGVzQW5kQ29sb3VyKHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbVZlcnRleENvb3JkaW5hdGVzQW5kSW5kZXhlcyh2ZXJ0ZXhDb29yZGluYXRlcywgaW5kZXhlcyksXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuXG5mdW5jdGlvbiB2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdmVydGV4Q29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21Db29yZGluYXRlcyhjb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG4iXX0=