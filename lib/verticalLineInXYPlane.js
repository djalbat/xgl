'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex'),
    rotationUtilities = require('./utilities/rotation');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    add3 = vectorUtilities.add3,
    subtract3 = vectorUtilities.subtract3,
    normalise3 = vectorUtilities.normalise3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsiTGluZUluWFlQbGFuZSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInZlY3RvclV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsInJvdGF0aW9uVXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJyb3RhdGVBYm91dFpBeGlzIiwiYWRkMyIsInN1YnRyYWN0MyIsIm5vcm1hbGlzZTMiLCJjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwicm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiZmFjZXRzIiwic21hbGxlckZhY2V0cyIsImZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiZm9yRWFjaCIsImZhY2V0Iiwic3BsaXRGYWNldCIsImJpbmQiLCJzbWFsbGVyRmFjZXQiLCJpbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldCIsInNwbGl0IiwibGluZXMiLCJnZXRMaW5lcyIsIm1hcCIsImxpbmUiLCJpbnRlcnNlY3Rpb24iLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoTGluZSIsImxpbmVQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGluZURpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsImxpbmVQb3NpdGlvbkNvbXBvbmVudHMiLCJsaW5lRGlyZWN0aW9uQ29tcG9uZW50cyIsImZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCIsInBvc2l0aW9uQ29tcG9uZW50cyIsImZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJmaXJzdExpbmVQb3NpdGlvbkNvbXBvbmVudCIsImxpbmVJblhZUGxhbmUiLCJ1bml0RGlyZWN0aW9uIiwidW5pdERpcmVjdGlvbkNvbXBvbmVudHMiLCJmaXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQiLCJzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50IiwiYW5nbGVPZlJvdGF0aW9uQ29zaW5lIiwiYW5nbGVPZlJvdGF0aW9uU2luZSIsImMiLCJzIiwic3RhcnRWZXJ0ZXgiLCJzbGljZSIsImVuZFZlcnRleCIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLGlCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG1CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLG9CQUFSLENBRnhCO0FBQUEsSUFHTUcsa0JBQWtCSCxRQUFRLG9CQUFSLENBSHhCO0FBQUEsSUFJTUksb0JBQW9CSixRQUFRLHNCQUFSLENBSjFCOztJQU1RSyxLLEdBQWtCSixjLENBQWxCSSxLO0lBQU9DLE0sR0FBV0wsYyxDQUFYSyxNO0lBQ1BDLGdCLEdBQXFCSixlLENBQXJCSSxnQjtJQUNBQyxJLEdBQWdDTixlLENBQWhDTSxJO0lBQU1DLFMsR0FBMEJQLGUsQ0FBMUJPLFM7SUFBV0MsVSxHQUFlUixlLENBQWZRLFU7SUFDakJDLHlDLEdBQTBGUCxpQixDQUExRk8seUM7SUFBMkNDLDBDLEdBQStDUixpQixDQUEvQ1EsMEM7O0lBRTdDQyxxQjs7O0FBQ0osaUNBQVlDLFFBQVosRUFBc0JDLFNBQXRCLEVBQWlDQyx3QkFBakMsRUFBMkQ7QUFBQTs7QUFBQSw4SUFDbkRGLFFBRG1ELEVBQ3pDQyxTQUR5Qzs7QUFHekQsVUFBS0Msd0JBQUwsR0FBZ0NBLHdCQUFoQztBQUh5RDtBQUkxRDs7OztrREFFNkI7QUFDNUIsYUFBTyxLQUFLQSx3QkFBWjtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixVQUFNQyxnQkFBZ0IsRUFBdEI7QUFB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QUFqQixFQUE4QnRDLHdCQUE5QixDQUFkO0FBQ0F3QyxrQkFBWWpELGlCQUFpQmlELFNBQWpCLEVBQTRCeEMsd0JBQTVCLENBQVo7O0FBRUFGLGlCQUFXd0MsV0FBWDtBQUNBdkMsa0JBQVlOLFVBQVUrQyxTQUFWLEVBQXFCRixXQUFyQixDQUFaOztBQUVBLFVBQU1HLHdCQUF3QixJQUFJNUMscUJBQUosQ0FBMEJDLFFBQTFCLEVBQW9DQyxTQUFwQyxFQUErQ0Msd0JBQS9DLENBQTlCOztBQUVBLGFBQU95QyxxQkFBUDtBQUNEOzs7O0VBOUZpQzFELGE7O0FBaUdwQzJELE9BQU9DLE9BQVAsR0FBaUI5QyxxQkFBakIiLCJmaWxlIjoidmVydGljYWxMaW5lSW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi9saW5lSW5YWVBsYW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRleCcpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVBYm91dFpBeGlzIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGljYWxMaW5lSW5YWVBsYW5lIGV4dGVuZHMgTGluZUluWFlQbGFuZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHN1cGVyKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cbiAgXG4gIGdldFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCh0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICBcbiAgICBmYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgZmFjZXQucm90YXRlQWJvdXRaQXhpcyhmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICAgIHRoaXMuc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goZnVuY3Rpb24oc21hbGxlckZhY2V0KSB7XG4gICAgICBzbWFsbGVyRmFjZXQucm90YXRlQWJvdXRaQXhpcyhiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7ICAgIFxuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpO1xuXG4gICAgZmFjZXQuc3BsaXQoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgbGluZXMgPSBmYWNldC5nZXRMaW5lcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gdGhpcy5jYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoTGluZShsaW5lKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoTGluZShsaW5lKSB7XG4gICAgbGV0IGludGVyc2VjdGlvbjtcblxuICAgIGNvbnN0IGxpbmVQb3NpdGlvbiA9IGxpbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBsaW5lRGlyZWN0aW9uID0gbGluZS5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICBsaW5lUG9zaXRpb25Db21wb25lbnRzID0gbGluZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBsaW5lRGlyZWN0aW9uQ29tcG9uZW50cyA9IGxpbmVEaXJlY3Rpb24sIC8vL1xuICAgICAgICAgIGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCA9IGZpcnN0KGxpbmVEaXJlY3Rpb25Db21wb25lbnRzKTtcblxuICAgIGlmIChmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQgPT09IDApIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uQ29tcG9uZW50cyA9IHRoaXMucG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgICBmaXJzdExpbmVQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGxpbmVQb3NpdGlvbkNvbXBvbmVudHMpO1xuXG4gICAgICBpbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudC0gZmlyc3RMaW5lUG9zaXRpb25Db21wb25lbnQpIC8gZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IGxpbmVJblhZUGxhbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZGlyZWN0aW9uID0gbGluZUluWFlQbGFuZS5nZXREaXJlY3Rpb24oKTtcblxuICAgIGNvbnN0IHVuaXREaXJlY3Rpb24gPSBub3JtYWxpc2UzKGRpcmVjdGlvbiksXG4gICAgICAgICAgdW5pdERpcmVjdGlvbkNvbXBvbmVudHMgPSB1bml0RGlyZWN0aW9uLCAgLy8vXG4gICAgICAgICAgZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHNlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9ICtzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IC1maXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQsIC8vL1xuICAgICAgICAgIGMgPSBhbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgcyA9IGFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gWyBjLCAtcywgMCwgK3MsIGMsIDAsIDAsIDAsIDEgXTsgIC8vL1xuXG4gICAgbGV0IHN0YXJ0VmVydGV4ID0gcG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgIGVuZFZlcnRleCA9IGFkZDMocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICBzdGFydFZlcnRleCA9IHJvdGF0ZUFib3V0WkF4aXMoc3RhcnRWZXJ0ZXgsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gICAgZW5kVmVydGV4ID0gcm90YXRlQWJvdXRaQXhpcyhlbmRWZXJ0ZXgsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4O1xuICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KTtcblxuICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IG5ldyBWZXJ0aWNhbExpbmVJblhZUGxhbmUocG9zaXRpb24sIGRpcmVjdGlvbiwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmU7XG4iXX0=