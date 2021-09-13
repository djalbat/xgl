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
                var camera = this, persist = this.doesPersist(), offsets = this.pan.getOffsets(), clockwise = true, rotatedAngles = this.tilt.getRotatedAngles(clockwise), angles = rotatedAngles; ///
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
    var tilt = _tilt.default.fromInitialAngles(initialAngles);
    return tilt;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwiVGlsdCIsIkNhbWVyYSIsInNjYWxlMiIsInNjYWxlMyIsImdldEpTT04iLCJyZW1vdmVKU09OIiwic2V0SlNPTiIsIkdBTUlOR19DQU1FUkEiLCJJTlZFUlRfTVVMVElQTElFUiIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwiREVGQVVMVF9QRVJTSVNUIiwiREVGQVVMVF9JTklUSUFMX0FOR0xFUyIsIkRFRkFVTFRfSU5JVElBTF9QT1NJVElPTiIsIkRFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiIsIkRFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiIsIm9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyIsInJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMiLCJwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nIiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyIsIkdhbWluZ0NhbWVyYSIsImNvbnN0cnVjdG9yIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwicGFuRnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwidGlsdEZyb21Qcm9wZXJ0aWVzIiwidXBkYXRlIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwiY2FudmFzIiwicmVuZGVyIiwibW91c2VXaGVlbE1vdmVkIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZUFuZ2xlcyIsImNhbWVyYSIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiY2xvY2t3aXNlIiwicm90YXRlZEFuZ2xlcyIsImdldFJvdGF0ZWRBbmdsZXMiLCJqc29uIiwib2Zmc2V0c01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJtYWduaWZ5IiwibWFnbmlmaWNhdGlvbiIsImZyb21Qcm9wZXJ0aWVzIiwiZ2FtaW5nQ2FtZXJhIiwibW91c2VXaGVlbERlbHRhTXVsdGlwbGllciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIiLCJpbml0aWFsUG9zaXRpb24iLCJpbml0aWFsT2Zmc2V0cyIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwiaW5pdGlhbEFuZ2xlcyIsImZyb21Jbml0aWFsQW5nbGVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVJLEdBQXlCLENBQXpCLElBQXlCO0FBQ3hCLEdBQTBCLENBQTFCLEtBQTBCO0FBRXhCLEdBQVcsQ0FBWCxPQUFXO0FBRUMsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDTixHQUE4QixDQUE5QixhQUE4QjtBQUNLLEdBQWlCLENBQWpCLFVBQWlCO0FBS25DLEdBQWdCLENBQWhCLFNBQWdCO0FBSzFCLEdBQXdCLENBQXhCLE9BQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkQsWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZLENBQ25CLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTzs4QkFEckMsWUFBWTs7aUVBQVosWUFBWSxhQUV2QixJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVc7Y0FFekIsR0FBRyxHQUFHLEdBQUc7Y0FDVCxJQUFJLEdBQUcsSUFBSTtjQUNYLE9B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LE9BQU87WUFFZixjQUFjLEdBQUcsT0FBTyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQyxHQUFHLEdBM0hLLElBQXlCLFNBMkh2QixnRkFBZ0YsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLEVBQUUsa0NBQWtDO0lBRTlLLE1BQU0sQ0FBQyxHQUFHO0FBQ1osQ0FBQztTQUVRLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLEdBQUssWUFBaUMsVUFBVSxDQUF4QyxPQUFPLEVBQVAsT0FBTyx5QkFySDZDLFNBQWdCO0lBdUg1RSxHQUFHLGtCQUErQyxVQUFVLENBQXJELGFBQWEsRUFBYixhQUFhLCtCQXZId0MsU0FBZ0I7SUF5SDVFLGFBQWEsT0FoSWdCLE9BQW9CLFNBZ0kxQixhQUFhLEVBOUgwQyxVQUFpQixnQ0E4SHpCLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV6RSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDWixHQUFLLENBQUMsR0FBRyxHQWpJbUUsVUFBaUIsZ0JBa0l2RixJQUFJLE9BbkkrQixhQUE4QixVQW1JbEQsR0FBRztRQUV4QixFQUFFLEVBQUUsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2xCLEdBQUssQ0FBRyxNQUFNLEdBQUssSUFBSSxDQUFmLE1BQU07WUFFZCxhQUFhLEdBQUcsTUFBTSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQyxJQUFJLEdBakpLLEtBQTBCLFNBaUp2QixpQkFBaUIsQ0FBQyxhQUFhO0lBRWpELE1BQU0sQ0FBQyxJQUFJO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyLCBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCByZW1vdmVKU09OLCBzZXRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IEdBTUlOR19DQU1FUkEsIElOVkVSVF9NVUxUSVBMSUVSLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04sXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsXG4gICAgICAgICBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgICAgICAgIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gICAgICAgICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wZXJzaXN0ID0gcGVyc2lzdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBkb2VzUGVyc2lzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzaXN0O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQTsgIC8vL1xuXG4gICAgcmVtb3ZlSlNPTihrZXkpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW5Gcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICAgIHRoaXMudGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIGNhbnZhcywgcmVuZGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbE1vdmVkID0gKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duIHx8IG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBjbG9ja3dpc2UgPSB0cnVlLFxuICAgICAgICAgIHJvdGF0ZWRBbmdsZXMgPSB0aGlzLnRpbHQuZ2V0Um90YXRlZEFuZ2xlcyhjbG9ja3dpc2UpLFxuICAgICAgICAgIGFuZ2xlcyA9IHJvdGF0ZWRBbmdsZXM7IC8vL1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLnBhbi5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKTtcblxuICByZXR1cm4gdGlsdDtcbn0iXX0=