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
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelDeltaMultiplier = properties.mouseWheelDeltaMultiplier, mouseWheelDeltaMultiplier = _mouseWheelDeltaMultiplier === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER : _mouseWheelDeltaMultiplier, _relativeMouseCoordinatesMultiplier = properties.relativeMouseCoordinatesMultiplier, relativeMouseCoordinatesMultiplier = _relativeMouseCoordinatesMultiplier === void 0 ? _defaults.DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER : _relativeMouseCoordinatesMultiplier;
    var _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition;
    var initialOffsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER);
    if (persist) {
        var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
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
        var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
        if (json !== null) {
            var angles = json.angles;
            initialAngles = angles; ///
        }
    }
    var clockwise = true, tilt = _tilt.default.fromInitialAnglesAndClockwise(initialAngles, clockwise);
    return tilt;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHJlbW92ZUpTT04sIHNldEpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUixcbiAgICAgICAgIERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24gfHwgbW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICBjb25zdCBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKTtcblxuICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBjbG9ja3dpc2UgPSB0cnVlLFxuICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gIHJldHVybiB0aWx0O1xufSJdLCJuYW1lcyI6WyJHYW1pbmdDYW1lcmEiLCJ6RmFyIiwiek5lYXIiLCJmaWVsZE9mVmlldyIsInBhbiIsInRpbHQiLCJwZXJzaXN0IiwiZ2V0UGFuIiwiZ2V0VGlsdCIsImRvZXNQZXJzaXN0IiwicmVzZXQiLCJrZXkiLCJwYW5Gcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJ0aWx0RnJvbVByb3BlcnRpZXMiLCJ1cGRhdGUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJjYW52YXMiLCJyZW5kZXIiLCJtb3VzZVdoZWVsTW92ZWQiLCJhbmdsZXMiLCJnZXRBbmdsZXMiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlQW5nbGVzIiwiY2FtZXJhIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJqc29uIiwib2Zmc2V0c01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJmcm9tUHJvcGVydGllcyIsImdhbWluZ0NhbWVyYSIsIm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyIiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbE9mZnNldHMiLCJmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyQW5kUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciIsImluaXRpYWxBbmdsZXMiLCJjbG9ja3dpc2UiLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSSxHQUF5QixDQUF6QixJQUF5QjtBQUN4QixHQUEwQixDQUExQixLQUEwQjtBQUV4QixHQUFXLENBQVgsT0FBVztBQUVDLEdBQW9CLENBQXBCLE9BQW9CO0FBQ04sR0FBOEIsQ0FBOUIsYUFBOEI7QUFDSyxHQUFpQixDQUFqQixVQUFpQjtBQUtuQyxHQUFnQixDQUFoQixTQUFnQjtBQUsx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