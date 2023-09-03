"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Mask;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _maskingFacet = /*#__PURE__*/ _interop_require_default(require("../primitive/maskingFacet"));
var _array = require("../utilities/array");
var _transform = require("../utilities/transform");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var Mask = /*#__PURE__*/ function(Element) {
    _inherits(Mask, Element);
    var _super = _create_super(Mask);
    function Mask(reference, transform) {
        _class_call_check(this, Mask);
        var _this;
        _this = _super.call(this);
        _this.reference = reference;
        _this.transform = transform;
        return _this;
    }
    _create_class(Mask, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getTransform",
            value: function getTransform() {
                return this.transform;
            }
        },
        {
            key: "retrieveMaskingFacets",
            value: function retrieveMaskingFacets() {
                var childElements = this.getChildElements(), facets = retrieveFacets(childElements), maskingFacets = facets.map(function(facet) {
                    var maskingFacet = _maskingFacet.default.fromFacet(facet);
                    return maskingFacet;
                });
                return maskingFacets;
            }
        },
        {
            key: "maskElement",
            value: function maskElement1(element, marginOfError) {
                var maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
                maskElement(element, maskingFacets, marginOfError);
                childElements.forEach(function(childElement) {
                    maskElement(childElement, maskingFacets, marginOfError);
                });
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                var childElements = this.getChildElements();
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
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    childElement.maskFacets(masks, marginOfError);
                });
                this.applyTransform(this.transform); ///
            }
        },
        {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {}
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var reference = properties.reference, _properties_scale = properties.scale, scale = _properties_scale === void 0 ? null : _properties_scale, _properties_position = properties.position, position = _properties_position === void 0 ? null : _properties_position, _properties_rotations = properties.rotations, rotations = _properties_rotations === void 0 ? null : _properties_rotations, transform = (0, _transform.composeTransform)(scale, position, rotations), mask = _element.default.fromProperties(Mask, properties, reference, transform);
                return mask;
            }
        }
    ]);
    return Mask;
}(_wrap_native_super(_element.default));
function retrieveFacets(childElements) {
    var facets = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    childElements.forEach(function(childElement) {
        var element = childElement, elementFacets = element.getFacets(), _$childElements = element.getChildElements();
        (0, _array.push)(facets, elementFacets);
        retrieveFacets(_$childElements, facets);
    });
    return facets;
}
function maskElement(element, maskingFacets, marginOfError) {
    var facets = element.getFacets();
    maskingFacets.forEach(function(maskingFacet) {
        var unmaskedFacets = [];
        facets.forEach(function(facet) {
            maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
        });
        facets = unmaskedFacets; ///
    });
    element.setFacets(facets);
    var childElements = element.getChildElements();
    childElements.forEach(function(childElement) {
        var _$element = childElement; ///
        maskElement(_$element, maskingFacets, marginOfError);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQge2NvbXBvc2VUcmFuc2Zvcm19IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge31cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBzY2FsZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCByZWZlcmVuY2UsIHRyYW5zZm9ybSk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIk1hc2siLCJyZWZlcmVuY2UiLCJ0cmFuc2Zvcm0iLCJnZXRSZWZlcmVuY2UiLCJnZXRUcmFuc2Zvcm0iLCJyZXRyaWV2ZU1hc2tpbmdGYWNldHMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZhY2V0cyIsInJldHJpZXZlRmFjZXRzIiwibWFza2luZ0ZhY2V0cyIsIm1hcCIsImZhY2V0IiwibWFza2luZ0ZhY2V0IiwiTWFza2luZ0ZhY2V0IiwiZnJvbUZhY2V0IiwibWFza0VsZW1lbnQiLCJlbGVtZW50IiwibWFyZ2luT2ZFcnJvciIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybSIsImNyZWF0ZUZhY2V0cyIsIm1hc2tGYWNldHMiLCJtYXNrcyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwic2NhbGUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJtYXNrIiwiRWxlbWVudCIsImVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJwdXNoIiwidW5tYXNrZWRGYWNldHMiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzhEQU5EO21FQUNLO3FCQUVKO3lCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHFCQTRFbEIsQUE1RVk7Y0FBTUE7K0JBQUFBO2FBQUFBLEtBQ1BDLFNBQVMsRUFBRUMsU0FBUztnQ0FEYkY7OztRQUlqQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFNBQVMsR0FBR0E7OztrQkFMQUY7O1lBUW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxTQUFTQyxlQUFlSCxnQkFDeEJJLGdCQUFnQkYsT0FBT0csR0FBRyxDQUFDLFNBQUNDO29CQUMxQixJQUFNQyxlQUFlQyxxQkFBWSxDQUFDQyxTQUFTLENBQUNIO29CQUU1QyxPQUFPQztnQkFDVDtnQkFFTixPQUFPSDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGFBQVlDLE9BQU8sRUFBRUMsYUFBYTtnQkFDaEMsSUFB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