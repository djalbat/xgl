'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

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
                      midPointPositionToTheRight = !midPointPositionToTheLeft; ///

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

function projectMidPointPositionOntoXYPlane(midPointPosition) {
      midPointPosition = [].concat(_toConsumableArray(midPointPosition.slice(0, 2)), [0]); ///

      return midPointPosition;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lZGdlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsImFycmF5VXRpbGl0aWVzIiwidGhpcmQiLCJzdWJ0cmFjdDMiLCJjcm9zczMiLCJNYXNraW5nRWRnZSIsIm1pZFBvaW50UG9zaXRpb24iLCJwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsIm1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiIsImNyb3NzUHJvZHVjdCIsImNyb3NzUHJvZHVjdENvbXBvbmVudHMiLCJ0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwiZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4IiwibW9kdWxlIiwiZXhwb3J0cyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxjQUFjRCxRQUFRLGlCQUFSLENBRHBCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztBQUlNLElBQUVHLEtBQUYsR0FBWUQsY0FBWixDQUFFQyxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUN3QkgsV0FEeEIsQ0FDRUcsU0FERjtBQUFBLElBQ2FDLE1BRGIsR0FDd0JKLFdBRHhCLENBQ2FJLE1BRGI7O0lBR0FDLFc7Ozs7Ozs7Ozs7O3dEQUN3QkMsZ0IsRUFBa0I7QUFDNUNBLHFDQUFtQkMsbUNBQW1DRCxnQkFBbkMsQ0FBbkIsQ0FENEMsQ0FDOEI7O0FBRTFFLHNCQUFNRSxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLHNCQUNNQyxXQUFXLEtBQUtDLFdBQUwsRUFEakI7QUFBQSxzQkFFTUMsMkJBQTJCVCxVQUFVRyxnQkFBVixFQUE0QkksUUFBNUIsQ0FGakM7QUFBQSxzQkFFd0U7QUFDbEVHLGlDQUFlVCxPQUFPSSxNQUFQLEVBQWVJLHdCQUFmLENBSHJCO0FBQUEsc0JBRytEO0FBQ3pERSwyQ0FBeUJELFlBSi9CO0FBQUEsc0JBSThDO0FBQ3hDRSwrQ0FBNkJiLE1BQU1ZLHNCQUFOLENBTG5DO0FBQUEsc0JBTU1FLDRCQUE2QkQsNkJBQTZCLENBTmhFOztBQVFBLHlCQUFPQyx5QkFBUDtBQUNEOzs7eURBRTRCVixnQixFQUFrQjtBQUM3QyxzQkFBTVUsNEJBQTRCLEtBQUtDLDJCQUFMLENBQWlDWCxnQkFBakMsQ0FBbEM7QUFBQSxzQkFDTVksNkJBQTZCLENBQUNGLHlCQURwQyxDQUQ2QyxDQUVtQjs7QUFFaEUseUJBQU9FLDBCQUFQO0FBQ0Q7Ozt3REFFa0NDLFcsRUFBYUMsUyxFQUFXO0FBQUUseUJBQU90QixLQUFLdUIsMkJBQUwsQ0FBaUNoQixXQUFqQyxFQUE4Q2MsV0FBOUMsRUFBMkRDLFNBQTNELENBQVA7QUFBK0U7Ozs7RUF0QnBIdEIsSTs7QUF5QjFCd0IsT0FBT0MsT0FBUCxHQUFpQmxCLFdBQWpCOztBQUVBLFNBQVNFLGtDQUFULENBQTRDRCxnQkFBNUMsRUFBOEQ7QUFDNURBLHNEQUF1QkEsaUJBQWlCa0IsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBdkIsSUFBcUQsQ0FBckQsR0FENEQsQ0FDRjs7QUFFMUQsYUFBT2xCLGdCQUFQO0FBQ0QiLCJmaWxlIjoibWFza2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksICBcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0ID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzUHJvZHVjdCwgIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0OyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdFZGdlO1xuXG5mdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuIl19