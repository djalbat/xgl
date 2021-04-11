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
var TextureRendererBuffers = function(RendererBuffers) {
    _inherits(TextureRendererBuffers, _buffers.default);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFZ0IsUUFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDLDJCQUEyQixHQUFHLENBQUM7SUFFaEIsc0JBQXNCLFlBQVMsZUFBZTtjQUE5QyxzQkFBc0IsRUFKZixRQUF3QjthQUkvQixzQkFBc0IsQ0FDN0IscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCOzhCQUR6RixzQkFBc0I7O2lFQUF0QixzQkFBc0IsYUFFakMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCO2NBRXZFLHdCQUF3QixHQUFHLHdCQUF3Qjs7O2lCQUp2QyxzQkFBc0I7O1lBT3pDLEdBQThCLEdBQTlCLDhCQUE4Qjs0QkFBOUIsOEJBQThCLENBQUMsc0JBQXNCLEVBQUUsTUFBTTtxQkFDdEQsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0I7Ozs7WUFHNUUsR0FBNEIsR0FBNUIsNEJBQTRCOzRCQUE1Qiw0QkFBNEIsQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNO2dCQUNyRSxNQUFNLENBQUMsVUFBVSxNQUFNLHdCQUF3QixFQUFFLGtDQUFrQyxFQUFFLDJCQUEyQjs7OztZQUdsSCxHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTTtxQ0FmcEYsc0JBQXNCLGNBZ0JqQyxhQUFhLG9CQUFDLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU07cUJBRWhGLDhCQUE4QixDQUFDLHNCQUFzQixFQUFFLE1BQU07Ozs7WUFHcEUsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLDZCQUE2QixFQUFFLCtCQUErQixFQUFFLGtDQUFrQyxFQUFFLE1BQU07cUNBckJuRyxzQkFBc0IsY0FzQmpDLFdBQVcsb0JBQUMsNkJBQTZCLEVBQUUsK0JBQStCLEVBQUUsTUFBTTtxQkFFbkYsNEJBQTRCLENBQUMsa0NBQWtDLEVBQUUsTUFBTTs7Ozs7WUFHdkUsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDVix3QkFBd0IsR0FBRyxJQUFJLEVBQy9CLHNCQUFzQixHQWpDSixRQUF3QixTQWlDRCxXQUFXLENBQUMsc0JBQXNCLEVBQUUsd0JBQXdCO3VCQUVwRyxzQkFBc0I7Ozs7V0EvQlosc0JBQXNCO0VBSmYsUUFBd0I7a0JBSS9CLHNCQUFzQiJ9