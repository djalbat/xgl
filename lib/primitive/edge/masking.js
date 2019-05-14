'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    vectorMaths = require('../../maths/vector'),
    arrayUtilities = require('../../utilities/array'),
    midPointUtilities = require('../../utilities/midPoint');

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3,
    projectMidPointPositionOntoXYPlane = midPointUtilities.projectMidPointPositionOntoXYPlane;

var MaskingEdge = function (_Edge) {
      _inherits(MaskingEdge, _Edge);

      function MaskingEdge() {
            _classCallCheck(this, MaskingEdge);

            return _possibleConstructorReturn(this, (MaskingEdge.__proto__ || Object.getPrototypeOf(MaskingEdge)).apply(this, arguments));
      }

      _createClass(MaskingEdge, [{
            key: 'isMidPointPositionToTheLeft',
            value: function isMidPointPositionToTheLeft(midPointPosition) {
                  midPointPosition = projectMidPointPositionOntoXYPlane(midPointPosition); ///

                  var extent = this.getExtent(),
                      position = this.getPosition(),
                      midPointRelativePosition = subtract3(midPointPosition, position),
                      ///
                  crossProduct = cross3(extent, midPointRelativePosition),
                      ///
                  crossProductComponents = crossProduct,
                      ///
                  thirdCrossProductComponent = third(crossProductComponents),
                      midPointPositionToTheLeft = thirdCrossProductComponent > 0;

                  return midPointPositionToTheLeft;
            }
      }, {
            key: 'isMidPointPositionToTheRight',
            value: function isMidPointPositionToTheRight(midPointPosition) {
                  var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition),
                      midPointPositionToTheRight = !midPointPositionToTheLeft;

                  return midPointPositionToTheRight;
            }
      }], [{
            key: 'fromStartVertexAndEndVertex',
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
                  return Edge.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
            }
      }]);

      return MaskingEdge;
}(Edge);

module.exports = MaskingEdge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJyZXF1aXJlIiwidmVjdG9yTWF0aHMiLCJhcnJheVV0aWxpdGllcyIsIm1pZFBvaW50VXRpbGl0aWVzIiwidGhpcmQiLCJzdWJ0cmFjdDMiLCJjcm9zczMiLCJwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIiwiTWFza2luZ0VkZ2UiLCJtaWRQb2ludFBvc2l0aW9uIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsIm1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiIsImNyb3NzUHJvZHVjdCIsImNyb3NzUHJvZHVjdENvbXBvbmVudHMiLCJ0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwiZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLGNBQWNELFFBQVEsb0JBQVIsQ0FEcEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsdUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsMEJBQVIsQ0FIMUI7O0FBS00sSUFBRUksS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ3dCSixXQUR4QixDQUNFSSxTQURGO0FBQUEsSUFDYUMsTUFEYixHQUN3QkwsV0FEeEIsQ0FDYUssTUFEYjtBQUFBLElBRUVDLGtDQUZGLEdBRXlDSixpQkFGekMsQ0FFRUksa0NBRkY7O0lBSUFDLFc7Ozs7Ozs7Ozs7O3dEQUN3QkMsZ0IsRUFBa0I7QUFDNUNBLHFDQUFtQkYsbUNBQW1DRSxnQkFBbkMsQ0FBbkIsQ0FENEMsQ0FDOEI7O0FBRTFFLHNCQUFNQyxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLHNCQUNNQyxXQUFXLEtBQUtDLFdBQUwsRUFEakI7QUFBQSxzQkFFTUMsMkJBQTJCVCxVQUFVSSxnQkFBVixFQUE0QkcsUUFBNUIsQ0FGakM7QUFBQSxzQkFFd0U7QUFDbEVHLGlDQUFlVCxPQUFPSSxNQUFQLEVBQWVJLHdCQUFmLENBSHJCO0FBQUEsc0JBRytEO0FBQ3pERSwyQ0FBeUJELFlBSi9CO0FBQUEsc0JBSThDO0FBQ3hDRSwrQ0FBNkJiLE1BQU1ZLHNCQUFOLENBTG5DO0FBQUEsc0JBTU1FLDRCQUE2QkQsNkJBQTZCLENBTmhFOztBQVFBLHlCQUFPQyx5QkFBUDtBQUNEOzs7eURBRTRCVCxnQixFQUFrQjtBQUM3QyxzQkFBTVMsNEJBQTRCLEtBQUtDLDJCQUFMLENBQWlDVixnQkFBakMsQ0FBbEM7QUFBQSxzQkFDTVcsNkJBQTZCLENBQUNGLHlCQURwQzs7QUFHQSx5QkFBT0UsMEJBQVA7QUFDRDs7O3dEQUVrQ0MsVyxFQUFhQyxTLEVBQVc7QUFBRSx5QkFBT3ZCLEtBQUt3QiwyQkFBTCxDQUFpQ2YsV0FBakMsRUFBOENhLFdBQTlDLEVBQTJEQyxTQUEzRCxDQUFQO0FBQStFOzs7O0VBdEJwSHZCLEk7O0FBeUIxQnlCLE9BQU9DLE9BQVAsR0FBaUJqQixXQUFqQiIsImZpbGUiOiJtYXNraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBtaWRQb2ludFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9taWRQb2ludCcpO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIH0gPSBtaWRQb2ludFV0aWxpdGllcztcblxuY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLCAvLy9cbiAgICAgICAgICBjcm9zc1Byb2R1Y3QgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3NQcm9kdWN0LCAgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdFZGdlO1xuIl19