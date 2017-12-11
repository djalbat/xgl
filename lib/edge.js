'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorMaths = require('./maths/vector');

var subtract3 = vectorMaths.subtract3;

var Edge = function () {
  function Edge(position, extent) {
    _classCallCheck(this, Edge);

    this.position = position;
    this.extent = extent;
  }

  _createClass(Edge, [{
    key: 'clone',
    value: function clone() {
      var position = clonePosition(this.position),
          extent = cloneExtent(this.extent),
          edge = new Edge(position, extent);

      return edge;
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getExtent',
    value: function getExtent() {
      return this.extent;
    }
  }], [{
    key: 'fromStartVertexAndEndVertex',
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

function clonePosition(position) {
  return position.slice();
}

function cloneExtent(extent) {
  return extent.slice();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lZGdlLmpzIl0sIm5hbWVzIjpbInZlY3Rvck1hdGhzIiwicmVxdWlyZSIsInN1YnRyYWN0MyIsIkVkZ2UiLCJwb3NpdGlvbiIsImV4dGVudCIsImNsb25lUG9zaXRpb24iLCJjbG9uZUV4dGVudCIsImVkZ2UiLCJDbGFzcyIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwidW5kZWZpbmVkIiwic3RhcnRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJzbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjQyxRQUFRLGdCQUFSLENBQXBCOztJQUVRQyxTLEdBQWNGLFcsQ0FBZEUsUzs7SUFFRkMsSTtBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUM1QixTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUQsV0FBV0UsY0FBYyxLQUFLRixRQUFuQixDQUFqQjtBQUFBLFVBQ01DLFNBQVNFLFlBQVksS0FBS0YsTUFBakIsQ0FEZjtBQUFBLFVBRU1HLE9BQU8sSUFBSUwsSUFBSixDQUFTQyxRQUFULEVBQW1CQyxNQUFuQixDQUZiOztBQUlBLGFBQU9HLElBQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLSixRQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7Z0RBRWtDSSxLLEVBQU9DLFcsRUFBYUMsUyxFQUFXO0FBQ2hFLFVBQUlBLGNBQWNDLFNBQWxCLEVBQTZCO0FBQzNCRCxvQkFBWUQsV0FBWjtBQUNBQSxzQkFBY0QsS0FBZDtBQUNBQSxnQkFBUU4sSUFBUjtBQUNEOztBQUVELFVBQU1VLGdCQUFnQkgsWUFBWUksV0FBWixFQUF0QjtBQUFBLFVBQ01DLGNBQWNKLFVBQVVHLFdBQVYsRUFEcEI7QUFBQSxVQUVNVixXQUFXUyxjQUFjRyxLQUFkLEVBRmpCO0FBQUEsVUFFd0M7QUFDbENYLGVBQVNILFVBQVVhLFdBQVYsRUFBdUJGLGFBQXZCLENBSGY7QUFBQSxVQUlNTCxPQUFPLElBQUlDLEtBQUosQ0FBVUwsUUFBVixFQUFvQkMsTUFBcEIsQ0FKYjs7QUFNQSxhQUFPRyxJQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCZixJQUFqQjs7QUFFQSxTQUFTRyxhQUFULENBQXVCRixRQUF2QixFQUFpQztBQUFFLFNBQU9BLFNBQVNZLEtBQVQsRUFBUDtBQUEwQjs7QUFFN0QsU0FBU1QsV0FBVCxDQUFxQkYsTUFBckIsRUFBNkI7QUFBRSxTQUFPQSxPQUFPVyxLQUFQLEVBQVA7QUFBd0IiLCJmaWxlIjoiZWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuL21hdGhzL3ZlY3RvcicpO1xuXG5jb25zdCB7IHN1YnRyYWN0MyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjbG9uZVBvc2l0aW9uKHRoaXMucG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBFZGdlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG5cbmZ1bmN0aW9uIGNsb25lUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIHBvc2l0aW9uLnNsaWNlKCk7IH1cblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIl19