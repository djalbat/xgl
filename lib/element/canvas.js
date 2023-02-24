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
                    facet.applyTransform(transform);
                });
                childElements.forEach(function(childElement) {
                    childElement.applyTransform(transform);
                });
            }
        },
        {
            key: "createFacets",
            value: function createFacets(marginOfError) {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    childElement.createFacets(marginOfError);
                });
            }
        },
        {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
                masks = _toConsumableArray(masks).concat(_toConsumableArray(this.masks)); ///
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    childElement.maskFacets(masks, marginOfError);
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
                    childElement.addFacets(colourRenderer, textureRenderer);
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
                var childElements = properties.childElements, _properties_scale = properties.scale, scale = _properties_scale === void 0 ? null : _properties_scale, _properties_position = properties.position, position = _properties_position === void 0 ? null : _properties_position, _properties_rotations = properties.rotations, rotations = _properties_rotations === void 0 ? null : _properties_rotations, _properties_maskReference = properties.maskReference, maskReference = _properties_maskReference === void 0 ? null : _properties_maskReference, transform = (0, _transform.composeTransform)(scale, position, rotations), facets = [], masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default), canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuXG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXNrUmVmZXJlbmNlID0gbWFza1JlZmVyZW5jZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2tzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tzO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaWYgKHRoaXMubWFza1JlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFzayA9IG1hc2tzLmZpbmQoKG1hc2spID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlID09PSB0aGlzLm1hc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBtYXNrcyA9IFsgLi4ubWFza3MsIC4uLnRoaXMubWFza3MgXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7ICAvLy9cblxuICAgIHRoaXMuYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwsIG1hc2tSZWZlcmVuY2UgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgbWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsIm1hc2tSZWZlcmVuY2UiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrcyIsImdldE1hc2tSZWZlcmVuY2UiLCJnZXRUcmFuc2Zvcm0iLCJnZXRGYWNldHMiLCJnZXRNYXNrcyIsInNldEZhY2V0cyIsImFwcGx5TWFzayIsIm1hcmdpbk9mRXJyb3IiLCJtYXNrIiwiZmluZCIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImFwcGx5VHJhbnNmb3JtIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiZmFjZXQiLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJtYXNrRmFjZXRzIiwiYWRkRmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJmcm9tUHJvcGVydGllcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY29tcG9zZVRyYW5zZm9ybSIsImVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMiLCJNYXNrIiwiY2FudmFzRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUEQ7eURBRUg7eUJBRWdCO3dCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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