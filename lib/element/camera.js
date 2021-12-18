"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _constants = require("../constants");
var _defaults = require("../defaults");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var Camera = /*#__PURE__*/ function(Element) {
    _inherits(Camera, Element);
    var _super = _createSuper(Camera);
    function Camera(zFar, zNear, fieldOfView) {
        _classCallCheck(this, Camera);
        var _this;
        _this = _super.call(this);
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
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Element;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1pfRkFSLCBERUZBVUxUX1pfTkVBUiwgREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgdGhpcy5maWVsZE9mVmlldyA9IGZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgZ2V0WkZhcigpIHtcbiAgICByZXR1cm4gdGhpcy56RmFyO1xuICB9XG5cbiAgZ2V0Wk5lYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuek5lYXI7XG4gIH1cblxuICBnZXRGaWVsZE9mVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZE9mVmlldztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHsgZmllbGRPZlZpZXcgPSBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBmaWVsZE9mVmlldyAqPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUjsgLy8vXG5cbiAgICBjb25zdCB7IHpGYXIgPSBERUZBVUxUX1pfRkFSLCB6TmVhciA9IERFRkFVTFRfWl9ORUFSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDYW1lcmEiLCJ6RmFyIiwiek5lYXIiLCJmaWVsZE9mVmlldyIsImdldFpGYXIiLCJnZXRaTmVhciIsImdldEZpZWxkT2ZWaWV3IiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiY2FtZXJhIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVRLEdBQVksQ0FBWixRQUFZO0FBRWMsR0FBYyxDQUFkLFVBQWM7QUFDUyxHQUFhLENBQWIsU0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdEQSxNQUFNLGlCQUFaLFFBQVE7Y0FBRkEsTUFBTTs4QkFBTkEsTUFBTTthQUFOQSxNQUFNLENBQ2JDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXOzhCQURqQkgsTUFBTTs7O2NBSWxCQyxJQUFJLEdBQUdBLElBQUk7Y0FDWEMsS0FBSyxHQUFHQSxLQUFLO2NBQ2JDLFdBQVcsR0FBR0EsV0FBVzs7O2lCQU5iSCxNQUFNOztZQVN6QkksR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUNILElBQUk7WUFDbEIsQ0FBQzs7O1lBRURJLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDSCxLQUFLO1lBQ25CLENBQUM7OztZQUVESSxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUNILFdBQVc7WUFDekIsQ0FBQzs7OztZQUVNSSxHQUFjLEVBQWRBLENBQWM7bUJBQXJCLFFBQVEsQ0FBREEsY0FBYyxDQUFDQyxLQUFLLEVBQUVDLFVBQVUsRUFBeUIsQ0FBQztnQkFBeEIsR0FBR0MsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQkEsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7b0JBQUVBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO29CQU03Q0MsUUFBTztnQkFMdEIsR0FBRyxnQkFBMkNGLFVBQVUsQ0FBbEROLFdBQVcsRUFBWEEsV0FBVyw2QkF4QmdELFNBQWE7Z0JBMEI5RUEsV0FBVyxJQTNCK0IsVUFBYywrQkEyQlYsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVqRCxHQUFLLFNBQW9ETSxVQUFVLENBQTNEUixJQUFJLEVBQUpBLElBQUksc0JBNUJxRCxTQUFhLGlDQTRCckJRLFVBQVUsQ0FBckNQLEtBQUssRUFBTEEsS0FBSyx1QkE1QjhCLFNBQWEsMEJBNkJ4RVUsTUFBTSxJQUFHRCxRQUFPLEdBaENOLFFBQVksVUFnQ0xKLGNBQWMsQ0FBdEJJLEtBQTBGLENBQTFGQSxRQUFPLEVBQVBBLENBQUM7b0JBQXNCSCxLQUFLO29CQUFFQyxVQUFVO29CQUFFUixJQUFJO29CQUFFQyxLQUFLO29CQUFFQyxXQUFXO2dCQUF1QixDQUFDLENBQTFGUSxNQUEwRixvQkFBbkJELGtCQUFrQjtnQkFFeEcsTUFBTSxDQUFDRSxNQUFNO1lBQ2YsQ0FBQzs7O1dBOUJrQlosTUFBTTttQkFMUCxRQUFZO2tCQUtYQSxNQUFNIn0=