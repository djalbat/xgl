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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lZGdlLmpzIl0sIm5hbWVzIjpbInZlY3Rvck1hdGhzIiwicmVxdWlyZSIsInN1YnRyYWN0MyIsIkVkZ2UiLCJwb3NpdGlvbiIsImV4dGVudCIsInNsaWNlIiwiZWRnZSIsIkNsYXNzIiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJ1bmRlZmluZWQiLCJzdGFydFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjQyxRQUFRLGdCQUFSLENBQXBCOztJQUVRQyxTLEdBQWNGLFcsQ0FBZEUsUzs7SUFFRkMsSTtBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBOztBQUM1QixTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7NEJBRU87QUFDTixVQUFNRCxXQUFXLEtBQUtBLFFBQUwsQ0FBY0UsS0FBZCxFQUFqQjtBQUFBLFVBQ01ELFNBQVMsS0FBS0EsTUFBTCxDQUFZQyxLQUFaLEVBRGY7QUFBQSxVQUVNQyxPQUFPLElBQUlKLElBQUosQ0FBU0MsUUFBVCxFQUFtQkMsTUFBbkIsQ0FGYjs7QUFJQSxhQUFPRSxJQUFQO0FBQ0Q7OztnREFFa0NDLEssRUFBT0MsVyxFQUFhQyxTLEVBQVc7QUFDaEUsVUFBSUEsY0FBY0MsU0FBbEIsRUFBNkI7QUFDM0JELG9CQUFZRCxXQUFaO0FBQ0FBLHNCQUFjRCxLQUFkO0FBQ0FBLGdCQUFRTCxJQUFSO0FBQ0Q7O0FBRUQsVUFBTVMsZ0JBQWdCSCxZQUFZSSxXQUFaLEVBQXRCO0FBQUEsVUFDTUMsY0FBY0osVUFBVUcsV0FBVixFQURwQjtBQUFBLFVBRU1ULFdBQVdRLGNBQWNOLEtBQWQsRUFGakI7QUFBQSxVQUV3QztBQUNsQ0QsZUFBU0gsVUFBVVksV0FBVixFQUF1QkYsYUFBdkIsQ0FIZjtBQUFBLFVBSU1MLE9BQU8sSUFBSUMsS0FBSixDQUFVSixRQUFWLEVBQW9CQyxNQUFwQixDQUpiOztBQU1BLGFBQU9FLElBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJiLElBQWpCIiwiZmlsZSI6ImVkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyBzdWJ0cmFjdDMgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IEVkZ2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiJdfQ==