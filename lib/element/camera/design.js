"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));
var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));
var _zoom = _interopRequireDefault(require("../../miscellaneous/zoom"));
var _camera = _interopRequireDefault(require("../camera"));
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
    function DesignCamera(zFar, zNear, fieldOfView, pan, tilt, zoom) {
        _classCallCheck(this, DesignCamera);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera).call(this, zFar, zNear, fieldOfView));
        _this.pan = pan;
        _this.tilt = tilt;
        _this.zoom = zoom;
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
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
                if (false) {
                ///
                } else if (shiftKeyDown) {
                    this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
                } else if (mouseWheelDelta !== 0) {
                    this.zoom.updateDistance(mouseWheelDelta);
                } else {
                    this.tilt.updateAngles(relativeMouseCoordinates);
                }
                var camera = this, angles = this.tilt.getAngles(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance(), offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromDistance(distance), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
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
                var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles, _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _initialOffsets, _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _initialDistance, _deltaMultiplier = properties.deltaMultiplier, deltaMultiplier = _deltaMultiplier === void 0 ? _defaults.DEFAULT_DELTA_MULTIPLIER : _deltaMultiplier, flipped = false, pan = _pan.default.fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), zoom = _zoom.default.fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier), designCamera = _camera.default.fromProperties(DesignCamera, properties, pan, tilt, zoom);
                return designCamera;
            }
        }
    ]);
    return DesignCamera;
}(_camera.default);
exports.default = DesignCamera;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9JTklUSUFMX0FOR0xFUywgREVGQVVMVF9JTklUSUFMX09GRlNFVFMsIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSwgREVGQVVMVF9ERUxUQV9NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIGNhbnZhcywgcmVuZGVyKSB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGhpcy50aWx0KTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgc3VwZXIubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcblxuICAgIHRoaXMucGFuLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gICAgdGhpcy56b29tLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICAgICBpbml0aWFsT2Zmc2V0cyA9IERFRkFVTFRfSU5JVElBTF9PRkZTRVRTLFxuICAgICAgICAgICAgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFLFxuICAgICAgICAgICAgZGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9ERUxUQV9NVUxUSVBMSUVSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBkZWx0YU11bHRpcGxpZXIpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxEaXN0YW5jZSwgZGVsdGFNdWx0aXBsaWVyKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUksR0FBeUIsQ0FBekIsSUFBeUI7QUFDeEIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDMUIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDeEIsR0FBVyxDQUFYLE9BQVc7QUFFc0YsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFLakYsR0FBd0IsQ0FBeEIsT0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRELFlBQVk7Y0FBWixZQUFZO2FBQVosWUFBWSxDQUNuQixJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7OEJBRGxDLFlBQVk7O2lFQUFaLFlBQVksYUFFdkIsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXO2NBRXpCLEdBQUcsR0FBRyxHQUFHO2NBQ1QsSUFBSSxHQUFHLElBQUk7Y0FDWCxJQUFJLEdBQUcsSUFBSTs7O2lCQU5DLFlBQVk7O1lBUy9CLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sR0FBRyxDQUFDOzRCQUNJLEdBQUc7WUFDakIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxHQUFHLENBQUM7NEJBQ0csSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLEdBQUcsQ0FBQzs0QkFDRyxJQUFJO1lBQ2xCLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0s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