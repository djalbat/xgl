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
var _element = /*#__PURE__*/ _interopRequireDefault(require("../element"));
var _maskingFacet = /*#__PURE__*/ _interopRequireDefault(require("../primitive/maskingFacet"));
var _array = require("../utilities/array");
var _transform = require("../utilities/transform");
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
var _typeof = function(obj) {
    "@swc/helpers - typeof";
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
var Mask = /*#__PURE__*/ function(Element) {
    _inherits(Mask, Element);
    var _super = _createSuper(Mask);
    function Mask(reference, transform) {
        _classCallCheck(this, Mask);
        var _this;
        _this = _super.call(this);
        _this.reference = reference;
        _this.transform = transform;
        return _this;
    }
    _createClass(Mask, [
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
}(_wrapNativeSuper(_element.default));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQge2NvbXBvc2VUcmFuc2Zvcm19IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge31cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBzY2FsZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCByZWZlcmVuY2UsIHRyYW5zZm9ybSk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIk1hc2siLCJyZWZlcmVuY2UiLCJ0cmFuc2Zvcm0iLCJnZXRSZWZlcmVuY2UiLCJnZXRUcmFuc2Zvcm0iLCJyZXRyaWV2ZU1hc2tpbmdGYWNldHMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZhY2V0cyIsInJldHJpZXZlRmFjZXRzIiwibWFza2luZ0ZhY2V0cyIsIm1hcCIsImZhY2V0IiwibWFza2luZ0ZhY2V0IiwiTWFza2luZ0ZhY2V0IiwiZnJvbUZhY2V0IiwibWFza0VsZW1lbnQiLCJlbGVtZW50IiwibWFyZ2luT2ZFcnJvciIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybSIsImNyZWF0ZUZhY2V0cyIsIm1hc2tGYWNldHMiLCJtYXNrcyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwic2NhbGUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJtYXNrIiwiRWxlbWVudCIsImVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJwdXNoIiwidW5tYXNrZWRGYWNldHMiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzREQU5EO2lFQUNLO3FCQUVKO3lCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEscUJBNEVsQixBQTVFWTtjQUFNQTs4QkFBQUE7YUFBQUEsS0FDUEMsU0FBUyxFQUFFQyxTQUFTOzhCQURiRjs7O1FBSWpCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsU0FBUyxHQUFHQTs7O2lCQUxBRjs7WUFRbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWU7Z0JBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCO2dCQUN0QixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLFNBQVNDLGVBQWVILGdCQUN4QkksZ0JBQWdCRixPQUFPRyxHQUFHLENBQUMsU0FBQ0MsT0FBVTtvQkFDcEMsSUFBTUMsZUFBZUMscUJBQVksQ0FBQ0MsU0FBUyxDQUFDSDtvQkFFNUMsT0FBT0M7Z0JBQ1Q7Z0JBRU4sT0FBT0g7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFB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