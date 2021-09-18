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
                var camera = this, angles = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance();
                if (persist) {
                    var key = _constants.DESIGN_CAMERA, json = {
                        angles: angles,
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
            var angles = json.angles;
            initialAngles = angles; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwibmFtZXMiOlsiUGFuIiwiVGlsdCIsIlpvb20iLCJDYW1lcmEiLCJzY2FsZTIiLCJnZXRKU09OIiwic2V0SlNPTiIsInJlbW92ZUpTT04iLCJERVNJR05fQ0FNRVJBIiwiREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIiLCJERUZBVUxUX1BFUlNJU1QiLCJERUZBVUxUX0lOSVRJQUxfQU5HTEVTIiwiREVGQVVMVF9JTklUSUFMX09GRlNFVFMiLCJERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UiLCJERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIiLCJERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIiLCJvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMiLCJyb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIiwicG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UiLCJub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIiwiRGVzaWduQ2FtZXJhIiwiY29uc3RydWN0b3IiLCJ6RmFyIiwiek5lYXIiLCJmaWVsZE9mVmlldyIsInBhbiIsInRpbHQiLCJ6b29tIiwicGVyc2lzdCIsImdldFBhbiIsImdldFRpbHQiLCJnZXRab29tIiwiZG9lc1BlcnNpc3QiLCJyZXNldCIsImtleSIsInBhbkZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInRpbHRGcm9tUHJvcGVydGllcyIsInpvb21Gcm9tUHJvcGVydGllcyIsInVwZGF0ZSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsImNhbnZhcyIsInJlbmRlciIsIm1vdXNlV2hlZWxNb3ZlZCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsInVwZGF0ZU9mZnNldHMiLCJ1cGRhdGVEaXN0YW5jZSIsInVwZGF0ZUFuZ2xlcyIsImNhbWVyYSIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImpzb24iLCJvZmZzZXRzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsIm1hZ25pZnkiLCJtYWduaWZpY2F0aW9uIiwiZnJvbVByb3BlcnRpZXMiLCJkZXNpZ25DYW1lcmEiLCJtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciIsImluaXRpYWxPZmZzZXRzIiwiZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIiLCJpbml0aWFsQW5nbGVzIiwiZnJvbUluaXRpYWxBbmdsZXMiLCJpbml0aWFsRGlzdGFuY2UiLCJmcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbERlbHRhTXVsdGlwbGllciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSSxHQUF5QixDQUF6QixJQUF5QjtBQUN4QixHQUEwQixDQUExQixLQUEwQjtBQUMxQixHQUEwQixDQUExQixLQUEwQjtBQUN4QixHQUFXLENBQVgsT0FBVztBQUVQLEdBQW9CLENBQXBCLE9BQW9CO0FBQ0UsR0FBOEIsQ0FBOUIsYUFBOEI7QUFDZCxHQUFpQixDQUFqQixVQUFpQjtBQU1oQixHQUFnQixDQUFoQixTQUFnQjtBQUsxQixHQUF3QixDQUF4QixPQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkQsWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZLENBQ25CLElBQUksRUFBRSxLQUFLLEVBQUUsV0FB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T0E3SStCLGFBQThCLFVBNklsRCxHQUFHO1FBRXhCLEVBQUUsRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbEIsR0FBSyxDQUFHLE1BQU0sR0FBSyxJQUFJLENBQWYsTUFBTTtZQUVkLGFBQWEsR0FBRyxNQUFNLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDLElBQUksR0EzSkssS0FBMEIsU0EySnZCLGlCQUFpQixDQUFDLGFBQWE7SUFFakQsTUFBTSxDQUFDLElBQUk7QUFDYixDQUFDO1NBRVEsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsR0FBSyxZQUFtRyxVQUFVLENBQTFHLE9BQU8sRUFBUCxPQUFPLHlCQXJKNkMsU0FBZ0IsMERBcUo0QixVQUFVLENBQS9FLHlCQUF5QixFQUF6Qix5QkFBeUIsMkNBckpBLFNBQWdCO0lBdUo1RSxHQUFHLG9CQUFrRCxVQUFVLENBQXpELGVBQWUsRUFBZixlQUFlLGlDQXZKdUMsU0FBZ0I7SUF5SjVFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNaLEdBQUssQ0FBQyxHQUFHLEdBaEtnRCxVQUFpQixnQkFpS3BFLElBQUksT0FsSytCLGFBQThCLFVBa0tsRCxHQUFHO1FBRXhCLEVBQUUsRUFBRSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbEIsR0FBSyxDQUFHLFFBQVEsR0FBSyxJQUFJLENBQWpCLFFBQVE7WUFFaEIsZUFBZSxHQUFHLFFBQVEsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFDakMsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQUMsSUFBSSxHQS9LSyxLQUEwQixTQStLdkIsK0NBQStDLENBQUMsZUFBZSxFQUFFLHlCQUF5QjtJQUU1RyxNQUFNLENBQUMsSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcbmltcG9ydCBab29tIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3pvb21cIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCBzZXRKU09OLCByZW1vdmVKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IERFU0lHTl9DQU1FUkEsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9PRkZTRVRTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgREVGQVVMVF9SRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0cyxcbiAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgc3VwZXIubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcblxuICAgIHRoaXMucGFuLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gICAgdGhpcy56b29tLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHpvb20gPSB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tLCBwZXJzaXN0KTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gREVGQVVMVF9SRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxPZmZzZXRzID0gREVGQVVMVF9JTklUSUFMX09GRlNFVFMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpO1xuXG4gIHJldHVybiB0aWx0O1xufVxuXG5mdW5jdGlvbiB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbERpc3RhbmNlID0gZGlzdGFuY2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxEaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcik7XG5cbiAgcmV0dXJuIHpvb207XG59XG4iXX0=