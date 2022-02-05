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
                var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
                if (persist) {
                    var key = _constants.GAMING_CAMERA, angles2 = this.tilt.getAngles(), json = {
                        angles: angles2,
                        offsets: offsets
                    };
                    (0, _localStorage).setJSON(key, json);
                }
                var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromNothing(), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles1), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
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
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _mouseSensitivity, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
    var _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition;
    var initialOffsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER);
    if (persist) {
        var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iXSwibmFtZXMiOlsiR2FtaW5nQ2FtZXJhIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwiR0FNSU5HX0NBTUVSQSIsInJlbW92ZUpTT04iLCJwYW5Gcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJ0aWx0RnJvbVByb3BlcnRpZXMiLCJ1cGRhdGUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJjYW52YXMiLCJyZW5kZXIiLCJtb3VzZVdoZWVsTW92ZWQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlQW5nbGVzIiwiY2FtZXJhIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJqc29uIiwic2V0SlNPTiIsIm9mZnNldHNNYXRyaXgiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJwb3NpdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJyb3RhdGlvbnNNYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicHJvamVjdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIiwibm9ybWFsc01hdHJpeCIsIm5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJERUZBVUxUX1BFUlNJU1QiLCJnYW1pbmdDYW1lcmEiLCJDYW1lcmEiLCJtb3VzZVNlbnNpdGl2aXR5IiwiREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSIsIm1vdXNlV2hlZWxTZW5zaXRpdml0eSIsIkRFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkiLCJpbml0aWFsUG9zaXRpb24iLCJERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04iLCJpbml0aWFsT2Zmc2V0cyIsInNjYWxlMyIsIklOVkVSVF9NVUxUSVBMSUVSIiwiZ2V0SlNPTiIsIlBhbiIsImZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkiLCJpbml0aWFsQW5nbGVzIiwiREVGQVVMVF9JTklUSUFMX0FOR0xFUyIsInNjYWxlMiIsIkRFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIiwiY2xvY2t3aXNlIiwiVGlsdCIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVJLEdBQXlCLENBQXpCLElBQXlCO0FBQ3hCLEdBQTBCLENBQTFCLEtBQTBCO0FBRXhCLEdBQVcsQ0FBWCxPQUFXO0FBRUMsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDTixHQUE4QixDQUE5QixhQUE4QjtBQUNLLEdBQWlCLENBQWpCLFVBQWlCO0FBS2pELEdBQWdCLENBQWhCLFNBQWdCO0FBS1osR0FBd0IsQ0FBeEIsT0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkRBLFlBQVksaUJBQWxCLFFBQVE7OzthQUFGQSxZQUFZLENBQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsT0FBTzs7O2tDQUNoREwsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVc7Y0FFekJDLEdBQUcsR0FBR0EsR0FBRztjQUNUQyxJQUFJLEdBQUdBLElBQUk7Y0FDWEMsT0FBTyxHQUFHQSxPQUFPOzs7OztZQUd4QkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUNILEdBQUc7WUFDakIsQ0FBQzs7O1lBRURJLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDSCxJQUFJO1lBQ2xCLENBQUM7OztZQUVESSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQ0gsT0FBTztZQUNyQixDQUFDOzs7WUFFREksR0FB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