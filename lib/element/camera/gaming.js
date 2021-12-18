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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHJlbW92ZUpTT04sIHNldEpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iXSwibmFtZXMiOlsiR2FtaW5nQ2FtZXJhIiwiekZhciIsInpOZWFyIiwiZmllbGRPZlZpZXciLCJwYW4iLCJ0aWx0IiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwicGFuRnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwidGlsdEZyb21Qcm9wZXJ0aWVzIiwidXBkYXRlIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwiY2FudmFzIiwicmVuZGVyIiwibW91c2VXaGVlbE1vdmVkIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZUFuZ2xlcyIsImNhbWVyYSIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwianNvbiIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJnYW1pbmdDYW1lcmEiLCJtb3VzZVNlbnNpdGl2aXR5IiwibW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbE9mZnNldHMiLCJmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbEFuZ2xlcyIsImNsb2Nrd2lzZSIsImZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVJLEdBQXlCLENBQXpCLElBQXlCO0FBQ3hCLEdBQTBCLENBQTFCLEtBQTBCO0FBRXhCLEdBQVcsQ0FBWCxPQUFXO0FBRUMsR0FBb0IsQ0FBcEIsT0FBb0I7QUFDTixHQUE4QixDQUE5QixhQUE4QjtBQUNLLEdBQWlCLENBQWpCLFVBQWlCO0FBS2pELEdBQWdCLENBQWhCLFNBQWdCO0FBS1osR0FBd0IsQ0FBeEIsT0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2REEsWUFBWSxpQkFBbEIsUUFBUTtjQUFGQSxZQUFZO2FBQVpBLFlBQVksQ0FDbkJDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxX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