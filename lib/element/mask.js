"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _maskingFacet = _interopRequireDefault(require("../primitive/maskingFacet"));
var _array = require("../utilities/array");
var _constants = require("../constants");
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
var Mask = /*#__PURE__*/ function(Element1) {
    _inherits(Mask, Element1);
    function Mask(hidden, reference) {
        _classCallCheck(this, Mask);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this));
        _this.hidden = hidden;
        _this.reference = reference;
        return _this;
    }
    _createClass(Mask, [
        {
            key: "getHidden",
            value: function getHidden() {
                return this.hidden;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
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
            value: function maskElement1(element) {
                var maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
                maskElement(element, maskingFacets);
                childElements.forEach(function(childElement) {
                    return maskElement(childElement, maskingFacets);
                });
            }
        },
        {
            key: "initialise",
            value: function initialise(magnification, masks) {
                var childElements = this.getChildElements();
                childElements.forEach((function(childElement) {
                    return childElement.createFacets(this.hidden, magnification);
                }).bind(this));
                childElements.forEach(function(childElement) {
                    return childElement.amendFacets(masks);
                });
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var reference = properties.reference, _hidden = properties.hidden, hidden = _hidden === void 0 ? _constants.DEFAULT_HIDDEN : _hidden, mask = _element.default.fromProperties(Mask, properties, hidden, reference);
                return mask;
            }
        }
    ]);
    return Mask;
}(_wrapNativeSuper(_element.default));
exports.default = Mask;
function retrieveFacets(childElements, param) {
    var facets = param === void 0 ? [] : param;
    childElements.forEach(function(childElement) {
        var element = childElement, elementFacets = element.getFacets(), childElements1 = element.getChildElements();
        (0, _array).push(facets, elementFacets);
        retrieveFacets(childElements1, facets);
    });
    return facets;
}
function maskElement(element, maskingFacets) {
    var facets = element.getFacets();
    maskingFacets.forEach(function(maskingFacet) {
        var unmaskedFacets = [];
        facets.forEach(function(facet) {
            return maskingFacet.maskFacet(facet, unmaskedFacets);
        });
        facets = unmaskedFacets; ///
    });
    element.setFacets(facets);
    var childElements = element.getChildElements();
    childElements.forEach(function(childElement) {
        var element1 = childElement; ///
        maskElement(element1, maskingFacets);
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUZBVUxUX0hJRERFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4sIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRkZW47XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UobWFnbmlmaWNhdGlvbiwgbWFza3MpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbiwgbWFnbmlmaWNhdGlvbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cyhtYXNrcykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgaGlkZGVuID0gREVGQVVMVF9ISURERU4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuLCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFZLENBQVosUUFBWTtBQUNQLEdBQTJCLENBQTNCLGFBQTJCO0FBRS9CLEdBQW9CLENBQXBCLE1BQW9CO0FBQ1YsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7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