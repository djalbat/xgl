'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex');

var rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    fourth = arrayUtilities.fourth,
    add3 = vectorUtilities.add3,
    subtract3 = vectorUtilities.subtract3,
    normalise3 = vectorUtilities.normalise3;

var VerticalLineInXYPlane = function (_LineInXYPlane) {
  _inherits(VerticalLineInXYPlane, _LineInXYPlane);

  function VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix) {
    _classCallCheck(this, VerticalLineInXYPlane);

    var _this = _possibleConstructorReturn(this, (VerticalLineInXYPlane.__proto__ || Object.getPrototypeOf(VerticalLineInXYPlane)).call(this, position, direction));

    _this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
    return _this;
  }

  _createClass(VerticalLineInXYPlane, [{
    key: 'getRotationAboutZAxisMatrix',
    value: function getRotationAboutZAxisMatrix() {
      return this.rotationAboutZAxisMatrix;
    }
  }, {
    key: 'getForwardsRotationAboutZAxisMatrix',
    value: function getForwardsRotationAboutZAxisMatrix() {
      var forwardsRotationAboutZAxisMatrix = this.rotationAboutZAxisMatrix; ///

      return forwardsRotationAboutZAxisMatrix;
    }
  }, {
    key: 'getBackwardsRotationAboutZAxisMatrix',
    value: function getBackwardsRotationAboutZAxisMatrix() {
      var rotationAboutZAxisMatrixComponents = this.rotationAboutZAxisMatrix,
          ///
      firstRotationAboutZAxisMatrixComponent = first(rotationAboutZAxisMatrixComponents),
          fourthRotationAboutZAxisMatrixComponent = fourth(rotationAboutZAxisMatrixComponents),
          c = firstRotationAboutZAxisMatrixComponent,
          ///
      s = fourthRotationAboutZAxisMatrixComponent,
          ///
      backwardsRotationAboutZAxisMatrix = [c, +s, 0, -s, c, 0, 0, 0, 1];

      return backwardsRotationAboutZAxisMatrix;
    }
  }, {
    key: 'splitFacets',
    value: function splitFacets(facets) {
      var forwardsRotationAboutZAxisMatrix = this.getForwardsRotationAboutZAxisMatrix(),
          backwardsRotationAboutZAxisMatrix = this.getBackwardsRotationAboutZAxisMatrix(),
          facetsFromSplit = [];

      facets.forEach(function (facet) {
        facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

        this.splitFacet(facet, facetsFromSplit);
      }.bind(this));

      facetsFromSplit.forEach(function (facetFromSplit) {
        facetFromSplit.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
      });

      return facetsFromSplit;
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet, facetsFromSplit) {
      var intersections = this.calculateIntersectionsWithFacet(facet),
          intersectionsIncludesNull = intersections.includes(null),
          facets = intersectionsIncludesNull ? facet.splitWithNullIntersection(intersections) : facet.splitWithoutNullIntersection(intersections);

      facets.forEach(function (facet) {
        var facetTooSmall = facet.isTooSmall();

        if (!facetTooSmall) {
          var facetFromSplit = facet; ///

          facetsFromSplit.push(facetFromSplit);
        }
      });
    }
  }, {
    key: 'calculateIntersectionsWithFacet',
    value: function calculateIntersectionsWithFacet(facet) {
      var lines = facet.getLines(),
          intersections = lines.map(function (line) {
        var intersection = this.calculateIntersectionWithLine(line);

        return intersection;
      }.bind(this));

      return intersections;
    }
  }, {
    key: 'calculateIntersectionWithLine',
    value: function calculateIntersectionWithLine(line) {
      var intersection = void 0;

      var linePosition = line.getPosition(),
          lineDirection = line.getDirection(),
          linePositionComponents = linePosition,
          ///
      lineDirectionComponents = lineDirection,
          ///
      firstLineDirectionComponent = first(lineDirectionComponents);

      if (firstLineDirectionComponent === 0) {
        intersection = null;
      } else {
        var positionComponents = this.position,
            ///
        firstPositionComponent = first(positionComponents),
            firstLinePositionComponent = first(linePositionComponents);

        intersection = (firstPositionComponent - firstLinePositionComponent) / firstLineDirectionComponent;
      }

      return intersection;
    }
  }], [{
    key: 'fromLineInXYPlane',
    value: function fromLineInXYPlane(lineInXYPlane) {
      var position = lineInXYPlane.getPosition(),
          direction = lineInXYPlane.getDirection();

      var unitDirection = normalise3(direction),
          unitDirectionComponents = unitDirection,
          ///
      firstUnitDirectionComponent = first(unitDirectionComponents),
          secondUnitDirectionComponent = second(unitDirectionComponents),
          angleOfRotationCosine = +secondUnitDirectionComponent,
          ///
      angleOfRotationSine = -firstUnitDirectionComponent,
          ///
      c = angleOfRotationCosine,
          s = angleOfRotationSine,
          rotationAboutZAxisMatrix = [c, -s, 0, +s, c, 0, 0, 0, 1]; ///

      var startVertex = position.slice(),
          endVertex = add3(position, direction);

      startVertex = rotateAboutZAxis(startVertex, rotationAboutZAxisMatrix);
      endVertex = rotateAboutZAxis(endVertex, rotationAboutZAxisMatrix);

      position = startVertex;
      direction = subtract3(endVertex, startVertex);

      var verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}(LineInXYPlane);

module.exports = VerticalLineInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsiTGluZUluWFlQbGFuZSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInZlY3RvclV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsInJvdGF0ZUFib3V0WkF4aXMiLCJmaXJzdCIsInNlY29uZCIsImZvdXJ0aCIsImFkZDMiLCJzdWJ0cmFjdDMiLCJub3JtYWxpc2UzIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMiLCJmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImMiLCJzIiwiYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiZmFjZXRzIiwiZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJnZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmYWNldHNGcm9tU3BsaXQiLCJmb3JFYWNoIiwiZmFjZXQiLCJzcGxpdEZhY2V0IiwiYmluZCIsImZhY2V0RnJvbVNwbGl0IiwiaW50ZXJzZWN0aW9ucyIsImNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQiLCJpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsIiwiaW5jbHVkZXMiLCJzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbiIsImZhY2V0VG9vU21hbGwiLCJpc1Rvb1NtYWxsIiwicHVzaCIsImxpbmVzIiwiZ2V0TGluZXMiLCJtYXAiLCJsaW5lIiwiaW50ZXJzZWN0aW9uIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uV2l0aExpbmUiLCJsaW5lUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxpbmVEaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJsaW5lUG9zaXRpb25Db21wb25lbnRzIiwibGluZURpcmVjdGlvbkNvbXBvbmVudHMiLCJmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQiLCJwb3NpdGlvbkNvbXBvbmVudHMiLCJmaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZmlyc3RMaW5lUG9zaXRpb25Db21wb25lbnQiLCJsaW5lSW5YWVBsYW5lIiwidW5pdERpcmVjdGlvbiIsInVuaXREaXJlY3Rpb25Db21wb25lbnRzIiwiZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50Iiwic2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCIsImFuZ2xlT2ZSb3RhdGlvbkNvc2luZSIsImFuZ2xlT2ZSb3RhdGlvblNpbmUiLCJzdGFydFZlcnRleCIsInNsaWNlIiwiZW5kVmVydGV4IiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FGeEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7O0FBS00sSUFBRUksZ0JBQUYsR0FBdUJELGVBQXZCLENBQUVDLGdCQUFGO0FBQUEsSUFDRUMsS0FERixHQUM0QkosY0FENUIsQ0FDRUksS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDNEJMLGNBRDVCLENBQ1NLLE1BRFQ7QUFBQSxJQUNpQkMsTUFEakIsR0FDNEJOLGNBRDVCLENBQ2lCTSxNQURqQjtBQUFBLElBRUVDLElBRkYsR0FFa0NOLGVBRmxDLENBRUVNLElBRkY7QUFBQSxJQUVRQyxTQUZSLEdBRWtDUCxlQUZsQyxDQUVRTyxTQUZSO0FBQUEs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WXpELEtBQUtJLFFBQUwsRUFBZUMsU0FBZixDQURoQjs7QUFHQWtELG9CQUFjM0QsaUJBQWlCMkQsV0FBakIsRUFBOEJqRCx3QkFBOUIsQ0FBZDtBQUNBbUQsa0JBQVk3RCxpQkFBaUI2RCxTQUFqQixFQUE0Qm5ELHdCQUE1QixDQUFaOztBQUVBRixpQkFBV21ELFdBQVg7QUFDQWxELGtCQUFZSixVQUFVd0QsU0FBVixFQUFxQkYsV0FBckIsQ0FBWjs7QUFFQSxVQUFNRyx3QkFBd0IsSUFBSXZELHFCQUFKLENBQTBCQyxRQUExQixFQUFvQ0MsU0FBcEMsRUFBK0NDLHdCQUEvQyxDQUE5Qjs7QUFFQSxhQUFPb0QscUJBQVA7QUFDRDs7OztFQTVIaUNuRSxhOztBQStIcENvRSxPQUFPQyxPQUFQLEdBQWlCekQscUJBQWpCIiwiZmlsZSI6InZlcnRpY2FsTGluZUluWFlQbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyByb3RhdGVBYm91dFpBeGlzIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmVJblhZUGxhbmUgZXh0ZW5kcyBMaW5lSW5YWVBsYW5lIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGRpcmVjdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gICAgc3VwZXIocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuICBcbiAgZ2V0Um90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIGNvbnN0IGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7IC8vL1xuICAgIFxuICAgIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuICBcbiAgZ2V0QmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIGNvbnN0IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMgPSB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCwgLy8vXG4gICAgICAgICAgZmlyc3RSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQgPSBmaXJzdChyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnRzKSxcbiAgICAgICAgICBmb3VydGhSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQgPSBmb3VydGgocm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50cyksXG4gICAgICAgICAgYyA9IGZpcnN0Um90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50LCAvLy9cbiAgICAgICAgICBzID0gZm91cnRoUm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gWyBjLCArcywgMCwgLXMsIGMsIDAsIDAsIDAsIDEgXTtcbiAgICBcbiAgICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG4gIFxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHRoaXMuZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSB0aGlzLmdldEJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpLFxuICAgICAgICAgIGZhY2V0c0Zyb21TcGxpdCA9IFtdO1xuICAgIFxuICAgIGZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5yb3RhdGVBYm91dFpBeGlzKGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBmYWNldHNGcm9tU3BsaXQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cblxuICAgIGZhY2V0c0Zyb21TcGxpdC5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0RnJvbVNwbGl0KSB7XG4gICAgICBmYWNldEZyb21TcGxpdC5yb3RhdGVBYm91dFpBeGlzKGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFjZXRzRnJvbVNwbGl0OyAgICBcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIGZhY2V0c0Zyb21TcGxpdCkge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnNJbmNsdWRlc051bGwgPSBpbnRlcnNlY3Rpb25zLmluY2x1ZGVzKG51bGwpLFxuICAgICAgICAgIGZhY2V0cyA9IGludGVyc2VjdGlvbnNJbmNsdWRlc051bGwgP1xuICAgICAgICAgICAgICAgICAgICAgZmFjZXQuc3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIGZhY2V0LnNwbGl0V2l0aG91dE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucyk7XG4gICAgXG4gICAgZmFjZXRzLmZvckVhY2goZnVuY3Rpb24oZmFjZXQpIHtcbiAgICAgIGNvbnN0IGZhY2V0VG9vU21hbGwgPSBmYWNldC5pc1Rvb1NtYWxsKCk7XG5cbiAgICAgIGlmICghZmFjZXRUb29TbWFsbCkge1xuICAgICAgICBjb25zdCBmYWNldEZyb21TcGxpdCA9IGZhY2V0OyAvLy9cbiAgICAgICAgXG4gICAgICAgIGZhY2V0c0Zyb21TcGxpdC5wdXNoKGZhY2V0RnJvbVNwbGl0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBsaW5lcyA9IGZhY2V0LmdldExpbmVzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lKGxpbmUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lKGxpbmUpIHtcbiAgICBsZXQgaW50ZXJzZWN0aW9uO1xuXG4gICAgY29uc3QgbGluZVBvc2l0aW9uID0gbGluZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGxpbmVEaXJlY3Rpb24gPSBsaW5lLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIGxpbmVQb3NpdGlvbkNvbXBvbmVudHMgPSBsaW5lUG9zaXRpb24sIC8vL1xuICAgICAgICAgIGxpbmVEaXJlY3Rpb25Db21wb25lbnRzID0gbGluZURpcmVjdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QobGluZURpcmVjdGlvbkNvbXBvbmVudHMpO1xuXG4gICAgaWYgKGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCA9PT0gMCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9zaXRpb25Db21wb25lbnRzID0gdGhpcy5wb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICAgIGZpcnN0TGluZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QobGluZVBvc2l0aW9uQ29tcG9uZW50cyk7XG5cbiAgICAgIGludGVyc2VjdGlvbiA9IChmaXJzdFBvc2l0aW9uQ29tcG9uZW50LSBmaXJzdExpbmVQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbGluZUluWFlQbGFuZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBkaXJlY3Rpb24gPSBsaW5lSW5YWVBsYW5lLmdldERpcmVjdGlvbigpO1xuXG4gICAgY29uc3QgdW5pdERpcmVjdGlvbiA9IG5vcm1hbGlzZTMoZGlyZWN0aW9uKSxcbiAgICAgICAgICB1bml0RGlyZWN0aW9uQ29tcG9uZW50cyA9IHVuaXREaXJlY3Rpb24sICAvLy9cbiAgICAgICAgICBmaXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQgPSBmaXJzdCh1bml0RGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgc2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0RGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gK3NlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQsICAvLy9cbiAgICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gLWZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCwgLy8vXG4gICAgICAgICAgYyA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBzID0gYW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBbIGMsIC1zLCAwLCArcywgYywgMCwgMCwgMCwgMSBdOyAgLy8vXG5cbiAgICBsZXQgc3RhcnRWZXJ0ZXggPSBwb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICBlbmRWZXJ0ZXggPSBhZGQzKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgc3RhcnRWZXJ0ZXggPSByb3RhdGVBYm91dFpBeGlzKHN0YXJ0VmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgIGVuZFZlcnRleCA9IHJvdGF0ZUFib3V0WkF4aXMoZW5kVmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgcG9zaXRpb24gPSBzdGFydFZlcnRleDtcbiAgICBkaXJlY3Rpb24gPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCk7XG5cbiAgICBjb25zdCB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBuZXcgVmVydGljYWxMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lSW5YWVBsYW5lO1xuIl19