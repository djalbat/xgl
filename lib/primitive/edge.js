"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var vectorMaths = require("../maths/vector");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkZ2UuanMiXSwibmFtZXMiOlsidmVjdG9yTWF0aHMiLCJyZXF1aXJlIiwic3VidHJhY3QzIiwiRWRnZSIsInBvc2l0aW9uIiwiZXh0ZW50Iiwic2xpY2UiLCJlZGdlIiwiQ2xhc3MiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInVuZGVmaW5lZCIsInN0YXJ0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBM0I7O0lBRVFDLFMsR0FBY0YsVyxDQUFkRSxTOztJQUVGQyxJO0FBQ0osZ0JBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQU1ELFFBQVEsR0FBRyxLQUFLQSxRQUFMLENBQWNFLEtBQWQsRUFBakI7QUFBQSxVQUNNRCxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZQyxLQUFaLEVBRGY7QUFBQSxVQUVNQyxJQUFJLEdBQUcsSUFBSUosSUFBSixDQUFTQyxRQUFULEVBQW1CQyxNQUFuQixDQUZiO0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7Z0RBRWtDQyxLLEVBQU9DLFcsRUFBYUMsUyxFQUFXO0FBQ2hFLFVBQUlBLFNBQVMsS0FBS0MsU0FBbEIsRUFBNkI7QUFDM0JELFFBQUFBLFNBQVMsR0FBR0QsV0FBWjtBQUNBQSxRQUFBQSxXQUFXLEdBQUdELEtBQWQ7QUFDQUEsUUFBQUEsS0FBSyxHQUFHTCxJQUFSO0FBQ0Q7O0FBRUQsVUFBTVMsYUFBYSxHQUFHSCxXQUFXLENBQUNJLFdBQVosRUFBdEI7QUFBQSxVQUNNQyxXQUFXLEdBQUdKLFNBQVMsQ0FBQ0csV0FBVixFQURwQjtBQUFBLFVBRU1ULFFBQVEsR0FBR1EsYUFBYSxDQUFDTixLQUFkLEVBRmpCO0FBQUEsVUFFd0M7QUFDbENELE1BQUFBLE1BQU0sR0FBR0gsU0FBUyxDQUFDWSxXQUFELEVBQWNGLGFBQWQsQ0FIeEI7QUFBQSxVQUlNTCxJQUFJLEdBQUcsSUFBSUMsS0FBSixDQUFVSixRQUFWLEVBQW9CQyxNQUFwQixDQUpiO0FBTUEsYUFBT0UsSUFBUDtBQUNEOzs7Ozs7QUFHSFEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi9tYXRocy92ZWN0b3JcIik7XG5cbmNvbnN0IHsgc3VidHJhY3QzIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBFZGdlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iXX0=