"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _edge = _interopRequireDefault(require("../edge"));
var _array = require("../../utilities/array");
var _vector = require("../../maths/vector");
var _midPoint = require("../../utilities/midPoint");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var MaskingEdge = /*#__PURE__*/ function(Edge) {
    _inherits(MaskingEdge, Edge);
    function MaskingEdge() {
        _classCallCheck(this, MaskingEdge);
        return _possibleConstructorReturn(this, _getPrototypeOf(MaskingEdge).apply(this, arguments));
    }
    _createClass(MaskingEdge, [
        {
            key: "isMidPointPositionToTheLeft",
            value: function isMidPointPositionToTheLeft(midPointPosition) {
                midPointPosition = (0, _midPoint).projectMidPointPositionOntoXYPlane(midPointPosition); ///
                var extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = (0, _vector).subtract3(midPointPosition, position), crossProductComponents = (0, _vector).cross3(extent, midPointRelativePosition), thirdCrossProductComponent = (0, _array).third(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
                return midPointPositionToTheLeft;
            }
        },
        {
            key: "isMidPointPositionToTheRight",
            value: function isMidPointPositionToTheRight(midPointPosition) {
                var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition), midPointPositionToTheRight = !midPointPositionToTheLeft;
                return midPointPositionToTheRight;
            }
        }
    ], [
        {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
                return _edge.default.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
            }
        }
    ]);
    return MaskingEdge;
}(_edge.default);
exports.default = MaskingEdge;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJ0aGlyZCIsInN1YnRyYWN0MyIsImNyb3NzMyIsInByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUiLCJNYXNraW5nRWRnZSIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsIm1pZFBvaW50UG9zaXRpb24iLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uIiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwibWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQiLCJtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCIsImZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBRUosR0FBdUIsQ0FBdkIsTUFBdUI7QUFDWCxHQUFvQixDQUFwQixPQUFvQjtBQUNILEdBQTBCLENBQTFCLFNBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEQsV0FBVyxpQkFBakIsUUFBUTtjQUFGLFdBQVc7YUFBWCxXQUFXOzhCQUFYLFdBQVc7Z0VBQVgsV0FBVzs7aUJBQVgsV0FBVzs7WUFDOUIsR0FBMkIsR0FBM0IsMkJBQTJCO21CQUEzQixRQUFRLENBQVIsMkJBQTJCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDN0MsZ0JBQWdCLE9BSitCLFNBQTBCLHFDQUluQixnQkFBZ0IsRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdFLEdBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFDdkIsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQzNCLHdCQUF3QixPQVRBLE9BQW9CLFlBU1AsZ0JBQWdCLEVBQUUsUUFBUSxHQUMvRCxzQkFBc0IsT0FWRSxPQUFvQixTQVVaLE1BQU0sRUFBRSx3QkFBd0IsR0FDaEUsMEJBQTBCLE9BWmQsTUFBdUIsUUFZQSxzQkFBc0IsR0FDekQseUJBQXlCLEdBQUksMEJBQTBCLEdBQUcsQ0FBQztnQkFFakUsTUFBTSxDQUFDLHlCQUF5QjtZQUNsQyxDQUFDOzs7WUFFRCxHQUE0QixHQUE1Qiw0QkFBNEI7bUJBQTVCLFFBQVEsQ0FBUiw0QkFBNEIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM5QyxHQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGdCQUFnQixHQUM3RSwwQkFBMEIsSUFBSSx5QkFBeUI7Z0JBRTdELE1BQU0sQ0FBQywwQkFBMEI7WUFDbkMsQ0FBQzs7OztZQUVNLEdBQTJCLEdBQTNCLDJCQUEyQjttQkFBbEMsUUFBUSxDQUFELDJCQUEyQixDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBM0JwRCxLQUFTLFNBMkJpRCwyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVM7WUFBRyxDQUFDOzs7V0FyQnpILFdBQVc7RUFOZixLQUFTO2tCQU1MLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgdGhpcmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuIl19