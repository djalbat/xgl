'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    vectorUtilities = require('./utilities/vector'),
    arrayUtilities = require('./utilities/array'),
    vertexUtilities = require('./utilities/vertex');

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
                      direction = this.getDirection(),
                      midPointDirection = subtract3(midPoint, position),
                      crossProduct = cross3(direction, midPointDirection),
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
            key: 'fromVertices',
            value: function fromVertices(startVertex, endVertex) {
                  var position = startVertex.slice(),
                      ///
                  direction = subtract3(endVertex, startVertex),
                      lineInXYPlane = new LineInXYPlane(position, direction);

                  return lineInXYPlane;
            }
      }]);

      return LineInXYPlane;
}(Line);

module.exports = LineInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidmVjdG9yVXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJ0aGlyZCIsInN1YnRyYWN0MyIsImNyb3NzMyIsInByb2plY3RPbnRvWFlQbGFuZSIsIkxpbmVJblhZUGxhbmUiLCJtaWRQb2ludCIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJtaWRQb2ludERpcmVjdGlvbiIsImNyb3NzUHJvZHVjdCIsImNyb3NzUHJvZHVjdENvbXBvbmVudHMiLCJ0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCIsIm1pZFBvaW50VG9UaGVMZWZ0IiwiaXNNaWRQb2ludFRvVGhlTGVmdCIsIm1pZFBvaW50VG9UaGVSaWdodCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4Iiwic2xpY2UiLCJsaW5lSW5YWVBsYW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxvQkFBUixDQUR4QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxtQkFBUixDQUZ2QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSxvQkFBUixDQUh4Qjs7QUFLTSxJQUFFSSxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDd0JKLGVBRHhCLENBQ0VJLFNBREY7QUFBQSxJQUNhQyxNQURiLEdBQ3dCTCxlQUR4QixDQUNhSyxNQURiO0FBQUEsSUFFRUMsa0JBRkYsR0FFeUJKLGVBRnpCLENBRUVJLGtCQUZGOztJQUlBQyxhOzs7Ozs7Ozs7OztnREFDZ0JDLFEsRUFBVTtBQUM1QkEsNkJBQVdGLG1CQUFtQkUsUUFBbkIsQ0FBWDs7QUFFQSxzQkFBTUMsV0FBVyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsc0JBQ01DLFlBQVksS0FBS0MsWUFBTCxFQURsQjtBQUFBLHNCQUVNQyxvQkFBb0JULFVBQVVJLFFBQVYsRUFBb0JDLFFBQXBCLENBRjFCO0FBQUEsc0JBR01LLGVBQWVULE9BQU9NLFNBQVAsRUFBa0JFLGlCQUFsQixDQUhyQjtBQUFBLHNCQUcyRDtBQUNyREUsMkNBQXlCRCxZQUovQjtBQUFBLHNCQUk4QztBQUN4Q0UsK0NBQTZCYixNQUFNWSxzQkFBTixDQUxuQztBQUFBLHNCQU1NRSxvQkFBcUJELDZCQUE2QixDQU54RDs7QUFRQSx5QkFBT0MsaUJBQVA7QUFDRDs7O2lEQUVvQlQsUSxFQUFVO0FBQzdCLHNCQUFNUyxvQkFBb0IsS0FBS0MsbUJBQUwsQ0FBeUJWLFFBQXpCLENBQTFCO0FBQUEsc0JBQ01XLHFCQUFxQixDQUFDRixpQkFENUIsQ0FENkIsQ0FFbUI7O0FBRWhELHlCQUFPRSxrQkFBUDtBQUNEOzs7eUNBRW1CQyxXLEVBQWFDLFMsRUFBVztBQUMxQyxzQkFBTVosV0FBV1csWUFBWUUsS0FBWixFQUFqQjtBQUFBLHNCQUFzQztBQUNoQ1gsOEJBQVlQLFVBQVVpQixTQUFWLEVBQXFCRCxXQUFyQixDQURsQjtBQUFBLHNCQUVNRyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JFLFFBQWxCLEVBQTRCRSxTQUE1QixDQUZ0Qjs7QUFJQSx5QkFBT1ksYUFBUDtBQUNEOzs7O0VBNUJ5QnpCLEk7O0FBK0I1QjBCLE9BQU9DLE9BQVAsR0FBaUJsQixhQUFqQiIsImZpbGUiOiJsaW5lSW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgcHJvamVjdE9udG9YWVBsYW5lIH0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNsYXNzIExpbmVJblhZUGxhbmUgZXh0ZW5kcyBMaW5lIHtcbiAgaXNNaWRQb2ludFRvVGhlTGVmdChtaWRQb2ludCkge1xuICAgIG1pZFBvaW50ID0gcHJvamVjdE9udG9YWVBsYW5lKG1pZFBvaW50KTtcbiAgICBcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50RGlyZWN0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50LCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0ID0gY3Jvc3MzKGRpcmVjdGlvbiwgbWlkUG9pbnREaXJlY3Rpb24pLCAvLy9cbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3NQcm9kdWN0LCAgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50VG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50VG9UaGVSaWdodChtaWRQb2ludCkge1xuICAgIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlUmlnaHQgPSAhbWlkUG9pbnRUb1RoZUxlZnQ7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KSxcbiAgICAgICAgICBsaW5lSW5YWVBsYW5lID0gbmV3IExpbmVJblhZUGxhbmUocG9zaXRpb24sIGRpcmVjdGlvbik7XG5cbiAgICByZXR1cm4gbGluZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVJblhZUGxhbmU7XG4iXX0=