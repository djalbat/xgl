'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    vertexUtilities = require('../utilities/vertex'),
    rotationUtilities = require('../utilities/rotation'),
    approximateUtilities = require('../utilities/approximate');

var normalise3 = vectorUtilities.normalise3,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    calculateForwardsRotationAboutZAxisMatrix = rotationUtilities.calculateForwardsRotationAboutZAxisMatrix,
    calculateBackwardsRotationAboutZAxisMatrix = rotationUtilities.calculateBackwardsRotationAboutZAxisMatrix;

var VerticalLineInXYPlane = function () {
  function VerticalLineInXYPlane(firstPositionComponent, rotationAboutZAxisMatrix) {
    _classCallCheck(this, VerticalLineInXYPlane);

    this.firstPositionComponent = firstPositionComponent;
    this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
  }

  _createClass(VerticalLineInXYPlane, [{
    key: 'getFirstPositionComponent',
    value: function getFirstPositionComponent() {
      return this.firstPositionComponent;
    }
  }, {
    key: 'getRotationAboutZAxisMatrix',
    value: function getRotationAboutZAxisMatrix() {
      return this.rotationAboutZAxisMatrix;
    }
  }, {
    key: 'splitFacets',
    value: function splitFacets(facets) {
      var smallerFacets = [],
          forwardsRotationAboutZAxisMatrix = calculateForwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix),
          backwardsRotationAboutZAxisMatrix = calculateBackwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix);

      facets.forEach(function (facet) {
        facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

        this.splitFacet(facet, smallerFacets);
      }.bind(this));

      smallerFacets.forEach(function (smallerFacet) {
        smallerFacet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
      });

      return smallerFacets;
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet, smallerFacets) {
      var intersections = this.calculateIntersectionsWithFacet(facet);

      facet.split(intersections, smallerFacets);
    }
  }, {
    key: 'calculateIntersectionsWithFacet',
    value: function calculateIntersectionsWithFacet(facet) {
      var edges = facet.getEdges(),
          intersections = edges.map(function (edge) {
        var intersection = this.calculateIntersection(edge);

        return intersection;
      }.bind(this));

      return intersections;
    }
  }, {
    key: 'calculateIntersection',
    value: function calculateIntersection(edge) {
      var intersection = null;

      var edgeNonParallel = isEdgeNonParallel(edge);

      if (edgeNonParallel) {
        var edgeIntersection = this.calculateEdgeIntersection(edge),
            edgeIntersectionNonTrivial = isIntersectionNonTrivial(edgeIntersection);

        if (edgeIntersectionNonTrivial) {
          intersection = edgeIntersection; ///
        }
      }

      return intersection;
    }
  }, {
    key: 'calculateEdgeIntersection',
    value: function calculateEdgeIntersection(edge) {
      var edgePosition = edge.getPosition(),
          edgeExtent = edge.getExtent(),
          edgePositionComponents = edgePosition,
          ///
      edgeExtentComponents = edgeExtent,
          ///
      firstEdgePositionComponent = first(edgePositionComponents),
          firstEdgeExtentComponent = first(edgeExtentComponents),
          edgeIntersection = (this.firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;

      return edgeIntersection;
    }
  }], [{
    key: 'fromEdgeInXYPlane',
    value: function fromEdgeInXYPlane(edgeInXYPlane) {
      var edgeInXYPlanePosition = edgeInXYPlane.getPosition(),
          rotationAboutZAxisMatrix = calculateRotationAboutZAxisMatrix(edgeInXYPlane),
          position = rotateAboutZAxis(edgeInXYPlanePosition, rotationAboutZAxisMatrix),
          positionComponents = position,
          ///
      firstPositionComponent = first(positionComponents),
          verticalLineInXYPlane = new VerticalLineInXYPlane(firstPositionComponent, rotationAboutZAxisMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}();

module.exports = VerticalLineInXYPlane;

function isEdgeNonParallel(edge) {
  var edgeExtent = edge.getExtent(),
      edgeExtentComponents = edgeExtent,
      ///
  firstEdgeExtentComponent = first(edgeExtentComponents),
      secondEdgeExtentComponent = second(edgeExtentComponents),
      edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent,
      edgeAngleTangentApproximatelyEqualToZero = isApproximatelyEqualToZero(edgeAngleTangent),
      edgeParallel = edgeAngleTangentApproximatelyEqualToZero,
      ///
  edgeNonParallel = !edgeParallel;

  return edgeNonParallel;
}

function isIntersectionNonTrivial(intersection) {
  var intersectionNonTrivial = intersection > 0 && intersection < 1;

  return intersectionNonTrivial;
}

function calculateRotationAboutZAxisMatrix(edgeInXYPlane) {
  var edgeInXYPlaneExtent = edgeInXYPlane.getExtent(),
      unitEdgeInXYPlaneExtent = normalise3(edgeInXYPlaneExtent),
      unitEdgeInXYPlaneExtentComponents = unitEdgeInXYPlaneExtent,
      ///
  firstUnitEdgeInXYPlaneExtentComponent = first(unitEdgeInXYPlaneExtentComponents),
      secondUnitEdgeInXYPlaneExtentComponent = second(unitEdgeInXYPlaneExtentComponents),
      angleOfRotationCosine = +secondUnitEdgeInXYPlaneExtentComponent,
      ///
  angleOfRotationSine = -firstUnitEdgeInXYPlaneExtentComponent,
      ///
  c = angleOfRotationCosine,
      s = angleOfRotationSine,
      rotationAboutZAxisMatrix = [c, -s, 0, +s, c, 0, 0, 0, 1]; ///

  return rotationAboutZAxisMatrix;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXNraW5nRmFjZXQvdmVydGljYWxMaW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsInZlY3RvclV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsInJvdGF0aW9uVXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJub3JtYWxpc2UzIiwiZmlyc3QiLCJzZWNvbmQiLCJyb3RhdGVBYm91dFpBeGlzIiwiaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsImZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmYWNldHMiLCJzbWFsbGVyRmFjZXRzIiwiZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmb3JFYWNoIiwiZmFjZXQiLCJzcGxpdEZhY2V0IiwiYmluZCIsInNtYWxsZXJGYWNldCIsImludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0Iiwic3BsaXQiLCJlZGdlcyIsImdldEVkZ2VzIiwibWFwIiwiZWRnZSIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbiIsImVkZ2VOb25QYXJhbGxlbCIsImlzRWRnZU5vblBhcmFsbGVsIiwiZWRnZUludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24iLCJlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCIsImlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCIsImVkZ2VQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZWRnZUV4dGVudCIsImdldEV4dGVudCIsImVkZ2VQb3NpdGlvbkNvbXBvbmVudHMiLCJlZGdlRXh0ZW50Q29tcG9uZW50cyIsImZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50IiwiZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IiwiZWRnZUluWFlQbGFuZSIsImVkZ2VJblhZUGxhbmVQb3NpdGlvbiIsImNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInBvc2l0aW9uIiwicG9zaXRpb25Db21wb25lbnRzIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQiLCJlZGdlQW5nbGVUYW5nZW50IiwiZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImVkZ2VQYXJhbGxlbCIsImludGVyc2VjdGlvbk5vblRyaXZpYWwiLCJlZGdlSW5YWVBsYW5lRXh0ZW50IiwidW5pdEVkZ2VJblhZUGxhbmVFeHRlbnQiLCJ1bml0RWRnZUluWFlQbGFuZUV4dGVudENvbXBvbmVudHMiLCJmaXJzdFVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50Iiwic2Vjb25kVW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnQiLCJhbmdsZU9mUm90YXRpb25Db3NpbmUiLCJhbmdsZU9mUm90YXRpb25TaW5lIiwiYyIsInMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FIMUI7QUFBQSxJQUlNSSx1QkFBdUJKLFFBQVEsMEJBQVIsQ0FKN0I7O0FBTU0sSUFBRUssVUFBRixHQUFpQkosZUFBakIsQ0FBRUksVUFBRjtBQUFBLElBQ0VDLEtBREYsR0FDb0JQLGNBRHBCLENBQ0VPLEtBREY7QUFBQSxJ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LE1BRW9FO0FBQzlERSwwQ0FBd0N6RCxNQUFNd0QsaUNBQU4sQ0FIOUM7QUFBQSxNQUlNRSx5Q0FBeUN6RCxPQUFPdUQsaUNBQVAsQ0FKL0M7QUFBQSxNQUtNRyx3QkFBd0IsQ0FBQ0Qsc0NBTC9CO0FBQUEsTUFLd0U7QUFDbEVFLHdCQUFzQixDQUFDSCxxQ0FON0I7QUFBQSxNQU1vRTtBQUM5REksTUFBSUYscUJBUFY7QUFBQSxNQVFNRyxJQUFJRixtQkFSVjtBQUFBLE1BU01wRCwyQkFBMkIsQ0FBRXFELENBQUYsRUFBSyxDQUFDQyxDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQUNBLENBQWIsRUFBZ0JELENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBVGpDLENBRHdELENBVVc7O0FBRW5FLFNBQU9yRCx3QkFBUDtBQUNEIiwiZmlsZSI6InZlcnRpY2FsTGluZUluWFlQbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JvdGF0aW9uJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IG5vcm1hbGlzZTMgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJvdGF0ZUFib3V0WkF4aXMgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGljYWxMaW5lSW5YWVBsYW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gICAgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgICB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Um90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4KSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgodGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgIFxuICAgIGZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5yb3RhdGVBYm91dFpBeGlzKGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIFxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaChmdW5jdGlvbihzbWFsbGVyRmFjZXQpIHtcbiAgICAgIHNtYWxsZXJGYWNldC5yb3RhdGVBYm91dFpBeGlzKGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0czsgICAgXG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldChmYWNldCk7XG5cbiAgICBmYWNldC5zcGxpdChpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZhY2V0LmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cbiAgXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlKSB7XG4gICAgbGV0IGludGVyc2VjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICAgIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICAgIGNvbnN0IGVkZ2VJbnRlcnNlY3Rpb24gPSB0aGlzLmNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSksXG4gICAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChlZGdlSW50ZXJzZWN0aW9uKTtcblxuICAgICAgaWYgKGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICB9XG5cbiAgY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlKSB7XG4gICAgY29uc3QgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgICAgZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChlZGdlUG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbiA9ICh0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG4gICAgXG4gICAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUVkZ2VJblhZUGxhbmUoZWRnZUluWFlQbGFuZSkge1xuICAgIGNvbnN0IGVkZ2VJblhZUGxhbmVQb3NpdGlvbiA9IGVkZ2VJblhZUGxhbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoZWRnZUluWFlQbGFuZSksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVBYm91dFpBeGlzKGVkZ2VJblhZUGxhbmVQb3NpdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gbmV3IFZlcnRpY2FsTGluZUluWFlQbGFuZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsTGluZUluWFlQbGFuZTtcblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGludGVyc2VjdGlvbikge1xuICBjb25zdCBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gKChpbnRlcnNlY3Rpb24gPiAwICkgJiYgKGludGVyc2VjdGlvbiA8IDEpKTtcblxuICByZXR1cm4gaW50ZXJzZWN0aW9uTm9uVHJpdmlhbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzTWF0cml4KGVkZ2VJblhZUGxhbmUpIHtcbiAgY29uc3QgZWRnZUluWFlQbGFuZUV4dGVudCA9IGVkZ2VJblhZUGxhbmUuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50ID0gbm9ybWFsaXNlMyhlZGdlSW5YWVBsYW5lRXh0ZW50KSxcbiAgICAgICAgdW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnRzID0gdW5pdEVkZ2VJblhZUGxhbmVFeHRlbnQsICAvLy9cbiAgICAgICAgZmlyc3RVbml0RWRnZUluWFlQbGFuZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KHVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKHVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9ICtzZWNvbmRVbml0RWRnZUluWFlQbGFuZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gLWZpcnN0VW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnQsIC8vL1xuICAgICAgICBjID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICBzID0gYW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgcm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gWyBjLCAtcywgMCwgK3MsIGMsIDAsIDAsIDAsIDEgXTsgIC8vL1xuXG4gIHJldHVybiByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG59XG4iXX0=