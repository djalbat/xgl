"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _buffers = _interopRequireDefault(require("../../renderer/buffers"));
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
var textureCoordinateComponents = 2;
var TextureRendererBuffers = /*#__PURE__*/ function(RendererBuffers) {
    _inherits(TextureRendererBuffers, RendererBuffers);
    function TextureRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
        _classCallCheck(this, TextureRendererBuffers);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureRendererBuffers).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));
        _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
        return _this;
    }
    _createClass(TextureRendererBuffers, [
        {
            key: "createTextureCoordinatesBuffer",
            value: function createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
                this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
            }
        },
        {
            key: "bindTextureCoordinatesBuffer",
            value: function bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
                canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
            }
        },
        {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
                _get(_getPrototypeOf(TextureRendererBuffers.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
                this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
            }
        },
        {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
                _get(_getPrototypeOf(TextureRendererBuffers.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
                this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var textureCoordinatesBuffer = null, textureRendererBuffers = _buffers.default.fromNothing(TextureRendererBuffers, textureCoordinatesBuffer);
                return textureRendererBuffers;
            }
        }
    ]);
    return TextureRendererBuffers;
}(_buffers.default);
exports.default = TextureRendererBuffers;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iXSwibmFtZXMiOlsidGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzIiwiVGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlc0J1ZmZlciIsImNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlciIsInRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXIiLCJjcmVhdGVCdWZmZXJzIiwidmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJiaW5kQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImZyb21Ob3RoaW5nIiwidGV4dHVyZVJlbmRlcmVyQnVmZmVycyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBd0IsQ0FBeEIsUUFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELEdBQUssQ0FBQ0EsMkJBQTJCLEdBQUcsQ0FBQztJQUVoQkMsc0JBQXNCLGlCQUE1QixRQUFRO2NBQUZBLHNCQUFzQjthQUF0QkEsc0JBQXNCLENBQzdCQyxxQkFBcUIsRUFBRUMsbUJBQW1CLEVBQUVDLDBCQUEwQixFQUFFQyx3QkFBd0I7OEJBRHpGSixzQkFBc0I7O2lFQUF0QkEsc0JBQXNCLGFBRWpDQyxxQkFBcUIsRUFBRUMsbUJBQW1CLEVBQUVDLDBCQUEwQjtjQUV2RUMsd0JBQXdCLEdBQUdBLHdCQUF3Qjs7O2lCQUp2Q0osc0JBQXNCOztZQU96Q0ssR0FBOEIsRUFBOUJBLENBQThCO21CQUE5QkEsUUFBUSxDQUFSQSw4QkFBOEIsQ0FBQ0Msc0JBQXNCLEVBQUVDLE1BQU0sRUFBRSxDQUFDO2dCQUM5RCxJQUFJLENBQUNILHdCQUF3QixHQUFHRyxNQUFNLENBQUNDLFlBQVksQ0FBQ0Ysc0JBQXNCO1lBQzVFLENBQUM7OztZQUVERyxHQUE0QixFQUE1QkEsQ0FBNEI7bUJBQTVCQSxRQUFRLENBQVJBLDRCQUE0QixDQUFDQyxrQ0FBa0MsRUFBRUgsTUFBTSxFQUFFLENBQUM7Z0JBQ3hFQSxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUNQLHdCQUF3QixFQUFFTSxrQ0FBa0MsRUFBRVgsMkJBQTJCO1lBQ2xILENBQUM7OztZQUVEYSxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxDQUFDQyxtQkFBbUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFVCxzQkFBc0IsRUFBRUMsTUFBTSxFQUFFLENBQUM7cUNBZnZGUCxzQkFBc0IsYUFnQmpDWSxDQUFhLGdCQUFuQixJQUFLLGFBQWVDLG1CQUFtQixFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVSLE1BQU07Z0JBRXJGLElBQUksQ0FBQ0YsOEJBQThCLENBQUNDLHNCQUFzQixFQUFFQyxNQUFNO1lBQ3BFLENBQUM7OztZQUVEUyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDQyw2QkFBNkIsRUFBRUMsK0JBQStCLEVBQUVSLGtDQUFrQyxFQUFFSCxNQUFNLEVBQUUsQ0FBQztxQ0FyQnRHUCxzQkFBc0IsYUFzQmpDZ0IsQ0FBVyxjQUFqQixJQUFLLGFBQWFDLDZCQUE2QixFQUFFQywrQkFBK0IsRUFBRVgsTUFBTTtnQkFFeEYsSUFBSSxDQUFDRSw0QkFBNEIsQ0FBQ0Msa0NBQWtDLEVBQUVILE1BQU07WUFDOUUsQ0FBQzs7OztZQUVNWSxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQ2Ysd0JBQXdCLEdBQUcsSUFBSSxFQUMvQmdCLHNCQUFzQixHQWpDSixRQUF3QixTQWlDREQsV0FBVyxDQUFDbkIsc0JBQXNCLEVBQUVJLHdCQUF3QjtnQkFFM0csTUFBTSxDQUFDZ0Isc0JBQXNCO1lBQy9CLENBQUM7OztXQWhDa0JwQixzQkFBc0I7RUFKZixRQUF3QjtrQkFJL0JBLHNCQUFzQiJ9