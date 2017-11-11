'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    vec3 = require('./maths/vec3'),
    arrayUtilities = require('./utilities/array'),
    vertexUtilities = require('./utilities/vertex'),
    approximateUtilities = require('./utilities/approximate');

var subtract = vec3.subtract,
    cross = vec3.cross,
    third = arrayUtilities.third,
    projectOntoXYPlane = vertexUtilities.projectOntoXYPlane,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero;

var LineInXYPlane = function (_Line) {
      _inherits(LineInXYPlane, _Line);

      function LineInXYPlane() {
            _classCallCheck(this, LineInXYPlane);

            return _possibleConstructorReturn(this, (LineInXYPlane.__proto__ || Object.getPrototypeOf(LineInXYPlane)).apply(this, arguments));
      }

      _createClass(LineInXYPlane, [{
            key: 'calculateVertexSide',
            value: function calculateVertexSide(vertex) {
                  vertex = projectOntoXYPlane(vertex);

                  var vertexSide = 0;

                  var position = this.getPosition(),
                      direction = this.getDirection(),
                      vertexDirection = subtract(vertex, position),
                      zDirection = cross(direction, vertexDirection),
                      ///
                  zDirectionComponents = zDirection,
                      thirdZDirectionComponent = third(zDirectionComponents),
                      thirdZDirectionComponentApproximatelyEqualToZero = isApproximatelyEqualToZero(thirdZDirectionComponent);

                  if (!thirdZDirectionComponentApproximatelyEqualToZero) {
                        vertexSide = thirdZDirectionComponent > 0 ? +1 : -1; ///
                  }

                  return vertexSide;
            }
      }], [{
            key: 'fromVertices',
            value: function fromVertices(startVertex, endVertex) {
                  var position = startVertex.slice(),
                      direction = subtract(endVertex, startVertex),
                      lineInXYPlane = new LineInXYPlane(position, direction);

                  return lineInXYPlane;
            }
      }]);

      return LineInXYPlane;
}(Line);

