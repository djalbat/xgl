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
var Camera = /*#__PURE__*/ function(Element) {
    _inherits(Camera, Element);
    function Camera(zFar, zNear, fieldOfView, magnification) {
        _classCallCheck(this, Camera);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this));
        _this.zFar = zFar;
        _this.zNear = zNear;
        _this.fieldOfView = fieldOfView;
        _this.magnification = magnification;
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
            key: "getMagnification",
            value: function getMagnification() {
                return this.magnification;
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.zFar = this.zFar * magnification;
                this.zNear = this.zNear * magnification;
                this.magnification = magnification;
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
                var _zFar = properties.zFar, zFar = _zFar === void 0 ? _defaults.DEFAULT_Z_FAR : _zFar, _zNear = properties.zNear, zNear = _zNear === void 0 ? _defaults.DEFAULT_Z_NEAR : _zNear, magnification = null, camera = (_Element = _element.default).fromProperties.apply(_Element, [
                    Class,
                    properties,
                    zFar,
                    zNear,
                    fieldOfView,
                    magnification
                ].concat(_toConsumableArray(remainingArguments)));
                return camera;
            }
        }
    ]);
    return Camera;
}(_wrapNativeSuper(_element.default));
exports.default = Camera;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIiLCJERUZBVUxUX1pfRkFSIiwiREVGQVVMVF9aX05FQVIiLCJERUZBVUxUX0ZJRUxEX09GX1ZJRVciLCJERUZBVUxUX01BR05JRklDQVRJT04iLCJDYW1lcmEiLCJjb25zdHJ1Y3RvciIsInpGYXIiLCJ6TmVhciIsImZpZWxkT2ZWaWV3IiwibWFnbmlmaWNhdGlvbiIsImdldFpGYXIiLCJnZXRaTmVhciIsImdldEZpZWxkT2ZWaWV3IiwiZ2V0TWFnbmlmaWNhdGlvbiIsIm1hZ25pZnkiLCJmcm9tUHJvcGVydGllcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbWVyYSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFUSxHQUFZLENBQVosUUFBWTtBQUVjLEdBQWMsQ0FBZCxVQUFjO0FBQ2dDLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQ3RGLFFBQU87SUF4Q0wsTUFBTSxpQkFBWixRQUFRO2NBQUYsTUFBTTthQUFOLE1BQU0sQ0FDYixJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxhQUFhOzhCQURoQyxNQUFNOztpRUFBTixNQUFNO2NBSWxCLElBQUksR0FBRyxJQUFJO2NBQ1gsS0FBSyxHQUFHLEtBQUs7Y0FDYixXQUFXLEdBQUcsV0FBVztjQUN6QixhQUFhLEdBQUcsYUFBYTs7O2lCQVBqQixNQUFNOztZQVV6QixHQUFPLEVBQVAsQ0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2xCLENBQUM7OztZQUVELEdBQVEsRUFBUixDQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDbkIsQ0FBQzs7O1lBRUQsR0FBYyxFQUFkLENBQWM7bUJBQWQsUUFBUSxDQUFSLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDekIsQ0FBQzs7O1lBRUQsR0FBZ0IsRUFBaEIsQ0FBZ0I7bUJBQWhCLFFBQVEsQ0FBUixnQkFBZ0IsR0FBRyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDM0IsQ0FBQzs7O1lBRUQsR0FBTyxFQUFQLENBQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWE7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhO2dCQUV2QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWE7WUFDcEMsQ0FBQzs7OztZQUVNLEdBQWMsRUFBZCxDQUFjO21CQUFyQixRQUFRLENBQUQsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQXlCLENBQUM7Z0JBQXhCLEdBQUcsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztvQkFBRSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7Z0JBQUQsQ0FBQztnQkFDNUQsR0FBRyxnQkFBMkMsVUFBVSxDQUFsRCxXQUFXLEVBQVgsV0FBVyw2QkFwQ3VFLFNBQWE7Z0JBc0NyRyxXQUFXLElBdkMrQixVQUFjLCtCQXVDVixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRWpELEdBQUssU0FBb0QsVUFBVSxDQUEzRCxJQUFJLEVBQUosSUFBSSxzQkF4QzRFLFNBQWEsaUNBd0M1QyxVQUFVLENBQXJDLEtBQUssRUFBTCxLQUFLLHVCQXhDcUQsU0FBYSwwQkF5Qy9GLGFBQWEsR0FBRyxJQUFJLEVBQ3BCLE1BQU0sSUFBRyxRQUFPLEdBN0NOLFFBQVksVUE2Q0wsY0FBYyxDQUF0QixLQUF5RyxDQUF6RyxRQUFPLEVBQVAsQ0FBQztvQkFBc0IsS0FBSztvQkFBRSxVQUFVO29CQUFFLElBQUk7b0JBQUUsS0FBSztvQkFBRSxXQUFXO29CQUFFLGFBQWE7Z0JBQXVCLENBQUMsQ0FBekcsTUFBeUcsb0JBQW5CLGtCQUFrQjtnQkFFdkgsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7V0EzQ2tCLE1BQU07bUJBTFAsUUFBWTtrQkFLWCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9aX0ZBUiwgREVGQVVMVF9aX05FQVIsIERFRkFVTFRfRklFTERfT0ZfVklFVywgREVGQVVMVF9NQUdOSUZJQ0FUSU9OIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIG1hZ25pZmljYXRpb24pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgdGhpcy5maWVsZE9mVmlldyA9IGZpZWxkT2ZWaWV3O1xuICAgIHRoaXMubWFnbmlmaWNhdGlvbiA9IG1hZ25pZmljYXRpb247XG4gIH1cblxuICBnZXRaRmFyKCkge1xuICAgIHJldHVybiB0aGlzLnpGYXI7XG4gIH1cblxuICBnZXRaTmVhcigpIHtcbiAgICByZXR1cm4gdGhpcy56TmVhcjtcbiAgfVxuXG4gIGdldEZpZWxkT2ZWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgZ2V0TWFnbmlmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWduaWZpY2F0aW9uO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy56RmFyID0gdGhpcy56RmFyICogbWFnbmlmaWNhdGlvbjtcbiAgICB0aGlzLnpOZWFyID0gdGhpcy56TmVhciAqIG1hZ25pZmljYXRpb247XG5cbiAgICB0aGlzLm1hZ25pZmljYXRpb24gPSBtYWduaWZpY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgeyBmaWVsZE9mVmlldyA9IERFRkFVTFRfRklFTERfT0ZfVklFVyB9ID0gcHJvcGVydGllcztcblxuICAgIGZpZWxkT2ZWaWV3ICo9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSOyAvLy9cblxuICAgIGNvbnN0IHsgekZhciA9IERFRkFVTFRfWl9GQVIsIHpOZWFyID0gREVGQVVMVF9aX05FQVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFnbmlmaWNhdGlvbiA9IG51bGwsXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBtYWduaWZpY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuIl19