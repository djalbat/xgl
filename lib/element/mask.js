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
            key: "magnify",
            value: function magnify(magnification) {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.magnify(magnification);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsIk1hc2tpbmdGYWNldCIsInB1c2giLCJERUZBVUxUX0hJRERFTiIsIk1hc2siLCJjb25zdHJ1Y3RvciIsImhpZGRlbiIsInJlZmVyZW5jZSIsImdldEhpZGRlbiIsImdldFJlZmVyZW5jZSIsInJldHJpZXZlTWFza2luZ0ZhY2V0cyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmV0cmlldmVGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJtYXNrRWxlbWVudCIsImVsZW1lbnQiLCJtYXJnaW5PZkVycm9yIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsIm1hZ25pZnkiLCJtYWduaWZpY2F0aW9uIiwiaW5pdGlhbGlzZSIsIm1hc2tzIiwiY3JlYXRlRmFjZXRzIiwiYW1lbmRGYWNldHMiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJtYXNrIiwiZWxlbWVudEZhY2V0cyIsImdldEZhY2V0cyIsInVubWFza2VkRmFjZXRzIiwibWFza0ZhY2V0Iiwic2V0RmFjZXRzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVRLEdBQVksQ0FBWixRQUFZO0FBQ1AsR0FBMkIsQ0FBM0IsYUFBMkI7QUFFL0IsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDVixHQUFhLENBQWIsU0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixJQUFJLGlCQUFWLFFBQVE7Y0FBRixJQUFJO2FBQUosSUFBSSxDQUNYLE1BQU0sRUFBRSxTQUFTOzhCQURWLElBQUk7O2lFQUFKLElBQUk7Y0FJaEIsTUFBTSxHQUFHLE1BQU07Y0FDZixTQUFTLEdBQUcsU0FBUzs7O2lCQUxULElBQUk7O1lBUXZCLEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUQsR0FBWSxHQUFaLFlBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksR0FBRyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN2QixDQUFDOzs7WUFFRCxHQUFxQixHQUFyQixxQkFBcUI7bUJBQXJCLFFBQVEsQ0FBUixxQkFBcUIsR0FBRyxDQUFDO2dCQUN2QixHQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFDckMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxhQUFhLEdBQ3JDLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxLQUFLLEVBQUssQ0FBQztvQkFDckMsR0FBSyxDQUFDLFlBQVksR0F6QkwsYUFBMkIsU0F5Qk4sU0FBUyxDQUFDLEtBQUs7b0JBRWpELE1BQU0sQ0FBQyxZQUFZO2dCQUNyQixDQUFDO2dCQUVQLE1BQU0sQ0FBQyxhQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXO21CQUFYLFFBQVEsQ0FBUixZQUFXLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO2dCQUNuQyxHQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsSUFDMUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0I7Z0JBRTlDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWE7Z0JBRWpELGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLFlBQVk7b0JBQUssTUFBTSxDQUFOLFdBQVcsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWE7O1lBQ2hHLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3RCLEdBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtnQkFFM0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsWUFBWTtvQkFBSyxNQUFNLENBQU4sWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhOztZQUM1RSxDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQzs7Z0JBQ2hDLEdBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjtnQkFFM0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAsWUFBWTtvQkFBSyxNQUFNLENBQU4sWUFBWSxDQUFDLFlBQVksT0FBTSxNQUFNLEVBQUUsYUFBYTs7Z0JBRTVGLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLFlBQVk7b0JBQUssTUFBTSxDQUFOLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGFBQWE7O1lBQ3ZGLENBQUM7Ozs7WUFFTSxHQUFjLEdBQWQsY0FBYzttQkFBckIsUUFBUSxDQUFELGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakMsR0FBSyxDQUFHLFNBQVMsR0FBOEIsVUFBVSxDQUFqRCxTQUFTLFlBQThCLFVBQVUsQ0FBdEMsTUFBTSxFQUFOLE1BQU0sd0JBdERFLFNBQWEsMkJBdURsQyxJQUFJLEdBM0RNLFFBQVksU0EyRFAsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVM7Z0JBRXZFLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7O1dBeERrQixJQUFJO21CQU5MLFFBQVk7a0JBTVgsSUFBSTtTQTJEaEIsY0FBYyxDQUFDLGFBQWEsRUFBRSxLQUFXLEVBQUUsQ0FBQztRQUFkLE1BQU0sR0FBTixLQUFXLGNBQUYsQ0FBQyxDQUFDLEdBQVgsS0FBVztJQUNoRCxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxZQUFZLEVBQUssQ0FBQztRQUN2QyxHQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksRUFDdEIsYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQ2pDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCO1lBbEU3QixNQUFvQixPQW9FaEMsTUFBTSxFQUFFLGFBQWE7UUFFMUIsY0FBYyxDQUFDLGFBQWEsRUFBRSxNQUFNO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTTtBQUNmLENBQUM7U0FFUSxXQUFXLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQztJQUMzRCxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTO0lBRTlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLFlBQVksRUFBSyxDQUFDO1FBQ3ZDLEdBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLEtBQUs7WUFBSyxNQUFNLENBQU4sWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLGFBQWE7O1FBRXJGLE1BQU0sR0FBRyxjQUFjLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBQy9CLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU07SUFFeEIsR0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCO0lBRTlDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFQLFlBQVksRUFBSyxDQUFDO1FBQ3ZDLEdBQUssQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUVqQyxXQUFXLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhO0lBQ25ELENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUZBVUxUX0hJRERFTiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGhpZGRlbiwgcmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0SGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcikpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5tYWduaWZ5KG1hZ25pZmljYXRpb24pKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbiwgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgaGlkZGVuID0gREVGQVVMVF9ISURERU4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuLCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfSk7XG59XG4iXX0=