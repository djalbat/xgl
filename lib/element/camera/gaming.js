"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GamingCamera;
    }
});
var _pan = /*#__PURE__*/ _interop_require_default(require("../../miscellaneous/pan"));
var _tilt = /*#__PURE__*/ _interop_require_default(require("../../miscellaneous/tilt"));
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
var GamingCamera = /*#__PURE__*/ function(Camera) {
    _inherits(GamingCamera, Camera);
    function GamingCamera(zFar, zNear, fieldOfView, pan, tilt, persist) {
        _class_call_check(this, GamingCamera);
        var _this;
        _this = _call_super(this, GamingCamera, [
            zFar,
            zNear,
            fieldOfView
        ]);
        _this.pan = pan;
        _this.tilt = tilt;
        _this.persist = persist;
        return _this;
    }
    _create_class(GamingCamera, [
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
                (0, _localStorage.removeJSON)(key);
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
                var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
                if (persist) {
                    var key = _constants.GAMING_CAMERA, angles2 = this.tilt.getAngles(), json = {
                        angles: angles2,
                        offsets: offsets
                    };
                    (0, _localStorage.setJSON)(key, json);
                }
                var offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromNothing)(), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles1), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
                render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera, properties, pan, tilt, persist);
                return gamingCamera;
            }
        }
    ]);
    return GamingCamera;
}(_camera.default);
function panFromProperties(properties) {
    var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _properties_mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _properties_mouseSensitivity, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
    var _properties_initialPosition = properties.initialPosition, initialPosition = _properties_initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _properties_initialPosition;
    var initialOffsets = (0, _vector.scale3)(initialPosition, _constants.INVERT_MULTIPLIER);
    if (persist) {
        var key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
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
        var key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
            var angles = json.angles;
            initialAngles = angles; ///
        }
    }
    var clockwise = true, tilt = _tilt.default.fromInitialAnglesAndClockwise(initialAngles, clockwise);
    return tilt;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iXSwibmFtZXMiOlsiR2FtaW5nQ2FtZXJhIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwiR0FNSU5HX0NBTUVSQSIsInJlbW92ZUpTT04iLCJwYW5Gcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJ0aWx0RnJvbVByb3BlcnRpZXMiLCJ1cGRhdGUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJjYW52YXMiLCJyZW5kZXIiLCJtb3VzZVdoZWVsTW92ZWQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlQW5nbGVzIiwiY2FtZXJhIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJqc29uIiwic2V0SlNPTiIsIm9mZnNldHNNYXRyaXgiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJyb3RhdGlvbnNNYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicHJvamVjdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIiwibm9ybWFsc01hdHJpeCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJERUZBVUxUX1BFUlNJU1QiLCJnYW1pbmdDYW1lcmEiLCJDYW1lcmEiLCJtb3VzZVNlbnNpdGl2aXR5IiwiREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSIsIm1vdXNlV2hlZWxTZW5zaXRpdml0eSIsIkRFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkiLCJpbml0aWFsUG9zaXRpb24iLCJERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04iLCJpbml0aWFsT2Zmc2V0cyIsInNjYWxlMyIsIklOVkVSVF9NVUxUSVBMSUVSIiwiZ2V0SlNPTiIsIlBhbiIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJpbml0aWFsQW5nbGVzIiwiREVGQVVMVF9JTklUSUFMX0FOR0xFUyIsInNjYWxlMiIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwiY2xvY2t3aXNlIiwiVGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7MERBbkJMOzJEQUNDOzZEQUVFO3NCQUVZOzRCQUNjO3lCQUNtQzt3QkFLaEM7c0JBS0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQSxhQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQ0FEckNOOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQztZQUFPQzs7UUFFbkIsTUFBS0MsR0FBRyxHQUFHQTtRQUNYLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxPQUFPLEdBQUdBOzs7a0JBTkVOOztZQVNuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxHQUFHO1lBQ2pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE1BQU1DLHdCQUFhLEVBQUcsR0FBRztnQkFFL0JDLElBQUFBLHdCQUFVLEVBQUNGO2dCQUVYLElBQUksQ0FBQ1AsR0FBRyxHQUFHVSxrQkFBa0IsSUFBSSxDQUFDQyxVQUFVO2dCQUM1QyxJQUFJLENBQUNWLElBQUksR0FBR1csbUJBQW1CLElBQUksQ0FBQ0QsVUFBVTtZQUNoRDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyx3QkFBd0IsRUFBRUMsZUFBZSxFQUFFQyxZQUFZLEVB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