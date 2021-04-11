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
var defaultInitialAngles = _vector.zero2(), defaultInitialOffsets = _vector.zero3(), defaultInitialDistance = 5;
var DesignCamera = function(Camera) {
    _inherits(DesignCamera, _camera.default);
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
                var angles = tilt.getAngles(), offsets = pan.getOffsets(), distance = this.zoom.getDistance(), offsetsMatrix = _matrix.offsetsMatrixFromOffsets(offsets), positionMatrix = _matrix.positionMatrixFromDistance(distance), rotationsMatrix = _matrix.rotationsMatrixFromAngles(angles), projectionMatrix = _matrix.projectionMatrixFromWidthAndHeight(width, height), normalsMatrix = _matrix.normalsMatrixFromRotationsMatrix(rotationsMatrix);
                callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? defaultInitialAngles : _initialAngles, _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? defaultInitialOffsets : _initialOffsets, _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? defaultInitialDistance : _initialDistance, flipped = false, pan = _pan.default.fromInitialOffsets(initialOffsets), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), zoom = _zoom.default.fromInitialDistance(initialDistance), designCamera = _camera.default.fromProperties(DesignCamera, properties, pan, tilt, zoom);
                return designCamera;
            }
        }
    ]);
    return DesignCamera;
}(_camera.default);
exports.default = DesignCamera;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgemVybzIsIHplcm8zIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXRzID0gemVybzMoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFSSxJQUF5QjtJQUN4QixLQUEwQjtJQUMxQixLQUEwQjtJQUN4QixPQUFXO0lBRUQsT0FBb0I7SUFLRSxPQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJFLG9CQUFvQixHQVBHLE9BQW9CLFVBUTNDLHFCQUFxQixHQVJFLE9BQW9CLFVBUzNDLHNCQUFzQixHQUFHLENBQUM7SUFFWCxZQUFZLFlBQVMsTUFBTTtjQUEzQixZQUFZLEVBYmQsT0FBVzthQWFULFlBQVksQ0FDbkIsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJOzhCQURSLFlBQVk7O2lFQUFaLFlBQVksYUFFdkIsR0FBRyxFQUFFLElBQUk7Y0FFVixJQUFJLEdBQUcsSUFBSTs7O2lCQUpDLFlBQVk7O1lBTy9CLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUTtvQkFDL0UsR0FBRyxRQUFRLE1BQU0sSUFDakIsSUFBSSxRQUFRLE9BQU87b0JBRXJCLEtBQUs7Z0JBQ1AsRUFBRyxBQUFILENBQUc7MkJBQ00sWUFBWTtvQkFDckIsR0FBRyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsSUFBSTsyQkFDeEQsZUFBZSxLQUFLLENBQUM7eUJBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZTs7b0JBRXhDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQXdCOztvQkFHdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxJQUN4QixRQUFRLFFBQVEsSUFBSSxDQUFDLFdBQVcsSUFDaEMsYUFBYSxHQTlCNEIsT0FBd0IsMEJBOEJ4QixPQUFPLEdBQ2hELGNBQWMsR0EvQjJCLE9BQXdCLDRCQStCckIsUUFBUSxHQUNwRCxlQUFlLEdBaEMwQixPQUF3QiwyQkFnQ3JCLE1BQU0sR0FDbEQsZ0JBQWdCLEdBakN5QixPQUF3QixvQ0FpQ1gsS0FBSyxFQUFFLE1BQU0sR0FDbkUsYUFBYSxHQWxDNEIsT0FBd0Isa0NBa0NoQixlQUFlO2dCQUV0RSxRQUFRLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQjs7Ozs7WUFHbkYsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFVBQVU7cUNBQ3FHLFVBQVUsQ0FBckksYUFBYSxFQUFiLGFBQWEsK0JBQUcsb0JBQW9CLHFDQUF1RixVQUFVLENBQS9GLGNBQWMsRUFBZCxjQUFjLGdDQUFHLHFCQUFxQix1Q0FBK0MsVUFBVSxDQUF2RCxlQUFlLEVBQWYsZUFBZSxpQ0FBRyxzQkFBc0IscUJBQ3hILE9BQU8sR0FBRyxLQUFLLEVBQ2YsR0FBRyxHQXBERyxJQUF5QixTQW9EckIsa0JBQWtCLENBQUMsY0FBYyxHQUMzQyxJQUFJLEdBcERHLEtBQTBCLFNBb0RyQiwyQkFBMkIsQ0FBQyxhQUFhLEVBQUUsT0FBTyxHQUM5RCxJQUFJLEdBcERHLEtBQTBCLFNBb0RyQixtQkFBbUIsQ0FBQyxlQUFlLEdBQy9DLFlBQVksR0FwREgsT0FBVyxTQW9ERSxjQUFjLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7dUJBRTdFLFlBQVk7Ozs7V0F6Q0YsWUFBWTtFQWJkLE9BQVc7a0JBYVQsWUFBWSJ9