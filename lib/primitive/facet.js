"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _edge = _interopRequireDefault(require("./edge"));

var _normal = _interopRequireDefault(require("./normal"));

var _vertex = _interopRequireDefault(require("./vertex"));

var _array = require("../utilities/array");

var _constants = require("../constants");

var _facet = require("../utilities/facet");

var _midPoint = require("../utilities/midPoint");

var _intersection = require("../utilities/intersection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Facet = /*#__PURE__*/function () {
  function Facet(vertices, normal, edges) {
    _classCallCheck(this, Facet);

    this.vertices = vertices;
    this.normal = normal;
    this.edges = edges;
  }

  _createClass(Facet, [{
    key: "getVertices",
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: "getNormal",
    value: function getNormal() {
      return this.normal;
    }
  }, {
    key: "getEdges",
    value: function getEdges() {
      return this.edges;
    }
  }, {
    key: "getVertexPositions",
    value: function getVertexPositions() {
      var vertexPositions = this.vertices.map(function (vertex) {
        return vertex.getPosition();
      });
      return vertexPositions;
    }
  }, {
    key: "getVertexNormals",
    value: function getVertexNormals() {
      var normalExtent = this.normal.getExtent(),
          vertexNormal = normalExtent,
          ///
      vertexNormals = [vertexNormal, vertexNormal, vertexNormal];
      return vertexNormals;
    }
  }, {
    key: "getVertexIndexes",
    value: function getVertexIndexes(index) {
      var vertexIndex = index * 3,
          vertexIndexes = [vertexIndex + 0, vertexIndex + 1, vertexIndex + 2];
      return vertexIndexes;
    }
  }, {
    key: "isMasked",
    value: function isMasked(maskingFacet) {
      var maskingEdges = maskingFacet.getMaskingEdges(),
          midPointPosition = (0, _midPoint.calculateMidPointPosition)(this.vertices),
          midPointPositionToOneSideOfMaskingEdges = (0, _midPoint.isMidPointPositionToOneSideOfMaskingEdges)(midPointPosition, maskingEdges),
          masked = midPointPositionToOneSideOfMaskingEdges; ///

      return masked;
    }
  }, {
    key: "permute",
    value: function permute(places) {
      this.vertices = (0, _array.permute)(this.vertices, places);
      this.normal = (0, _facet.calculateNormal)(this.vertices, _normal["default"]);
      this.edges = (0, _facet.calculateEdges)(this.vertices, _edge["default"]);
    }
  }, {
    key: "rotate",
    value: function rotate(rotationQuaternion) {
      this.vertices.forEach(function (vertex) {
        return vertex.rotate(rotationQuaternion);
      });
      this.normal = (0, _facet.calculateNormal)(this.vertices, _normal["default"]);
      this.edges = (0, _facet.calculateEdges)(this.vertices, _edge["default"]);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      this.vertices.forEach(function (vertex) {
        return vertex.applyTransform(transform);
      });
      this.normal = (0, _facet.calculateNormal)(this.vertices, _normal["default"]);
      this.edges = (0, _facet.calculateEdges)(this.vertices, _edge["default"]);
    }
  }, {
    key: "splitWithIntersections",
    value: function splitWithIntersections(intersections, smallerFacets) {
      var nonNullIntersections = (0, _intersection.calculateNonNullIntersections)(intersections),
          nonNullIntersectionsLength = nonNullIntersections.length;

      switch (nonNullIntersectionsLength) {
        case 2:
          this.splitWithTwoNonNullIntersections(intersections, smallerFacets);
          break;

        case 1:
          this.splitWithOneNonNullIntersection(intersections, smallerFacets);
          break;

        case 0:
          this.splitWithNoNonNullIntersections(intersections, smallerFacets);
          break;
      }
    }
  }, {
    key: "splitWithTwoNonNullIntersections",
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets) {
      var nullIntersectionIndex = (0, _intersection.calculateNullIntersectionIndex)(intersections),
          places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
      intersections = (0, _array.permute)(intersections, places);
      intersections = intersections.slice(1); ///

      this.permute(places);
      var startVertexPositionIndexes = [1, 2],
          endVertexPositionIndexes = [2, 0],
          indexTuples = [[0, 1, 3], [3, 4, 0], [3, 2, 4]];
      this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
    }
  }, {
    key: "splitWithOneNonNullIntersection",
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets) {
      var nonNullIntersectionIndex = (0, _intersection.calculateNonNullIntersectionIndex)(intersections),
          places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
      intersections = (0, _array.permute)(intersections, places);
      intersections = intersections.slice(0, 1); ///

      this.permute(places);
      var startVertexPositionIndexes = [0],
          endVertexPositionIndexes = [1],
          indexTuples = [[0, 3, 2], [3, 1, 2]];
      this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
    }
  }, {
    key: "splitWithNoNonNullIntersections",
    value: function splitWithNoNonNullIntersections(intersections, smallerFacets) {
      var smallerFacet = this.fromVertices(this.vertices); ///

      smallerFacets.push(smallerFacet);
    }
  }, {
    key: "splitWithIndexTuplesAndIntersections",
    value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets) {
      var _this = this;

      var vertexPositions = this.getVertexPositions(),
          intermediateVertexPositions = intersections.map(function (intersection, index) {
        var startVertexPositionIndex = startVertexPositionIndexes[index],
            endVertexPositionIndex = endVertexPositionIndexes[index],
            startVertexPosition = vertexPositions[startVertexPositionIndex],
            endVertexPosition = vertexPositions[endVertexPositionIndex],
            intermediateVertexPosition = (0, _intersection.calculateIntermediateVertexPosition)(startVertexPosition, endVertexPosition, intersection);
        return intermediateVertexPosition;
      });
      (0, _array.push)(vertexPositions, intermediateVertexPositions);
      indexTuples.forEach(function (indexTuple) {
        var positions = vertexPositions,
            ///
        indexes = indexTuple,
            ///
        facet = _this,
            smallerFacet = smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet);

        if (smallerFacet !== null) {
          smallerFacets.push(smallerFacet);
        }
      });
    }
  }]);

  return Facet;
}();

