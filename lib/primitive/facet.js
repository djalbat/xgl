"use strict";

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

module.exports = Facet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2V0LmpzIl0sIm5hbWVzIjpbIkZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsInZlcnRleFBvc2l0aW9ucyIsIm1hcCIsInZlcnRleCIsImdldFBvc2l0aW9uIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImluZGV4IiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleGVzIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsIm1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBsYWNlcyIsIk5vcm1hbCIsIkVkZ2UiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJmb3JFYWNoIiwicm90YXRlIiwidHJhbnNmb3JtIiwiYXBwbHlUcmFuc2Zvcm0iLCJpbnRlcnNlY3Rpb25zIiwic21hbGxlckZhY2V0cyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwibm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyIsInNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24iLCJzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zIiwibnVsbEludGVyc2VjdGlvbkluZGV4IiwiVkVSVElDRVNfTEVOR1RIIiwic2xpY2UiLCJwZXJtdXRlIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJpbmRleFR1cGxlcyIsInNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNtYWxsZXJGYWNldCIsImZyb21WZXJ0aWNlcyIsInB1c2giLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJpbnRlcnNlY3Rpb24iLCJzdGFydFZlcnRleFBvc2l0aW9uSW5kZXgiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4Iiwic3RhcnRWZXJ0ZXhQb3NpdGlvbiIsImVuZFZlcnRleFBvc2l0aW9uIiwiaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24iLCJpbmRleFR1cGxlIiwicG9zaXRpb25zIiwiaW5kZXhlcyIsImZhY2V0Iiwic21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwb3NpdGlvbiIsIlZlcnRleCIsImZyb21Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFLTUEsSztBQUNKLGlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0YsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUMsZUFBZSxHQUFHLEtBQUtILFFBQUwsQ0FBY0ksR0FBZCxDQUFrQixVQUFDQyxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDQyxXQUFQLEVBQVo7QUFBQSxPQUFsQixDQUF4QjtBQUVBLGFBQU9ILGVBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNSSxZQUFZLEdBQUcsS0FBS04sTUFBTCxDQUFZTyxTQUFaLEVBQXJCO0FBQUEsVUFDTUMsWUFBWSxHQUFHRixZQURyQjtBQUFBLFVBQ29DO0FBQzlCRyxNQUFBQSxhQUFhLEdBQUcsQ0FDZEQsWUFEYyxFQUVk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QUFDa0IsSUFBZCxDQUFtQkYsWUFBbkI7QUFDRDtBQUNGLE9BVEQ7QUFVRDs7Ozs7O0FBR0hnQixNQUFNLENBQUNDLE9BQVAsR0FBaUIvRCxLQUFqQjs7QUFFQSxTQUFTNkQsd0NBQVQsQ0FBa0RILFNBQWxELEVBQTZEQyxPQUE3RCxFQUFzRUMsS0FBdEUsRUFBNkU7QUFDM0UsTUFBTTNELFFBQVEsR0FBRzBELE9BQU8sQ0FBQ3RELEdBQVIsQ0FBWSxVQUFDTyxLQUFELEVBQVc7QUFDaEMsUUFBSW9ELFFBQVEsR0FBR04sU0FBUyxDQUFDOUMsS0FBRCxDQUF4QjtBQUVBb0QsSUFBQUEsUUFBUSxHQUFHQSxRQUFRLENBQUN6QixLQUFULEVBQVgsQ0FIZ0MsQ0FHSDs7QUFFN0IsUUFBTWpDLE1BQU0sR0FBRzJELG1CQUFPQyxZQUFQLENBQW9CRixRQUFwQixDQUFmOztBQUVBLFdBQU8xRCxNQUFQO0FBQ0QsR0FSVSxDQUFqQjtBQUFBLE1BU013QyxZQUFZLEdBQUdjLEtBQUssQ0FBQ2IsWUFBTixDQUFtQjlDLFFBQW5CLENBVHJCO0FBV0EsU0FBTzZDLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgcHVzaCwgcGVybXV0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICAgICAgICAgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb259IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCBub3JtYWxFeHRlbnQgPSB0aGlzLm5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxFeHRlbnQsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXMoaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGluZGV4ICogMyxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAwLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAxLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZXMgPSBtYXNraW5nRmFjZXQuZ2V0TWFza2luZ0VkZ2VzKCksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAwIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSk7IC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSwgMiBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMiwgMCBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgICAgIFsgMywgNCwgMCBdLFxuICAgICAgICAgICAgWyAzLCAyLCA0IF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDAsIDEpOyAgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAwIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMywgMiBdLFxuICAgICAgICAgICAgWyAzLCAxLCAyIF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpcy5mcm9tVmVydGljZXModGhpcy52ZXJ0aWNlcyk7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzQW5kRmFjZXQocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCk7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnNsaWNlKCk7IC8vL1xuICAgIFxuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSksXG4gICAgICAgIHNtYWxsZXJGYWNldCA9IGZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiJdfQ==