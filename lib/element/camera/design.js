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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var DesignCamera = /*#__PURE__*/ function(Camera) {
    _inherits(DesignCamera, Camera);
    var _super = _createSuper(DesignCamera);
    function DesignCamera(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
        _classCallCheck(this, DesignCamera);
        var _this;
        _this = _super.call(this, zFar, zNear, fieldOfView);
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