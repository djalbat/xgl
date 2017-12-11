'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
    key: 'splitWithTwoNonNullIntersections',
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) {
      _get(ColouredFacet.prototype.__proto__ || Object.getPrototypeOf(ColouredFacet.prototype), 'splitWithTwoNonNullIntersections', this).call(this, intersections, smallerFacets, this);
    } ///

  }, {
    key: 'splitWithOneNonNullIntersection',
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) {
      _get(ColouredFacet.prototype.__proto__ || Object.getPrototypeOf(ColouredFacet.prototype), 'splitWithOneNonNullIntersection', this).call(this, intersections, smallerFacets, this);
    } ///

  }, {
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal(),
          edges = this.getEdges();

      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);

      var colour = this.colour.slice(),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
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
      var vertices = indexes.map(function (index) {
        var coordinates = vertexCoordinates[index],
            vertex = Vertex.fromCoordinates(coordinates);

        return vertex;
      }),
          normal = calculateNormal(vertices),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiVmVydGV4IiwiZmFjZXRVdGlsaXRpZXMiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJDb2xvdXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImNvbG91ciIsInZlcnRleENvbG91ciIsInZlcnRleENvbG91cnMiLCJpbnRlcnNlY3Rpb25zIiwic21hbGxlckZhY2V0cyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJzbGljZSIsImNvbG91cmVkRmFjZXQiLCJ2ZXJ0ZXhDb29yZGluYXRlcyIsImluZGV4ZXMiLCJtYXAiLCJpbmRleCIsImNvb3JkaW5hdGVzIiwidmVydGV4IiwiZnJvbUNvb3JkaW5hdGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxTQUFTRixRQUFRLFdBQVIsQ0FGZjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUh2Qjs7SUFLUUksVSxHQUE0RUQsYyxDQUE1RUMsVTtJQUFZQyxXLEdBQWdFRixjLENBQWhFRSxXO0lBQWFDLGEsR0FBbURILGMsQ0FBbkRHLGE7SUFBZUMsYyxHQUFvQ0osYyxDQUFwQ0ksYztJQUFnQkMsZSxHQUFvQkwsYyxDQUFwQkssZTs7SUFFMURDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUNDLE1BQXJDLEVBQTZDO0FBQUE7O0FBQUEsOEhBQ3JDSCxRQURxQyxFQUMzQkMsTUFEMkIsRUFDbkJDLEtBRG1COztBQUczQyxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIMkM7QUFJNUM7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxlQUFlLEtBQUtELE1BQTFCO0FBQUEsVUFBa0M7QUFDNUJFLHNCQUFnQixDQUNkRCxZQURjLEVBRWRBLFlBRmMsRUFHZEEsWUFIYyxDQUR0Qjs7QUFPQSxhQUFPQyxhQUFQO0FBQ0Q7OztxREFFZ0NDLGEsRUFBZUMsYSxFQUFlaEIsSyxFQUFPO0FBQUUscUpBQXVDZSxhQUF2QyxFQUFzREMsYUFBdEQsRUFBcUUsSUFBckU7QUFBNkUsSyxDQUFDOzs7O29EQUV0SEQsYSxFQUFlQyxhLEVBQWVoQixLLEVBQU87QUFBRSxvSkFBc0NlLGFBQXRDLEVBQXFEQyxhQUFyRCxFQUFvRSxJQUFwRTtBQUE0RSxLLENBQUM7Ozs7NEJBRTVJO0FBQ04sVUFBSVAsV0FBVyxLQUFLUSxXQUFMLEVBQWY7QUFBQSxVQUNJUCxTQUFTLEtBQUtRLFNBQUwsRUFEYjtBQUFBLFVBRUlQLFFBQVEsS0FBS1EsUUFBTCxFQUZaOztBQUlBVixpQkFBV0osY0FBY0ksUUFBZCxDQUFYO0FBQ0FDLGVBQVNOLFlBQVlNLE1BQVosQ0FBVDtBQUNBQyxjQUFRUixXQUFXUSxLQUFYLENBQVI7O0FBRUEsVUFBTUMsU0FBUyxLQUFLQSxNQUFMLENBQVlRLEtBQVosRUFBZjtBQUFBLFVBQ01DLGdCQUFnQixJQUFJYixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxNQUEzQyxDQUR0Qjs7QUFHQSxhQUFPUyxhQUFQO0FBQ0Q7OztpQ0FFWVosUSxFQUFVO0FBQ3JCLFVBQU1HLFNBQVMsS0FBS0EsTUFBcEI7QUFBQSxVQUNNRixTQUFTSCxnQkFBZ0JFLFFBQWhCLENBRGY7QUFBQSxVQUVNRSxRQUFRTCxlQUFlRyxRQUFmLEVBQXlCWCxJQUF6QixDQUZkO0FBQUEsVUFHTXVCLGdCQUFnQixJQUFJYixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxNQUEzQyxDQUh0Qjs7QUFLQSxhQUFPUyxhQUFQO0FBQ0Q7OzswREFFNENDLGlCLEVBQW1CQyxPLEVBQVNYLE0sRUFBUTtBQUMvRSxVQUFNSCxXQUFZYyxRQUFRQyxHQUFSLENBQVksVUFBU0MsS0FBVCxFQUFnQjtBQUN0QyxZQUFNQyxjQUFjSixrQkFBa0JHLEtBQWxCLENBQXBCO0FBQUEsWUFDTUUsU0FBUzFCLE9BQU8yQixlQUFQLENBQXVCRixXQUF2QixDQURmOztBQUdBLGVBQU9DLE1BQVA7QUFDRCxPQUxXLENBQWxCO0FBQUEsVUFNTWpCLFNBQVNILGdCQUFnQkUsUUFBaEIsQ0FOZjtBQUFBLFVBT01FLFFBQVFMLGVBQWVHLFFBQWYsRUFBeUJYLElBQXpCLENBUGQ7QUFBQSxVQVFNdUIsZ0JBQWdCLElBQUliLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLE1BQTNDLENBUnRCOztBQVVBLGFBQU9TLGFBQVA7QUFDRDs7OztFQTlEeUJyQixLOztBQWlFNUI2QixPQUFPQyxPQUFQLEdBQWlCdEIsYUFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZhY2V0Jyk7XG5cbmNvbnN0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91ciwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgRmFjZXQpIHsgc3VwZXIuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgdGhpcyk7IH0gLy8vXG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBGYWNldCkgeyBzdXBlci5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIHRoaXMpOyB9IC8vL1xuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG4gICAgXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBjb2xvdXIgPSB0aGlzLmNvbG91ci5zbGljZSgpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbmRleGVzQW5kQ29sb3VyKHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyAgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB2ZXJ0ZXhDb29yZGluYXRlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkRmFjZXQ7XG4iXX0=