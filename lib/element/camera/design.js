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
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _mouseSensitivity, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
    var _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _initialOffsets;
    if (persist) {
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
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
    var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
    var _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _initialDistance;
    if (persist) {
        var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
        if (json !== null) {
            var distance = json.distance;
            initialDistance = distance; ///
        }
    }
    var zoom = _zoom.default.fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity);
    return zoom;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0cyxcbiAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpO1xuXG4gIHJldHVybiB0aWx0O1xufVxuXG5mdW5jdGlvbiB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbERpc3RhbmNlID0gZGlzdGFuY2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIl0sIm5hbWVzIjpbIkRlc2lnbkNhbWVyYSIsInpGYXIiLCJ6TmVhciIsImZpZWxkT2ZWaWV3IiwicGFuIiwidGlsdCIsInpvb20iLCJwZXJzaXN0IiwiZ2V0UGFuIiwiZ2V0VGlsdCIsImdldFpvb20iLCJkb2VzUGVyc2lzdCIsInJlc2V0Iiwia2V5IiwicGFuRnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwidGlsdEZyb21Qcm9wZXJ0aWVzIiwiem9vbUZyb21Qcm9wZXJ0aWVzIiwidXBkYXRlIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwiY2FudmFzIiwicmVuZGVyIiwibW91c2VXaGVlbE1vdmVkIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwidXBkYXRlT2Zmc2V0cyIsInVwZGF0ZURpc3RhbmNlIiwidXBkYXRlQW5nbGVzIiwiY2FtZXJhIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwianNvbiIsIm9mZnNldHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxzTWF0cml4IiwiZnJvbVByb3BlcnRpZXMiLCJkZXNpZ25DYW1lcmEiLCJtb3VzZVNlbnNpdGl2aXR5IiwibW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbE9mZnNldHMiLCJmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5IiwiaW5pdGlhbEFuZ2xlcyIsImZyb21Jbml0aWFsQW5nbGVzIiwiaW5pdGlhbERpc3RhbmNlIiwiZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSSxHQUF5QixDQUF6QixJQUF5QjtBQUN4QixHQUEwQixDQUExQixLQUEwQjtBQUMxQixHQUEwQixDQUExQixLQUEwQjtBQUN4QixHQUFXLENBQVgsT0FBVztBQUVQLEdBQW9CLENBQXBCLE9BQW9CO0FBQ0UsR0FBOEIsQ0FBOUIsYUFBOEI7QUFDZCxHQUFpQixDQUFqQixVQUFpQjtBQU05QixHQUFnQixDQUFoQixTQUFnQjtBQUtaLEdBQXdCLENBQXhCLE9BQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkRBLFlBQVksaUJBQWxCLFFBQVE7Y0FBRkEsWUFBWTthQUFaQSxZQUFZLENBQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FB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