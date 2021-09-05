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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
                if (false) {
                ///
                } else if (shiftKeyDown) {
                    this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
                } else if (mouseWheelDelta !== 0) {
                    this.zoom.updateDistance(mouseWheelDelta);
                } else {
                    this.tilt.updateAngles(relativeMouseCoordinates);
                }
                var camera = this, persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance(), clockwise = false, rotatedAngles = this.tilt.getRotatedAngles(clockwise), angles = rotatedAngles; ///
                if (persist) {
                    var key = _constants.DESIGN_CAMERA, angles1 = this.tilt.getAngles(), json = {
                        angles: angles1,
                        offsets: offsets,
                        distance: distance
                    };
                    (0, _localStorage).setJSON(key, json);
                }
                var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromDistance(distance), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
                render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                _get(_getPrototypeOf(DesignCamera.prototype), "magnify", this).call(this, magnification);
                this.pan.magnify(magnification);
                this.zoom.magnify(magnification);
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
            var angles2 = json.angles;
            initialAngles = angles2; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUixcbiAgICAgICAgIERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5pbXBvcnQge3Byb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmV9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRoaXMudGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHJvdGF0ZWRBbmdsZXMgPSB0aGlzLnRpbHQuZ2V0Um90YXRlZEFuZ2xlcyhjbG9ja3dpc2UpLFxuICAgICAgICAgIGFuZ2xlcyA9IHJvdGF0ZWRBbmdsZXM7IC8vL1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsXG4gICAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHMsXG4gICAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHN1cGVyLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG5cbiAgICB0aGlzLnBhbi5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICAgIHRoaXMuem9vbS5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsT2Zmc2V0cyA9IERFRkFVTFRfSU5JVElBTF9PRkZTRVRTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBvZmZzZXRzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsT2Zmc2V0cyA9IG9mZnNldHM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHNNb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyQW5kUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcihpbml0aWFsT2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKTtcblxuICByZXR1cm4gdGlsdDtcbn1cblxuZnVuY3Rpb24gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxEaXN0YW5jZSA9IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxEaXN0YW5jZSA9IGRpc3RhbmNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbERlbHRhTXVsdGlwbGllcihpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUksR0FBeUIsQ0FBekIsSUFBeUI7QUFDeEIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDMUIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDeEIsR0FBVyxDQUFYLE9BQVc7QUFFUCxHQUFvQixDQUFwQixPQUFvQjtBQUNFLEdBQThCLENBQTlCLGFBQThCO0FBQ2QsR0FBaUIsQ0FBakIsVUFBaUI7QUFNaEIsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFLMUIsR0FBd0IsQ0FBeEIsT0FBd0I7QUFDM0IsR0FBMEIsQ0FBMUIsU0FBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRELFlBQVk7Y0FBWixZQUFZO2FBQVosWUFBWSxDQUNuQixJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPOzhCQUQzQyxZQUFZOztpRUFBWixZQUFZLGFBRXZCLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVztjQUV6QixHQUFHLEdBQUcsR0FBRztjQUNULElBQUksR0FBRyxJQUFJO2NBQ1gsSUFBSSxHQUFHLElBQUk7Y0FDWCxPQUFPLEdBQUcsT0FBTzs7O2lCQVBMLFlBQVk7O1lBVS9CLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sR0FBRyxDQUFDOzRCQUNJLEdBQUc7WUFDakIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxHQUFHLENBQUM7NEJBQ0csSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzs0QkFB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