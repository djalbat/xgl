'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('../line'),
    arrayUtilities = require('../../utilities/array'),
    vectorUtilities = require('../../utilities/vector'),
    vertexUtilities = require('../../utilities/vertex');

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
            key: 'fromStartVertexInXYPlaneAndEndVertexInXYPlane',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9pblhZUGxhbmUuanMiXSwibmFtZXMiOlsiTGluZSIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInZlY3RvclV0aWxpdGllcyIsInZlcnRleFV0aWxpdGllcyIsInRoaXJkIiwic3VidHJhY3QzIiwiY3Jvc3MzIiwicHJvamVjdE9udG9YWVBsYW5lIiwiTGluZUluWFlQbGFuZSIsIm1pZFBvaW50IiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImV4dGVudCIsImdldEV4dGVudCIsIm1pZFBvaW50RGlyZWN0aW9uIiwiY3Jvc3NQcm9kdWN0IiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwibWlkUG9pbnRUb1RoZUxlZnQiLCJpc01pZFBvaW50VG9UaGVMZWZ0IiwibWlkUG9pbnRUb1RoZVJpZ2h0Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJzbGljZSIsImxpbmVJblhZUGxhbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLHdCQUFSLENBRnhCO0FBQUEsSUFHTUcsa0JBQWtCSCxRQUFRLHdCQUFSLENBSHhCOztBQUtNLElBQUVJLEtBQUYsR0FBWUgsY0FBWixDQUFFRyxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUN3QkgsZUFEeEIsQ0FDRUcsU0FERjtBQUFBLElBQ2FDLE1BRGIsR0FDd0JKLGVBRHhCLENBQ2FJLE1BRGI7QUFBQSxJQUVFQyxrQkFGRixHQUV5QkosZUFGekIsQ0FFRUksa0JBRkY7O0lBSUFDLGE7Ozs7Ozs7Ozs7O2dEQUNnQkMsUSxFQUFVO0FBQzVCQSw2QkFBV0YsbUJBQW1CRSxRQUFuQixDQUFYOztBQUVBLHNCQUFNQyxXQUFXLEtBQUtDLFdBQUwsRUFBakI7QUFBQSxzQkFDTUMsU0FBUyxLQUFLQyxTQUFMLEVBRGY7QUFBQSxzQkFFTUMsb0JBQW9CVCxVQUFVSSxRQUFWLEVBQW9CQyxRQUFwQixDQUYxQjtBQUFBLHNCQUdNSyxlQUFlVCxPQUFPTSxNQUFQLEVBQWVFLGlCQUFmLENBSHJCO0FBQUEsc0JBR3dEO0FBQ2xERSwyQ0FBeUJELFlBSi9CO0FBQUEsc0JBSThDO0FBQ3hDRSwrQ0FBNkJiLE1BQU1ZLHNCQUFOLENBTG5DO0FBQUEsc0JBTU1FLG9CQUFxQkQsNkJBQTZCLENBTnhEOztBQVFBLHlCQUFPQyxpQkFBUDtBQUNEOzs7aURBRW9CVCxRLEVBQVU7QUFDN0Isc0JBQU1TLG9CQUFvQixLQUFLQyxtQkFBTCxDQUF5QlYsUUFBekIsQ0FBMUI7QUFBQSxzQkFDTVcscUJBQXFCLENBQUNGLGlCQUQ1QixDQUQ2QixDQUVtQjs7QUFFaEQseUJBQU9FLGtCQUFQO0FBQ0Q7Ozt3REFFa0NDLFcsRUFBYUMsUyxFQUFXO0FBQ3pELHNCQUFNWixXQUFXVyxZQUFZRSxLQUFaLEVBQWpCO0FBQUEsc0JBQXNDO0FBQ2hDWCwyQkFBU1AsVUFBVWlCLFNBQVYsRUFBcUJELFdBQXJCLENBRGY7QUFBQSxzQkFFTUcsZ0JBQWdCLElBQUloQixhQUFKLENBQWtCRSxRQUFsQixFQUE0QkUsTUFBNUIsQ0FGdEI7O0FBSUEseUJBQU9ZLGFBQVA7QUFDRDs7OztFQTVCeUJ6QixJOztBQStCNUIwQixPQUFPQyxPQUFQLEdBQWlCbEIsYUFBakIiLCJmaWxlIjoiaW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi4vbGluZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IHByb2plY3RPbnRvWFlQbGFuZSB9ID0gdmVydGV4VXRpbGl0aWVzO1xuXG5jbGFzcyBMaW5lSW5YWVBsYW5lIGV4dGVuZHMgTGluZSB7XG4gIGlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpIHtcbiAgICBtaWRQb2ludCA9IHByb2plY3RPbnRvWFlQbGFuZShtaWRQb2ludCk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIG1pZFBvaW50RGlyZWN0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50LCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0ID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnREaXJlY3Rpb24pLCAvLy9cbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3NQcm9kdWN0LCAgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50VG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50VG9UaGVSaWdodChtaWRQb2ludCkge1xuICAgIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlUmlnaHQgPSAhbWlkUG9pbnRUb1RoZUxlZnQ7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KSxcbiAgICAgICAgICBsaW5lSW5YWVBsYW5lID0gbmV3IExpbmVJblhZUGxhbmUocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbGluZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVJblhZUGxhbmU7XG4iXX0=