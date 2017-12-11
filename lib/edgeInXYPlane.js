'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('./edge'),
    vectorMaths = require('./maths/vector'),
    arrayUtilities = require('./utilities/array');

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

var EdgeInXYPlane = function (_Edge) {
      _inherits(EdgeInXYPlane, _Edge);

      function EdgeInXYPlane() {
            _classCallCheck(this, EdgeInXYPlane);

            return _possibleConstructorReturn(this, (EdgeInXYPlane.__proto__ || Object.getPrototypeOf(EdgeInXYPlane)).apply(this, arguments));
      }

      _createClass(EdgeInXYPlane, [{
            key: 'isMidPointToTheLeft',
            value: function isMidPointToTheLeft(midPoint) {
                  midPoint = projectOntoXYPlane(midPoint); ///

                  var position = this.getPosition(),
                      extent = this.getExtent(),
                      midPointDirection = subtract3(midPoint, position),
                      crossProduct = cross3(extent, midPointDirection),
                      ///
                  crossProductComponents = crossProduct,
                      ///
                  thirdCrossProductComponent = third(crossProductComponents),
                      midPointToTheLeft = thirdCrossProductComponent > 0;

                  return midPointToTheLeft;
            }
      }, {
            key: 'isMidPointToTheRight',
            value: function isMidPointToTheRight(midPoint) {
                  var midPointToTheLeft = this.isMidPointToTheLeft(midPoint),
                      midPointToTheRight = !midPointToTheLeft; ///

                  return midPointToTheRight;
            }
      }], [{
            key: 'fromStartVertexInXYPlaneAndEndVertexInXYPlane',
            value: function fromStartVertexInXYPlaneAndEndVertexInXYPlane(startVertexInXYPlane, endVertexInXYPlane) {
                  var position = startVertexInXYPlane.slice(),
                      ///
                  extent = subtract3(endVertexInXYPlane, startVertexInXYPlane),
                      edgeInXYPlane = new EdgeInXYPlane(position, extent);

                  return edgeInXYPlane;
            }
      }]);

      return EdgeInXYPlane;
}(Edge);

module.exports = EdgeInXYPlane;

