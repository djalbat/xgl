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
var _pan = /*#__PURE__*/ _interop_require_default(require("../../miscellaneous/pan"));
var _tilt = /*#__PURE__*/ _interop_require_default(require("../../miscellaneous/tilt"));
var _zoom = /*#__PURE__*/ _interop_require_default(require("../../miscellaneous/zoom"));
var _camera = /*#__PURE__*/ _interop_require_default(require("../camera"));
var _vector = require("../../maths/vector");
var _localStorage = require("../../utilities/localStorage");
var _constants = require("../../constants");
var _defaults = require("../../defaults");
var _matrix = require("../../utilities/matrix");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var DesignCamera = /*#__PURE__*/ function(Camera) {
    _inherits(DesignCamera, Camera);
    function DesignCamera(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
        _class_call_check(this, DesignCamera);
        var _this;
        _this = _call_super(this, DesignCamera, [
            zFar,
            zNear,
            fieldOfView
        ]);
        _this.pan = pan;
        _this.tilt = tilt;
        _this.zoom = zoom;
        _this.persist = persist;
        return _this;
    }
    _create_class(DesignCamera, [
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
                var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), zoom = zoomFromProperties(properties), designCamera = _camera.default.fromProperties(DesignCamera, properties, pan, tilt, zoom, persist);
                return designCamera;
            }
        }
    ]);
    return DesignCamera;
}(_camera.default);
function panFromProperties(properties) {
    var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _properties_mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _properties_mouseSensitivity, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
    var _properties_initialOffsets = properties.initialOffsets, initialOffsets = _properties_initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _properties_initialOffsets;
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
    var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist;
    var _properties_initialAngles = properties.initialAngles, initialAngles = _properties_initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _properties_initialAngles;
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
    var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
    var _properties_initialDistance = properties.initialDistance, initialDistance = _properties_initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _properties_initialDistance;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0cyxcbiAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpO1xuXG4gIHJldHVybiB0aWx0O1xufVxuXG5mdW5jdGlvbiB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbERpc3RhbmNlID0gZGlzdGFuY2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIl0sIm5hbWVzIjpbIkRlc2lnbkNhbWVyYSIsInpGYXIiLCJ6TmVhciIsImZpZWxkT2ZWaWV3IiwicGFuIiwidGlsdCIsInpvb20iLCJwZXJzaXN0IiwiZ2V0UGFuIiwiZ2V0VGlsdCIsImdldFpvb20iLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwiREVTSUdOX0NBTUVSQSIsInJlbW92ZUpTT04iLCJwYW5Gcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJ0aWx0RnJvbVByb3BlcnRpZXMiLCJ6b29tRnJvbVByb3BlcnRpZXMiLCJ1cGRhdGUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJjYW52YXMiLCJyZW5kZXIiLCJtb3VzZVdoZWVsTW92ZWQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlRGlzdGFuY2UiLCJ1cGRhdGVBbmdsZXMiLCJjYW1lcmEiLCJvZmZzZXRzIiwiZ2V0T2Zmc2V0cyIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJqc29uIiwic2V0SlNPTiIsIm9mZnNldHNNYXRyaXgiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlIiwicm90YXRpb25zTWF0cml4Iiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInByb2plY3Rpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyIsIm5vcm1hbHNNYXRyaXgiLCJub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCIsImZyb21Qcm9wZXJ0aWVzIiwiREVGQVVMVF9QRVJTSVNUIiwiZGVzaWduQ2FtZXJhIiwiQ2FtZXJhIiwibW91c2VTZW5zaXRpdml0eSIsIkRFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFkiLCJtb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIiwiaW5pdGlhbE9mZnNldHMiLCJERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyIsImdldEpTT04iLCJQYW4iLCJmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbEFuZ2xlcyIsIkRFRkFVTFRfSU5JVElBTF9BTkdMRVMiLCJzY2FsZTIiLCJERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiIsIlRpbHQiLCJmcm9tSW5pdGlhbEFuZ2xlcyIsImluaXRpYWxEaXN0YW5jZSIsIkRFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSIsIlpvb20iLCJmcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXNCcUJBOzs7MERBcEJMOzJEQUNDOzJEQUNBOzZEQUNFO3NCQUVJOzRCQUNzQjt5QkFDZ0I7d0JBTWI7c0JBS0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQSxhQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dDQUQzQ1A7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQU1DO1lBQU9DOztRQUVuQixNQUFLQyxHQUFHLEdBQUdBO1FBQ1gsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxPQUFPLEdBQUdBOzs7a0JBUEVQOztZQVVuQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixHQUFHO1lBQ2pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE1BQU1DLHdCQUFhLEVBQUcsR0FBRztnQkFFL0JDLElBQUFBLHdCQUFVLEVBQUNGO2dCQUVYLElBQUksQ0FBQ1QsR0FBRyxHQUFHWSxrQkFBa0IsSUFBSSxDQUFDQyxVQUFVO2dCQUM1QyxJQUFJLENBQUNaLElBQUksR0FBR2EsbUJBQW1CLElBQUksQ0FB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