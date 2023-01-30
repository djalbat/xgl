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
var _pan = /*#__PURE__*/ _interopRequireDefault(require("../../miscellaneous/pan"));
var _tilt = /*#__PURE__*/ _interopRequireDefault(require("../../miscellaneous/tilt"));
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
var GamingCamera = /*#__PURE__*/ function(Camera) {
    _inherits(GamingCamera, Camera);
    var _super = _createSuper(GamingCamera);
    function GamingCamera(zFar, zNear, fieldOfView, pan, tilt, persist) {
        _classCallCheck(this, GamingCamera);
        var _this;
        _this = _super.call(this, zFar, zNear, fieldOfView);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iXSwibmFtZXMiOlsiR2FtaW5nQ2FtZXJhIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwiR0FNSU5HX0NBTUVSQSIsInJlbW92ZUpTT04iLCJwYW5Gcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJ0aWx0RnJvbVByb3BlcnRpZXMiLCJ1cGRhdGUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJjYW52YXMiLCJyZW5kZXIiLCJtb3VzZVdoZWVsTW92ZWQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlQW5nbGVzIiwiY2FtZXJhIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJqc29uIiwic2V0SlNPTiIsIm9mZnNldHNNYXRyaXgiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJyb3RhdGlvbnNNYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicHJvamVjdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIiwibm9ybWFsc01hdHJpeCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJERUZBVUxUX1BFUlNJU1QiLCJnYW1pbmdDYW1lcmEiLCJDYW1lcmEiLCJtb3VzZVNlbnNpdGl2aXR5IiwiREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSIsIm1vdXNlV2hlZWxTZW5zaXRpdml0eSIsIkRFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkiLCJpbml0aWFsUG9zaXRpb24iLCJERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04iLCJpbml0aWFsT2Zmc2V0cyIsInNjYWxlMyIsIklOVkVSVF9NVUxUSVBMSUVSIiwiZ2V0SlNPTiIsIlBhbiIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJpbml0aWFsQW5nbGVzIiwiREVGQVVMVF9JTklUSUFMX0FOR0xFUyIsInNjYWxlMiIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwiY2xvY2t3aXNlIiwiVGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7d0RBbkJMO3lEQUNDOzJEQUVFO3NCQUVZOzRCQUNjO3lCQUNtQzt3QkFLaEM7c0JBS0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBQSxBQUFNQSw2QkE4RWxCLEFBOUVZO2NBQU1BOzhCQUFBQTthQUFBQSxhQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsT0FBTzs4QkFEckNOOztrQ0FFWEMsTUFBTUMsT0FBT0M7UUFFbkIsTUFBS0MsR0FBRyxHQUFHQTtRQUNYLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxPQUFPLEdBQUdBOzs7aUJBTkVOOztZQVNuQk8sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsT0FBTyxJQUFJLENBQUNILEdBQUc7WUFDakI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVE7Z0JBQ04sSUFBTUMsTUFBTUMsd0JBQWEsRUFBRyxHQUFHO2dCQUUvQkMsSUFBQUEsd0JBQVUsRUFBQ0Y7Z0JBRVgsSUFBSSxDQUFDUCxHQUFHLEdBQUdVLGtCQUFrQixJQUFJLENBQUNDLFVBQVU7Z0JBQzVDLElBQUksQ0FBQ1YsSUFBSSxHQUFHVyxtQkFBbUIsSUFBSSxDQUFDRCxVQUFVO1lBQ2hEOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9D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