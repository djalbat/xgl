"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Camera;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _constants = require("../constants");
var _defaults = require("../defaults");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var Camera = /*#__PURE__*/ function(Element) {
    _inherits(Camera, Element);
    var _super = _create_super(Camera);
    function Camera(zFar, zNear, fieldOfView) {
        _class_call_check(this, Camera);
        var _this;
        _this = _super.call(this);
        _this.zFar = zFar;
        _this.zNear = zNear;
        _this.fieldOfView = fieldOfView;
        return _this;
    }
    _create_class(Camera, [
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
                var _properties_fieldOfView = properties.fieldOfView, fieldOfView = _properties_fieldOfView === void 0 ? _defaults.DEFAULT_FIELD_OF_VIEW : _properties_fieldOfView;
                fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER; ///
                var _properties_zFar = properties.zFar, zFar = _properties_zFar === void 0 ? _defaults.DEFAULT_Z_FAR : _properties_zFar, _properties_zNear = properties.zNear, zNear = _properties_zNear === void 0 ? _defaults.DEFAULT_Z_NEAR : _properties_zNear, camera = (_Element = _element.default).fromProperties.apply(_Element, [
                    Class,
                    properties,
                    zFar,
                    zNear,
                    fieldOfView
                ].concat(_to_consumable_array(remainingArguments)));
                return camera;
            }
        }
    ]);
    return Camera;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1pfRkFSLCBERUZBVUxUX1pfTkVBUiwgREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgdGhpcy5maWVsZE9mVmlldyA9IGZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgZ2V0WkZhcigpIHtcbiAgICByZXR1cm4gdGhpcy56RmFyO1xuICB9XG5cbiAgZ2V0Wk5lYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuek5lYXI7XG4gIH1cblxuICBnZXRGaWVsZE9mVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZE9mVmlldztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHsgZmllbGRPZlZpZXcgPSBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBmaWVsZE9mVmlldyAqPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUjsgLy8vXG5cbiAgICBjb25zdCB7IHpGYXIgPSBERUZBVUxUX1pfRkFSLCB6TmVhciA9IERFRkFVTFRfWl9ORUFSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDYW1lcmEiLCJ6RmFyIiwiek5lYXIiLCJmaWVsZE9mVmlldyIsImdldFpGYXIiLCJnZXRaTmVhciIsImdldEZpZWxkT2ZWaWV3IiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiREVGQVVMVF9GSUVMRF9PRl9WSUVXIiwiREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIiLCJERUZBVUxUX1pfRkFSIiwiREVGQVVMVF9aX05FQVIiLCJjYW1lcmEiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzhEQUxEO3lCQUUwQjt3QkFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFBLEFBQU1BLHVCQUFOO2NBQU1BOytCQUFBQTthQUFBQSxPQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVztnQ0FEakJIOzs7UUFJakIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxXQUFXLEdBQUdBOzs7a0JBTkZIOztZQVNuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLEtBQUssRUFBRUMsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtnQkFBRDtvQkFNNUNDO2dCQUxmLDhCQUE4Q0YsV0FBeENOLGFBQUFBLG1EQUFjUywrQkFBcUI7Z0JBRXpDVCxlQUFlVSx3Q0FBNkIsRUFBRSxHQUFHO2dCQUVqRCx1QkFBeURKLFdBQWpEUixNQUFBQSxxQ0FBT2EsdUJBQWEseUNBQTZCTCxXQUEzQlAsT0FBQUEsdUNBQVFhLHdCQUFjLHNCQUM5Q0MsU0FBU0wsQ0FBQUEsV0FBQUEsZ0JBQU8sRUFBQ0osY0FBYyxDQUF0QkksTUFBQUEsVUFBQUE7b0JBQXVCSDtvQkFBT0M7b0JBQVlSO29CQUFNQztvQkFBT0M7aUJBQW1DLENBQTFGUSxPQUFvRSxxQkFBR0Q7Z0JBRXRGLE9BQU9NO1lBQ1Q7OztXQTlCbUJoQjtxQkFBZVcsZ0JBQU8ifQ==