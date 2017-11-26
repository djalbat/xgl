'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('../line'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9saW5lL2luWFlQbGFuZS5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwidGhpcmQiLCJzdWJ0cmFjdDMiLCJjcm9zczMiLCJwcm9qZWN0T250b1hZUGxhbmUiLCJMaW5lSW5YWVBsYW5lIiwibWlkUG9pbnQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwibWlkUG9pbnREaXJlY3Rpb24iLCJjcm9zc1Byb2R1Y3QiLCJjcm9zc1Byb2R1Y3RDb21wb25lbnRzIiwidGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQiLCJtaWRQb2ludFRvVGhlTGVmdCIsImlzTWlkUG9pbnRUb1RoZUxlZnQiLCJtaWRQb2ludFRvVGhlUmlnaHQiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInNsaWNlIiwibGluZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEscUJBQVIsQ0FIeEI7O0FBS00sSUFBRUksS0FBRixHQUFZSCxjQUFaLENBQUVHLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ3dCSCxlQUR4QixDQUNFRyxTQURGO0FBQUEsSUFDYUMsTUFEYixHQUN3QkosZUFEeEIsQ0FDYUksTUFEYjtBQUFBLElBRUVDLGtCQUZGLEdBRXlCSixlQUZ6QixDQUVFSSxrQkFGRjs7SUFJQUMsYTs7Ozs7Ozs7Ozs7Z0RBQ2dCQyxRLEVBQVU7QUFDNUJBLDZCQUFXRixtQkFBbUJFLFFBQW5CLENBQVg7O0FBRUEsc0JBQU1DLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLHNCQUNNQyxTQUFTLEtBQUtDLFNBQUwsRUFEZjtBQUFBLHNCQUVNQyxvQkFBb0JULFVBQVVJLFFBQVYsRUFBb0JDLFFBQXBCLENBRjFCO0FBQUEsc0JBR01LLGVBQWVULE9BQU9NLE1BQVAsRUFBZUUsaUJBQWYsQ0FIckI7QUFBQSxzQkFHd0Q7QUFDbERFLDJDQUF5QkQsWUFKL0I7QUFBQSxzQkFJOEM7QUFDeENFLCtDQUE2QmIsTUFBTVksc0JBQU4sQ0FMbkM7QUFBQSxzQkFNTUUsb0JBQXFCRCw2QkFBNkIsQ0FOeEQ7O0FBUUEseUJBQU9DLGlCQUFQO0FBQ0Q7OztpREFFb0JULFEsRUFBVTtBQUM3QixzQkFBTVMsb0JBQW9CLEtBQUtDLG1CQUFMLENBQXlCVixRQUF6QixDQUExQjtBQUFBLHNCQUNNVyxxQkFBcUIsQ0FBQ0YsaUJBRDVCLENBRDZCLENBRW1COztBQUVoRCx5QkFBT0Usa0JBQVA7QUFDRDs7O3dEQUVrQ0MsVyxFQUFhQyxTLEVBQVc7QUFDekQsc0JBQU1aLFdBQVdXLFlBQVlFLEtBQVosRUFBakI7QUFBQSxzQkFBc0M7QUFDaENYLDJCQUFTUCxVQUFVaUIsU0FBVixFQUFxQkQsV0FBckIsQ0FEZjtBQUFBLHNCQUVNRyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JFLFFBQWxCLEVBQTRCRSxNQUE1QixDQUZ0Qjs7QUFJQSx5QkFBT1ksYUFBUDtBQUNEOzs7O0VBNUJ5QnpCLEk7O0FBK0I1QjBCLE9BQU9DLE9BQVAsR0FBaUJsQixhQUFqQiIsImZpbGUiOiJpblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuLi9saW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgcHJvamVjdE9udG9YWVBsYW5lIH0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNsYXNzIExpbmVJblhZUGxhbmUgZXh0ZW5kcyBMaW5lIHtcbiAgaXNNaWRQb2ludFRvVGhlTGVmdChtaWRQb2ludCkge1xuICAgIG1pZFBvaW50ID0gcHJvamVjdE9udG9YWVBsYW5lKG1pZFBvaW50KTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgbWlkUG9pbnREaXJlY3Rpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnQsIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3QgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludERpcmVjdGlvbiksIC8vL1xuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zc1Byb2R1Y3QsICAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50VG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRUb1RoZVJpZ2h0KG1pZFBvaW50KSB7XG4gICAgY29uc3QgbWlkUG9pbnRUb1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpLFxuICAgICAgICAgIG1pZFBvaW50VG9UaGVSaWdodCA9ICFtaWRQb2ludFRvVGhlTGVmdDsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBuZXcgTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZUluWFlQbGFuZTtcbiJdfQ==