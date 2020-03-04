'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var vectorMaths = require('../maths/vector');

var subtract3 = vectorMaths.subtract3;

var Edge = /*#__PURE__*/function () {
  function Edge(position, extent) {
    _classCallCheck(this, Edge);

    this.position = position;
    this.extent = extent;
  }

  _createClass(Edge, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      return this.extent;
    }
  }, {
    key: "clone",
    value: function clone() {
      var position = this.position.slice(),
          extent = this.extent.slice(),
          edge = new Edge(position, extent);
      return edge;
    }
  }], [{
    key: "fromStartVertexAndEndVertex",
    value: function fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
      if (endVertex === undefined) {
        endVertex = startVertex;
        startVertex = Class;
        Class = Edge;
      }

      var startPosition = startVertex.getPosition(),
          endPosition = endVertex.getPosition(),
          position = startPosition.slice(),
          ///
      extent = subtract3(endPosition, startPosition),
          edge = new Class(position, extent);
      return edge;
    }
  }]);

  return Edge;
}();

module.exports = Edge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkZ2UuanMiXSwibmFtZXMiOlsidmVjdG9yTWF0aHMiLCJyZXF1aXJlIiwic3VidHJhY3QzIiwiRWRnZSIsInBvc2l0aW9uIiwiZXh0ZW50Iiwic2xpY2UiLCJlZGdlIiwiQ2xhc3MiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInVuZGVmaW5lZCIsInN0YXJ0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBM0I7O0lBRVFDLFMsR0FBY0YsVyxDQUFkRSxTOztJQUVGQyxJO0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQU1ELFFBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWNFLEtBQWQsRUFBakI7QUFBQSxVQUNNRCxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZQyxLQUFaLEVBRGY7QUFBQSxVQUVNQyxJQUFJLEdBQUcsSUFBSUosSUFBSixDQUFTQyxRQUFULEVBQW1CQyxNQUFuQixDQUZiO0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7Z0RBRWtDQyxLLEVBQU9DLFcsRUFBYUMsUyxFQUFXO0FBQ2hFLFVBQUlBLFNBQVMsS0FBS0MsU0FBbEIsRUFBNkI7QUFDM0JELFFBQUFBLFNBQVMsR0FBR0QsV0FBWjtBQUNBQSxRQUFBQSxXQUFXLEdBQUdELEtBQWQ7QUFDQUEsUUFBQUEsS0FBSyxHQUFHTCxJQUFSO0FBQ0Q7O0FBRUQsVUFBTVMsYUFBYSxHQUFHSCxXQUFXLENBQUNJLFdBQVosRUFBdEI7QUFBQSxVQUNNQyxXQUFXLEdBQUdKLFNBQVMsQ0FBQ0csV0FBVixFQURwQjtBQUFBLFVBRU1ULFFBQVEsR0FBR1EsYUFBYSxDQUFDTixLQUFkLEVBRmpCO0FBQUEsVUFFd0M7QUFDbENELE1BQUFBLE1BQU0sR0FBR0gsU0FBUyxDQUFDWSxXQUFELEVBQWNGLGFBQWQsQ0FIeEI7QUFBQSxVQUlNTCxJQUFJLEdBQUcsSUFBSUMsS0FBSixDQUFVSixRQUFWLEVBQW9CQyxNQUFwQixDQUpiO0FBTUEsYUFBT0UsSUFBUDtBQUNEOzs7Ozs7QUFHSFEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyBzdWJ0cmFjdDMgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IEVkZ2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiJdfQ==