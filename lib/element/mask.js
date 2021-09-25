"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _maskingFacet = _interopRequireDefault(require("../primitive/maskingFacet"));
var _array = require("../utilities/array");
var _defaults = require("../defaults");
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
var Mask = /*#__PURE__*/ function(Element) {
    _inherits(Mask, Element);
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
            value: function maskElement1(element, marginOfError) {
                var maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
                maskElement(element, maskingFacets, marginOfError);
                childElements.forEach(function(childElement) {
                    return maskElement(childElement, maskingFacets, marginOfError);
                });
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.prepare();
                });
            }
        },
        {
            key: "initialise",
            value: function initialise(masks, marginOfError) {
                var _this = this;
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.createFacets(_this.hidden, marginOfError);
                });
                childElements.forEach(function(childElement) {
                    return childElement.amendFacets(masks, marginOfError);
                });
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var reference = properties.reference, _hidden = properties.hidden, hidden = _hidden === void 0 ? _defaults.DEFAULT_HIDDEN : _hidden, mask = _element.default.fromProperties(Mask, properties, hidden, reference);
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
        var element = childElement, elementFacets = element.getFacets(), childElements = element.getChildElements();
        (0, _array).push(facets, elementFacets);
        retrieveFacets(childElements, facets);
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
        var element = childElement; ///
        maskElement(element, maskingFacets, marginOfError);
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsIk1hc2tpbmdGYWNldCIsInB1c2giLCJERUZBVUxUX0hJRERFTiIsIk1hc2siLCJjb25zdHJ1Y3RvciIsImhpZGRlbiIsInJlZmVyZW5jZSIsImdldEhpZGRlbiIsImdldFJlZmVyZW5jZSIsInJldHJpZXZlTWFza2luZ0ZhY2V0cyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmV0cmlldmVGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJtYXNrRWxlbWVudCIsImVsZW1lbnQiLCJtYXJnaW5PZkVycm9yIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsInByZXBhcmUiLCJpbml0aWFsaXNlIiwibWFza3MiLCJjcmVhdGVGYWNldHMiLCJhbWVuZEZhY2V0cyIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIm1hc2siLCJlbGVtZW50RmFjZXRzIiwiZ2V0RmFjZXRzIiwidW5tYXNrZWRGYWNldHMiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBWSxDQUFaLFFBQVk7QUFDUCxHQUEyQixDQUEzQixhQUEyQjtBQUUvQixHQUFvQixDQUFwQixNQUFvQjtBQUNWLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLElBQUksaUJBQVYsUUFBUTtjQUFGLElBQUk7YUFBSixJQUFJLENBQ1gsTUFBTSxFQUFFLFNBQVM7OEJBRFYsSUFBSTs7aUVBQUosSUFBSTtjQUloQixNQUFNLEdBQUcsTUFBTTtjQUNm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LGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUNqQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQjtZQWxFN0IsTUFBb0IsT0FvRWhDLE1BQU0sRUFBRSxhQUFhO1FBRTFCLGNBQWMsQ0FBQyxhQUFhLEVBQUUsTUFBTTtJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU07QUFDZixDQUFDO1NBRVEsV0FBVyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUM7SUFDM0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUztJQUU5QixhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxZQUFZLEVBQUssQ0FBQztRQUN2QyxHQUFLLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUV6QixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxLQUFLO1lBQUssTUFBTSxDQUFOLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxhQUFhOztRQUVyRixNQUFNLEdBQUcsY0FBYyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUMvQixDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0lBRXhCLEdBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQjtJQUU5QyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxZQUFZLEVBQUssQ0FBQztRQUN2QyxHQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFakMsV0FBVyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYTtJQUNuRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IE1hc2tpbmdGYWNldCBmcm9tIFwiLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgREVGQVVMVF9ISURERU4gfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4sIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRkZW47XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpKTtcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5wcmVwYXJlKCkpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBoaWRkZW4gPSBERUZBVUxUX0hJRERFTiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCBoaWRkZW4sIHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9KTtcbn1cbiJdfQ==