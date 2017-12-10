'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('./edge'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector');

var third = arrayUtilities.third,
    subtract3 = vectorUtilities.subtract3,
    cross3 = vectorUtilities.cross3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lZGdlSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJ2ZWN0b3JVdGlsaXRpZXMiLCJ0aGlyZCIsInN1YnRyYWN0MyIsImNyb3NzMyIsIkVkZ2VJblhZUGxhbmUiLCJtaWRQb2ludCIsInByb2plY3RPbnRvWFlQbGFuZSIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJtaWRQb2ludERpcmVjdGlvbiIsImNyb3NzUHJvZHVjdCIsImNyb3NzUHJvZHVjdENvbXBvbmVudHMiLCJ0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCIsIm1pZFBvaW50VG9UaGVMZWZ0IiwiaXNNaWRQb2ludFRvVGhlTGVmdCIsIm1pZFBvaW50VG9UaGVSaWdodCIsInN0YXJ0VmVydGV4SW5YWVBsYW5lIiwiZW5kVmVydGV4SW5YWVBsYW5lIiwic2xpY2UiLCJlZGdlSW5YWVBsYW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsInZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG1CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLG9CQUFSLENBRnhCOztBQUlNLElBQUVHLEtBQUYsR0FBWUYsY0FBWixDQUFFRSxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUN3QkYsZUFEeEIsQ0FDRUUsU0FERjtBQUFBLElBQ2FDLE1BRGIsR0FDd0JILGVBRHhCLENBQ2FHLE1BRGI7O0lBR0FDLGE7Ozs7Ozs7Ozs7O2dEQUNnQkMsUSxFQUFVO0FBQzVCQSw2QkFBV0MsbUJBQW1CRCxRQUFuQixDQUFYLENBRDRCLENBQ2M7O0FBRTFDLHNCQUFNRSxXQUFXLEtBQUtDLFdBQUwsRUFBakI7QUFBQSxzQkFDTUMsU0FBUyxLQUFLQyxTQUFMLEVBRGY7QUFBQSxzQkFFTUMsb0JBQW9CVCxVQUFVRyxRQUFWLEVBQW9CRSxRQUFwQixDQUYxQjtBQUFBLHNCQUdNSyxlQUFlVCxPQUFPTSxNQUFQLEVBQWVFLGlCQUFmLENBSHJCO0FBQUEsc0JBR3dEO0FBQ2xERSwyQ0FBeUJELFlBSi9CO0FBQUEsc0JBSThDO0FBQ3hDRSwrQ0FBNkJiLE1BQU1ZLHNCQUFOLENBTG5DO0FBQUEsc0JBTU1FLG9CQUFxQkQsNkJBQTZCLENBTnhEOztBQVFBLHlCQUFPQyxpQkFBUDtBQUNEOzs7aURBRW9CVixRLEVBQVU7QUFDN0Isc0JBQU1VLG9CQUFvQixLQUFLQyxtQkFBTCxDQUF5QlgsUUFBekIsQ0FBMUI7QUFBQSxzQkFDTVkscUJBQXFCLENBQUNGLGlCQUQ1QixDQUQ2QixDQUVtQjs7QUFFaEQseUJBQU9FLGtCQUFQO0FBQ0Q7OzswRUFFb0RDLG9CLEVBQXNCQyxrQixFQUFvQjtBQUM3RixzQkFBTVosV0FBV1cscUJBQXFCRSxLQUFyQixFQUFqQjtBQUFBLHNCQUErQztBQUN6Q1gsMkJBQVNQLFVBQVVpQixrQkFBVixFQUE4QkQsb0JBQTlCLENBRGY7QUFBQSxzQkFFTUcsZ0JBQWdCLElBQUlqQixhQUFKLENBQWtCRyxRQUFsQixFQUE0QkUsTUFBNUIsQ0FGdEI7O0FBSUEseUJBQU9ZLGFBQVA7QUFDRDs7OztFQTVCeUJ4QixJOztBQStCNUJ5QixPQUFPQyxPQUFQLEdBQWlCbkIsYUFBakI7O0FBRUEsU0FBU0Usa0JBQVQsQ0FBNEJrQixNQUE1QixFQUFvQztBQUNsQ0EsNENBQWFBLE9BQU9KLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQWIsSUFBaUMsQ0FBakMsR0FEa0MsQ0FDSTs7QUFFdEMsYUFBT0ksTUFBUDtBQUNEIiwiZmlsZSI6ImVkZ2VJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3RvclV0aWxpdGllcztcblxuY2xhc3MgRWRnZUluWFlQbGFuZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSB7XG4gICAgbWlkUG9pbnQgPSBwcm9qZWN0T250b1hZUGxhbmUobWlkUG9pbnQpOyAgLy8vXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIG1pZFBvaW50RGlyZWN0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50LCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0ID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnREaXJlY3Rpb24pLCAvLy9cbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3NQcm9kdWN0LCAgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50VG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50VG9UaGVSaWdodChtaWRQb2ludCkge1xuICAgIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlUmlnaHQgPSAhbWlkUG9pbnRUb1RoZUxlZnQ7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4SW5YWVBsYW5lQW5kRW5kVmVydGV4SW5YWVBsYW5lKHN0YXJ0VmVydGV4SW5YWVBsYW5lLCBlbmRWZXJ0ZXhJblhZUGxhbmUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4SW5YWVBsYW5lLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhJblhZUGxhbmUsIHN0YXJ0VmVydGV4SW5YWVBsYW5lKSxcbiAgICAgICAgICBlZGdlSW5YWVBsYW5lID0gbmV3IEVkZ2VJblhZUGxhbmUocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2VJblhZUGxhbmU7XG5cbmZ1bmN0aW9uIHByb2plY3RPbnRvWFlQbGFuZSh2ZXJ0ZXgpIHtcbiAgdmVydGV4ID0gWy4uLnZlcnRleC5zbGljZSgwLCAyKSwgMF07ICAvLy9cblxuICByZXR1cm4gdmVydGV4O1xufVxuIl19