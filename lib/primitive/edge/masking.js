'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Edge = require('../edge'),
    vectorMaths = require('../../maths/vector'),
    arrayUtilities = require('../../utilities/array'),
    midPointUtilities = require('../../utilities/midPoint');

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3,
    projectMidPointPositionOntoXYPlane = midPointUtilities.projectMidPointPositionOntoXYPlane;

var MaskingEdge = /*#__PURE__*/function (_Edge) {
  _inherits(MaskingEdge, _Edge);

  function MaskingEdge() {
    _classCallCheck(this, MaskingEdge);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskingEdge).apply(this, arguments));
  }

  _createClass(MaskingEdge, [{
    key: "isMidPointPositionToTheLeft",
    value: function isMidPointPositionToTheLeft(midPointPosition) {
      midPointPosition = projectMidPointPositionOntoXYPlane(midPointPosition); ///

      var extent = this.getExtent(),
          position = this.getPosition(),
          midPointRelativePosition = subtract3(midPointPosition, position),
          crossProductComponents = cross3(extent, midPointRelativePosition),
          ///
      thirdCrossProductComponent = third(crossProductComponents),
          midPointPositionToTheLeft = thirdCrossProductComponent > 0;
      return midPointPositionToTheLeft;
    }
  }, {
    key: "isMidPointPositionToTheRight",
    value: function isMidPointPositionToTheRight(midPointPosition) {
      var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition),
          midPointPositionToTheRight = !midPointPositionToTheLeft;
      return midPointPositionToTheRight;
    }
  }], [{
    key: "fromStartVertexAndEndVertex",
    value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
      return Edge.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
    }
  }]);

  return MaskingEdge;
}(Edge);

module.exports = MaskingEdge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2tpbmcuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsImFycmF5VXRpbGl0aWVzIiwibWlkUG9pbnRVdGlsaXRpZXMiLCJ0aGlyZCIsInN1YnRyYWN0MyIsImNyb3NzMyIsInByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUiLCJNYXNraW5nRWRnZSIsIm1pZFBvaW50UG9zaXRpb24iLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uIiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwibWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEM0I7QUFBQSxJQUVNRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyx1QkFBRCxDQUY5QjtBQUFBLElBR01HLGlCQUFpQixHQUFHSCxPQUFPLENBQUMsMEJBQUQsQ0FIakM7O0FBS00sSUFBRUksS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ3dCSixXQUR4QixDQUNFSSxTQURGO0FBQUEsSUFDYUMsTUFEYixHQUN3QkwsV0FEeEIsQ0FDYUssTUFEYjtBQUFBLElBRUVDLGtDQUZGLEdBRXlDSixpQkFGekMsQ0FFRUksa0NBRkY7O0lBSUFDLFc7Ozs7Ozs7Ozs7O2dEQUN3QkMsZ0IsRUFBa0I7QUFDNUNBLE1BQUFBLGdCQUFnQixHQUFHRixrQ0FBa0MsQ0FBQ0UsZ0JBQUQsQ0FBckQsQ0FENEMsQ0FDOEI7O0FBRTFFLFVBQU1DLE1BQU0sR0FBRyxLQUFLQyxTQUFMLEVBQWY7QUFBQSxVQUNNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQURqQjtBQUFBLFVBRU1DLHdCQUF3QixHQUFHVCxTQUFTLENBQUNJLGdCQUFELEVBQW1CRyxRQUFuQixDQUYxQztBQUFBLFVBR01HLHNCQUFzQixHQUFHVCxNQUFNLENBQUNJLE1BQUQsRUFBU0ksd0JBQVQsQ0FIckM7QUFBQSxVQUd5RTtBQUNuRUUsTUFBQUEsMEJBQTBCLEdBQUdaLEtBQUssQ0FBQ1csc0JBQUQsQ0FKeEM7QUFBQSxVQUtNRSx5QkFBeUIsR0FBSUQsMEJBQTBCLEdBQUcsQ0FMaEU7QUFPQSxhQUFPQyx5QkFBUDtBQUNEOzs7aURBRTRCUixnQixFQUFrQjtBQUM3QyxVQUFNUSx5QkFBeUIsR0FBRyxLQUFLQywyQkFBTCxDQUFpQ1QsZ0JBQWpDLENBQWxDO0FBQUEsVUFDTVUsMEJBQTBCLEdBQUcsQ0FBQ0YseUJBRHBDO0FBR0EsYUFBT0UsMEJBQVA7QUFDRDs7O2dEQUVrQ0MsVyxFQUFhQyxTLEVBQVc7QUFBRSxhQUFPdEIsSUFBSSxDQUFDdUIsMkJBQUwsQ0FBaUNkLFdBQWpDLEVBQThDWSxXQUE5QyxFQUEyREMsU0FBM0QsQ0FBUDtBQUErRTs7OztFQXJCcEh0QixJOztBQXdCMUJ3QixNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgbWlkUG9pbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnQnKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9ID0gbWlkUG9pbnRVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdFZGdlO1xuIl19