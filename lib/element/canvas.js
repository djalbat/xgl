"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CanvasElement;
    }
});
var _element = /*#__PURE__*/ _interopRequireDefault(require("../element"));
var _mask = /*#__PURE__*/ _interopRequireDefault(require("./mask"));
var _transform = require("../utilities/transform");
var _element1 = require("../utilities/element");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
    "@swc/helpers - typeof";
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
var CanvasElement = /*#__PURE__*/ function(Element) {
    _inherits(CanvasElement, Element);
    var _super = _createSuper(CanvasElement);
    function CanvasElement(maskReference, transform, facets, masks) {
        _classCallCheck(this, CanvasElement);
        var _this;
        _this = _super.call(this);
        _this.maskReference = maskReference;
        _this.transform = transform;
        _this.facets = facets;
        _this.masks = masks;
        return _this;
    }
    _createClass(CanvasElement, [
        {
            key: "getMaskReference",
            value: function getMaskReference() {
                return this.maskReference;
            }
        },
        {
            key: "getTransform",
            value: function getTransform() {
                return this.transform;
            }
        },
        {
            key: "getFacets",
            value: function getFacets() {
                return this.facets;
            }
        },
        {
            key: "getMasks",
            value: function getMasks() {
                return this.masks;
            }
        },
        {
            key: "setFacets",
            value: function setFacets(facets) {
                this.facets = facets;
            }
        },
        {
            key: "applyMask",
            value: function applyMask(masks, marginOfError) {
                var _this = this;
                if (this.maskReference !== null) {
                    var mask = masks.find(function(mask) {
                        var reference = mask.getReference();
                        if (reference === _this.maskReference) {
                            return true;
                        }
                    }) || null; ///
                    if (mask !== null) {
                        var element = this; ///
                        mask.maskElement(element, marginOfError);
                    }
                }
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                var childElements = this.getChildElements();
                this.facets.forEach(function(facet) {
                    return facet.applyTransform(transform);
                });
                childElements.forEach(function(childElement) {
                    return childElement.applyTransform(transform);
                });
            }
        },
        {
            key: "createFacets",
            value: function createFacets(marginOfError) {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.createFacets(marginOfError);
                });
            }
        },
        {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
                masks = _toConsumableArray(masks).concat(_toConsumableArray(this.masks)); ///
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.maskFacets(masks, marginOfError);
                });
                this.applyTransform(this.transform); ///
                this.applyMask(masks, marginOfError);
            }
        },
        {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.addFacets(colourRenderer, textureRenderer);
                });
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
                var childElements = properties.childElements, _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _position = properties.position, position = _position === void 0 ? null : _position, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations, _maskReference = properties.maskReference, maskReference = _maskReference === void 0 ? null : _maskReference, transform = (0, _transform.composeTransform)(scale, position, rotations), facets = [], masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default), canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
                    Class,
                    properties,
                    maskReference,
                    transform,
                    facets,
                    masks
                ].concat(_toConsumableArray(remainingArguments)));
                return canvasElement;
            }
        }
    ]);
    return CanvasElement;
}(_wrapNativeSuper(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuXG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXNrUmVmZXJlbmNlID0gbWFza1JlZmVyZW5jZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2tzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tzO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaWYgKHRoaXMubWFza1JlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFzayA9IG1hc2tzLmZpbmQoKG1hc2spID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlID09PSB0aGlzLm1hc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpKTtcbiAgfVxuXG4gIG1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBtYXNrcyA9IFsgLi4ubWFza3MsIC4uLnRoaXMubWFza3MgXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICB0aGlzLmFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBzY2FsZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCwgbWFza1JlZmVyZW5jZSA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwibWFza1JlZmVyZW5jZSIsInRyYW5zZm9ybSIsImZhY2V0cyIsIm1hc2tzIiwiZ2V0TWFza1JlZmVyZW5jZSIsImdldFRyYW5zZm9ybSIsImdldEZhY2V0cyIsImdldE1hc2tzIiwic2V0RmFjZXRzIiwiYXBwbHlNYXNrIiwibWFyZ2luT2ZFcnJvciIsIm1hc2siLCJmaW5kIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiZWxlbWVudCIsIm1hc2tFbGVtZW50IiwiYXBwbHlUcmFuc2Zvcm0iLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJmYWNldCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZUZhY2V0cyIsIm1hc2tGYWNldHMiLCJhZGRGYWNldHMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImZyb21Qcm9wZXJ0aWVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsInNjYWxlIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjb21wb3NlVHJhbnNmb3JtIiwiZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyIsIk1hc2siLCJjYW52YXNFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsYUFBYTs7OzREQVBkLFlBQVk7eURBRWYsUUFBUTt5QkFFUSx3QkFBd0I7d0JBQ2Ysc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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