"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _constants = require("../constants");
var _defaults = require("../defaults");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
var _Element;
var Camera = /*#__PURE__*/ function(Element1) {
    _inherits(Camera, Element1);
    function Camera(zFar, zNear, fieldOfView) {
        _classCallCheck(this, Camera);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this));
        _this.zFar = zFar;
        _this.zNear = zNear;
        _this.fieldOfView = fieldOfView;
        return _this;
    }
    _createClass(Camera, [
        {
            key: "getZFar",
            value: function getZFar() {
                return this.zFar;
            }
        },
        {
            key: "getZNear",
            value: function getZNear() {
                return this.zNear;
            }
        },
        {
            key: "getFieldOfView",
            value: function getFieldOfView() {
                return this.fieldOfView;
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.zFar = this.zFar * magnification;
                this.zNear = this.zNear * magnification;
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _fieldOfView = properties.fieldOfView, fieldOfView = _fieldOfView === void 0 ? _defaults.DEFAULT_FIELD_OF_VIEW : _fieldOfView;
                fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER; ///
                var _zFar = properties.zFar, zFar = _zFar === void 0 ? _defaults.DEFAULT_Z_FAR : _zFar, _zNear = properties.zNear, zNear = _zNear === void 0 ? _defaults.DEFAULT_Z_NEAR : _zNear, camera = (_Element = _element.default).fromProperties.apply(_Element, [
                    Class,
                    properties,
                    zFar,
                    zNear,
                    fieldOfView
                ].concat(_toConsumableArray(remainingArguments)));
                return camera;
            }
        }
    ]);
    return Camera;
}(_wrapNativeSuper(_element.default));
exports.default = Camera;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1pfRkFSLCBERUZBVUxUX1pfTkVBUiwgREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgdGhpcy5maWVsZE9mVmlldyA9IGZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgZ2V0WkZhcigpIHtcbiAgICByZXR1cm4gdGhpcy56RmFyO1xuICB9XG5cbiAgZ2V0Wk5lYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuek5lYXI7XG4gIH1cblxuICBnZXRGaWVsZE9mVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZE9mVmlldztcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHRoaXMuekZhciA9IHRoaXMuekZhciAqIG1hZ25pZmljYXRpb247XG4gICAgdGhpcy56TmVhciA9IHRoaXMuek5lYXIgKiBtYWduaWZpY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgeyBmaWVsZE9mVmlldyA9IERFRkFVTFRfRklFTERfT0ZfVklFVyB9ID0gcHJvcGVydGllcztcblxuICAgIGZpZWxkT2ZWaWV3ICo9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSOyAvLy9cblxuICAgIGNvbnN0IHsgekZhciA9IERFRkFVTFRfWl9GQVIsIHpOZWFyID0gREVGQVVMVF9aX05FQVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVEsR0FBWSxDQUFaLFFBQVk7QUFFYyxHQUFjLENBQWQsVUFBYztBQUNTLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQy9ELFFBQU87SUFoQ0wsTUFBTTtjQUFOLE1BQU07YUFBTixNQUFNLENBQ2IsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXOzhCQURqQixNQUFNOztpRUFBTixNQUFNO2NBSWxCLElBQUksR0FBRyxJQUFJO2NBQ1gsS0FBSyxHQUFHLEtBQUs7Y0FDYixXQUFXLEdBQUcsV0FBVzs7O2lCQU5iLE1BQU07O1lBU3pCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sR0FBRyxDQUFDOzRCQUNHLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUSxHQUFHLENBQUM7NEJBQ0UsS0FBSztZQUNuQixDQUFDOzs7WUFFRCxHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjLEdBQUcsQ0FBQzs0QkFDSixXQUFXO1lBQ3pCLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztxQkFDakIsSUFBSSxRQUFRLElBQUksR0FBRyxhQUFhO3FCQUNoQyxLQUFLLFFBQVEsS0FBSyxHQUFHLGFBQWE7WUFDekMsQ0FBQzs7OztZQUVNLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUF5QixDQUFDO29CQUF4QixHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztvQkFBRSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7Z0JBQUQsQ0FBQztnQkFDNUQsR0FBRyxnQkFBMkMsVUFBVSxDQUFsRCxXQUFXLEVBQVgsV0FBVyw2QkE3QmdELFNBQWE7Z0JBK0I5RSxXQUFXLElBaEMrQixVQUFjLCtCQWdDVixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRWpELEdBQUssU0FBb0QsVUFBVSxDQUEzRCxJQUFJLEVBQUosSUFBSSxzQkFqQ3FELFNBQWEsaUNBaUNyQixVQUFVLENBQXJDLEtBQUssRUFBTCxLQUFLLHVCQWpDOEIsU0FBYSwwQkFrQ3hFLE1BQU0sSUFBRyxRQUFPLEdBckNOLFFBQVksVUFxQ0wsY0FBYyxDQUF0QixLQUEwRixDQUExRixRQUFPO29CQUFnQixLQUFLO29CQUFFLFVBQVU7b0JBQUUsSUFBSTtvQkFBRSxLQUFLO29CQUFFLFdBQVc7a0JBQWxFLE1BQTBGLG9CQUFuQixrQkFBa0I7dUJBRWpHLE1BQU07WUFDZixDQUFDOzs7V0FuQ2tCLE1BQU07bUJBTFAsUUFBWTtrQkFLWCxNQUFNIn0=