exports["default"] = Facet;

function smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet) {
  var vertices = indexes.map(function (index) {
    var position = positions[index];
    position = position.slice(); ///

    var vertex = _vertex["default"].fromPosition(position);

    return vertex;
  }),
      smallerFacet = facet.fromVertices(vertices);
  return smallerFacet;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2V0LmpzIl0sIm5hbWVzIjpbIkZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsInZlcnRleFBvc2l0aW9ucyIsIm1hcCIsInZlcnRleCIsImdldFBvc2l0aW9uIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImluZGV4IiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleGVzIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsIm1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBsYWNlcyIsIk5vcm1hbCIsIkVkZ2UiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJmb3JFYWNoIiwicm90YXRlIiwidHJhbnNmb3JtIiwiYXBwbHlUcmFuc2Zvcm0iLCJpbnRlcnNlY3Rpb25zIiwic21hbGxlckZhY2V0cyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwibm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyIsInNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24iLCJzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zIiwibnVsbEludGVyc2VjdGlvbkluZGV4IiwiVkVSVElDRVNfTEVOR1RIIiwic2xpY2UiLCJwZXJtdXRlIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJpbmRleFR1cGxlcyIsInNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNtYWxsZXJGYWNldCIsImZyb21WZXJ0aWNlcyIsInB1c2giLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJpbnRlcnNlY3Rpb24iLCJzdGFydFZlcnRleFBvc2l0aW9uSW5kZXgiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4Iiwic3RhcnRWZXJ0ZXhQb3NpdGlvbiIsImVuZFZlcnRleFBvc2l0aW9uIiwiaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24iLCJpbmRleFR1cGxlIiwicG9zaXRpb25zIiwiaW5kZXhlcyIsImZhY2V0Iiwic21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldCIsInBvc2l0aW9uIiwiVmVydGV4IiwiZnJvbVBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBS3FCQSxLO0FBQ25CLGlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0YsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUMsZUFBZSxHQUFHLEtBQUtILFFBQUwsQ0FBY0ksR0FBZCxDQUFrQixVQUFDQyxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDQyxXQUFQLEVBQVo7QUFBQSxPQUFsQixDQUF4QjtBQUVBLGFBQU9ILGVBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNSSxZQUFZLEdBQUcsS0FBS04sTUFBTCxDQUFZTyxTQUFaLEVBQXJCO0FBQUEsVUFDTUMsWUFBWSxHQUFHRixZQURyQjtBQUFBLFVBQ29DO0FBQzlCRyxNQUFBQSxhQUFhLEdBQUcsQ0FDZEQsWUFEYyxFQUVkQSxZQUZjLEVBR2RB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QUFtQkYsWUFBbkI7QUFDRDtBQUNGLE9BVEQ7QUFVRDs7Ozs7Ozs7QUFHSCxTQUFTZSx3Q0FBVCxDQUFrREgsU0FBbEQsRUFBNkRDLE9BQTdELEVBQXNFQyxLQUF0RSxFQUE2RTtBQUMzRSxNQUFNM0QsUUFBUSxHQUFHMEQsT0FBTyxDQUFDdEQsR0FBUixDQUFZLFVBQUNPLEtBQUQsRUFBVztBQUNoQyxRQUFJa0QsUUFBUSxHQUFHSixTQUFTLENBQUM5QyxLQUFELENBQXhCO0FBRUFrRCxJQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ3ZCLEtBQVQsRUFBWCxDQUhnQyxDQUdIOztBQUU3QixRQUFNakMsTUFBTSxHQUFHeUQsbUJBQU9DLFlBQVAsQ0FBb0JGLFFBQXBCLENBQWY7O0FBRUEsV0FBT3hELE1BQVA7QUFDRCxHQVJVLENBQWpCO0FBQUEsTUFTTXdDLFlBQVksR0FBR2MsS0FBSyxDQUFDYixZQUFOLENBQW1COUMsUUFBbkIsQ0FUckI7QUFXQSxTQUFPNkMsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlcyh0aGlzLnZlcnRpY2VzKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIl19