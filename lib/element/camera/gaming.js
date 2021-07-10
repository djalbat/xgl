"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));
var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));
var _camera = _interopRequireDefault(require("../camera"));
var _vector = require("../../maths/vector");
var _matrix = require("../../utilities/matrix");
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
var defaultInitialAngles = (0, _vector).zero2(), defaultInitialPosition = [
    0,
    0,
    5
];
var GamingCamera = /*#__PURE__*/ function(Camera) {
    _inherits(GamingCamera, Camera);
    function GamingCamera() {
        _classCallCheck(this, GamingCamera);
        return _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera).apply(this, arguments));
    }
    _createClass(GamingCamera, [
        {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
                var pan = this.getPan(), tilt = this.getTilt();
                if (false) {
                ///
                } else if (shiftKeyDown) {
                    pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
                } else if (mouseWheelDelta !== 0) {
                    pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
                } else {
                    tilt.updateAngles(relativeMouseCoordinates);
                }
                var angles = tilt.getAngles(), offsets = pan.getOffsets(), offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromNothing(), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromWidthAndHeight(width, height), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
                callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? defaultInitialAngles : _initialAngles, _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? defaultInitialPosition : _initialPosition, flipped = true, pan = _pan.default.fromInitialPosition(initialPosition), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), gamingCamera = _camera.default.fromProperties(GamingCamera, properties, pan, tilt);
                return gamingCamera;
            }
        }
    ]);
    return GamingCamera;
}(_camera.default);
exports.default = GamingCamera;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgICAgICAgIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gICAgICAgICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNSBdO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG5cblxuXG5cblxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gcGFuLmdldE9mZnNldHMoKSxcblxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgY2FsbGJhY2sob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsUG9zaXRpb24gPSBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbiksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0KTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVJLEdBQXlCLENBQXpCLElBQXlCO0FBQ3hCLEdBQTBCLENBQTFCLEtBQTBCO0FBRXhCLEdBQVcsQ0FBWCxPQUFXO0FBRVIsR0FBb0IsQ0FBcEIsT0FBb0I7QUFLUyxHQUF3QixDQUF4QixPQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLEdBQUssQ0FBQyxvQkFBb0IsT0FQSixPQUFvQixXQVFwQyxzQkFBc0I7SUFBSyxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7O0lBR25CLFlBQVk7Y0FBWixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBTy9CLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3hGLEdBQUssQ0FBQyxHQUFHLFFBQVEsTUFBTSxJQUNqQixJQUFJLFFBQVEsT0FBTztnQkFFekIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNWLEVBQUcsQUFBSCxDQUFHO2dCQUNMLENBQUMsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLElBQUk7Z0JBQ25FLENBQUMsTUFBTSxFQUFFLEVBQUUsZUFBZSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNqQyxHQUFHLENBQUMsYUFBYSxDQUFDLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxJQUFJO2dCQUNuRSxDQUFDLE1BQU0sQ0FBQztvQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QjtnQkFDNUMsQ0FBQztnQkFFRCxHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxJQUV4QixhQUFhLE9BOUI0QixPQUF3QiwyQkE4QnhCLE9BQU8sR0FDaEQsY0FBYyxPQS9CMkIsT0FBd0IsK0JBZ0NqRSxlQUFlLE9BaEMwQixPQUF3Qiw0QkFnQ3JCLE1BQU0sR0FDbEQsZ0JBQWdCLE9BakN5QixPQUF3QixxQ0FpQ1gsS0FBSyxFQUFFLE1BQU0sR0FDbkUsYUFBYSxPQWxDNEIsT0FBd0IsbUNBa0NoQixlQUFlO2dCQUV0RSxRQUFRLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQjtZQUMxRixDQUFDOzs7O1lBRU0sR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLGtCQUFzRixVQUFVLENBQTdGLGFBQWEsRUFBYixhQUFhLCtCQUFHLG9CQUFvQixzQ0FBK0MsVUFBVSxDQUF2RCxlQUFlLEVBQWYsZUFBZSxpQ0FBRyxzQkFBc0IscUJBQ2hGLE9BQU8sR0FBRyxJQUFJLEVBQ2QsR0FBRyxHQXBERyxJQUF5QixTQW9EckIsbUJBQW1CLENBQUMsZUFBZSxHQUM3QyxJQUFJLEdBcERHLEtBQTBCLFNBb0RyQiwyQkFBMkIsQ0FBQyxhQUFhLEVBQUUsT0FBTyxHQUU5RCxZQUFZLEdBcERILE9BQVcsU0FvREUsY0FBYyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUk7dUJBRXZFLFlBQVk7WUFDckIsQ0FBQzs7O1dBMUNrQixZQUFZO0VBYmQsT0FBVztrQkFhVCxZQUFZIn0=