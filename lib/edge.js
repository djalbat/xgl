'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorUtilities = require('./utilities/vector');

var subtract3 = vectorUtilities.subtract3;

var Edge = function () {
  function Edge(position, extent) {
    _classCallCheck(this, Edge);

    this.position = position;
    this.extent = extent;
  }

  _createClass(Edge, [{
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getExtent',
    value: function getExtent() {
      return this.extent;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var position = this.position.slice(),
          extent = this.extent.slice(),
          edge = new Edge(position, extent);

      return edge;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(startVertex, endVertex) {
      var position = startVertex.slice(),
          ///
      extent = subtract3(endVertex, startVertex),
          edge = new Edge(position, extent);

      return edge;
    }
  }]);

  return Edge;
}();

module.exports = Edge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lZGdlLmpzIl0sIm5hbWVzIjpbInZlY3RvclV0aWxpdGllcyIsInJlcXVpcmUiLCJzdWJ0cmFjdDMiLCJFZGdlIiwicG9zaXRpb24iLCJleHRlbnQiLCJzbGljZSIsImVkZ2UiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsb0JBQVIsQ0FBeEI7O0lBRVFDLFMsR0FBY0YsZSxDQUFkRSxTOztJQUVGQyxJO0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQU1ELFdBQVcsS0FBS0EsUUFBTCxDQUFjRSxLQUFkLEVBQWpCO0FBQUEsVUFDTUQsU0FBUyxLQUFLQSxNQUFMLENBQVlDLEtBQVosRUFEZjtBQUFBLFVBRU1DLE9BQU8sSUFBSUosSUFBSixDQUFTQyxRQUFULEVBQW1CQyxNQUFuQixDQUZiOztBQUlBLGFBQU9FLElBQVA7QUFDRDs7O2lDQUVtQkMsVyxFQUFhQyxTLEVBQVc7QUFDMUMsVUFBTUwsV0FBV0ksWUFBWUYsS0FBWixFQUFqQjtBQUFBLFVBQXNDO0FBQ2hDRCxlQUFTSCxVQUFVTyxTQUFWLEVBQXFCRCxXQUFyQixDQURmO0FBQUEsVUFFTUQsT0FBTyxJQUFJSixJQUFKLENBQVNDLFFBQVQsRUFBbUJDLE1BQW5CLENBRmI7O0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlIsSUFBakIiLCJmaWxlIjoiZWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgc3VidHJhY3QzIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG4gIFxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcbiAgICBcbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiJdfQ==