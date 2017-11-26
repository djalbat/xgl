'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./edge'),
    arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    vertexUtilities = require('../utilities/vertex');

var third = arrayUtilities.third,
    subtract3 = vectorUtilities.subtract3,
    cross3 = vectorUtilities.cross3,
    projectOntoXYPlane = vertexUtilities.projectOntoXYPlane;

var LineInXYPlane = function (_Line) {
      _inherits(LineInXYPlane, _Line);

      function LineInXYPlane() {
            _classCallCheck(this, LineInXYPlane);

            return _possibleConstructorReturn(this, (LineInXYPlane.__proto__ || Object.getPrototypeOf(LineInXYPlane)).apply(this, arguments));
      }

      _createClass(LineInXYPlane, [{
            key: 'isMidPointToTheLeft',
            value: function isMidPointToTheLeft(midPoint) {
                  midPoint = projectOntoXYPlane(midPoint);

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
            key: 'fromStartVertexAndEndVertex',
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
                  var position = startVertex.slice(),
                      ///
                  extent = subtract3(endVertex, startVertex),
                      lineInXYPlane = new LineInXYPlane(position, extent);

                  return lineInXYPlane;
            }
      }]);

      return LineInXYPlane;
}(Line);

module.exports = LineInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9saW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZWN0b3JVdGlsaXRpZXMiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJ0aGlyZCIsInN1YnRyYWN0MyIsImNyb3NzMyIsInByb2plY3RPbnRvWFlQbGFuZSIsIkxpbmVJblhZUGxhbmUiLCJtaWRQb2ludCIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJtaWRQb2ludERpcmVjdGlvbiIsImNyb3NzUHJvZHVjdCIsImNyb3NzUHJvZHVjdENvbXBvbmVudHMiLCJ0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCIsIm1pZFBvaW50VG9UaGVMZWZ0IiwiaXNNaWRQb2ludFRvVGhlTGVmdCIsIm1pZFBvaW50VG9UaGVSaWdodCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4Iiwic2xpY2UiLCJsaW5lSW5YWVBsYW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSxxQkFBUixDQUZ4QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxxQkFBUixDQUh4Qjs7QUFLTSxJQUFFSSxLQUFGLEdBQVlILGNBQVosQ0FBRUcsS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDd0JILGVBRHhCLENBQ0VHLFNBREY7QUFBQSxJQUNhQyxNQURiLEdBQ3dCSixlQUR4QixDQUNhSSxNQURiO0FBQUEsSUFFRUMsa0JBRkYsR0FFeUJKLGVBRnpCLENBRUVJLGtCQUZGOztJQUlBQyxhOzs7Ozs7Ozs7OztnREFDZ0JDLFEsRUFBVTtBQUM1QkEsNkJBQVdGLG1CQUFtQkUsUUFBbkIsQ0FBWDs7QUFFQSxzQkFBTUMsV0FBVyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsc0JBQ01DLFNBQVMsS0FBS0MsU0FBTCxFQURmO0FBQUEsc0JBRU1DLG9CQUFvQlQsVUFBVUksUUFBVixFQUFvQkMsUUFBcEIsQ0FGMUI7QUFBQSxzQkFHTUssZUFBZVQsT0FBT00sTUFBUCxFQUFlRSxpQkFBZixDQUhyQjtBQUFBLHNCQUd3RDtBQUNsREUsMkNBQXlCRCxZQUovQjtBQUFBLHNCQUk4QztBQUN4Q0UsK0NBQTZCYixNQUFNWSxzQkFBTixDQUxuQztBQUFBLHNCQU1NRSxvQkFBcUJELDZCQUE2QixDQU54RDs7QUFRQSx5QkFBT0MsaUJBQVA7QUFDRDs7O2lEQUVvQlQsUSxFQUFVO0FBQzdCLHNCQUFNUyxvQkFBb0IsS0FBS0MsbUJBQUwsQ0FBeUJWLFFBQXpCLENBQTFCO0FBQUEsc0JBQ01XLHFCQUFxQixDQUFDRixpQkFENUIsQ0FENkIsQ0FFbUI7O0FBRWhELHlCQUFPRSxrQkFBUDtBQUNEOzs7d0RBRWtDQyxXLEVBQWFDLFMsRUFBVztBQUN6RCxzQkFBTVosV0FBV1csWUFBWUUsS0FBWixFQUFqQjtBQUFBLHNCQUFzQztBQUNoQ1gsMkJBQVNQLFVBQVVpQixTQUFWLEVBQXFCRCxXQUFyQixDQURmO0FBQUEsc0JBRU1HLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQkUsUUFBbEIsRUFBNEJFLE1BQTVCLENBRnRCOztBQUlBLHlCQUFPWSxhQUFQO0FBQ0Q7Ozs7RUE1QnlCekIsSTs7QUErQjVCMEIsT0FBT0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwiZmlsZSI6ImxpbmVJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBwcm9qZWN0T250b1hZUGxhbmUgfSA9IHZlcnRleFV0aWxpdGllcztcblxuY2xhc3MgTGluZUluWFlQbGFuZSBleHRlbmRzIExpbmUge1xuICBpc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSB7XG4gICAgbWlkUG9pbnQgPSBwcm9qZWN0T250b1hZUGxhbmUobWlkUG9pbnQpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBtaWRQb2ludERpcmVjdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludCwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdCA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50RGlyZWN0aW9uKSwgLy8vXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzUHJvZHVjdCwgIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRUb1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFRvVGhlUmlnaHQobWlkUG9pbnQpIHtcbiAgICBjb25zdCBtaWRQb2ludFRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFRvVGhlTGVmdChtaWRQb2ludCksXG4gICAgICAgICAgbWlkUG9pbnRUb1RoZVJpZ2h0ID0gIW1pZFBvaW50VG9UaGVMZWZ0OyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50VG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzdGFydFZlcnRleC5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgICAgbGluZUluWFlQbGFuZSA9IG5ldyBMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lSW5YWVBsYW5lO1xuIl19