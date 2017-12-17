'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
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
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }], [{
    key: 'fromVertexCoordinatesIndexesAndColour',
    value: function fromVertexCoordinatesIndexesAndColour(vertexCoordinates, indexes, colour) {
      var vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes),
          normal = calculateNormal(vertices, Normal),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiZmFjZXRVdGlsaXRpZXMiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJDb2xvdXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImNvbG91ciIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJjb2xvdXJlZEZhY2V0IiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsInZlcnRleENvb3JkaW5hdGVzIiwiaW5kZXhlcyIsInZlcnRpY2VzRnJvbVZlcnRleENvb3JkaW5hdGVzQW5kSW5kZXhlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXAiLCJpbmRleCIsImNvb3JkaW5hdGVzIiwidmVydGV4IiwiZnJvbUNvb3JkaW5hdGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxTQUFTRixRQUFRLFdBQVIsQ0FGZjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksaUJBQWlCSixRQUFRLG9CQUFSLENBSnZCOztJQU1RSyxVLEdBQTRFRCxjLENBQTVFQyxVO0lBQVlDLFcsR0FBZ0VGLGMsQ0FBaEVFLFc7SUFBYUMsYSxHQUFtREgsYyxDQUFuREcsYTtJQUFlQyxjLEdBQW9DSixjLENBQXBDSSxjO0lBQWdCQyxlLEdBQW9CTCxjLENBQXBCSyxlOztJQUUxREMsYTs7O0FBQ0oseUJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixFQUFxQ0MsTUFBckMsRUFBNkM7QUFBQTs7QUFBQSw4SEFDckNILFFBRHFDLEVBQzNCQyxNQUQyQixFQUNuQkMsS0FEbUI7O0FBRzNDLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUgyQztBQUk1Qzs7Ozs0QkFFTztBQUNOLFVBQUlILFdBQVcsS0FBS0ksV0FBTCxFQUFmO0FBQUEsVUFDSUgsU0FBUyxLQUFLSSxTQUFMLEVBRGI7QUFBQSxVQUVJSCxRQUFRLEtBQUtJLFFBQUwsRUFGWjs7QUFJQU4saUJBQVdKLGNBQWNJLFFBQWQsQ0FBWDtBQUNBQyxlQUFTTixZQUFZTSxNQUFaLENBQVQ7QUFDQUMsY0FBUVIsV0FBV1EsS0FBWCxDQUFSOztBQUVBLFVBQU1DLFNBQVMsS0FBS0EsTUFBcEI7QUFBQSxVQUNNSSxnQkFBZ0IsSUFBSVIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsTUFBM0MsQ0FEdEI7O0FBR0EsYUFBT0ksYUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtKLE1BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNSyxlQUFlLEtBQUtMLE1BQTFCO0FBQUEsVUFBa0M7QUFDNUJNLHNCQUFnQixDQUNkRCxZQURjLEVBRWRBLFlBRmMsRUFHZEEsWUFIYyxDQUR0Qjs7QUFPQSxhQUFPQyxhQUFQO0FBQ0Q7OztpQ0FFWVQsUSxFQUFVO0FBQ3JCLFVBQU1HLFNBQVMsS0FBS0EsTUFBcEI7QUFBQSxVQUNNRixTQUFTSCxnQkFBZ0JFLFFBQWhCLEVBQTBCVCxNQUExQixDQURmO0FBQUEsVUFFTVcsUUFBUUwsZUFBZUcsUUFBZixFQUF5QlosSUFBekIsQ0FGZDtBQUFBLFVBR01tQixnQkFBZ0IsSUFBSVIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsTUFBM0MsQ0FIdEI7O0FBS0EsYUFBT0ksYUFBUDtBQUNEOzs7MERBRTRDRyxpQixFQUFtQkMsTyxFQUFTUixNLEVBQVE7QUFDL0UsVUFBTUgsV0FBV1ksd0NBQXdDRixpQkFBeEMsRUFBMkRDLE9BQTNELENBQWpCO0FBQUEsVUFDTVYsU0FBU0gsZ0JBQWdCRSxRQUFoQixFQUEwQlQsTUFBMUIsQ0FEZjtBQUFBLFVBRU1XLFFBQVFMLGVBQWVHLFFBQWYsRUFBeUJaLElBQXpCLENBRmQ7QUFBQSxVQUdNbUIsZ0JBQWdCLElBQUlSLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLE1BQTNDLENBSHRCOztBQUtBLGFBQU9JLGFBQVA7QUFDRDs7OztFQXJEeUJqQixLOztBQXdENUJ1QixPQUFPQyxPQUFQLEdBQWlCZixhQUFqQjs7QUFFQSxTQUFTYSx1Q0FBVCxDQUFpREYsaUJBQWpELEVBQW9FQyxPQUFwRSxFQUE2RTtBQUMzRSxNQUFNWCxXQUFXVyxRQUFRSSxHQUFSLENBQVksVUFBU0MsS0FBVCxFQUFnQjtBQUMzQyxRQUFNQyxjQUFjUCxrQkFBa0JNLEtBQWxCLENBQXBCO0FBQUEsUUFBOEM7QUFDeENFLGFBQVMxQixPQUFPMkIsZUFBUCxDQUF1QkYsV0FBdkIsQ0FEZjs7QUFHQSxXQUFPQyxNQUFQO0FBQ0QsR0FMZ0IsQ0FBakI7O0FBT0EsU0FBT2xCLFFBQVA7QUFDRCIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9mYWNldCcpO1xuXG5jb25zdCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGNvbG91ciA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91ciwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhDb29yZGluYXRlc0luZGV4ZXNBbmRDb2xvdXIodmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tVmVydGV4Q29vcmRpbmF0ZXNBbmRJbmRleGVzKHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzKSxcbiAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBjb2xvdXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcblxuZnVuY3Rpb24gdmVydGljZXNGcm9tVmVydGV4Q29vcmRpbmF0ZXNBbmRJbmRleGVzKHZlcnRleENvb3JkaW5hdGVzLCBpbmRleGVzKSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHZlcnRleENvb3JkaW5hdGVzW2luZGV4XSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21Db29yZGluYXRlcyhjb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG4iXX0=