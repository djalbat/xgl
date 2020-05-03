"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vector = require("../maths/vector");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      extent = (0, _vector.subtract3)(endPosition, startPosition),
          edge = new Class(position, extent);
      return edge;
    }
  }]);

  return Edge;
}();

exports["default"] = Edge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkZ2UuanMiXSwibmFtZXMiOlsiRWRnZSIsInBvc2l0aW9uIiwiZXh0ZW50Iiwic2xpY2UiLCJlZGdlIiwiQ2xhc3MiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInVuZGVmaW5lZCIsInN0YXJ0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQkEsSTtBQUNuQixnQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzRCQUVPO0FBQ04sVUFBTUQsUUFBUSxHQUFHLEtBQUtBLFFBQUwsQ0FBY0UsS0FBZCxFQUFqQjtBQUFBLFVBQ01ELE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlDLEtBQVosRUFEZjtBQUFBLFVBRU1DLElBQUksR0FBRyxJQUFJSixJQUFKLENBQVNDLFFBQVQsRUFBbUJDLE1BQW5CLENBRmI7QUFJQSxhQUFPRSxJQUFQO0FBQ0Q7OztnREFFa0NDLEssRUFBT0MsVyxFQUFhQyxTLEVBQVc7QUFDaEUsVUFBSUEsU0FBUyxLQUFLQyxTQUFsQixFQUE2QjtBQUMzQkQsUUFBQUEsU0FBUyxHQUFHRCxXQUFaO0FBQ0FBLFFBQUFBLFdBQVcsR0FBR0QsS0FBZDtBQUNBQSxRQUFBQSxLQUFLLEdBQUdMLElBQVI7QUFDRDs7QUFFRCxVQUFNUyxhQUFhLEdBQUdILFdBQVcsQ0FBQ0ksV0FBWixFQUF0QjtBQUFBLFVBQ01DLFdBQVcsR0FBR0osU0FBUyxDQUFDRyxXQUFWLEVBRHBCO0FBQUEsVUFFTVQsUUFBUSxHQUFHUSxhQUFhLENBQUNOLEtBQWQsRUFGakI7QUFBQSxVQUV3QztBQUNsQ0QsTUFBQUEsTUFBTSxHQUFHLHVCQUFVUyxXQUFWLEVBQXVCRixhQUF2QixDQUhmO0FBQUEsVUFJTUwsSUFBSSxHQUFHLElBQUlDLEtBQUosQ0FBVUosUUFBVixFQUFvQkMsTUFBcEIsQ0FKYjtBQU1BLGFBQU9FLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzcztcbiAgICAgIENsYXNzID0gRWRnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiJdfQ==