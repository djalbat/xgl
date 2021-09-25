"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));
var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));
var _camera = _interopRequireDefault(require("../camera"));
var _vector = require("../../maths/vector");
var _localStorage = require("../../utilities/localStorage");
var _constants = require("../../constants");
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
    function GamingCamera(zFar, zNear, fieldOfView, pan, tilt, persist) {
        _classCallCheck(this, GamingCamera);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera).call(this, zFar, zNear, fieldOfView));
        _this.pan = pan;
        _this.tilt = tilt;
        _this.persist = persist;
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
            key: "doesPersist",
            value: function doesPersist() {
                return this.persist;
            }
        },
        {
            key: "reset",
            value: function reset() {
                var key = _constants.GAMING_CAMERA; ///
                (0, _localStorage).removeJSON(key);
                this.pan = panFromProperties(this.properties);
                this.tilt = tiltFromProperties(this.properties);
            }
        },
        {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
                var mouseWheelMoved = mouseWheelDelta !== 0;
                if (false) {
                ///
                } else if (shiftKeyDown || mouseWheelMoved) {
                    var angles = this.tilt.getAngles();
                    this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
                } else {
                    this.tilt.updateAngles(relativeMouseCoordinates);
                }
                var camera = this, angles = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
                if (persist) {
                    var key = _constants.GAMING_CAMERA, angles = this.tilt.getAngles(), json = {
                        angles: angles,
                        offsets: offsets
                    };
                    (0, _localStorage).setJSON(key, json);
                }
                var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromNothing(), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
                render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera, properties, pan, tilt, persist);
                return gamingCamera;
            }
        }
    ]);
    return GamingCamera;
}(_camera.default);
exports.default = GamingCamera;
function panFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelDeltaMultiplier = properties.mouseWheelDeltaMultiplier, mouseWheelDeltaMultiplier = _mouseWheelDeltaMultiplier === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER : _mouseWheelDeltaMultiplier, _relativeMouseCoordinatesMultiplier = properties.relativeMouseCoordinatesMultiplier, relativeMouseCoordinatesMultiplier = _relativeMouseCoordinatesMultiplier === void 0 ? _defaults.DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER : _relativeMouseCoordinatesMultiplier;
    var _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition;
    var initialOffsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER);
    if (persist) {
        var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
        if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets; ///
        }
    }
    debugger;
    var pan = _pan.default.fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
    return pan;
}
function tiltFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist;
    var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles;
    initialAngles = (0, _vector).scale2(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER); ///
    if (persist) {
        var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
        if (json !== null) {
            var angles = json.angles;
            initialAngles = angles; ///
        }
    }
    var clockwise = true, tilt = _tilt.default.fromInitialAnglesAndClockwise(initialAngles, clockwise);
    return tilt;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwiVGlsdCIsIkNhbWVyYSIsInNjYWxlMiIsInNjYWxlMyIsImdldEpTT04iLCJyZW1vdmVKU09OIiwic2V0SlNPTiIsIkdBTUlOR19DQU1FUkEiLCJJTlZFUlRfTVVMVElQTElFUiIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwiREVGQVVMVF9QRVJTSVNUIiwiREVGQVVMVF9JTklUSUFMX0FOR0xFUyIsIkRFRkFVTFRfSU5JVElBTF9QT1NJVElPTiIsIkRFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiIsIkRFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiIsIm9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyIsInJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nIiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyIsIkdhbWluZ0NhbWVyYSIsImNvbnN0cnVjdG9yIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwicGFuRnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwidGlsdEZyb21Qcm9wZXJ0aWVzIiwidXBkYXRlIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwiY2FudmFzIiwicmVuZGVyIiwibW91c2VXaGVlbE1vdmVkIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZUFuZ2xlcyIsImNhbWVyYSIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwianNvbiIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJnYW1pbmdDYW1lcmEiLCJtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciIsImluaXRpYWxQb3NpdGlvbiIsImluaXRpYWxPZmZzZXRzIiwiZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIiLCJpbml0aWFsQW5nbGVzIiwiY2xvY2t3aXNlIiwiZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUksR0FBeUIsQ0FBekIsSUFBeUI7QUFDeEIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFFeEIsR0FBVyxDQUFYLE9BQVc7QUFFQyxHQUFvQixDQUFwQixPQUFvQjtBQUNOLEdBQThCLENBQTlCLGFBQThCO0FBQ0ssR0FBaUIsQ0FBakIsVUFBaUI7QUFLbkMsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFLMUIsR0FBd0IsQ0FBeEIsT0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2RCxZQUFZLGlCQUFsQixRQUFRO2NBQUYsWUFBWTthQUFaLFlBQVksQ0FDbkIsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPOzhCQURyQyxZQUFZOztpRUFBWixZQUFZLGFBRXZCLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVztjQUV6QixHQUFHLEdBQUcsR0FBRztjQUNULElBQUksR0FBRyxJQUFJO2NBQ1gsT0FBTyxHQUFHLE9BQU87OztpQkFOTCxZQUFZOztZQVMvQixHQUFNLEVBQU4sQ0FBTTtt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QVUsQ0FBeEMsT0FBTyxFQUFQLE9BQU8seUJBakg2QyxTQUFnQjtJQW1INUUsR0FBRyxrQkFBK0MsVUFBVSxDQUFyRCxhQUFhLEVBQWIsYUFBYSwrQkFuSHdDLFNBQWdCO0lBcUg1RSxhQUFhLE9BNUhnQixPQUFvQixTQTRIMUIsYUFBYSxFQTFIMEMsVUFBaUIsZ0NBMEh6QixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFekUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ1osR0FBSyxDQUFDLEdBQUcsR0E3SG1FLFVBQWlCLGdCQThIdkYsSUFBSSxPQS9IK0IsYUFBOEIsVUErSGxELEdBQUc7UUFFeEIsRUFBRSxFQUFFLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNsQixHQUFLLENBQUcsTUFBTSxHQUFLLElBQUksQ0FBZixNQUFNO1lBRWQsYUFBYSxHQUFHLE1BQU0sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUMsU0FBUyxHQUFHLElBQUksRUFDaEIsSUFBSSxHQTlJSyxLQUEwQixTQThJdkIsNkJBQTZCLENBQUMsYUFBYSxFQUFFLFNBQVM7SUFFeEUsTUFBTSxDQUFDLElBQUk7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHJlbW92ZUpTT04sIHNldEpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUixcbiAgICAgICAgIERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24gfHwgbW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICBjb25zdCBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKTtcblxuICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgZGVidWdnZXJcblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb2Nrd2lzZSA9IHRydWUsXG4gICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59Il19