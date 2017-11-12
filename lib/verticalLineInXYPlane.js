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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiXSwibmFtZXMiOlsiTGluZUluWFlQbGFuZSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInZlY3RvclV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsInJvdGF0ZUFib3V0WkF4aXMiLCJmaXJzdCIsInNlY29uZCIsImZvdXJ0aCIsImFkZDMiLCJzdWJ0cmFjdDMiLCJub3JtYWxpc2UzIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMiLCJmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCIsImMiLCJzIiwiYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiZmFjZXRzIiwiZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJnZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJyZWR1Y2UiLCJmYWNldCIsImZhY2V0c0Zyb21TcGxpdCIsInNwbGl0RmFjZXQiLCJmb3JFYWNoIiwiZmFjZXRGcm9tU3BsaXQiLCJjb25jYXQiLCJiaW5kIiwiaW50ZXJzZWN0aW9ucyIsImNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQiLCJpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsIiwiaW5jbHVkZXMiLCJzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUZhY2V0c0Zyb21TcGxpdCIsImxpbmVzIiwiZ2V0TGluZXMiLCJtYXAiLCJsaW5lIiwiaW50ZXJzZWN0aW9uIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uV2l0aExpbmUiLCJsaW5lUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxpbmVEaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJsaW5lUG9zaXRpb25Db21wb25lbnRzIiwibGluZURpcmVjdGlvbkNvbXBvbmVudHMiLCJmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQiLCJwb3NpdGlvbkNvbXBvbmVudHMiLCJmaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZmlyc3RMaW5lUG9zaXRpb25Db21wb25lbnQiLCJsaW5lSW5YWVBsYW5lIiwidW5pdERpcmVjdGlvbiIsInVuaXREaXJlY3Rpb25Db21wb25lbnRzIiwiZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50Iiwic2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCIsImFuZ2xlT2ZSb3RhdGlvbkNvc2luZSIsImFuZ2xlT2ZSb3RhdGlvblNpbmUiLCJzdGFydFZlcnRleCIsInNsaWNlIiwiZW5kVmVydGV4IiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY2V0VG9vU21hbGwiLCJpc1Rvb1NtYWxsIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsaUJBQVIsQ0FBdEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsbUJBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FGeEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7O0FBS00sSUFBRUksZ0JBQUYsR0FBdUJELGVBQXZCLENBQUVDLGdCQUFGO0FBQUEsSUFDRUMsS0FERixHQUM0QkosY0FENUIsQ0FDRUksS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDNEJMLGNBRDVCLENBQ1NLLE1BRFQ7QUFBQSxJQUNpQkMsTUFEakIsR0FDNEJOLGNBRDVCLENBQ2lCTSxNQURqQjtBQUFBLElBRUVDLElBRkYsR0FFa0NOLGVBRmxDLENBRUVNLElBRkY7QUFBQSxJQUVRQyxTQUZSLEdBRWtDUCxlQUZsQyxDQUVRTyxTQUZSO0FBQUEsSUFFbUJDLFVBRm5CLEdBRWtDUixlQUZsQyxDQUVtQlEsVUFGbkI7O0lBSUFDLHFCOzs7QUFDSixpQ0FBWUMsUUFBWixFQUFzQkMsU0FBdEIsRUFBaUNDLHdCQUFqQyxFQUEyRDtBQUFBOztBQUFBLDhJQUNuREYsUUFEbUQsRUFDekNDLFNBRHlDOztBQUd6RCxVQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBSHlEO0FBSTFEOzs7O2tEQUU2QjtBQUM1QixhQUFPLEtBQUtBLHdCQUFaO0FBQ0Q7OzswREFFcUM7QUFDcEMsVUFBTUMsbUNBQW1DLEtBQUtELHdCQUE5QyxDQURvQyxDQUNvQzs7QUFFeEUsYUFBT0MsZ0NBQVA7QUFDRDs7OzJEQUVzQztBQUNyQyxVQUFNQyxxQ0FBcUMsS0FBS0Ysd0JBQWhEO0FBQUEsVUFBMEU7QUFDcEVHLCtDQUF5Q1osTUFBTVcsa0NBQU4sQ0FEL0M7QUFBQSxVQUVNRSwwQ0FBMENYLE9BQU9TLGtDQUFQLENBRmhEO0FBQUEsVUFHTUcsSUFBSUYsc0NBSFY7QUFBQSxVQUdrRDtBQUM1Q0csVUFBSUYsdUNBSlY7QUFBQSxVQUlvRDtBQUM5Q0csMENBQW9DLENBQUVGLENBQUYsRUFBSyxDQUFDQyxDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQUNBLENBQWIsRUFBZ0JELENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBTDFDOztBQU9BLGFBQU9FLGlDQUFQO0FBQ0Q7OztnQ0FFV0MsTSxFQUFRO0FBQ2xCLFVBQU1QLG1DQUFtQyxLQUFLUSxtQ0FBTCxFQUF6QztBQUFBLFVBQ01GLG9DQUFvQyxLQUFLRyxvQ0FBTCxFQUQxQzs7QUFHQUYsZUFBU0EsT0FBT0csTUFBUCxDQUFjLFVBQVNILE1BQVQsRUFBaUJJLEtBQWpCLEVBQXdCO0FBQzdDQSxjQUFNdEIsZ0JBQU4sQ0FBdUJXLGdDQUF2Qjs7QUFFQSxZQUFNWSxrQkFBa0IsS0FBS0MsVUFBTCxDQUFnQkYsS0FBaEIsQ0FBeEI7O0FBRUFDLHdCQUFnQkUsT0FBaEIsQ0FBd0IsVUFBU0MsY0FBVCxFQUF5QjtBQUMvQ0EseUJBQWUxQixnQkFBZixDQUFnQ2lCLGlDQUFoQztBQUNELFNBRkQ7O0FBSUFDLGlCQUFTQSxPQUFPUyxNQUFQLENBQWNKLGVBQWQsQ0FBVDs7QUFFQSxlQUFPTCxNQUFQO0FBQ0QsT0Fac0IsQ0FZckJVLElBWnFCLENBWWhCLElBWmdCLENBQWQsRUFZSyxFQVpMLENBQVQ7O0FBY0EsYUFBT1YsTUFBUDtBQUNEOzs7K0JBRVVJLEssRUFBTztBQUNoQixVQUFNTyxnQkFBZ0IsS0FBS0MsK0JBQUwsQ0FBcUNSLEtBQXJDLENBQXRCO0FBQUEsVUFDTVMsNEJBQTRCRixjQUFjRyxRQUFkLENBQXVCLElBQXZCLENBRGxDO0FBQUEsVUFFTWQsU0FBU2EsNEJBQ0VULE1BQU1XLHlCQUFOLENBQWdDSixhQUFoQyxDQURGLEdBRUlQLE1BQU1ZLDRCQUFOLENBQW1DTCxhQUFuQyxDQUpuQjtBQUFBLFVBS01OLGtCQUFrQlkseUJBQXlCakIsTUFBekIsQ0FMeEI7O0FBT0EsYUFBT0ssZUFBUDtBQUNEOzs7b0RBRStCRCxLLEVBQU87QUFDckMsVUFBTWMsUUFBUWQsTUFBTWUsUUFBTixFQUFkO0FBQUEsVUFDTVIsZ0JBQWdCTyxNQUFNRSxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZDLFlBQU1DLGVBQWUsS0FBS0MsNkJBQUwsQ0FBbUNGLElBQW5DLENBQXJCOztBQUVBLGVBQU9DLFlBQVA7QUFDRCxPQUp5QixDQUl4QlosSUFKd0IsQ0FJbkIsSUFKbUIsQ0FBVixDQUR0Qjs7QUFPQSxhQUFPQyxhQUFQO0FBQ0Q7OztrREFFNkJVLEksRUFBTTtBQUNsQyxVQUFJQyxxQkFBSjs7QUFFQSxVQUFNRSxlQUFlSCxLQUFLSSxXQUFMLEVBQXJCO0FBQUEsVUFDTUMsZ0JBQWdCTCxLQUFLTSxZQUFMLEVBRHRCO0FBQUEsVUFFTUMseUJBQXlCSixZQUYvQjtBQUFBLFVBRTZDO0FBQ3ZDSyxnQ0FBMEJILGFBSGhDO0FBQUEsVUFHK0M7QUFDekNJLG9DQUE4Qi9DLE1BQU04Qyx1QkFBTixDQUpwQzs7QUFNQSxVQUFJQyxnQ0FBZ0MsQ0FBcEMsRUFBdUM7QUFDckNSLHVCQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNUyxxQkFBcUIsS0FBS3pDLFFBQWhDO0FBQUEsWUFBMEM7QUFDcEMwQyxpQ0FBeUJqRCxNQUFNZ0Qsa0JBQU4sQ0FEL0I7QUFBQSxZQUVNRSw2QkFBNkJsRCxNQUFNNkMsc0JBQU4sQ0FGbkM7O0FBSUFOLHVCQUFlLENBQUNVLHlCQUF3QkMsMEJBQXpCLElBQXVESCwyQkFBdEU7QUFDRDs7QUFFRCxhQUFPUixZQUFQO0FBQ0Q7OztzQ0FFd0JZLGEsRUFBZTtBQUN0QyxVQUFJNUMsV0FBVzRDLGNBQWNULFdBQWQsRUFBZjtBQUFBLFVBQ0lsQyxZQUFZMkMsY0FBY1AsWUFBZCxFQURoQjs7QUFHQSxVQUFNUSxnQkFBZ0IvQyxXQUFXRyxTQUFYLENBQXRCO0FBQUEsVUFDTTZDLDBCQUEwQkQsYUFEaEM7QUFBQSxVQUNnRDtBQUMxQ0Usb0NBQThCdEQsTUFBTXFELHVCQUFOLENBRnBDO0FBQUEsVUFHTUUsK0JBQStCdEQsT0FBT29ELHVCQUFQLENBSHJDO0FBQUEsVUFJTUcsd0JBQXdCLENBQUNELDRCQUovQjtBQUFBLFVBSThEO0FBQ3hERSw0QkFBc0IsQ0FBQ0gsMkJBTDdCO0FBQUEsVUFLMEQ7QUFDcER4QyxVQUFJMEMscUJBTlY7QUFBQSxVQU9NekMsSUFBSTBDLG1CQVBWO0FBQUEsVUFRTWhELDJCQUEyQixDQUFFSyxDQUFGLEVBQUssQ0FBQ0MsQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFDQSxDQUFiLEVBQWdCRCxDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQVJqQyxDQUpzQyxDQVk2Qjs7QUFFbkUsVUFBSTRDLGNBQWNuRCxTQUFTb0QsS0FBVCxFQUFsQjtBQUFBLFVBQ0lDLFlBQVl6RCxLQUFLSSxRQUFMLEVBQWVDLFNBQWYsQ0FEaEI7O0FBR0FrRCxvQkFBYzNELGlCQUFpQjJELFdBQWpCLEVBQThCakQsd0JBQTlCLENBQWQ7QUFDQW1ELGtCQUFZN0QsaUJBQWlCNkQsU0FBakIsRUFBNEJuRCx3QkFBNUIsQ0FBWjs7QUFFQUYsaUJBQVdtRCxXQUFYO0FBQ0FsRCxrQkFBWUosVUFBVXdELFNBQVYsRUFBcUJGLFdBQXJCLENBQVo7O0FBRUEsVUFBTUcsd0JBQXdCLElBQUl2RCxxQkFBSixDQUEwQkMsUUFBMUIsRUFBb0NDLFNBQXBDLEVBQStDQyx3QkFBL0MsQ0FBOUI7O0FBRUEsYUFBT29ELHFCQUFQO0FBQ0Q7Ozs7RUF2SGlDbkUsYTs7QUEwSHBDb0UsT0FBT0MsT0FBUCxHQUFpQnpELHFCQUFqQjs7QUFFQSxTQUFTNEIsd0JBQVQsQ0FBa0NqQixNQUFsQyxFQUEwQztBQUN4QyxNQUFNSyxrQkFBa0JMLE9BQU9HLE1BQVAsQ0FBYyxVQUFTRSxlQUFULEVBQTBCRCxLQUExQixFQUFpQztBQUNyRSxRQUFNMkMsZ0JBQWdCM0MsTUFBTTRDLFVBQU4sRUFBdEI7O0FBRUEsUUFBSSxDQUFDRCxhQUFMLEVBQW9CO0FBQ2xCLFVBQU12QyxpQkFBaUJKLEtBQXZCLENBRGtCLENBQ1k7O0FBRTlCQyxzQkFBZ0I0QyxJQUFoQixDQUFxQnpDLGNBQXJCO0FBQ0Q7O0FBRUQsV0FBT0gsZUFBUDtBQUNELEdBVnVCLEVBVXJCLEVBVnFCLENBQXhCOztBQVlBLFNBQU9BLGVBQVA7QUFDRCIsImZpbGUiOiJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCBzdWJ0cmFjdDMsIG5vcm1hbGlzZTMgfSA9IHZlY3RvclV0aWxpdGllcztcblxuY2xhc3MgVmVydGljYWxMaW5lSW5YWVBsYW5lIGV4dGVuZHMgTGluZUluWFlQbGFuZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24sIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHN1cGVyKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cbiAgXG4gIGdldFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4OyAvLy9cbiAgICBcbiAgICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cbiAgXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICBjb25zdCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnRzID0gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgsIC8vL1xuICAgICAgICAgIGZpcnN0Um90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50cyksXG4gICAgICAgICAgZm91cnRoUm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMpLFxuICAgICAgICAgIGMgPSBmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCwgLy8vXG4gICAgICAgICAgcyA9IGZvdXJ0aFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCwgIC8vL1xuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IFsgYywgK3MsIDAsIC1zLCBjLCAwLCAwLCAwLCAxIF07XG4gICAgXG4gICAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbiAgfVxuICBcbiAgc3BsaXRGYWNldHMoZmFjZXRzKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSB0aGlzLmdldEZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gdGhpcy5nZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKTtcblxuICAgIGZhY2V0cyA9IGZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzLCBmYWNldCkge1xuICAgICAgZmFjZXQucm90YXRlQWJvdXRaQXhpcyhmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICAgIGNvbnN0IGZhY2V0c0Zyb21TcGxpdCA9IHRoaXMuc3BsaXRGYWNldChmYWNldCk7XG5cbiAgICAgIGZhY2V0c0Zyb21TcGxpdC5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0RnJvbVNwbGl0KSB7XG4gICAgICAgIGZhY2V0RnJvbVNwbGl0LnJvdGF0ZUFib3V0WkF4aXMoYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICAgIH0pO1xuXG4gICAgICBmYWNldHMgPSBmYWNldHMuY29uY2F0KGZhY2V0c0Zyb21TcGxpdCk7XG5cbiAgICAgIHJldHVybiBmYWNldHM7XG4gICAgfS5iaW5kKHRoaXMpLCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIGZhY2V0czsgICAgXG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldChmYWNldCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA9IGludGVyc2VjdGlvbnMuaW5jbHVkZXMobnVsbCksXG4gICAgICAgICAgZmFjZXRzID0gaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICBmYWNldC5zcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgZmFjZXQuc3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBmYWNldHNGcm9tU3BsaXQgPSBjYWxjdWxhdGVGYWNldHNGcm9tU3BsaXQoZmFjZXRzKTtcblxuICAgIHJldHVybiBmYWNldHNGcm9tU3BsaXQ7XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgbGluZXMgPSBmYWNldC5nZXRMaW5lcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gdGhpcy5jYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoTGluZShsaW5lKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoTGluZShsaW5lKSB7XG4gICAgbGV0IGludGVyc2VjdGlvbjtcblxuICAgIGNvbnN0IGxpbmVQb3NpdGlvbiA9IGxpbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBsaW5lRGlyZWN0aW9uID0gbGluZS5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICBsaW5lUG9zaXRpb25Db21wb25lbnRzID0gbGluZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBsaW5lRGlyZWN0aW9uQ29tcG9uZW50cyA9IGxpbmVEaXJlY3Rpb24sIC8vL1xuICAgICAgICAgIGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCA9IGZpcnN0KGxpbmVEaXJlY3Rpb25Db21wb25lbnRzKTtcblxuICAgIGlmIChmaXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQgPT09IDApIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uQ29tcG9uZW50cyA9IHRoaXMucG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgICBmaXJzdExpbmVQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGxpbmVQb3NpdGlvbkNvbXBvbmVudHMpO1xuXG4gICAgICBpbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudC0gZmlyc3RMaW5lUG9zaXRpb25Db21wb25lbnQpIC8gZmlyc3RMaW5lRGlyZWN0aW9uQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSkge1xuICAgIGxldCBwb3NpdGlvbiA9IGxpbmVJblhZUGxhbmUuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZGlyZWN0aW9uID0gbGluZUluWFlQbGFuZS5nZXREaXJlY3Rpb24oKTtcblxuICAgIGNvbnN0IHVuaXREaXJlY3Rpb24gPSBub3JtYWxpc2UzKGRpcmVjdGlvbiksXG4gICAgICAgICAgdW5pdERpcmVjdGlvbkNvbXBvbmVudHMgPSB1bml0RGlyZWN0aW9uLCAgLy8vXG4gICAgICAgICAgZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHNlY29uZFVuaXREaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdERpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9ICtzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IC1maXJzdFVuaXREaXJlY3Rpb25Db21wb25lbnQsIC8vL1xuICAgICAgICAgIGMgPSBhbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgcyA9IGFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gWyBjLCAtcywgMCwgK3MsIGMsIDAsIDAsIDAsIDEgXTsgIC8vL1xuXG4gICAgbGV0IHN0YXJ0VmVydGV4ID0gcG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgZW5kVmVydGV4ID0gYWRkMyhwb3NpdGlvbiwgZGlyZWN0aW9uKTtcblxuICAgIHN0YXJ0VmVydGV4ID0gcm90YXRlQWJvdXRaQXhpcyhzdGFydFZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICBlbmRWZXJ0ZXggPSByb3RhdGVBYm91dFpBeGlzKGVuZFZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgIHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXg7XG4gICAgZGlyZWN0aW9uID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgY29uc3QgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gbmV3IFZlcnRpY2FsTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZGlyZWN0aW9uLCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsTGluZUluWFlQbGFuZTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRmFjZXRzRnJvbVNwbGl0KGZhY2V0cykge1xuICBjb25zdCBmYWNldHNGcm9tU3BsaXQgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKGZhY2V0c0Zyb21TcGxpdCwgZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldFRvb1NtYWxsID0gZmFjZXQuaXNUb29TbWFsbCgpO1xuXG4gICAgaWYgKCFmYWNldFRvb1NtYWxsKSB7XG4gICAgICBjb25zdCBmYWNldEZyb21TcGxpdCA9IGZhY2V0OyAvLy9cblxuICAgICAgZmFjZXRzRnJvbVNwbGl0LnB1c2goZmFjZXRGcm9tU3BsaXQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWNldHNGcm9tU3BsaXQ7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZmFjZXRzRnJvbVNwbGl0O1xufVxuIl19