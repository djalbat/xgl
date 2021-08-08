"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));
var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));
var _camera = _interopRequireDefault(require("../camera"));
var _defaults = require("../../defaults");
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
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles, _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition, _deltaMultiplier = properties.deltaMultiplier, deltaMultiplier = _deltaMultiplier === void 0 ? _defaults.DEFAULT_DELTA_MULTIPLIER : _deltaMultiplier, flipped = true, pan = _pan.default.fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), gamingCamera = _camera.default.fromProperties(GamingCamera, properties, pan, tilt);
                return gamingCamera;
            }
        }
    ]);
    return GamingCamera;
}(_camera.default);
exports.default = GamingCamera;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0RFTFRBX01VTFRJUExJRVIsIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuXG5cblxuXG5cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYW4gPSB0aGlzLmdldFBhbigpLFxuICAgICAgICAgIHRpbHQgPSB0aGlzLmdldFRpbHQoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCkge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG5cbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIGNhbGxiYWNrKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUywgaW5pdGlhbFBvc2l0aW9uID0gREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OLCBkZWx0YU11bHRpcGxpZXIgPSBERUZBVUxUX0RFTFRBX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb25BbmREZWx0YU11bHRpcGxpZXIoaW5pdGlhbFBvc2l0aW9uLCBkZWx0YU11bHRpcGxpZXIpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcblxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSSxHQUF5QixDQUF6QixJQUF5QjtBQUN4QixHQUEwQixDQUExQixLQUEwQjtBQUV4QixHQUFXLENBQVgsT0FBVztBQUU2RCxHQUFnQixDQUFoQixTQUFnQjtBQUt4RCxHQUF3QixDQUF4QixPQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRELFlBQVk7Y0FBWixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBTy9CLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQ3hGLEdBQUssQ0FBQyxHQUFHLFFBQVEsTUFBTSxJQUNqQixJQUFJLFFBQVEsT0FBTztnQkFFekIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNWLEVBQUcsQUFBSCxDQUFHO2dCQUNMLENBQUMsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLElBQUk7Z0JBQ25FLENBQUMsTUFBTSxFQUFFLEVBQUUsZUFBZSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNqQyxHQUFHLENBQUMsYUFBYSxDQUFDLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxJQUFJO2dCQUNuRSxDQUFDLE1BQU0sQ0FBQztvQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QjtnQkFDNUMsQ0FBQztnQkFFRCxHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxJQUV4QixhQUFhLE9BMUI0QixPQUF3QiwyQkEwQnhCLE9BQU8sR0FDaEQsY0FBYyxPQTNCMkIsT0FBd0IsK0JBNEJqRSxlQUFlLE9BNUIwQixPQUF3Qiw0QkE0QnJCLE1BQU0sR0FDbEQsZ0JBQWdCLE9BN0J5QixPQUF3QixxQ0E2QlgsS0FBSyxFQUFFLE1BQU0sR0FDbkUsYUFBYSxPQTlCNEIsT0FBd0IsbUNBOEJoQixlQUFlO2dCQUV0RSxRQUFRLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQjtZQUMxRixDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFeEIsQ0FBQzs7OztZQUVNLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakMsR0FBSyxrQkFBc0ksVUFBVSxDQUE3SSxhQUFhLEVBQWIsYUFBYSwrQkE3Q2tFLFNBQWdCLDZEQTZDb0MsVUFBVSxDQUFyRyxlQUFlLEVBQWYsZUFBZSxpQ0E3Q3dCLFNBQWdCLGlFQTZDb0MsVUFBVSxDQUF6RCxlQUFlLEVBQWYsZUFBZSxpQ0E3Q3BCLFNBQWdCLDhDQThDakcsT0FBTyxHQUFHLElBQUksRUFDZCxHQUFHLEdBcERHLElBQXlCLFNBb0RyQixxQ0FBcUMsQ0FBQyxlQUFlLEVBQUUsZUFBZSxHQUNoRixJQUFJLEdBcERHLEtBQTBCLFNBb0RyQiwyQkFBMkIsQ0FBQyxhQUFhLEVBQUUsT0FBTyxHQUU5RCxZQUFZLEdBcERILE9BQVcsU0FvREUsY0FBYyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUk7dUJBRXZFLFlBQVk7WUFDckIsQ0FBQzs7O1dBOUNrQixZQUFZO0VBVGQsT0FBVztrQkFTVCxZQUFZIn0=