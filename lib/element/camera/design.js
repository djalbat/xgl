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
    function DesignCamera(pan, tilt, zoom) {
        _classCallCheck(this, DesignCamera);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera).call(this, pan, tilt));
        _this.zoom = zoom;
        return _this;
    }
    _createClass(DesignCamera, [
        {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
                var pan = this.getPan(), tilt = this.getTilt();
                if (false) {
                ///
                } else if (shiftKeyDown) {
                    pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
                } else if (mouseWheelDelta !== 0) {
                    this.zoom.updateDistance(mouseWheelDelta);
                } else {
                    tilt.updateAngles(relativeMouseCoordinates);
                }
                var angles = tilt.getAngles(), offsets = pan.getOffsets(), distance = this.zoom.getDistance(), offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromDistance(distance), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromWidthAndHeight(width, height), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
                callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9JTklUSUFMX0FOR0xFUywgREVGQVVMVF9JTklUSUFMX09GRlNFVFMsIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSwgREVGQVVMVF9ERUxUQV9NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMsIGluaXRpYWxPZmZzZXRzID0gREVGQVVMVF9JTklUSUFMX09GRlNFVFMsIGluaXRpYWxEaXN0YW5jZSA9IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSwgZGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9ERUxUQV9NVUxUSVBMSUVSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBkZWx0YU11bHRpcGxpZXIpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxEaXN0YW5jZSwgZGVsdGFNdWx0aXBsaWVyKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUksR0FBeUIsQ0FBekIsSUFBeUI7QUFDeEIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDMUIsR0FBMEIsQ0FBMUIsS0FBMEI7QUFDeEIsR0FBVyxDQUFYLE9BQVc7QUFFc0YsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFLakYsR0FB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