module.exports = LineInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidmVjMyIsImFycmF5VXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJzdWJ0cmFjdCIsImNyb3NzIiwidGhpcmQiLCJwcm9qZWN0T250b1hZUGxhbmUiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsIkxpbmVJblhZUGxhbmUiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhTaWRlIiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInZlcnRleERpcmVjdGlvbiIsInpEaXJlY3Rpb24iLCJ6RGlyZWN0aW9uQ29tcG9uZW50cyIsInRoaXJkWkRpcmVjdGlvbkNvbXBvbmVudCIsInRoaXJkWkRpcmVjdGlvbkNvbXBvbmVudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4Iiwic2xpY2UiLCJsaW5lSW5YWVBsYW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsY0FBUixDQURiO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCO0FBQUEsSUFHTUcsa0JBQWtCSCxRQUFRLG9CQUFSLENBSHhCO0FBQUEsSUFJTUksdUJBQXVCSixRQUFRLHlCQUFSLENBSjdCOztJQU1RSyxRLEdBQW9CSixJLENBQXBCSSxRO0lBQVVDLEssR0FBVUwsSSxDQUFWSyxLO0lBQ1ZDLEssR0FBVUwsYyxDQUFWSyxLO0lBQ0FDLGtCLEdBQXVCTCxlLENBQXZCSyxrQjtJQUNBQywwQixHQUErQkwsb0IsQ0FBL0JLLDBCOztJQUVGQyxhOzs7Ozs7Ozs7OztnREFDZ0JDLE0sRUFBUTtBQUMxQkEsMkJBQVNILG1CQUFtQkcsTUFBbkIsQ0FBVDs7QUFFQSxzQkFBSUMsYUFBYSxDQUFqQjs7QUFFQSxzQkFBTUMsV0FBVyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsc0JBQ01DLFlBQVksS0FBS0MsWUFBTCxFQURsQjtBQUFBLHNCQUVNQyxrQkFBa0JaLFNBQVNNLE1BQVQsRUFBaUJFLFFBQWpCLENBRnhCO0FBQUEsc0JBR01LLGFBQWFaLE1BQU1TLFNBQU4sRUFBaUJFLGVBQWpCLENBSG5CO0FBQUEsc0JBR3NEO0FBQ2hERSx5Q0FBdUJELFVBSjdCO0FBQUEsc0JBS01FLDJCQUEyQmIsTUFBTVksb0JBQU4sQ0FMakM7QUFBQSxzQkFNTUUsbURBQW1EWiwyQkFBMkJXLHdCQUEzQixDQU56RDs7QUFRQSxzQkFBSSxDQUFDQyxnREFBTCxFQUF1RDtBQUNyRFQscUNBQWNRLDJCQUEyQixDQUE1QixHQUFpQyxDQUFDLENBQWxDLEdBQXNDLENBQUMsQ0FBcEQsQ0FEcUQsQ0FDRTtBQUN4RDs7QUFFRCx5QkFBT1IsVUFBUDtBQUNEOzs7eUNBRW1CVSxXLEVBQWFDLFMsRUFBVztBQUMxQyxzQkFBTVYsV0FBV1MsWUFBWUUsS0FBWixFQUFqQjtBQUFBLHNCQUNNVCxZQUFZVixTQUFTa0IsU0FBVCxFQUFvQkQsV0FBcEIsQ0FEbEI7QUFBQSxzQkFFTUcsZ0JBQWdCLElBQUlmLGFBQUosQ0FBa0JHLFFBQWxCLEVBQTRCRSxTQUE1QixDQUZ0Qjs7QUFJQSx5QkFBT1UsYUFBUDtBQUNEOzs7O0VBM0J5QjFCLEk7O0FBOEI1QjJCLE9BQU9DLE9BQVAsR0FBaUJqQixhQUFqQiIsImZpbGUiOiJsaW5lSW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi9tYXRocy92ZWMzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBzdWJ0cmFjdCwgY3Jvc3MgfSA9IHZlYzMsXG4gICAgICB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcHJvamVjdE9udG9YWVBsYW5lIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcztcblxuY2xhc3MgTGluZUluWFlQbGFuZSBleHRlbmRzIExpbmUge1xuICBjYWxjdWxhdGVWZXJ0ZXhTaWRlKHZlcnRleCkge1xuICAgIHZlcnRleCA9IHByb2plY3RPbnRvWFlQbGFuZSh2ZXJ0ZXgpO1xuICAgIFxuICAgIGxldCB2ZXJ0ZXhTaWRlID0gMDtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgdmVydGV4RGlyZWN0aW9uID0gc3VidHJhY3QodmVydGV4LCBwb3NpdGlvbiksXG4gICAgICAgICAgekRpcmVjdGlvbiA9IGNyb3NzKGRpcmVjdGlvbiwgdmVydGV4RGlyZWN0aW9uKSwgLy8vXG4gICAgICAgICAgekRpcmVjdGlvbkNvbXBvbmVudHMgPSB6RGlyZWN0aW9uLFxuICAgICAgICAgIHRoaXJkWkRpcmVjdGlvbkNvbXBvbmVudCA9IHRoaXJkKHpEaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB0aGlyZFpEaXJlY3Rpb25Db21wb25lbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh0aGlyZFpEaXJlY3Rpb25Db21wb25lbnQpO1xuXG4gICAgaWYgKCF0aGlyZFpEaXJlY3Rpb25Db21wb25lbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIHZlcnRleFNpZGUgPSAodGhpcmRaRGlyZWN0aW9uQ29tcG9uZW50ID4gMCkgPyArMSA6IC0xOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmVydGV4U2lkZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyhzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzdGFydFZlcnRleC5zbGljZSgpLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBuZXcgTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZUluWFlQbGFuZTtcbiJdfQ==