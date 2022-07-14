"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MaskingEdge;
    }
});
var _edge = /*#__PURE__*/ _interopRequireDefault(require("../edge"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var MaskingEdge = /*#__PURE__*/ function(Edge) {
    _inherits(MaskingEdge, Edge);
    var _super = _createSuper(MaskingEdge);
    function MaskingEdge() {
        _classCallCheck(this, MaskingEdge);
        return _super.apply(this, arguments);
    }
    _createClass(MaskingEdge, [
        {
            key: "isMidPointPositionToTheLeft",
            value: function isMidPointPositionToTheLeft(midPointPosition) {
                midPointPosition = (0, _midPoint.projectMidPointPositionOntoXYPlane)(midPointPosition); ///
                var extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = (0, _vector.subtract3)(midPointPosition, position), crossProductComponents = (0, _vector.cross3)(extent, midPointRelativePosition), thirdCrossProductComponent = (0, _array.third)(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuXG5pbXBvcnQgeyB0aGlyZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbiksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQgPSAhbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkgeyByZXR1cm4gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoTWFza2luZ0VkZ2UsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1hc2tpbmdFZGdlIiwiaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0IiwibWlkUG9pbnRQb3NpdGlvbiIsInByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUiLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uIiwic3VidHJhY3QzIiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsImNyb3NzMyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwidGhpcmQiLCJtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0IiwiaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0IiwiZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJFZGdlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsV0FBVzs7O3lEQU5mLFNBQVM7cUJBRUosdUJBQXVCO3NCQUNYLG9CQUFvQjt3QkFDSCwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsSUFBQSxBQUFNQSxXQUFXLGlCQUFqQjs7O2FBQU1BLFdBQVc7Ozs7OztZQUM5QkMsR0FBMkIsRUFBM0JBLDZCQUEyQjttQkFBM0JBLFNBQUFBLDJCQUEyQixDQUFDQyxnQkFBZ0IsRUFBRTtnQkFDNUNBLGdCQUFnQixHQUFHQyxJQUFBQSxTQUFrQyxtQ0FBQSxFQUFDRCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUUsR0FBRztnQkFFN0UsSUFBTUUsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFLEVBQ3pCQyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxXQUFXLEVBQUUsRUFDN0JDLHdCQUF3QixHQUFHQyxJQUFBQSxPQUFTLFVBQUEsRUFBQ1AsZ0JBQWdCLEVBQUVJLFFBQVEsQ0FBQyxFQUNoRUksc0JBQXNCLEdBQUdDLElBQUFBLE9BQU0sT0FBQSxFQUFDUCxNQUFNLEVBQUVJLHdCQUF3QixDQUFDLEVBQ2pFSSwwQkFBMEIsR0FBR0MsSUFBQUEsTUFBSyxNQUFBLEVBQUNILHNCQUFzQixDQUFDLEVBQzFESSx5QkFBeUIsR0FBSUYsMEJBQTBCLEdBQUcsQ0FBQyxBQUFDLEFBQUM7Z0JBRW5FLE9BQU9FLHlCQUF5QixDQUFDO2FBQ2xDOzs7WUFFREMsR0FBNEIsRUFBNUJBLDhCQUE0QjttQkFBNUJBLFNBQUFBLDRCQUE0QixDQUFDYixnQkFBZ0IsRUFBRTtnQkFDN0MsSUFBTVkseUJBQXlCLEdBQUcsSUFBSSxDQUFDYiwyQkFBMkIsQ0FBQ0MsZ0JBQWdCLENBQUMsRUFDOUVjLDBCQUEwQixHQUFHLENBQUNGLHlCQUF5QixBQUFDO2dCQUU5RCxPQUFPRSwwQkFBMEIsQ0FBQzthQUNuQzs7OztZQUVNQyxHQUEyQixFQUEzQkEsNkJBQTJCO21CQUFsQyxTQUFPQSwyQkFBMkIsQ0FBQ0MsV0FBVyxFQUFFQyxTQUFTLEVBQUU7Z0JBQUUsT0FBT0MsS0FBSSxRQUFBLENBQUNILDJCQUEyQixDQUFDakIsV0FBVyxFQUFFa0IsV0FBVyxFQUFFQyxTQUFTLENBQUMsQ0FBQzthQUFFOzs7O0NBQzdJLENBdEJ3Q0MsS0FBSSxRQUFBLENBc0I1QyJ9