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
                    return maskElement(childElement, maskingFacets, marginOfError);
                });
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                var childElements = this.getChildElements();
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
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.maskFacets(masks, marginOfError);
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
                var reference = properties.reference, _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _position = properties.position, position = _position === void 0 ? null : _position, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations, transform = (0, _transform.composeTransform)(scale, position, rotations), mask = _element.default.fromProperties(Mask, properties, reference, transform);
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
            return maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQge2NvbXBvc2VUcmFuc2Zvcm19IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTsgIC8vL1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHt9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgcmVmZXJlbmNlLCB0cmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiTWFzayIsInJlZmVyZW5jZSIsInRyYW5zZm9ybSIsImdldFJlZmVyZW5jZSIsImdldFRyYW5zZm9ybSIsInJldHJpZXZlTWFza2luZ0ZhY2V0cyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmV0cmlldmVGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJNYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJtYXNrRWxlbWVudCIsImVsZW1lbnQiLCJtYXJnaW5PZkVycm9yIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImFwcGx5VHJhbnNmb3JtIiwiY3JlYXRlRmFjZXRzIiwibWFza0ZhY2V0cyIsIm1hc2tzIiwiYWRkRmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY29tcG9zZVRyYW5zZm9ybSIsIm1hc2siLCJFbGVtZW50IiwiZWxlbWVudEZhY2V0cyIsImdldEZhY2V0cyIsInB1c2giLCJ1bm1hc2tlZEZhY2V0cyIsIm1hc2tGYWNldCIsInNldEZhY2V0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLElBQUk7Ozs0REFOTCxZQUFZO2lFQUNQLDJCQUEyQjtxQkFFL0Isb0JBQW9CO3lCQUNWLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLElBQUksaUJBb0V0QixBQXBFWTs7O2FBQU1BLElBQUksQ0FDWEMsU0FBUyxFQUFFQyxTQUFTOzs7a0NBQ3RCO1FBRVIsTUFBS0QsU0FBUyxHQUFHQSxTQUFTLENBQUM7UUFDM0IsTUFBS0MsU0FBUyxHQUFHQSxTQUFTLENBQUM7Ozs7O1lBRzdCQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksR0FBRztnQkFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDO2FBQ3ZCOzs7WUFFREcsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLEdBQUc7Z0JBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVMsQ0FBQzthQUN2Qjs7O1lBRURHLEdBQXFCLEVBQXJCQSx1QkFBcUI7bUJBQXJCQSxTQUFBQSxxQkFBcUIsR0FBRztnQkFDdEIsSUFBTUMsYUFBYSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsRUFDdkNDLE1BQU0sR0FBR0MsY0FBYyxDQUFDSCxhQUFhLENBQUMsRUFDdENJLGFBQWEsR0FBR0YsTUFBTSxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO29CQUNwQyxJQUFNQyxZQUFZLEdBQUdDLGFBQVksUUFBQSxD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