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
                var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera, properties, pan, tilt, persist);
                return gamingCamera;
            }
        }
    ]);
    return GamingCamera;
}(_camera.default);
function panFromProperties(properties) {
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _mouseSensitivity, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
    var _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition;
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
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist;
    var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iXSwibmFtZXMiOlsiR2FtaW5nQ2FtZXJhIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwiR0FNSU5HX0NBTUVSQSIsInJlbW92ZUpTT04iLCJwYW5Gcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJ0aWx0RnJvbVByb3BlcnRpZXMiLCJ1cGRhdGUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJjYW52YXMiLCJyZW5kZXIiLCJtb3VzZVdoZWVsTW92ZWQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlQW5nbGVzIiwiY2FtZXJhIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJqc29uIiwic2V0SlNPTiIsIm9mZnNldHNNYXRyaXgiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJyb3RhdGlvbnNNYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicHJvamVjdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIiwibm9ybWFsc01hdHJpeCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJERUZBVUxUX1BFUlNJU1QiLCJnYW1pbmdDYW1lcmEiLCJDYW1lcmEiLCJtb3VzZVNlbnNpdGl2aXR5IiwiREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSIsIm1vdXNlV2hlZWxTZW5zaXRpdml0eSIsIkRFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkiLCJpbml0aWFsUG9zaXRpb24iLCJERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04iLCJpbml0aWFsT2Zmc2V0cyIsInNjYWxlMyIsIklOVkVSVF9NVUxUSVBMSUVSIiwiZ2V0SlNPTiIsIlBhbiIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJpbml0aWFsQW5nbGVzIiwiREVGQVVMVF9JTklUSUFMX0FOR0xFUyIsInNjYWxlMiIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwiY2xvY2t3aXNlIiwiVGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFxQlFBLFlBQVk7Ozt3REFuQmpCLHlCQUF5Qjt5REFDeEIsMEJBQTBCOzJEQUV4QixXQUFXO3NCQUVDLG9CQUFvQjs0QkFDTiw4QkFBOEI7eUJBQ0ssaUJBQWlCO3dCQUtqRCxnQkFBZ0I7c0JBS1osd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQUEsQUFBTUEsWUFBWSxpQkE4RTlCLEFBOUVZOzs7YUFBTUEsWUFBWSxDQUNuQkMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87OztrQ0FDaERMLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUU7UUFFaEMsTUFBS0MsR0FBRyxHQUFHQSxHQUFHLENBQUM7UUFDZixNQUFLQyxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixNQUFLQyxPQUFPLEdBQUdBLE9BQU8sQ0FBQzs7Ozs7WUFHekJDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLE9BQU8sSUFBSSxDQUFDSCxHQUFHLENBQUM7YUFDakI7OztZQUVESSxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDO2FBQ2xCOzs7WUFFREksR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNILE9BQU8sQ0FBQzthQUNyQjs7O1lBRURJLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxHQUFHO2dCQUNOLElBQU1DLEdBQUcs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