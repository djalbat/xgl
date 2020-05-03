"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _edge = _interopRequireDefault(require("../edge"));

var _array = require("../../utilities/array");

var _vector = require("../../maths/vector");

var _midPoint = require("../../utilities/midPoint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaskingEdge = /*#__PURE__*/function (_Edge) {
  _inherits(MaskingEdge, _Edge);

  var _super = _createSuper(MaskingEdge);

  function MaskingEdge() {
    _classCallCheck(this, MaskingEdge);

    return _super.apply(this, arguments);
  }

  _createClass(MaskingEdge, [{
    key: "isMidPointPositionToTheLeft",
    value: function isMidPointPositionToTheLeft(midPointPosition) {
      midPointPosition = (0, _midPoint.projectMidPointPositionOntoXYPlane)(midPointPosition); ///

      var extent = this.getExtent(),
          position = this.getPosition(),
          midPointRelativePosition = (0, _vector.subtract3)(midPointPosition, position),
          crossProductComponents = (0, _vector.cross3)(extent, midPointRelativePosition),
          ///
      thirdCrossProductComponent = (0, _array.third)(crossProductComponents),
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
      return _edge["default"].fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
    }
  }]);

  return MaskingEdge;
}(_edge["default"]);

exports["default"] = MaskingEdge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2tpbmcuanMiXSwibmFtZXMiOlsiTWFza2luZ0VkZ2UiLCJtaWRQb2ludFBvc2l0aW9uIiwiZXh0ZW50IiwiZ2V0RXh0ZW50IiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsIm1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiIsImNyb3NzUHJvZHVjdENvbXBvbmVudHMiLCJ0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQiLCJtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwiRWRnZSIsImZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7Z0RBQ1NDLGdCLEVBQWtCO0FBQzVDQSxNQUFBQSxnQkFBZ0IsR0FBRyxrREFBbUNBLGdCQUFuQyxDQUFuQixDQUQ0QyxDQUM4Qjs7QUFFMUUsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLFNBQUwsRUFBZjtBQUFBLFVBQ01DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBRGpCO0FBQUEsVUFFTUMsd0JBQXdCLEdBQUcsdUJBQVVMLGdCQUFWLEVBQTRCRyxRQUE1QixDQUZqQztBQUFBLFVBR01HLHNCQUFzQixHQUFHLG9CQUFPTCxNQUFQLEVBQWVJLHdCQUFmLENBSC9CO0FBQUEsVUFHeUU7QUFDbkVFLE1BQUFBLDBCQUEwQixHQUFHLGtCQUFNRCxzQkFBTixDQUpuQztBQUFBLFVBS01FLHlCQUF5QixHQUFJRCwwQkFBMEIsR0FBRyxDQUxoRTtBQU9BLGFBQU9DLHlCQUFQO0FBQ0Q7OztpREFFNEJSLGdCLEVBQWtCO0FBQzdDLFVBQU1RLHlCQUF5QixHQUFHLEtBQUtDLDJCQUFMLENBQWlDVCxnQkFBakMsQ0FBbEM7QUFBQSxVQUNNVSwwQkFBMEIsR0FBRyxDQUFDRix5QkFEcEM7QUFHQSxhQUFPRSwwQkFBUDtBQUNEOzs7Z0RBRWtDQyxXLEVBQWFDLFMsRUFBVztBQUFFLGFBQU9DLGlCQUFLQywyQkFBTCxDQUFpQ2YsV0FBakMsRUFBOENZLFdBQTlDLEVBQTJEQyxTQUEzRCxDQUFQO0FBQStFOzs7O0VBckJyR0MsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgdGhpcmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuIl19