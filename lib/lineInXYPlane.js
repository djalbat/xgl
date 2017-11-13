'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    vectorUtilities = require('./utilities/vector'),
    arrayUtilities = require('./utilities/array'),
    vertexUtilities = require('./utilities/vertex'),
    approximateUtilities = require('./utilities/approximate');

var third = arrayUtilities.third,
    subtract3 = vectorUtilities.subtract3,
    cross3 = vectorUtilities.cross3,
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
                      vertexDirection = subtract3(vertex, position),
                      zDirection = cross3(direction, vertexDirection),
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
                      ///
                  direction = subtract3(endVertex, startVertex),
                      lineInXYPlane = new LineInXYPlane(position, direction);

                  return lineInXYPlane;
            }
      }]);

      return LineInXYPlane;
}(Line);

module.exports = LineInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidmVjdG9yVXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZXJ0ZXhVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsInRoaXJkIiwic3VidHJhY3QzIiwiY3Jvc3MzIiwicHJvamVjdE9udG9YWVBsYW5lIiwiaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJMaW5lSW5YWVBsYW5lIiwidmVydGV4IiwidmVydGV4U2lkZSIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJ2ZXJ0ZXhEaXJlY3Rpb24iLCJ6RGlyZWN0aW9uIiwiekRpcmVjdGlvbkNvbXBvbmVudHMiLCJ0aGlyZFpEaXJlY3Rpb25Db21wb25lbnQiLCJ0aGlyZFpEaXJlY3Rpb25Db21wb25lbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInNsaWNlIiwibGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsb0JBQVIsQ0FEeEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsbUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7QUFBQSxJQUlNSSx1QkFBdUJKLFFBQVEseUJBQVIsQ0FKN0I7O0FBTU0sSUFBRUssS0FBRixHQUFZSCxjQUFaLENBQUVHLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ3dCTCxlQUR4QixDQUNFSyxTQURGO0FBQUEsSUFDYUMsTUFEYixHQUN3Qk4sZUFEeEIsQ0FDYU0sTUFEYjtBQUFBLElBRUVDLGtCQUZGLEdBRXlCTCxlQUZ6QixDQUVFSyxrQkFGRjtBQUFBLElBR0VDLDBCQUhGLEdBR2lDTCxvQkFIakMsQ0FHRUssMEJBSEY7O0lBS0FDLGE7Ozs7Ozs7Ozs7O2dEQUNnQkMsTSxFQUFRO0FBQzFCQSwyQkFBU0gsbUJBQW1CRyxNQUFuQixDQUFUOztBQUVBLHNCQUFJQyxhQUFhLENBQWpCOztBQUVBLHNCQUFNQyxXQUFXLEtBQUtDLFdBQUwsRUFBakI7QUFBQSxzQkFDTUMsWUFBWSxLQUFLQyxZQUFMLEVBRGxCO0FBQUEsc0JBRU1DLGtCQUFrQlgsVUFBVUssTUFBVixFQUFrQkUsUUFBbEIsQ0FGeEI7QUFBQSxzQkFHTUssYUFBYVgsT0FBT1EsU0FBUCxFQUFrQkUsZUFBbEIsQ0FIbkI7QUFBQSxzQkFHdUQ7QUFDakRFLHlDQUF1QkQsVUFKN0I7QUFBQSxzQkFLTUUsMkJBQTJCZixNQUFNYyxvQkFBTixDQUxqQztBQUFBLHNCQU1NRSxtREFBbURaLDJCQUEyQlcsd0JBQTNCLENBTnpEOztBQVFBLHNCQUFJLENBQUNDLGdEQUFMLEVBQXVEO0FBQ3JEVCxxQ0FBY1EsMkJBQTJCLENBQTVCLEdBQWlDLENBQUMsQ0FBbEMsR0FBc0MsQ0FBQyxDQUFwRCxDQURxRCxDQUNFO0FBQ3hEOztBQUVELHlCQUFPUixVQUFQO0FBQ0Q7Ozt5Q0FFbUJVLFcsRUFBYUMsUyxFQUFXO0FBQzFDLHNCQUFNVixXQUFXUyxZQUFZRSxLQUFaLEVBQWpCO0FBQUEsc0JBQXNDO0FBQ2hDVCw4QkFBWVQsVUFBVWlCLFNBQVYsRUFBcUJELFdBQXJCLENBRGxCO0FBQUEsc0JBRU1HLGdCQUFnQixJQUFJZixhQUFKLENBQWtCRyxRQUFsQixFQUE0QkUsU0FBNUIsQ0FGdEI7O0FBSUEseUJBQU9VLGFBQVA7QUFDRDs7OztFQTNCeUIxQixJOztBQThCNUIyQixPQUFPQyxPQUFQLEdBQWlCakIsYUFBakIiLCJmaWxlIjoibGluZUluWFlQbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IHByb2plY3RPbnRvWFlQbGFuZSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXM7XG5cbmNsYXNzIExpbmVJblhZUGxhbmUgZXh0ZW5kcyBMaW5lIHtcbiAgY2FsY3VsYXRlVmVydGV4U2lkZSh2ZXJ0ZXgpIHtcbiAgICB2ZXJ0ZXggPSBwcm9qZWN0T250b1hZUGxhbmUodmVydGV4KTtcbiAgICBcbiAgICBsZXQgdmVydGV4U2lkZSA9IDA7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIHZlcnRleERpcmVjdGlvbiA9IHN1YnRyYWN0Myh2ZXJ0ZXgsIHBvc2l0aW9uKSxcbiAgICAgICAgICB6RGlyZWN0aW9uID0gY3Jvc3MzKGRpcmVjdGlvbiwgdmVydGV4RGlyZWN0aW9uKSwgLy8vXG4gICAgICAgICAgekRpcmVjdGlvbkNvbXBvbmVudHMgPSB6RGlyZWN0aW9uLFxuICAgICAgICAgIHRoaXJkWkRpcmVjdGlvbkNvbXBvbmVudCA9IHRoaXJkKHpEaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB0aGlyZFpEaXJlY3Rpb25Db21wb25lbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh0aGlyZFpEaXJlY3Rpb25Db21wb25lbnQpO1xuXG4gICAgaWYgKCF0aGlyZFpEaXJlY3Rpb25Db21wb25lbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIHZlcnRleFNpZGUgPSAodGhpcmRaRGlyZWN0aW9uQ29tcG9uZW50ID4gMCkgPyArMSA6IC0xOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmVydGV4U2lkZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyhzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzdGFydFZlcnRleC5zbGljZSgpLCAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgICAgbGluZUluWFlQbGFuZSA9IG5ldyBMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lSW5YWVBsYW5lO1xuIl19