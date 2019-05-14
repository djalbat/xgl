'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorMaths = require('../maths/vector');

var subtract3 = vectorMaths.subtract3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvZWRnZS5qcyJdLCJuYW1lcyI6WyJ2ZWN0b3JNYXRocyIsInJlcXVpcmUiLCJzdWJ0cmFjdDMiLCJFZGdlIiwicG9zaXRpb24iLCJleHRlbnQiLCJzbGljZSIsImVkZ2UiLCJDbGFzcyIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwidW5kZWZpbmVkIiwic3RhcnRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsY0FBY0MsUUFBUSxpQkFBUixDQUFwQjs7SUFFUUMsUyxHQUFjRixXLENBQWRFLFM7O0lBRUZDLEk7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzRCQUVPO0FBQ04sVUFBTUQsV0FBVyxLQUFLQSxRQUFMLENBQWNFLEtBQWQsRUFBakI7QUFBQSxVQUNNRCxTQUFTLEtBQUtBLE1BQUwsQ0FBWUMsS0FBWixFQURmO0FBQUEsVUFFTUMsT0FBTyxJQUFJSixJQUFKLENBQVNDLFFBQVQsRUFBbUJDLE1BQW5CLENBRmI7O0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7Z0RBRWtDQyxLLEVBQU9DLFcsRUFBYUMsUyxFQUFXO0FBQ2hFLFVBQUlBLGNBQWNDLFNBQWxCLEVBQTZCO0FBQzNCRCxvQkFBWUQsV0FBWjtBQUNBQSxzQkFBY0QsS0FBZDtBQUNBQSxnQkFBUUwsSUFBUjtBQUNEOztBQUVELFVBQU1TLGdCQUFnQkgsWUFBWUksV0FBWixFQUF0QjtBQUFBLFVBQ01DLGNBQWNKLFVBQVVHLFdBQVYsRUFEcEI7QUFBQSxVQUVNVCxXQUFXUSxjQUFjTixLQUFkLEVBRmpCO0FBQUEsVUFFd0M7QUFDbENELGVBQVNILFVBQVVZLFdBQVYsRUFBdUJGLGFBQXZCLENBSGY7QUFBQSxVQUlNTCxPQUFPLElBQUlDLEtBQUosQ0FBVUosUUFBVixFQUFvQkMsTUFBcEIsQ0FKYjs7QUFNQSxhQUFPRSxJQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCYixJQUFqQiIsImZpbGUiOiJlZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpO1xuXG5jb25zdCB7IHN1YnRyYWN0MyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzcztcbiAgICAgIENsYXNzID0gRWRnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIl19