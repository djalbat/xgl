'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex'),
    rotationUtilities = require('./utilities/rotation'),
    approximateUtilities = require('./utilities/approximate');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    add3 = vectorUtilities.add3,
    subtract3 = vectorUtilities.subtract3,
    normalise3 = vectorUtilities.normalise3,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    calculateForwardsRotationAboutZAxisMatrix = rotationUtilities.calculateForwardsRotationAboutZAxisMatrix,
    calculateBackwardsRotationAboutZAxisMatrix = rotationUtilities.calculateBackwardsRotationAboutZAxisMatrix;

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
      firstLineDirectionComponent = first(lineDirectionComponents),
          firstLineDirectionComponentApproximatelyEqualToZero = isApproximatelyEqualToZero(firstLineDirectionComponent);

      if (firstLineDirectionComponentApproximatelyEqualToZero) {
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
          ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsiTGluZUluWFlQbGFuZSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInZlY3RvclV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsInJvdGF0aW9uVXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInJvdGF0ZUFib3V0WkF4aXMiLCJhZGQzIiwic3VidHJhY3QzIiwibm9ybWFsaXNlMyIsImlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImZhY2V0cyIsInNtYWxsZXJGYWNldHMiLCJmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImZvckVhY2giLCJmYWNldCIsInNwbGl0RmFjZXQiLCJiaW5kIiwic21hbGxlckZhY2V0IiwiaW50ZXJzZWN0aW9ucyIsImNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQiLCJzcGxpdCIsImxpbmVzIiwiZ2V0TGluZXMiLCJtYXAiLCJsaW5lIiwiaW50ZXJzZWN0aW9uIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uV2l0aExpbmUiLCJsaW5lUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxpbmVEaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJsaW5lUG9zaXRpb25Db21wb25lbnRzIiwibGluZURpcmVjdGlvbkNvbXBvbmVudHMiLCJmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQiLCJmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJwb3NpdGlvbkNvbXBvbmVudHMiLCJmaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZmlyc3RMaW5lUG9zaXRpb25Db21wb25lbnQiLCJsaW5lSW5YWVBsYW5lIiwidW5pdERpcmVjdGlvbiIsInVuaXREaXJlY3Rpb25Db21wb25lbnRzIiwiZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50Iiwic2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCIsImFuZ2xlT2ZSb3RhdGlvbkNvc2luZSIsImFuZ2xlT2ZSb3RhdGlvblNpbmUiLCJjIiwicyIsInN0YXJ0VmVydGV4Iiwic2xpY2UiLCJlbmRWZXJ0ZXgiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxpQkFBUixDQUF0QjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxtQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxvQkFBUixDQUZ4QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUh4QjtBQUFBLElBSU1JLG9CQUFvQkosUUFBUSxzQkFBUixDQUoxQjtBQUFBLElBS01LLHVCQUF1QkwsUUFBUSx5QkFBUixDQUw3Qjs7SUFPUU0sSyxHQUFrQkwsYyxDQUFsQkssSztJQUFPQyxNLEdBQVdOLGMsQ0FBWE0sTTtJQUNQQyxnQixHQUFxQkwsZSxDQUFyQkssZ0I7SUFDQUMsSSxHQUFnQ1AsZSxDQUFoQ08sSTtJQUFNQyxTLEdBQTBCUixlLENBQTFCUSxTO0lBQVdDLFUsR0FBZVQsZSxDQUFmUyxVO0lBQ2pCQywwQixHQUErQlAsb0IsQ0FBL0JPLDBCO0lBQ0FDLHlDLEdBQTBGVCxpQixDQUExRlMseUM7SUFBMkNDLDBDLEdBQStDVixpQixDQUEvQ1UsMEM7O0lBRTdDQyxxQjs7O0FBQ0osaUNBQVlDLFFBQVosRUFBc0JDLFNBQXRCLEVBQWlDQyx3QkFBakMs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QUFDQSxDQUFiLEVBQWdCRCxDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQVJqQyxDQUpzQyxDQVk2Qjs7QUFFbkUsVUFBSUUsY0FBY3pDLFNBQVMwQyxLQUFULEVBQWxCO0FBQUEsVUFBb0M7QUFDaENDLGtCQUFZbEQsS0FBS08sUUFBTCxFQUFlQyxTQUFmLENBRGhCOztBQUdBd0Msb0JBQWNqRCxpQkFBaUJpRCxXQUFqQixFQUE4QnZDLHdCQUE5QixDQUFkO0FBQ0F5QyxrQkFBWW5ELGlCQUFpQm1ELFNBQWpCLEVBQTRCekMsd0JBQTVCLENBQVo7O0FBRUFGLGlCQUFXeUMsV0FBWDtBQUNBeEMsa0JBQVlQLFVBQVVpRCxTQUFWLEVBQXFCRixXQUFyQixDQUFaOztBQUVBLFVBQU1HLHdCQUF3QixJQUFJN0MscUJBQUosQ0FBMEJDLFFBQTFCLEVBQW9DQyxTQUFwQyxFQUErQ0Msd0JBQS9DLENBQTlCOztBQUVBLGFBQU8wQyxxQkFBUDtBQUNEOzs7O0VBL0ZpQzdELGE7O0FBa0dwQzhELE9BQU9DLE9BQVAsR0FBaUIvQyxxQkFBakIiLCJmaWxlIjoidmVydGljYWxMaW5lSW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi9saW5lSW5YWVBsYW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRleCcpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yb3RhdGlvbicpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVBYm91dFpBeGlzIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4LCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggfSA9IHJvdGF0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmVJblhZUGxhbmUgZXh0ZW5kcyBMaW5lSW5YWVBsYW5lIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGRpcmVjdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gICAgc3VwZXIocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuICBcbiAgZ2V0Um90YXRpb25BYm91dFpBeGlzTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4KSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgodGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgIFxuICAgIGZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5yb3RhdGVBYm91dFpBeGlzKGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIFxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaChmdW5jdGlvbihzbWFsbGVyRmFjZXQpIHtcbiAgICAgIHNtYWxsZXJGYWNldC5yb3RhdGVBYm91dFpBeGlzKGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0czsgICAgXG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldChmYWNldCk7XG5cbiAgICBmYWNldC5zcGxpdChpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBsaW5lcyA9IGZhY2V0LmdldExpbmVzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lKGxpbmUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhMaW5lKGxpbmUpIHtcbiAgICBsZXQgaW50ZXJzZWN0aW9uO1xuXG4gICAgY29uc3QgbGluZVBvc2l0aW9uID0gbGluZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGxpbmVEaXJlY3Rpb24gPSBsaW5lLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIGxpbmVQb3NpdGlvbkNvbXBvbmVudHMgPSBsaW5lUG9zaXRpb24sIC8vL1xuICAgICAgICAgIGxpbmVEaXJlY3Rpb25Db21wb25lbnRzID0gbGluZURpcmVjdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QobGluZURpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCk7XG5cbiAgICBpZiAoZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBpbnRlcnNlY3Rpb24gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwb3NpdGlvbkNvbXBvbmVudHMgPSB0aGlzLnBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgICAgZmlyc3RMaW5lUG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChsaW5lUG9zaXRpb25Db21wb25lbnRzKTtcblxuICAgICAgaW50ZXJzZWN0aW9uID0gKGZpcnN0UG9zaXRpb25Db21wb25lbnQtIGZpcnN0TGluZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBsaW5lSW5YWVBsYW5lLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGRpcmVjdGlvbiA9IGxpbmVJblhZUGxhbmUuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBjb25zdCB1bml0RGlyZWN0aW9uID0gbm9ybWFsaXNlMyhkaXJlY3Rpb24pLFxuICAgICAgICAgIHVuaXREaXJlY3Rpb25Db21wb25lbnRzID0gdW5pdERpcmVjdGlvbiwgIC8vL1xuICAgICAgICAgIGZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXREaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXREaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSArc2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCwgIC8vL1xuICAgICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAtZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50LCAvLy9cbiAgICAgICAgICBjID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIHMgPSBhbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IFsgYywgLXMsIDAsICtzLCBjLCAwLCAwLCAwLCAxIF07ICAvLy9cblxuICAgIGxldCBzdGFydFZlcnRleCA9IHBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICBlbmRWZXJ0ZXggPSBhZGQzKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgc3RhcnRWZXJ0ZXggPSByb3RhdGVBYm91dFpBeGlzKHN0YXJ0VmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgIGVuZFZlcnRleCA9IHJvdGF0ZUFib3V0WkF4aXMoZW5kVmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgcG9zaXRpb24gPSBzdGFydFZlcnRleDtcbiAgICBkaXJlY3Rpb24gPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCk7XG5cbiAgICBjb25zdCB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBuZXcgVmVydGljYWxMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lSW5YWVBsYW5lO1xuIl19