function projectOntoXYPlane(vertex) {
      vertex = [].concat(_toConsumableArray(vertex.slice(0, 2)), [0]); ///

      return vertex;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lZGdlSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJhcnJheVV0aWxpdGllcyIsInRoaXJkIiwic3VidHJhY3QzIiwiY3Jvc3MzIiwiRWRnZUluWFlQbGFuZSIsIm1pZFBvaW50IiwicHJvamVjdE9udG9YWVBsYW5lIiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImV4dGVudCIsImdldEV4dGVudCIsIm1pZFBvaW50RGlyZWN0aW9uIiwiY3Jvc3NQcm9kdWN0IiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwibWlkUG9pbnRUb1RoZUxlZnQiLCJpc01pZFBvaW50VG9UaGVMZWZ0IiwibWlkUG9pbnRUb1RoZVJpZ2h0Iiwic3RhcnRWZXJ0ZXhJblhZUGxhbmUiLCJlbmRWZXJ0ZXhJblhZUGxhbmUiLCJzbGljZSIsImVkZ2VJblhZUGxhbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidmVydGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGdCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCOztBQUlNLElBQUVHLEtBQUYsR0FBWUQsY0FBWixDQUFFQyxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUN3QkgsV0FEeEIsQ0FDRUcsU0FERjtBQUFBLElBQ2FDLE1BRGIsR0FDd0JKLFdBRHhCLENBQ2FJLE1BRGI7O0lBR0FDLGE7Ozs7Ozs7Ozs7O2dEQUNnQkMsUSxFQUFVO0FBQzVCQSw2QkFBV0MsbUJBQW1CRCxRQUFuQixDQUFYLENBRDRCLENBQ2M7O0FBRTFDLHNCQUFNRSxXQUFXLEtBQUtDLFdBQUwsRUFBakI7QUFBQSxzQkFDTUMsU0FBUyxLQUFLQyxTQUFMLEVBRGY7QUFBQSxzQkFFTUMsb0JBQW9CVCxVQUFVRyxRQUFWLEVBQW9CRSxRQUFwQixDQUYxQjtBQUFBLHNCQUdNSyxlQUFlVCxPQUFPTSxNQUFQLEVBQWVFLGlCQUFmLENBSHJCO0FBQUEsc0JBR3dEO0FBQ2xERSwyQ0FBeUJELFlBSi9CO0FBQUEsc0JBSThDO0FBQ3hDRSwrQ0FBNkJiLE1BQU1ZLHNCQUFOLENBTG5DO0FBQUEsc0JBTU1FLG9CQUFxQkQsNkJBQTZCLENBTnhEOztBQVFBLHlCQUFPQyxpQkFBUDtBQUNEOzs7aURBRW9CVixRLEVBQVU7QUFDN0Isc0JBQU1VLG9CQUFvQixLQUFLQyxtQkFBTCxDQUF5QlgsUUFBekIsQ0FBMUI7QUFBQSxzQkFDTVkscUJBQXFCLENBQUNGLGlCQUQ1QixDQUQ2QixDQUVtQjs7QUFFaEQseUJBQU9FLGtCQUFQO0FBQ0Q7OzswRUFFb0RDLG9CLEVBQXNCQyxrQixFQUFvQjtBQUM3RixzQkFBTVosV0FBV1cscUJBQXFCRSxLQUFyQixFQUFqQjtBQUFBLHNCQUErQztBQUN6Q1gsMkJBQVNQLFVBQVVpQixrQkFBVixFQUE4QkQsb0JBQTlCLENBRGY7QUFBQSxzQkFFTUcsZ0JBQWdCLElBQUlqQixhQUFKLENBQWtCRyxRQUFsQixFQUE0QkUsTUFBNUIsQ0FGdEI7O0FBSUEseUJBQU9ZLGFBQVA7QUFDRDs7OztFQTVCeUJ4QixJOztBQStCNUJ5QixPQUFPQyxPQUFQLEdBQWlCbkIsYUFBakI7O0FBRUEsU0FBU0Usa0JBQVQsQ0FBNEJrQixNQUE1QixFQUFvQztBQUNsQ0EsNENBQWFBLE9BQU9KLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQWIsSUFBaUMsQ0FBakMsR0FEa0MsQ0FDSTs7QUFFdEMsYUFBT0ksTUFBUDtBQUNEIiwiZmlsZSI6ImVkZ2VJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi9tYXRocy92ZWN0b3InKSwgIFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBFZGdlSW5YWVBsYW5lIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpIHtcbiAgICBtaWRQb2ludCA9IHByb2plY3RPbnRvWFlQbGFuZShtaWRQb2ludCk7ICAvLy9cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgbWlkUG9pbnREaXJlY3Rpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnQsIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3QgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludERpcmVjdGlvbiksIC8vL1xuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zc1Byb2R1Y3QsICAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50VG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRUb1RoZVJpZ2h0KG1pZFBvaW50KSB7XG4gICAgY29uc3QgbWlkUG9pbnRUb1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpLFxuICAgICAgICAgIG1pZFBvaW50VG9UaGVSaWdodCA9ICFtaWRQb2ludFRvVGhlTGVmdDsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhJblhZUGxhbmVBbmRFbmRWZXJ0ZXhJblhZUGxhbmUoc3RhcnRWZXJ0ZXhJblhZUGxhbmUsIGVuZFZlcnRleEluWFlQbGFuZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXhJblhZUGxhbmUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleEluWFlQbGFuZSwgc3RhcnRWZXJ0ZXhJblhZUGxhbmUpLFxuICAgICAgICAgIGVkZ2VJblhZUGxhbmUgPSBuZXcgRWRnZUluWFlQbGFuZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZUluWFlQbGFuZTtcblxuZnVuY3Rpb24gcHJvamVjdE9udG9YWVBsYW5lKHZlcnRleCkge1xuICB2ZXJ0ZXggPSBbLi4udmVydGV4LnNsaWNlKDAsIDIpLCAwXTsgIC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXg7XG59XG4iXX0=