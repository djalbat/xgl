'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('./maths/vec3'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array');

var add = vec3.add,
    subtract = vec3.subtract,
    normalise = vec3.normalise,
    transform = vec3.transform,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    fourth = arrayUtilities.fourth;

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
          backwardsRotationAboutZAxisMatrix = this.getBackwardsRotationAboutZAxisMatrix();

      facets = facets.reduce(function (facets, facet) {
        facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

        var facetsFromSplit = this.splitFacet(facet);

        facetsFromSplit.forEach(function (facetFromSplit) {
          facetFromSplit.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
        });

        facets = facets.concat(facetsFromSplit);

        return facets;
      }.bind(this), []);

      return facets;
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet) {
      var intersections = this.calculateIntersectionsWithFacet(facet),
          intersectionsIncludesNull = intersections.includes(null),
          facets = intersectionsIncludesNull ? facet.splitWithNullIntersection(intersections) : facet.splitWithoutNullIntersection(intersections),
          facetsFromSplit = facets.reduce(function (facetsFromSplit, facet) {
        var facetTooSmall = facet.isTooSmall();

        if (!facetTooSmall) {
          var facetFromSplit = facet; ///

          facetsFromSplit.push(facetFromSplit);
        }

        return facetsFromSplit;
      }, []);

      return facetsFromSplit;
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

      var unitDirection = normalise(direction),
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
          endVertex = add(position, direction);

      startVertex = rotateVertex(startVertex, rotationAboutZAxisMatrix);
      endVertex = rotateVertex(endVertex, rotationAboutZAxisMatrix);

      position = startVertex;
      direction = subtract(endVertex, startVertex);

      var verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}(LineInXYPlane);

module.exports = VerticalLineInXYPlane;

