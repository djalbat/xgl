"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _maskingFacet = _interopRequireDefault(require("../primitive/maskingFacet"));
var _array = require("../utilities/array");
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
var Mask = function(Element1) {
    _inherits(Mask, _element.default);
    function Mask(hidden) {
        _classCallCheck(this, Mask);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this));
        _this.hidden = hidden;
        return _this;
    }
    _createClass(Mask, [
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
            value: function initialise() {
                var childElements = this.getChildElements();
                childElements.forEach((function(childElement) {
                    return childElement.createFacets(this.hidden);
                }).bind(this));
                childElements.forEach(function(childElement) {
                    return childElement.amendFacets();
                });
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, mask = _element.default.fromProperties(Mask, properties, hidden);
                mask.initialise();
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
        _array.push(facets, elementFacets);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFUSxRQUFZO0lBQ1AsYUFBMkI7SUFFL0IsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEIsSUFBSSxZQUFTLFFBQU87Y0FBcEIsSUFBSSxFQUxMLFFBQVk7YUFLWCxJQUFJLENBQ1gsTUFBTTs4QkFEQyxJQUFJOztpRUFBSixJQUFJO2NBSWhCLE1BQU0sR0FBRyxNQUFNOzs7aUJBSkgsSUFBSTs7WUFPdkIsR0FBcUIsR0FBckIscUJBQXFCOzRCQUFyQixxQkFBcUI7b0JBQ2IsYUFBYSxRQUFRLGdCQUFnQixJQUNyQyxNQUFNLEdBQUcsY0FBYyxDQUFDLGFBQWEsR0FDckMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLFVBQUUsS0FBSzt3QkFDekIsWUFBWSxHQWZMLGFBQTJCLFNBZU4sU0FBUyxDQUFDLEtBQUs7MkJBRTFDLFlBQVk7O3VCQUdwQixhQUFhOzs7O1lBR3RCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFlBQVcsQ0FBQyxPQUFPO29CQUNYLGFBQWEsUUFBUSxxQkFBcUIsSUFDMUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0I7Z0JBRTlDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsYUFBYTtnQkFFbEMsYUFBYSxDQUFDLE9BQU8sVUFBRSxZQUFZOzJCQUFLLFdBQVcsQ0FBQyxZQUFZLEVBQUUsYUFBYTs7Ozs7WUFHakYsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtvQkFDRixhQUFhLFFBQVEsZ0JBQWdCO2dCQUUzQyxhQUFhLENBQUMsT0FBTyxXQUFFLFlBQVk7MkJBQUssWUFBWSxDQUFDLFlBQVksTUFBTSxNQUFNOztnQkFFN0UsYUFBYSxDQUFDLE9BQU8sVUFBRSxZQUFZOzJCQUFLLFlBQVksQ0FBQyxXQUFXOzs7Ozs7WUFHM0QsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFVBQVU7OEJBQ0gsVUFBVSxDQUE3QixNQUFNLEVBQU4sTUFBTSx3QkFBRyxLQUFLLFlBQ2hCLElBQUksR0EzQ00sUUFBWSxTQTJDUCxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNO2dCQUU1RCxJQUFJLENBQUMsVUFBVTt1QkFFUixJQUFJOzs7O1dBMUNNLElBQUk7bUJBTEwsUUFBWTtrQkFLWCxJQUFJO1NBOENoQixjQUFjLENBQUMsYUFBYSxFQUFFLEtBQVc7UUFBWCxNQUFNLEdBQU4sS0FBVyxtQkFBWCxLQUFXO0lBQ2hELGFBQWEsQ0FBQyxPQUFPLFVBQUUsWUFBWTtZQUMzQixPQUFPLEdBQUcsWUFBWSxFQUN0QixhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFDakMsY0FBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0I7UUFwRDdCLE1BQW9CLE1Bc0RoQyxNQUFNLEVBQUUsYUFBYTtRQUUxQixjQUFjLENBQUMsY0FBYSxFQUFFLE1BQU07O1dBRy9CLE1BQU07O1NBR04sV0FBVyxDQUFDLE9BQU8sRUFBRSxhQUFhO1FBQ3JDLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUztJQUU5QixhQUFhLENBQUMsT0FBTyxVQUFFLFlBQVk7WUFDM0IsY0FBYztRQUVwQixNQUFNLENBQUMsT0FBTyxVQUFFLEtBQUs7bUJBQUssWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYzs7UUFFdEUsTUFBTSxHQUFHLGNBQWMsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O0lBRy9CLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtRQUVsQixhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQjtJQUU5QyxhQUFhLENBQUMsT0FBTyxVQUFFLFlBQVk7WUFDM0IsUUFBTyxHQUFHLFlBQVksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFakMsV0FBVyxDQUFDLFFBQU8sRUFBRSxhQUFhIn0=