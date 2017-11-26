'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../facet/edge'),
    arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    vertexUtilities = require('../utilities/vertex');

var third = arrayUtilities.third,
    subtract3 = vectorUtilities.subtract3,
    cross3 = vectorUtilities.cross3,
    projectOntoXYPlane = vertexUtilities.projectOntoXYPlane;

var EdgeInXYPlane = function (_Edge) {
      _inherits(EdgeInXYPlane, _Edge);

      function EdgeInXYPlane() {
            _classCallCheck(this, EdgeInXYPlane);

            return _possibleConstructorReturn(this, (EdgeInXYPlane.__proto__ || Object.getPrototypeOf(EdgeInXYPlane)).apply(this, arguments));
      }

      _createClass(EdgeInXYPlane, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXNraW5nRmFjZXQvZWRnZUluWFlQbGFuZS5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidmVjdG9yVXRpbGl0aWVzIiwidmVydGV4VXRpbGl0aWVzIiwidGhpcmQiLCJzdWJ0cmFjdDMiLCJjcm9zczMiLCJwcm9qZWN0T250b1hZUGxhbmUiLCJFZGdlSW5YWVBsYW5lIiwibWlkUG9pbnQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwibWlkUG9pbnREaXJlY3Rpb24iLCJjcm9zc1Byb2R1Y3QiLCJjcm9zc1Byb2R1Y3RDb21wb25lbnRzIiwidGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQiLCJtaWRQb2ludFRvVGhlTGVmdCIsImlzTWlkUG9pbnRUb1RoZUxlZnQiLCJtaWRQb2ludFRvVGhlUmlnaHQiLCJzdGFydFZlcnRleEluWFlQbGFuZSIsImVuZFZlcnRleEluWFlQbGFuZSIsInNsaWNlIiwiZWRnZUluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxlQUFSLENBQWI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEscUJBQVIsQ0FIeEI7O0FBS00sSUFBRUksS0FBRixHQUFZSCxjQUFaLENBQUVHLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ3dCSCxlQUR4QixDQUNFRyxTQURGO0FBQUEsSUFDYUMsTUFEYixHQUN3QkosZUFEeEIsQ0FDYUksTUFEYjtBQUFBLElBRUVDLGtCQUZGLEdBRXlCSixlQUZ6QixDQUVFSSxrQkFGRjs7SUFJQUMsYTs7Ozs7Ozs7Ozs7Z0RBQ2dCQyxRLEVBQVU7QUFDNUJBLDZCQUFXRixtQkFBbUJFLFFBQW5CLENBQVg7O0FBRUEsc0JBQU1DLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLHNCQUNNQyxTQUFTLEtBQUtDLFNBQUwsRUFEZjtBQUFBLHNCQUVNQyxvQkFBb0JULFVBQVVJLFFBQVYsRUFBb0JDLFFBQXBCLENBRjFCO0FBQUEsc0JBR01LLGVBQWVULE9BQU9NLE1BQVAsRUFBZUUsaUJBQWYsQ0FIckI7QUFBQSxzQkFHd0Q7QUFDbERFLDJDQUF5QkQsWUFKL0I7QUFBQSxzQkFJOEM7QUFDeENFLCtDQUE2QmIsTUFBTVksc0JBQU4sQ0FMbkM7QUFBQSxzQkFNTUUsb0JBQXFCRCw2QkFBNkIsQ0FOeEQ7O0FBUUEseUJBQU9DLGlCQUFQO0FBQ0Q7OztpREFFb0JULFEsRUFBVTtBQUM3QixzQkFBTVMsb0JBQW9CLEtBQUtDLG1CQUFMLENBQXlCVixRQUF6QixDQUExQjtBQUFBLHNCQUNNVyxxQkFBcUIsQ0FBQ0YsaUJBRDVCLENBRDZCLENBRW1COztBQUVoRCx5QkFBT0Usa0JBQVA7QUFDRDs7OzBFQUVvREMsb0IsRUFBc0JDLGtCLEVBQW9CO0FBQzdGLHNCQUFNWixXQUFXVyxxQkFBcUJFLEtBQXJCLEVBQWpCO0FBQUEsc0JBQStDO0FBQ3pDWCwyQkFBU1AsVUFBVWlCLGtCQUFWLEVBQThCRCxvQkFBOUIsQ0FEZjtBQUFBLHNCQUVNRyxnQkFBZ0IsSUFBSWhCLGFBQUosQ0FBa0JFLFFBQWxCLEVBQTRCRSxNQUE1QixDQUZ0Qjs7QUFJQSx5QkFBT1ksYUFBUDtBQUNEOzs7O0VBNUJ5QnpCLEk7O0FBK0I1QjBCLE9BQU9DLE9BQVAsR0FBaUJsQixhQUFqQiIsImZpbGUiOiJlZGdlSW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZmFjZXQvZWRnZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IHByb2plY3RPbnRvWFlQbGFuZSB9ID0gdmVydGV4VXRpbGl0aWVzO1xuXG5jbGFzcyBFZGdlSW5YWVBsYW5lIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpIHtcbiAgICBtaWRQb2ludCA9IHByb2plY3RPbnRvWFlQbGFuZShtaWRQb2ludCk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIG1pZFBvaW50RGlyZWN0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50LCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0ID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnREaXJlY3Rpb24pLCAvLy9cbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3NQcm9kdWN0LCAgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50VG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50VG9UaGVSaWdodChtaWRQb2ludCkge1xuICAgIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlUmlnaHQgPSAhbWlkUG9pbnRUb1RoZUxlZnQ7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4SW5YWVBsYW5lQW5kRW5kVmVydGV4SW5YWVBsYW5lKHN0YXJ0VmVydGV4SW5YWVBsYW5lLCBlbmRWZXJ0ZXhJblhZUGxhbmUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4SW5YWVBsYW5lLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhJblhZUGxhbmUsIHN0YXJ0VmVydGV4SW5YWVBsYW5lKSxcbiAgICAgICAgICBlZGdlSW5YWVBsYW5lID0gbmV3IEVkZ2VJblhZUGxhbmUocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2VJblhZUGxhbmU7XG4iXX0=