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
    function GamingCamera(zFar, zNear, fieldOfView, pan, tilt) {
        _classCallCheck(this, GamingCamera);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera).call(this, zFar, zNear, fieldOfView, pan, tilt));
        _this.pan = pan;
        _this.tilt = tilt;
        return _this;
    }
    _createClass(GamingCamera, [
        {
            key: "getPan",
            value: function getPan() {
                return this.pan;
            }
        },
        {
            key: "getTilt",
            value: function getTilt() {
                return this.tilt;
            }
        },
        {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
                if (false) {
                ///
                } else if (shiftKeyDown) {
                    this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
                } else if (mouseWheelDelta !== 0) {
                    this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
                } else {
                    this.tilt.updateAngles(relativeMouseCoordinates);
                }
                var camera = this, angles = this.tilt.getAngles(), offsets = this.pan.getOffsets(), offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromNothing(), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
                render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.pan.magnify(magnification);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0RFTFRBX01VTFRJUExJRVIsIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRoaXMudGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRoaXMudGlsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHRoaXMucGFuLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICAgICBpbml0aWFsUG9zaXRpb24gPSBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04sXG4gICAgICAgICAgICBkZWx0YU11bHRpcGxpZXIgPSBERUZBVUxUX0RFTFRBX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb25BbmREZWx0YU11bHRpcGxpZXIoaW5pdGlhbFBvc2l0aW9uLCBkZWx0YU11bHRpcGxpZXIpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUksR0FBeUIsQ0FBekIsSUFBeUI7QUFDeEIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFFeEIsR0FBVyxDQUFYLE9BQVc7QUFFNkQsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFLdkQsR0FBd0IsQ0FBeEIsT0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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