function rotateVertex(vertex, rotationAboutZAxisMatrix) {
  var vec = vertex; ///

  var mat3 = rotationAboutZAxisMatrix; ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJMaW5lSW5YWVBsYW5lIiwiYXJyYXlVdGlsaXRpZXMiLCJhZGQiLCJzdWJ0cmFjdCIsIm5vcm1hbGlzZSIsInRyYW5zZm9ybSIsImZpcnN0Iiwic2Vjb25kIiwiZm91cnRoIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMiLCJmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImMiLCJzIiwiYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiZmFjZXRzIiwiZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJnZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJyZWR1Y2UiLCJmYWNldCIsInJvdGF0ZUFib3V0WkF4aXMiLCJmYWNldHNGcm9tU3BsaXQiLCJzcGxpdEZhY2V0IiwiZm9yRWFjaCIsImZhY2V0RnJvbVNwbGl0IiwiY29uY2F0IiwiYmluZCIsImludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0IiwiaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCIsImluY2x1ZGVzIiwic3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbiIsInNwbGl0V2l0aG91dE51bGxJbnRlcnNlY3Rpb24iLCJmYWNldFRvb1NtYWxsIiwiaXNUb29TbWFsbCIsInB1c2giLCJsaW5lcyIsImdldExpbmVzIiwibWFwIiwibGluZSIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lIiwibGluZVBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsaW5lRGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwibGluZVBvc2l0aW9uQ29tcG9uZW50cyIsImxpbmVEaXJlY3Rpb25Db21wb25lbnRzIiwiZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50IiwicG9zaXRpb25Db21wb25lbnRzIiwiZmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsImZpcnN0TGluZVBvc2l0aW9uQ29tcG9uZW50IiwibGluZUluWFlQbGFuZSIsInVuaXREaXJlY3Rpb24iLCJ1bml0RGlyZWN0aW9uQ29tcG9uZW50cyIsImZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCIsInNlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQiLCJhbmdsZU9mUm90YXRpb25Db3NpbmUiLCJhbmdsZU9mUm90YXRpb25TaW5lIiwic3RhcnRWZXJ0ZXgiLCJzbGljZSIsImVuZFZlcnRleCIsInJvdGF0ZVZlcnRleCIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ2ZXJ0ZXgiLCJ2ZWMiLCJtYXQzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLGlCQUFSLENBRHRCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCOztJQUlRRyxHLEdBQXdDSixJLENBQXhDSSxHO0lBQUtDLFEsR0FBbUNMLEksQ0FBbkNLLFE7SUFBVUMsUyxHQUF5Qk4sSSxDQUF6Qk0sUztJQUFXQyxTLEdBQWNQLEksQ0FBZE8sUztJQUMxQkMsSyxHQUEwQkwsYyxDQUExQkssSztJQUFPQyxNLEdBQW1CTixjLENBQW5CTSxNO0lBQVFDLE0sR0FBV1AsYyxDQUFYTyxNOztJQUVqQkMscUI7OztBQUNKLGlDQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQ0Msd0JBQWpDLEVBQTJEO0FBQUE7O0FBQUEsOElB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U0FBU3VELEtBQVQsRUFBbEI7QUFBQSxVQUNJQyxZQUFZaEUsSUFBSVEsUUFBSixFQUFjQyxTQUFkLENBRGhCOztBQUdBcUQsb0JBQWNHLGFBQWFILFdBQWIsRUFBMEJwRCx3QkFBMUIsQ0FBZDtBQUNBc0Qsa0JBQVlDLGFBQWFELFNBQWIsRUFBd0J0RCx3QkFBeEIsQ0FBWjs7QUFFQUYsaUJBQVdzRCxXQUFYO0FBQ0FyRCxrQkFBWVIsU0FBUytELFNBQVQsRUFBb0JGLFdBQXBCLENBQVo7O0FBRUEsVUFBTUksd0JBQXdCLElBQUkzRCxxQkFBSixDQUEwQkMsUUFBMUIsRUFBb0NDLFNBQXBDLEVBQStDQyx3QkFBL0MsQ0FBOUI7O0FBRUEsYUFBT3dELHFCQUFQO0FBQ0Q7Ozs7RUFqSWlDcEUsYTs7QUFvSXBDcUUsT0FBT0MsT0FBUCxHQUFpQjdELHFCQUFqQjs7QUFFQSxTQUFTMEQsWUFBVCxDQUFzQkksTUFBdEIsRUFBOEIzRCx3QkFBOUIsRUFBd0Q7QUFDdEQsTUFBSTRELE1BQU1ELE1BQVYsQ0FEc0QsQ0FDcEM7O0FBRWxCLE1BQU1FLE9BQU83RCx3QkFBYixDQUhzRCxDQUdkOztBQUV4QzRELFFBQU1uRSxVQUFVbUUsR0FBVixFQUFlQyxJQUFmLENBQU47O0FBRUFGLFdBQVNDLEdBQVQsQ0FQc0QsQ0FPeEM7O0FBRWQsU0FBT0QsTUFBUDtBQUNEIiwiZmlsZSI6InZlcnRpY2FsTGluZUluWFlQbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMycpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGFkZCwgc3VidHJhY3QsIG5vcm1hbGlzZSwgdHJhbnNmb3JtIH0gPSB2ZWMzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmVJblhZUGxhbmUgZXh0ZW5kcyBMaW5lSW5YWVBsYW5lIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGRpcmVjdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gICAgc3VwZXIocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuICBcbiAgZ2V0Um90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIGNvbnN0IGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7IC8vL1xuICAgIFxuICAgIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuICBcbiAgZ2V0QmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIGNvbnN0IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMgPSB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCwgLy8vXG4gICAgICAgICAgZmlyc3RSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQgPSBmaXJzdChyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnRzKSxcbiAgICAgICAgICBmb3VydGhSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQgPSBmb3VydGgocm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50cyksXG4gICAgICAgICAgYyA9IGZpcnN0Um90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50LCAvLy9cbiAgICAgICAgICBzID0gZm91cnRoUm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gWyBjLCArcywgMCwgLXMsIGMsIDAsIDAsIDAsIDEgXTtcbiAgICBcbiAgICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG4gIFxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHRoaXMuZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSB0aGlzLmdldEJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpO1xuXG4gICAgZmFjZXRzID0gZmFjZXRzLnJlZHVjZShmdW5jdGlvbihmYWNldHMsIGZhY2V0KSB7XG4gICAgICBmYWNldC5yb3RhdGVBYm91dFpBeGlzKGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgY29uc3QgZmFjZXRzRnJvbVNwbGl0ID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0KTtcblxuICAgICAgZmFjZXRzRnJvbVNwbGl0LmZvckVhY2goZnVuY3Rpb24oZmFjZXRGcm9tU3BsaXQpIHtcbiAgICAgICAgZmFjZXRGcm9tU3BsaXQucm90YXRlQWJvdXRaQXhpcyhiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgICAgfSk7XG5cbiAgICAgIGZhY2V0cyA9IGZhY2V0cy5jb25jYXQoZmFjZXRzRnJvbVNwbGl0KTtcblxuICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICB9LmJpbmQodGhpcyksIFtdKTtcbiAgICBcbiAgICByZXR1cm4gZmFjZXRzOyAgICBcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5jYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0KGZhY2V0KSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsID0gaW50ZXJzZWN0aW9ucy5pbmNsdWRlcyhudWxsKSxcbiAgICAgICAgICBmYWNldHMgPSBpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsID9cbiAgICAgICAgICAgICAgICAgICAgIGZhY2V0LnNwbGl0V2l0aE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykgOlxuICAgICAgICAgICAgICAgICAgICAgICBmYWNldC5zcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZhY2V0c0Zyb21TcGxpdCA9IGZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzRnJvbVNwbGl0LCBmYWNldCkge1xuICAgICAgICAgICAgY29uc3QgZmFjZXRUb29TbWFsbCA9IGZhY2V0LmlzVG9vU21hbGwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFmYWNldFRvb1NtYWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZhY2V0RnJvbVNwbGl0ID0gZmFjZXQ7IC8vL1xuXG4gICAgICAgICAgICAgIGZhY2V0c0Zyb21TcGxpdC5wdXNoKGZhY2V0RnJvbVNwbGl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWNldHNGcm9tU3BsaXQ7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZhY2V0c0Zyb21TcGxpdDtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBsaW5lcyA9IGZhY2V0LmdldExpbmVzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lKGxpbmUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lKGxpbmUpIHtcbiAgICBsZXQgaW50ZXJzZWN0aW9uO1xuXG4gICAgY29uc3QgbGluZVBvc2l0aW9uID0gbGluZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGxpbmVEaXJlY3Rpb24gPSBsaW5lLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIGxpbmVQb3NpdGlvbkNvbXBvbmVudHMgPSBsaW5lUG9zaXRpb24sIC8vL1xuICAgICAgICAgIGxpbmVEaXJlY3Rpb25Db21wb25lbnRzID0gbGluZURpcmVjdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QobGluZURpcmVjdGlvbkNvbXBvbmVudHMpO1xuXG4gICAgaWYgKGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCA9PT0gMCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9zaXRpb25Db21wb25lbnRzID0gdGhpcy5wb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICAgIGZpcnN0TGluZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QobGluZVBvc2l0aW9uQ29tcG9uZW50cyk7XG5cbiAgICAgIGludGVyc2VjdGlvbiA9IChmaXJzdFBvc2l0aW9uQ29tcG9uZW50LSBmaXJzdExpbmVQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbGluZUluWFlQbGFuZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBkaXJlY3Rpb24gPSBsaW5lSW5YWVBsYW5lLmdldERpcmVjdGlvbigpO1xuXG4gICAgY29uc3QgdW5pdERpcmVjdGlvbiA9IG5vcm1hbGlzZShkaXJlY3Rpb24pLFxuICAgICAgICAgIHVuaXREaXJlY3Rpb25Db21wb25lbnRzID0gdW5pdERpcmVjdGlvbiwgIC8vL1xuICAgICAgICAgIGZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXREaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXREaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSArc2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCwgIC8vL1xuICAgICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAtZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50LCAvLy9cbiAgICAgICAgICBjID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIHMgPSBhbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IFsgYywgLXMsIDAsICtzLCBjLCAwLCAwLCAwLCAxIF07ICAvLy9cblxuICAgIGxldCBzdGFydFZlcnRleCA9IHBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgIGVuZFZlcnRleCA9IGFkZChwb3NpdGlvbiwgZGlyZWN0aW9uKTtcblxuICAgIHN0YXJ0VmVydGV4ID0gcm90YXRlVmVydGV4KHN0YXJ0VmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgIGVuZFZlcnRleCA9IHJvdGF0ZVZlcnRleChlbmRWZXJ0ZXgsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4O1xuICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgY29uc3QgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gbmV3IFZlcnRpY2FsTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZGlyZWN0aW9uLCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsTGluZUluWFlQbGFuZTtcblxuZnVuY3Rpb24gcm90YXRlVmVydGV4KHZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gIGxldCB2ZWMgPSB2ZXJ0ZXg7IC8vL1xuXG4gIGNvbnN0IG1hdDMgPSByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7ICAvLy9cblxuICB2ZWMgPSB0cmFuc2Zvcm0odmVjLCBtYXQzKTtcblxuICB2ZXJ0ZXggPSB2ZWM7IC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXg7XG59XG4iXX0=