"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Edge = require("../edge"),
    vectorMaths = require("../../maths/vector"),
    arrayUtilities = require("../../utilities/array"),
    midPointUtilities = require("../../utilities/midPoint");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2tpbmcuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsImFycmF5VXRpbGl0aWVzIiwibWlkUG9pbnRVdGlsaXRpZXMiLCJ0aGlyZCIsInN1YnRyYWN0MyIsImNyb3NzMyIsInByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUiLCJNYXNraW5nRWRnZSIsIm1pZFBvaW50UG9zaXRpb24iLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uIiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwibWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXBCO0FBQUEsSUFDTUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEM0I7QUFBQSxJQUVNRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyx1QkFBRCxDQUY5QjtBQUFBLElBR01HLGlCQUFpQixHQUFHSCxPQUFPLENBQUMsMEJBQUQsQ0FIakM7O0FBS00sSUFBRUksS0FBRixHQUFZRixjQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ3dCSixXQUR4QixDQUNFSSxTQURGO0FBQUEsSUFDYUMsTUFEYixHQUN3QkwsV0FEeEIsQ0FDYUssTUFEYjtBQUFBLElBRUVDLGtDQUZGLEdBRXlDSixpQkFGekMsQ0FFRUksa0NBRkY7O0lBSUFDLFc7Ozs7Ozs7Ozs7O2dEQUN3QkMsZ0IsRUFBa0I7QUFDNUNBLE1BQUFBLGdCQUFnQixHQUFHRixrQ0FBa0MsQ0FBQ0UsZ0JBQUQsQ0FBckQsQ0FENEMsQ0FDOEI7O0FBRTFFLFVBQU1DLE1BQU0sR0FBRyxLQUFLQyxTQUFMLEVBQWY7QUFBQSxVQUNNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQURqQjtBQUFBLFVBRU1DLHdCQUF3QixHQUFHVCxTQUFTLENBQUNJLGdCQUFELEVBQW1CRyxRQUFuQixDQUYxQztBQUFBLFVBR01HLHNCQUFzQixHQUFHVCxNQUFNLENBQUNJLE1BQUQsRUFBU0ksd0JBQVQsQ0FIckM7QUFBQSxVQUd5RTtBQUNuRUUsTUFBQUEsMEJBQTBCLEdBQUdaLEtBQUssQ0FBQ1csc0JBQUQsQ0FKeEM7QUFBQSxVQUtNRSx5QkFBeUIsR0FBSUQsMEJBQTBCLEdBQUcsQ0FMaEU7QUFPQSxhQUFPQyx5QkFBUDtBQUNEOzs7aURBRTRCUixnQixFQUFrQjtBQUM3QyxVQUFNUSx5QkFBeUIsR0FBRyxLQUFLQywyQkFBTCxDQUFpQ1QsZ0JBQWpDLENBQWxDO0FBQUEsVUFDTVUsMEJBQTBCLEdBQUcsQ0FBQ0YseUJBRHBDO0FBR0EsYUFBT0UsMEJBQVA7QUFDRDs7O2dEQUVrQ0MsVyxFQUFhQyxTLEVBQVc7QUFBRSxhQUFPdEIsSUFBSSxDQUFDdUIsMkJBQUwsQ0FBaUNkLFdBQWpDLEVBQThDWSxXQUE5QyxFQUEyREMsU0FBM0QsQ0FBUDtBQUErRTs7OztFQXJCcEh0QixJOztBQXdCMUJ3QixNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZShcIi4uL2VkZ2VcIiksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi8uLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBtaWRQb2ludFV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIik7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSA9IG1pZFBvaW50VXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRWRnZTtcbiJdfQ==