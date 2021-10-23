"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));
var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));
var _zoom = _interopRequireDefault(require("../../miscellaneous/zoom"));
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
var DesignCamera = /*#__PURE__*/ function(Camera) {
    _inherits(DesignCamera, Camera);
    function DesignCamera(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
        _classCallCheck(this, DesignCamera);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera).call(this, zFar, zNear, fieldOfView));
        _this.pan = pan;
        _this.tilt = tilt;
        _this.zoom = zoom;
        _this.persist = persist;
        return _this;
    }
    _createClass(DesignCamera, [
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
            key: "getZoom",
            value: function getZoom() {
                return this.zoom;
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
                var key = _constants.DESIGN_CAMERA; ///
                (0, _localStorage).removeJSON(key);
                this.pan = panFromProperties(this.properties);
                this.tilt = tiltFromProperties(this.properties);
                this.zoom = zoomFromProperties(this.properties);
            }
        },
        {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
                var mouseWheelMoved = mouseWheelDelta !== 0;
                if (false) {
                ///
                } else if (shiftKeyDown) {
                    var angles = this.tilt.getAngles();
                    this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
                } else if (mouseWheelMoved) {
                    this.zoom.updateDistance(mouseWheelDelta);
                } else {
                    this.tilt.updateAngles(relativeMouseCoordinates);
                }
                var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance();
                if (persist) {
                    var key = _constants.DESIGN_CAMERA, json = {
                        angles: angles1,
                        offsets: offsets,
                        distance: distance
                    };
                    (0, _localStorage).setJSON(key, json);
                }
                var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromDistance(distance), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles1), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
                render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), zoom = zoomFromProperties(properties), designCamera = _camera.default.fromProperties(DesignCamera, properties, pan, tilt, zoom, persist);
                return designCamera;
            }
        }
    ]);
    return DesignCamera;
}(_camera.default);
exports.default = DesignCamera;
function panFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelDeltaMultiplier = properties.mouseWheelDeltaMultiplier, mouseWheelDeltaMultiplier = _mouseWheelDeltaMultiplier === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER : _mouseWheelDeltaMultiplier, _relativeMouseCoordinatesMultiplier = properties.relativeMouseCoordinatesMultiplier, relativeMouseCoordinatesMultiplier = _relativeMouseCoordinatesMultiplier === void 0 ? _defaults.DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER : _relativeMouseCoordinatesMultiplier;
    var _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _initialOffsets;
    if (persist) {
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
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
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
        if (json !== null) {
            var angles = json.angles;
            initialAngles = angles; ///
        }
    }
    var tilt = _tilt.default.fromInitialAngles(initialAngles);
    return tilt;
}
function zoomFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelDeltaMultiplier = properties.mouseWheelDeltaMultiplier, mouseWheelDeltaMultiplier = _mouseWheelDeltaMultiplier === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER : _mouseWheelDeltaMultiplier;
    var _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _initialDistance;
    if (persist) {
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
        if (json !== null) {
            var distance = json.distance;
            initialDistance = distance; ///
        }
    }
    var zoom = _zoom.default.fromInitialDistanceAndMouseWheelDeltaMultiplier(initialDistance, mouseWheelDeltaMultiplier);
    return zoom;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUixcbiAgICAgICAgIERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCB6b29tLCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy56b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHMsXG4gICAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgem9vbSA9IHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcyk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59XG5cbmZ1bmN0aW9uIHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsRGlzdGFuY2UgPSBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UgfSA9IHByb3BlcnRpZXM7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGRpc3RhbmNlIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsRGlzdGFuY2UgPSBkaXN0YW5jZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcblxuICByZXR1cm4gem9vbTtcbn1cbiJdLCJuYW1lcyI6WyJEZXNpZ25DYW1lcmEiLCJ6RmFyIiwiek5lYXIiLCJmaWVsZE9mVmlldyIsInBhbiIsInRpbHQiLCJ6b29tIiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJnZXRab29tIiwiZG9lc1BlcnNpc3QiLCJyZXNldCIsImtleSIsInBhbkZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInRpbHRGcm9tUHJvcGVydGllcyIsInpvb21Gcm9tUHJvcGVydGllcyIsInVwZGF0ZSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsImNhbnZhcyIsInJlbmRlciIsIm1vdXNlV2hlZWxNb3ZlZCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsInVwZGF0ZU9mZnNldHMiLCJ1cGRhdGVEaXN0YW5jZSIsInVwZGF0ZUFuZ2xlcyIsImNhbWVyYSIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImpzb24iLCJvZmZzZXRzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsImZyb21Qcm9wZXJ0aWVzIiwiZGVzaWduQ2FtZXJhIiwibW91c2VXaGVlbERlbHRhTXVsdGlwbGllciIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIiLCJpbml0aWFsT2Zmc2V0cyIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwiaW5pdGlhbEFuZ2xlcyIsImZyb21Jbml0aWFsQW5nbGVzIiwiaW5pdGlhbERpc3RhbmNlIiwiZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUksR0FBeUIsQ0FBekIsSUFBeUI7QUFDeEIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDMUIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDeEIsR0FBVyxDQUFYLE9BQVc7QUFFUCxHQUFvQixDQUFwQixPQUFvQjtBQUNFLEdBQThCLENBQTlCLGFBQThCO0FBQ2QsR0FBaUIsQ0FBakIsVUFBaUI7QUFNaEIsR0FB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