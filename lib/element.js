"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var _array = require("./utilities/array");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var Element = /*#__PURE__*/ function() {
    function Element() {
        _classCallCheck(this, Element);
    }
    _createClass(Element, [
        {
            key: "getProperties",
            value: function getProperties() {
                return this.properties;
            }
        },
        {
            key: "getChildElements",
            value: function getChildElements() {
                return this.childElements;
            }
        },
        {
            key: "setProperties",
            value: function setProperties(properties) {
                this.properties = properties;
            }
        },
        {
            key: "setChildElements",
            value: function setChildElements(childElements) {
                this.childElements = childElements;
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var element = _construct(Class, _toConsumableArray(remainingArguments)), childElements = _typeof(element.childElements) === _constants.FUNCTION ? (0, _array).guarantee(element.childElements(properties)) : properties.childElements || [];
                element.setProperties(properties);
                element.setChildElements(childElements);
                return element;
            }
        }
    ]);
    return Element;
}();
exports.default = Element;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJhbnRlZShlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICAgIGVsZW1lbnQuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudHMiLCJzZXRQcm9wZXJ0aWVzIiwic2V0Q2hpbGRFbGVtZW50cyIsImZyb21Qcm9wZXJ0aWVzIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQWEsQ0FBYixVQUFhO0FBRVosR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4QkEsT0FBTyxpQkFBYixRQUFRO2FBQUZBLE9BQU87OEJBQVBBLE9BQU87O2lCQUFQQSxPQUFPOztZQUMxQkMsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUNDLFVBQVU7WUFDeEIsQ0FBQzs7O1lBRURDLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQ0MsYUFBYTtZQUMzQixDQUFDOzs7WUFFREMsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsQ0FBQ0gsVUFBVSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVO1lBQzlCLENBQUM7OztZQUVESSxHQUFnQixFQUFoQkEsQ0FBZ0I7bUJBQWhCQSxRQUFRLENBQVJBLGdCQUFnQixDQUFDRixhQUFhLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDQSxhQUFhLEdBQUdBLGFBQWE7WUFDcEMsQ0FBQzs7OztZQUVNRyxHQUFjLEVBQWRBLENBQWM7bUJBQXJCLFFBQVEsQ0FBREEsY0FBYyxDQUFDQyxLQUFLLEVBQUVOLFVBQVUsRUFBeUIsQ0FBQztnQkFBeEIsR0FBR08sQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQkEsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7b0JBQUVBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO2dCQUM1RCxHQUFLLENBQUNDLE9BQU8sY0FBT0YsS0FBSyxxQkFBSUMsa0JBQWtCLElBQ3pDTCxhQUFhLEdBQUksT0FBNEIsQ0FBckJNLE9BQU8sQ0FBQ04sYUFBYSxNQXZCOUIsVUFBYSxnQkFFWixNQUFtQixZQXNCUE0sT0FBTyxDQUFDTixhQUFhLENBQUNGLFVBQVUsS0FDeENBLFVBQVUsQ0FBQ0UsYUFBYSxJQUFJLENBQUMsQ0FBQztnQkFFeERNLE9BQU8sQ0FBQ0wsYUFBYSxDQUFDSCxVQUFVO2dCQUVoQ1EsT0FBTyxDQUFDSixnQkFBZ0IsQ0FBQ0YsYUFBYTtnQkFFdEMsTUFBTSxDQUFDTSxPQUFPO1lBQ2hCLENBQUM7OztXQTVCa0JWLE9BQU87O2tCQUFQQSxPQUFPIn0=