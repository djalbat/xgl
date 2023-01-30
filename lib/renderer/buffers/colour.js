"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColourRendererBuffers;
    }
});
var _buffers = /*#__PURE__*/ _interopRequireDefault(require("../../renderer/buffers"));
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
var vertexColourComponents = 4;
var ColourRendererBuffers = /*#__PURE__*/ function(RendererBuffers) {
    _inherits(ColourRendererBuffers, RendererBuffers);
    var _super = _createSuper(ColourRendererBuffers);
    function ColourRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
        _classCallCheck(this, ColourRendererBuffers);
        var _this;
        _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
        _this.vertexColoursBuffer = vertexColoursBuffer;
        return _this;
    }
    _createClass(ColourRendererBuffers, [
        {
            key: "createVertexColoursBuffer",
            value: function createVertexColoursBuffer(vertexColoursData, canvas) {
                this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
            }
        },
        {
            key: "bindVertexColoursBuffer",
            value: function bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
                canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
            }
        },
        {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
                _get(_getPrototypeOf(ColourRendererBuffers.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
                this.createVertexColoursBuffer(vertexColoursData, canvas);
            }
        },
        {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
                _get(_getPrototypeOf(ColourRendererBuffers.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
                this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var vertexColoursBuffer = null, colourRendererBuffers = _buffers.default.fromNothing(ColourRendererBuffers, vertexColoursBuffer);
                return colourRendererBuffers;
            }
        }
    ]);
    return ColourRendererBuffers;
}(_buffers.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbG91clJlbmRlcmVyQnVmZmVycyIsInZlcnRleENvbG91ckNvbXBvbmVudHMiLCJ2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzQnVmZmVyIiwidmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJzQnVmZmVyIiwiY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlciIsInZlcnRleENvbG91cnNEYXRhIiwiY2FudmFzIiwiY3JlYXRlQnVmZmVyIiwiYmluZFZlcnRleENvbG91cnNCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXIiLCJjcmVhdGVCdWZmZXJzIiwidmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJiaW5kQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImZyb21Ob3RoaW5nIiwiY29sb3VyUmVuZGVyZXJCdWZmZXJzIiwiUmVuZGVyZXJCdWZmZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs0REFKTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1DLHlCQUF5QjtBQUVoQixJQUFBLEFBQU1ELHNDQUFOO2NBQU1BOzhCQUFBQTthQUFBQSxzQkFDUEUscUJBQXFCLEVBQUVDLG1CQUFtQixFQUFFQywwQkFBMEIsRUFBRUMsbUJBQW1COzhCQURwRkw7O2tDQUVYRSx1QkFBdUJDLHFCQUFxQkM7UUFFbEQsTUFBS0MsbUJBQW1CLEdBQUdBOzs7aUJBSlZMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQkMsaUJBQWlCLEVBQUVDLE1BQU0sRUFBRTtnQkFDbkQsSUFBSSxDQUFDSCxtQkFBbUIsR0FBR0csT0FBT0MsWUFBWSxDQUFDRjtZQUNqRDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLDZCQUE2QixFQUFFSCxNQUFNLEVBQUU7Z0JBQzdEQSxPQUFPSSxVQUFVLENBQUMsSUFBSSxDQUFDUCxtQkFBbUIsRUFBRU0sK0JBQStCVjtZQUM3RTs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxtQkFBbUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFVCxpQkFBaUIsRUFBRUMsTUFBTSxFQUFFO2dCQUNsRyxxQkFoQmlCUixrQ0FnQlhhLGlCQUFOLElBQUssYUFBZUMscUJBQXFCQyxtQkFBbUJDLG1CQUFtQlI7Z0JBRS9FLElBQUksQ0FBQ0YseUJBQXlCLENBQUNDLG1CQUFtQkM7WUFDcEQ7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsNkJBQTZCLEVBQUVDLCtCQUErQixFQUFFUiw2QkFBNkIsRUFBRUgsTUFBTSxFQUFFO2dCQUNqSCxxQkF0QmlCUixrQ0FzQlhpQixlQUFOLElBQUssYUFBYUMsK0JBQStCQyxpQ0FBaUNYO2dCQUVsRixJQUFJLENBQUNFLHVCQUF1QixDQUFDQywrQkFBK0JIO1lBQzlEOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQ25CLElBQU1mLHNCQUFzQixJQUFJLEVBQzFCZ0Isd0JBQXdCQyxnQkFBZSxDQUFDRixXQUFXLENBN0J4Q3BCLHVCQTZCZ0VLO2dCQUVqRixPQUFPZ0I7WUFDVDs7O1dBaENtQnJCO0VBQThCc0IsZ0JBQWUifQ==