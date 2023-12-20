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
var _mask = /*#__PURE__*/ _interop_require_default(require("./mask"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _transform = require("../utilities/transform");
var _element1 = require("../utilities/element");
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
var CanvasElement = /*#__PURE__*/ function(Element) {
    _inherits(CanvasElement, Element);
    var _super = _create_super(CanvasElement);
    function CanvasElement(maskReference, transform, facets, masks) {
        _class_call_check(this, CanvasElement);
        var _this;
        _this = _super.call(this);
        _this.maskReference = maskReference;
        _this.transform = transform;
        _this.facets = facets;
        _this.masks = masks;
        return _this;
    }
    _create_class(CanvasElement, [
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
                masks = _to_consumable_array(masks).concat(_to_consumable_array(this.masks)); ///
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
                ].concat(_to_consumable_array(remainingArguments)));
                return canvasElement;
            }
        }
    ]);
    return CanvasElement;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWFza1JlZmVyZW5jZSA9IG1hc2tSZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrcyA9IG1hc2tzO1xuICB9XG5cbiAgZ2V0TWFza1JlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrcztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGlmICh0aGlzLm1hc2tSZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hc2sgPSBtYXNrcy5maW5kKChtYXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG1hc2suZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gdGhpcy5tYXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgICBpZiAobWFzayAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbWFza3MgPSBbIC4uLm1hc2tzLCAuLi50aGlzLm1hc2tzIF07IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICB0aGlzLmFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIHNjYWxlID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBtYXNrUmVmZXJlbmNlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsIm1hc2tSZWZlcmVuY2UiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrcyIsImdldE1hc2tSZWZlcmVuY2UiLCJnZXRUcmFuc2Zvcm0iLCJnZXRGYWNldHMiLCJnZXRNYXNrcyIsInNldEZhY2V0cyIsImFwcGx5TWFzayIsIm1hcmdpbk9mRXJyb3IiLCJtYXNrIiwiZmluZCIsInJlZmVyZW5jZSIsImdldFJlZmVyZW5jZSIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImFwcGx5VHJhbnNmb3JtIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiZmFjZXQiLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJtYXNrRmFjZXRzIiwiYWRkRmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJmcm9tUHJvcGVydGllcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY29tcG9zZVRyYW5zZm9ybSIsImVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMiLCJNYXNrIiwiY2FudmFzRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7OERBQ0c7eUJBRWE7d0JBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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