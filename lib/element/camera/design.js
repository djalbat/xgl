"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DesignCamera;
    }
});
var _pan = /*#__PURE__*/ _interopRequireDefault(require("../../miscellaneous/pan"));
var _tilt = /*#__PURE__*/ _interopRequireDefault(require("../../miscellaneous/tilt"));
var _zoom = /*#__PURE__*/ _interopRequireDefault(require("../../miscellaneous/zoom"));
var _camera = /*#__PURE__*/ _interopRequireDefault(require("../camera"));
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
                (0, _localStorage.removeJSON)(key);
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
                    (0, _localStorage.setJSON)(key, json);
                }
                var offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromDistance)(distance), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles1), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
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
function panFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _mouseSensitivity, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
    var _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _initialOffsets;
    if (persist) {
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets; ///
        }
    }
    var pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
    return pan;
}
function tiltFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist;
    var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles;
    initialAngles = (0, _vector.scale2)(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER); ///
    if (persist) {
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
            var angles = json.angles;
            initialAngles = angles; ///
        }
    }
    var tilt = _tilt.default.fromInitialAngles(initialAngles);
    return tilt;
}
function zoomFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
    var _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _initialDistance;
    if (persist) {
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
            var distance = json.distance;
            initialDistance = distance; ///
        }
    }
    var zoom = _zoom.default.fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity);
    return zoom;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0cyxcbiAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpO1xuXG4gIHJldHVybiB0aWx0O1xufVxuXG5mdW5jdGlvbiB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbERpc3RhbmNlID0gZGlzdGFuY2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIl0sIm5hbWVzIjpbIkRlc2lnbkNhbWVyYSIsInpGYXIiLCJ6TmVhciIsImZpZWxkT2ZWaWV3IiwicGFuIiwidGlsdCIsInpvb20iLCJwZXJzaXN0IiwiZ2V0UGFuIiwiZ2V0VGlsdCIsImdldFpvb20iLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwiREVTSUdOX0NBTUVSQSIsInJlbW92ZUpTT04iLCJwYW5Gcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJ0aWx0RnJvbVByb3BlcnRpZXMiLCJ6b29tRnJvbVByb3BlcnRpZXMiLCJ1cGRhdGUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJjYW52YXMiLCJyZW5kZXIiLCJtb3VzZVdoZWVsTW92ZWQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlRGlzdGFuY2UiLCJ1cGRhdGVBbmdsZXMiLCJjYW1lcmEiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJqc29uIiwic2V0SlNPTiIsIm9mZnNldHNNYXRyaXgiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicm90YXRpb25zTWF0cml4Iiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInByb2plY3Rpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyIsIm5vcm1hbHNNYXRyaXgiLCJub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCIsImZyb21Qcm9wZXJ0aWVzIiwiREVGQVVMVF9QRVJTSVNUIiwiZGVzaWduQ2FtZXJhIiwiQ2FtZXJhIiwibW91c2VTZW5zaXRpdml0eSIsIkRFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFkiLCJtb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIiwiaW5pdGlhbE9mZnNldHMiLCJERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyIsImdldEpTT04iLCJQYW4iLCJmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbEFuZ2xlcyIsIkRFRkFVTFRfSU5JVElBTF9BTkdMRVMiLCJzY2FsZTIiLCJERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiIsIlRpbHQiLCJmcm9tSW5pdGlhbEFuZ2xlcyIsImluaXRpYWxEaXN0YW5jZSIsIkRFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSIsIlpvb20iLCJmcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFzQlFBLFlBQVk7Ozt3REFwQmpCLHlCQUF5Qjt5REFDeEIsMEJBQTBCO3lEQUMxQiwwQkFBMEI7MkRBQ3hCLFdBQVc7c0JBRVAsb0JBQW9COzRCQUNFLDhCQUE4Qjt5QkFDZCxpQkFBaUI7d0JBTTlCLGdCQUFnQjtzQkFLWix3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBQSxBQUFNQSxZQUFZLGlCQXdGOUIsQUF4Rlk7OzthQUFNQSxZQUFZLENBQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPOzs7a0NBQ3RETixJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFO1FBRWhDLE1BQUtDLEdBQUcsR0FBR0EsR0FBRyxDQUFDO1FBQ2YsTUFBS0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsTUFBS0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsTUFBS0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7Ozs7O1lBR3pCQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxPQUFPLElBQUksQ0FBQ0osR0FBRyxDQUFDO2FBQ2pCOzs7WUFFREssR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQzthQUNsQjs7O1lBRURLLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUM7YUFDbEI7OztZQUVESyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ0osT0FBTyxDQUFDO2FBQ3JCOzs7WUFFREssR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLEdBQUc7Z0JBQ04sSUFBTUMsR0FBRyxHQUFHQyxVQUFhLGNBQUEsQUFBQyxFQUFFLEdBQUc7Z0JBRS9CQyxJQUFBQSxhQUFVLFdBQUEsRUFBQ0YsR0FBRyxDQUFDLENBQUM7Z0JBRWhCLElBQUksQ0FBQ1QsR0FBRyxHQUFHWSxpQkFBaUIsQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUNaLElBQUksR0FBR2Esa0JBQWtCLENBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDWCxJQUFJLEdBQUdhLGtCQUFrQixDQUFDLElBQUksQ0FBQ0YsVUFBVSxDQUFDLENBQUM7YUFDakQ7OztZQUVERyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sQ0FBQ0Msd0JBQXdCLEVBQUVDLGVBQWUsRUFBRUMsWUFBWSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRTtnQkFDOUUsSUFBTUMsZUFBZSxHQUFJSixlQUFlLEtBQUssQ0FBQyxBQUFDLEFBQUM7Z0JBRWhELElBQUksS0FBSyxFQUFFO2dCQUNULEdBQUc7aUJBQ0osTUFBTSxJQUFJQyxZQUFZLEVBQUU7b0JBQ3ZCLElBQU1JLE1BQU0sR0FBRyxJQUFJLENBQUN0QixJQUFJLENBQUN1QixTQUFTLEVBQUUsQUFBQztvQkFFckMsSUFBSSxDQUFDeEIsR0FBRyxDQUFDeUIsYUFBYSxDQUFDUix3QkFBd0IsRUFBRUMsZUFBZSxFQUFFSyxNQUFNLENBQUMsQ0FBQztpQkFDM0UsTUFBTSxJQUFJRCxlQUFlLEVBQUU7b0JBQzFCLElBQUksQ0FBQ3BCLElBQUksQ0FBQ3dCLGNBQWMsQ0FBQ1IsZUFBZSxDQUFDLENBQUM7aUJBQzNDLE1BQU07b0JBQ0wsSUFBSSxDQUFDakIsSUFBSSxDQUFDMEIsWUFBWSxDQUFDVix3QkFBd0IsQ0FBQyxDQUFDO2lCQUNsRDtnQkFFRCxJQUFNVyxNQUFNLEdBQUcsSUFBSSxFQUNiTCxPQUFNLEdBQUcsSUFBSSxDQUFDdEIsSUFBSSxDQUFDdUIsU0FBUyxFQUFFLEVBQzlCckIsT0FBTyxHQUFHLElBQUksQ0FBQ0ksV0FBVyxFQUFFLEVBQzVCc0IsT0FBTyxHQUFHLElBQUksQ0FBQzdCLEdBQUcsQ0FBQzhCLFVBQVUsRUFBRSxFQUMvQkMsUUFBUSxHQUFHLElBQUksQ0FBQzdCLElBQUksQ0FBQzhCLFdBQVcsRUFBRSxBQUFDO2dCQUV6QyxJQUFJN0IsT0FBTyxFQUFFO29CQUNYLElBQU1NLEdBQUcsR0FBR0MsVUFBYSxjQUFBLEVBQ25CdUIsSUFBSSxHQUFHO3dCQUNMVixNQUFNLEVBQU5BLE9BQU07d0JBQ05NLE9BQU8sRUFBUEEsT0FBTzt3QkFDUEUsUUFBUSxFQUFSQSxRQUFRO3FCQUNULEFBQUM7b0JBRVJHLElBQUFBLGFBQU8sUUFBQSxFQUFDekIsR0FBRyxFQUFFd0IsSUFBSSxDQUFDLENBQUM7aUJBQ3BCO2dCQUVELElBQU1FLGFBQWEsR0FBR0MsSUFBQUEsT0FBd0IseUJBQUEsRUFBQ1AsT0FBTyxDQUFDLEVBQ2pEUSxjQUFjLEdBQUdDLElBQUFBLE9BQTBCLDJCQUFBLEVBQUNQLFFBQVEsQ0FBQyxFQUNyRFEsZUFBZSxHQUFHQyxJQUFBQSxPQUF5QiwwQkFBQSxFQUFDakIsT0FBTSxDQUFDLEVBQ25Ea0IsZ0JBQWdCLEdBQUdDLElBQUFBLE9BQW1DLG9DQUFBLEVBQUNkLE1BQU0sRUFBRVIsTUFBTSxDQUFDLEVBQ3RFdUIsYUFBYSxHQUFHQyxJQUFBQSxPQUFnQyxpQ0FBQSxFQUFDTCxlQUFlLENBQUMsQUFBQztnQkFFeEVsQixNQUFNLENBQUNjLGFBQWEsRUFBRVEsYUFBYSxFQUFFTixjQUFjLEVBQUVFLGVBQWUsRUFBRUUsZ0JBQWdCLENBQUMsQ0FBQzthQUN6Rjs7OztZQUVNSSxHQUFjLEVBQWRBLGdCQUFjO21CQUFyQixTQUFPQSxjQUFjLENBQUNoQyxVQUFVLEVBQUU7Z0JBQ2hDLGVBQXNDQSxVQUFVLENBQXhDVixPQUFPLEVBQVBBLE9BQU8seUJBQUcyQyxTQUFlLGdCQUFBLFdBQUEsRUFDM0I5QyxHQUFHLEdBQUdZLGlCQUFpQixDQUFDQyxVQUFVLENBQUMsRUFDbkNaLElBQUksR0FBR2Esa0JBQWtCLENBQUNELFVBQVUsQ0FBQyxFQUNyQ1gsSUFBSSxHQUFHYSxrQkFBa0IsQ0FBQ0YsVUFBVSxDQUFDLEVBQ3JDa0MsWUFBWSxHQUFHQyxPQUFNLFFBQUEsQ0FBQ0gsY0FBYyxDQUFDakQsWUFBWSxFQUFFaUIsVUFBVSxFQUFFYixHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLENBQUMsQUFBQztnQkFFL0YsT0FBTzRDLFlBQVksQ0FBQzthQUNyQjs7OztDQUNGLENBdEZ5Q0MsT0FBTSxRQUFBLENBc0YvQztBQUVELFNBQVNwQyxpQkFBaUIsQ0FBQ0MsVUFBVSxFQUFFO0lBQ3JDLGVBRW9FQSxVQUFVLENBRnRFVixPQUFPLEVBQVBBLE9BQU8seUJBQUcyQyxTQUFlLGdCQUFBLFdBQUEsc0JBRW1DakMsVUFBVSxDQUR0RW9DLGdCQUFnQixFQUFoQkEsZ0JBQWdCLGtDQUFHQyxTQUF5QiwwQkFBQSxvQkFBQSwyQkFDZ0JyQyxVQUFVLENBQXRFc0MscUJBQXFCLEVBQXJCQSxxQkFBcUIsdUNBQUdDLFNBQStCLGdDQUFBLHlCQUFBLEFBQWdCO0lBRS9FLHNCQUFtRHZDLFVBQVUsQ0FBdkR3QyxjQUFjLEVBQWRBLGNBQWMsZ0NBQUdDLFNBQXVCLHdCQUFBLGtCQUFBLEFBQWdCO0lBRTlELElBQUluRCxPQUFPLEVBQUU7UUFDWCxJQUFNTSxHQUFHLEdBQUdDLFVBQWEsY0FBQSxFQUNuQnVCLElBQUksR0FBR3NCLElBQUFBLGFBQU8sUUFBQSxFQUFDOUMsR0FBRyxDQUFDLEFBQUM7UUFFMUIsSUFBSXdCLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakIsSUFBTSxBQUFFSixPQUFPLEdBQUtJLElBQUksQ0FBaEJKLE9BQU8sQUFBUyxBQUFDO1lBRXpCd0IsY0FBYyxHQUFHeEIsT0FBTyxDQUFDLENBQUMsR0FBRztTQUM5QjtLQUNGO0lBRUQsSUFBTTdCLEdBQUcsR0FBR3dELElBQUcsUUFBQSxDQUFDQywwREFBMEQsQ0FBQ0osY0FBYyxFQUFFSixnQkFBZ0IsRUFBRUUscUJBQXFCLENBQUMsQUFBQztJQUVwSSxPQUFPbkQsR0FBRyxDQUFDO0NBQ1o7QUFFRCxTQUFTYyxrQkFBa0IsQ0FBQ0QsVUFBVSxFQUFFO0lBQ3RDLGVBQXNDQSxVQUFVLENBQXhDVixPQUFPLEVBQVBBLE9BQU8seUJBQUcyQyxTQUFlLGdCQUFBLFdBQUEsQUFBZ0I7SUFFakQscUJBQWlEakMsVUFBVSxDQUFyRDZDLGFBQWEsRUFBYkEsYUFBYSwrQkFBR0MsU0FBc0IsdUJBQUEsaUJBQUEsQUFBZ0I7SUFFNURELGFBQWEsR0FBR0UsSUFBQUEsT0FBTSxPQUFBLEVBQUNGLGFBQWEsRUFBRUcsVUFBNkIsOEJBQUEsQ0FBQyxDQUFDLENBQUMsR0FBRztJQUV6RSxJQUFJMUQsT0FBTyxFQUFFO1FBQ1gsSUFBTU0sR0FBRyxHQUFHQyxVQUFhLGNBQUEsRUFDbkJ1QixJQUFJLEdBQUdzQixJQUFBQSxhQUFPLFFBQUEsRUFBQzlDLEdBQUcsQ0FBQyxBQUFDO1FBRTFCLElBQUl3QixJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2pCLElBQU0sQUFBRVYsTUFBTSxHQUFLVSxJQUFJLENBQWZWLE1BQU0sQUFBUyxBQUFDO1lBRXhCbUMsYUFBYSxHQUFHbkMsTUFBTSxDQUFDLENBQUMsR0FBRztTQUM1QjtLQUNGO0lBRUQsSUFBTXRCLElBQUksR0FBRzZELEtBQUksUUFBQSxDQUFDQyxpQkFBaUIsQ0FBQ0wsYUFBYSxDQUFDLEFBQUM7SUFFbkQsT0FBT3pELElBQUksQ0FBQztDQUNiO0FBRUQsU0FBU2Msa0JBQWtCLENBQUNGLFVBQVUsRUFBRTtJQUN0QyxlQUErRkEsVUFBVSxDQUFqR1YsT0FBTyxFQUFQQSxPQUFPLHlCQUFHMkMsU0FBZSxnQkFBQSxXQUFBLDJCQUE4RGpDLFVBQVUsQ0FBdEVzQyxxQkFBcUIsRUFBckJBLHFCQUFxQix1Q0FBR0MsU0FBK0IsZ0NBQUEseUJBQUEsQUFBZ0I7SUFFMUcsdUJBQXFEdkMsVUFBVSxDQUF6RG1ELGVBQWUsRUFBZkEsZUFBZSxpQ0FBR0MsU0FBd0IseUJBQUEsbUJBQUEsQUFBZ0I7SUFFaEUsSUFBSTlELE9BQU8sRUFBRTtRQUNYLElBQU1NLEdBQUcsR0FBR0MsVUFBYSxjQUFBLEVBQ25CdUIsSUFBSSxHQUFHc0IsSUFBQUEsYUFBTyxRQUFBLEVBQUM5QyxHQUFHLENBQUMsQUFBQztRQUUxQixJQUFJd0IsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNqQixJQUFNLEFBQUVGLFFBQVEsR0FBS0UsSUFBSSxDQUFqQkYsUUFBUSxBQUFTLEFBQUM7WUFFMUJpQyxlQUFlLEdBQUdqQyxRQUFRLENBQUMsQ0FBQyxHQUFHO1NBQ2hDO0tBQ0Y7SUFFRCxJQUFNN0IsSUFBSSxHQUFHZ0UsS0FBSSxRQUFBLENBQUNDLDJDQUEyQyxDQUFDSCxlQUFlLEVBQUViLHFCQUFxQixDQUFDLEFBQUM7SUFFdEcsT0FBT2pELElBQUksQ0FBQztDQUNiIn0=