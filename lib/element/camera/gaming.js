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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwiVGlsdCIsIkNhbWVyYSIsInNjYWxlMiIsInNjYWxlMyIsImdldEpTT04iLCJyZW1vdmVKU09OIiwic2V0SlNPTiIsIkdBTUlOR19DQU1FUkEiLCJJTlZFUlRfTVVMVElQTElFUiIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwiREVGQVVMVF9QRVJTSVNUIiwiREVGQVVMVF9JTklUSUFMX0FOR0xFUyIsIkRFRkFVTFRfSU5JVElBTF9QT1NJVElPTiIsIkRFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiIsIkRFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiIsIm9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyIsInJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nIiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyIsIkdhbWluZ0NhbWVyYSIsImNvbnN0cnVjdG9yIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwicGFuRnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwidGlsdEZyb21Qcm9wZXJ0aWVzIiwidXBkYXRlIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwiY2FudmFzIiwicmVuZGVyIiwibW91c2VXaGVlbE1vdmVkIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZUFuZ2xlcyIsImNhbWVyYSIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwianNvbiIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJnYW1pbmdDYW1lcmEiLCJtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciIsImluaXRpYWxQb3NpdGlvbiIsImluaXRpYWxPZmZzZXRzIiwiZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIiLCJpbml0aWFsQW5nbGVzIiwiY2xvY2t3aXNlIiwiZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUksR0FBeUIsQ0FBekIsSUFBeUI7QUFDeEIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFFeEIsR0FBVyxDQUFYLE9BQVc7QUFFQyxHQUFvQixDQUFwQixPQUFvQjtBQUNOLEdBQThCLENBQTlCLGFBQThCO0FBQ0ssR0FBaUIsQ0FBakIsVUFBaUI7QUFLbkMsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFLMUIsR0FBd0IsQ0FBeEIsT0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2RCxZQUFZLGlCQUFsQixRQUFRO2NBQUYsWUFBWTthQUFaLFlBQVksQ0FDbkIsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPOzhCQURyQyxZQUFZOztpRUFBWixZQUFZLGFBRXZCLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVztjQUV6QixHQUFHLEdBQUcsR0FBRztjQUNULElBQUksR0FBRyxJQUFJO2NBQ1gsT0FBTyxHQUFHLE9BQU87OztpQkFOTCxZQUFZOztZQVMvQixHQUFNLEVBQU4sQ0FBTTtt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QUFPLEVBQVAsT0FBTyx5QkEvRzZDLFNBQWdCO0lBaUg1RSxHQUFHLGtCQUErQyxVQUFVLENBQXJELGFBQWEsRUFBYixhQUFhLCtCQWpId0MsU0FBZ0I7SUFtSDVFLGFBQWEsT0ExSGdCLE9BQW9CLFNBMEgxQixhQUFhLEVBeEgwQyxVQUFpQixnQ0F3SHpCLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV6RSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDWixHQUFLLENBQUMsR0FBRyxHQTNIbUUsVUFBaUIsZ0JBNEh2RixJQUFJLE9BN0grQixhQUE4QixVQTZIbEQsR0FBRztRQUV4QixFQUFFLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2xCLEdBQUssQ0FBRyxNQUFNLEdBQUssSUFBSSxDQUFmLE1BQU07WUFFZCxhQUFhLEdBQUcsTUFBTSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUNoQixJQUFJLEdBNUlLLEtBQTBCLFNBNEl2Qiw2QkFBNkIsQ0FBQyxhQUFhLEVBQUUsU0FBUztJQUV4RSxNQUFNLENBQUMsSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcblxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHNjYWxlMiwgc2NhbGUzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgcmVtb3ZlSlNPTiwgc2V0SlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBHQU1JTkdfQ0FNRVJBLCBJTlZFUlRfTVVMVElQTElFUiwgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgREVGQVVMVF9SRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbFBvc2l0aW9uID0gREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCBpbml0aWFsT2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIElOVkVSVF9NVUxUSVBMSUVSKTtcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb2Nrd2lzZSA9IHRydWUsXG4gICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59Il19