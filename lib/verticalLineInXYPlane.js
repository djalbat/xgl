'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('./maths/vec3'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    vertexUtilities = require('./utilities/vertex');

var add = vec3.add,
    subtract = vec3.subtract,
    normalise = vec3.normalise,
    rotate = vertexUtilities.rotate,
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
          facetsFromSplit = calculateFacetsFromSplit(facets);

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

      startVertex = rotate(startVertex, rotationAboutZAxisMatrix);
      endVertex = rotate(endVertex, rotationAboutZAxisMatrix);

      position = startVertex;
      direction = subtract(endVertex, startVertex);

      var verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationAboutZAxisMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}(LineInXYPlane);

module.exports = VerticalLineInXYPlane;

function calculateFacetsFromSplit(facets) {
  var facetsFromSplit = facets.reduce(function (facetsFromSplit, facet) {
    var facetTooSmall = facet.isTooSmall();

    if (!facetTooSmall) {
      var facetFromSplit = facet; ///

      facetsFromSplit.push(facetFromSplit);
    }

    return facetsFromSplit;
  }, []);

  return facetsFromSplit;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJMaW5lSW5YWVBsYW5lIiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJhZGQiLCJzdWJ0cmFjdCIsIm5vcm1hbGlzZSIsInJvdGF0ZSIsImZpcnN0Iiwic2Vjb25kIiwiZm91cnRoIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMiLCJmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImMiLCJzIiwiYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiZmFjZXRzIiwiZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJnZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJyZWR1Y2UiLCJmYWNldCIsInJvdGF0ZUFib3V0WkF4aXMiLCJmYWNldHNGcm9tU3BsaXQiLCJzcGxpdEZhY2V0IiwiZm9yRWFjaCIsImZhY2V0RnJvbVNwbGl0IiwiY29uY2F0IiwiYmluZCIsImludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0IiwiaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCIsImluY2x1ZGVzIiwic3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbiIsInNwbGl0V2l0aG91dE51bGxJbnRlcnNlY3Rpb24iLCJjYWxjdWxhdGVGYWNldHNGcm9tU3BsaXQiLCJsaW5lcyIsImdldExpbmVzIiwibWFwIiwibGluZSIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lIiwibGluZVBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsaW5lRGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwibGluZVBvc2l0aW9uQ29tcG9uZW50cyIsImxpbmVEaXJlY3Rpb25Db21wb25lbnRzIiwiZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50IiwicG9zaXRpb25Db21wb25lbnRzIiwiZmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsImZpcnN0TGluZVBvc2l0aW9uQ29tcG9uZW50IiwibGluZUluWFlQbGFuZSIsInVuaXREaXJlY3Rpb24iLCJ1bml0RGlyZWN0aW9uQ29tcG9uZW50cyIsImZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCIsInNlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQiLCJhbmdsZU9mUm90YXRpb25Db3NpbmUiLCJhbmdsZU9mUm90YXRpb25TaW5lIiwic3RhcnRWZXJ0ZXgiLCJzbGljZSIsImVuZFZlcnRleCIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmYWNldFRvb1NtYWxsIiwiaXNUb29TbWFsbCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsaUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsbUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7O0lBS1FJLEcsR0FBNkJMLEksQ0FBN0JLLEc7SUFBS0MsUSxHQUF3Qk4sSSxDQUF4Qk0sUTtJQUFVQyxTLEdBQWNQLEksQ0FBZE8sUztJQUNmQyxNLEdBQVdKLGUsQ0FBWEksTTtJQUNBQyxLLEdBQTBCTixjLENBQTFCTSxLO0lBQU9DLE0sR0FBbUJQLGMsQ0FBbkJPLE07SUFBUUMsTSxHQUFXUixjLENBQVhRLE07O0lBRWpCQyxxQjs7O0FBQ0osaUNBQVlDLFFBQVosRUFBc0JDLFNB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QVg7QUFDQW5ELGtCQUFZUixTQUFTNkQsU0FBVCxFQUFvQkYsV0FBcEIsQ0FBWjs7QUFFQSxVQUFNRyx3QkFBd0IsSUFBSXhELHFCQUFKLENBQTBCQyxRQUExQixFQUFvQ0MsU0FBcEMsRUFBK0NDLHdCQUEvQyxDQUE5Qjs7QUFFQSxhQUFPcUQscUJBQVA7QUFDRDs7OztFQXZIaUNsRSxhOztBQTBIcENtRSxPQUFPQyxPQUFQLEdBQWlCMUQscUJBQWpCOztBQUVBLFNBQVM2Qix3QkFBVCxDQUFrQ2xCLE1BQWxDLEVBQTBDO0FBQ3hDLE1BQU1NLGtCQUFrQk4sT0FBT0csTUFBUCxDQUFjLFVBQVNHLGVBQVQsRUFBMEJGLEtBQTFCLEVBQWlDO0FBQ3JFLFFBQU00QyxnQkFBZ0I1QyxNQUFNNkMsVUFBTixFQUF0Qjs7QUFFQSxRQUFJLENBQUNELGFBQUwsRUFBb0I7QUFDbEIsVUFBTXZDLGlCQUFpQkwsS0FBdkIsQ0FEa0IsQ0FDWTs7QUFFOUJFLHNCQUFnQjRDLElBQWhCLENBQXFCekMsY0FBckI7QUFDRDs7QUFFRCxXQUFPSCxlQUFQO0FBQ0QsR0FWdUIsRUFVckIsRUFWcUIsQ0FBeEI7O0FBWUEsU0FBT0EsZUFBUDtBQUNEIiwiZmlsZSI6InZlcnRpY2FsTGluZUluWFlQbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMycpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgYWRkLCBzdWJ0cmFjdCwgbm9ybWFsaXNlIH0gPSB2ZWMzLFxuICAgICAgeyByb3RhdGUgfSA9IHZlcnRleFV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVmVydGljYWxMaW5lSW5YWVBsYW5lIGV4dGVuZHMgTGluZUluWFlQbGFuZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHN1cGVyKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cbiAgXG4gIGdldFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4OyAvLy9cbiAgICBcbiAgICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cbiAgXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICBjb25zdCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnRzID0gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgsIC8vL1xuICAgICAgICAgIGZpcnN0Um90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50cyksXG4gICAgICAgICAgZm91cnRoUm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMpLFxuICAgICAgICAgIGMgPSBmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCwgLy8vXG4gICAgICAgICAgcyA9IGZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCwgIC8vL1xuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IFsgYywgK3MsIDAsIC1zLCBjLCAwLCAwLCAwLCAxIF07XG4gICAgXG4gICAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuICBcbiAgc3BsaXRGYWNldHMoZmFjZXRzKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSB0aGlzLmdldEZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gdGhpcy5nZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKTtcblxuICAgIGZhY2V0cyA9IGZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzLCBmYWNldCkge1xuICAgICAgZmFjZXQucm90YXRlQWJvdXRaQXhpcyhmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICAgIGNvbnN0IGZhY2V0c0Zyb21TcGxpdCA9IHRoaXMuc3BsaXRGYWNldChmYWNldCk7XG5cbiAgICAgIGZhY2V0c0Zyb21TcGxpdC5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0RnJvbVNwbGl0KSB7XG4gICAgICAgIGZhY2V0RnJvbVNwbGl0LnJvdGF0ZUFib3V0WkF4aXMoYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICAgIH0pO1xuXG4gICAgICBmYWNldHMgPSBmYWNldHMuY29uY2F0KGZhY2V0c0Zyb21TcGxpdCk7XG5cbiAgICAgIHJldHVybiBmYWNldHM7XG4gICAgfS5iaW5kKHRoaXMpLCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIGZhY2V0czsgICAgXG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldChmYWNldCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA9IGludGVyc2VjdGlvbnMuaW5jbHVkZXMobnVsbCksXG4gICAgICAgICAgZmFjZXRzID0gaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICBmYWNldC5zcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgZmFjZXQuc3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmYWNldHNGcm9tU3BsaXQgPSBjYWxjdWxhdGVGYWNldHNGcm9tU3BsaXQoZmFjZXRzKTtcblxuICAgIHJldHVybiBmYWNldHNGcm9tU3BsaXQ7XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgbGluZXMgPSBmYWNldC5nZXRMaW5lcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gdGhpcy5jYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoTGluZShsaW5lKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoTGluZShsaW5lKSB7XG4gICAgbGV0IGludGVyc2VjdGlvbjtcblxuICAgIGNvbnN0IGxpbmVQb3NpdGlvbiA9IGxpbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBsaW5lRGlyZWN0aW9uID0gbGluZS5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICBsaW5lUG9zaXRpb25Db21wb25lbnRzID0gbGluZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBsaW5lRGlyZWN0aW9uQ29tcG9uZW50cyA9IGxpbmVEaXJlY3Rpb24sIC8vL1xuICAgICAgICAgIGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCA9IGZpcnN0KGxpbmVEaXJlY3Rpb25Db21wb25lbnRzKTtcblxuICAgIGlmIChmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQgPT09IDApIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uQ29tcG9uZW50cyA9IHRoaXMucG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgICBmaXJzdExpbmVQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGxpbmVQb3NpdGlvbkNvbXBvbmVudHMpO1xuXG4gICAgICBpbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudC0gZmlyc3RMaW5lUG9zaXRpb25Db21wb25lbnQpIC8gZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IGxpbmVJblhZUGxhbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZGlyZWN0aW9uID0gbGluZUluWFlQbGFuZS5nZXREaXJlY3Rpb24oKTtcblxuICAgIGNvbnN0IHVuaXREaXJlY3Rpb24gPSBub3JtYWxpc2UoZGlyZWN0aW9uKSxcbiAgICAgICAgICB1bml0RGlyZWN0aW9uQ29tcG9uZW50cyA9IHVuaXREaXJlY3Rpb24sICAvLy9cbiAgICAgICAgICBmaXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQgPSBmaXJzdCh1bml0RGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgc2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0RGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gK3NlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQsICAvLy9cbiAgICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gLWZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCwgLy8vXG4gICAgICAgICAgYyA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBzID0gYW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBbIGMsIC1zLCAwLCArcywgYywgMCwgMCwgMCwgMSBdOyAgLy8vXG5cbiAgICBsZXQgc3RhcnRWZXJ0ZXggPSBwb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICBlbmRWZXJ0ZXggPSBhZGQocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICBzdGFydFZlcnRleCA9IHJvdGF0ZShzdGFydFZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICBlbmRWZXJ0ZXggPSByb3RhdGUoZW5kVmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgcG9zaXRpb24gPSBzdGFydFZlcnRleDtcbiAgICBkaXJlY3Rpb24gPSBzdWJ0cmFjdChlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KTtcblxuICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IG5ldyBWZXJ0aWNhbExpbmVJblhZUGxhbmUocG9zaXRpb24sIGRpcmVjdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmU7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUZhY2V0c0Zyb21TcGxpdChmYWNldHMpIHtcbiAgY29uc3QgZmFjZXRzRnJvbVNwbGl0ID0gZmFjZXRzLnJlZHVjZShmdW5jdGlvbihmYWNldHNGcm9tU3BsaXQsIGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXRUb29TbWFsbCA9IGZhY2V0LmlzVG9vU21hbGwoKTtcblxuICAgIGlmICghZmFjZXRUb29TbWFsbCkge1xuICAgICAgY29uc3QgZmFjZXRGcm9tU3BsaXQgPSBmYWNldDsgLy8vXG5cbiAgICAgIGZhY2V0c0Zyb21TcGxpdC5wdXNoKGZhY2V0RnJvbVNwbGl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFjZXRzRnJvbVNwbGl0O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGZhY2V0c0Zyb21TcGxpdDtcbn1cbiJdfQ==