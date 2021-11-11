"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _mask = _interopRequireDefault(require("./mask"));
var _transform = require("../utilities/transform");
var _element1 = require("../utilities/element");
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
                if (this.maskReference !== null) {
                    var _this = this;
                    var mask1 = masks.find(function(mask) {
                        var reference = mask.getReference();
                        if (reference === _this.maskReference) {
                            return true;
                        }
                    }) || null; ///
                    if (mask1 !== null) {
                        var element = this; ///
                        mask1.maskElement(element, marginOfError);
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
                var childElements = properties.childElements, _maskReference = properties.maskReference, maskReference = _maskReference === void 0 ? null : _maskReference, _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations, _position = properties.position, position = _position === void 0 ? null : _position, transform = (0, _transform).composeTransform(scale, rotations, position), facets = [], masks = (0, _element1).elementsFromChildElements(childElements, _mask.default), canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
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
exports.default = CanvasElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuXG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXNrUmVmZXJlbmNlID0gbWFza1JlZmVyZW5jZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2tzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tzO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaWYgKHRoaXMubWFza1JlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFzayA9IG1hc2tzLmZpbmQoKG1hc2spID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlID09PSB0aGlzLm1hc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpKTtcbiAgfVxuXG4gIG1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBtYXNrcyA9IFsgLi4ubWFza3MsIC4uLnRoaXMubWFza3MgXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICB0aGlzLmFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBtYXNrUmVmZXJlbmNlID0gbnVsbCwgc2NhbGUgPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbiksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNhbnZhc0VsZW1lbnQiLCJtYXNrUmVmZXJlbmNlIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFza3MiLCJnZXRNYXNrUmVmZXJlbmNlIiwiZ2V0VHJhbnNmb3JtIiwiZ2V0RmFjZXRzIiwiZ2V0TWFza3MiLCJzZXRGYWNldHMiLCJhcHBseU1hc2siLCJtYXJnaW5PZkVycm9yIiwibWFzayIsImZpbmQiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJhcHBseVRyYW5zZm9ybSIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImZhY2V0IiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlRmFjZXRzIiwibWFza0ZhY2V0cyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50Iiwic2NhbGUiLCJyb3RhdGlvbnMiLCJwb3NpdGlvbiIsImNhbnZhc0VsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBWSxDQUFaLFFBQVk7QUFFZixHQUFRLENBQVIsS0FBUTtBQUVRLEdBQXdCLENBQXhCLFVBQXdCO0FBQ2YsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0NBLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRkEsYUFBYTs4QkFBYkEsYUFBYTthQUFiQSxhQUFhLENBQ3BCQyxhQUFhLEVB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