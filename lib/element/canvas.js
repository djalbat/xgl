"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _vector = require("../maths/vector");
var _transform = require("../utilities/transform");
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
var _Element;
var CanvasElement = /*#__PURE__*/ function(Element1) {
    _inherits(CanvasElement, Element1);
    function CanvasElement(maskReference, transform, facets, hidden) {
        _classCallCheck(this, CanvasElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasElement).call(this));
        _this.maskReference = maskReference;
        _this.transform = transform;
        _this.facets = facets;
        _this.hidden = hidden;
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
            key: "isHidden",
            value: function isHidden() {
                return this.hidden;
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
            value: function applyMask(maskReference, masks, marginOfError) {
                var mask = this.findMask(maskReference, masks);
                if (mask !== null) {
                    var element = this; ///
                    mask.maskElement(element, marginOfError);
                }
            }
        },
        {
            key: "findMask",
            value: function findMask(maskReference, masks) {
                var mask = masks.find(function(mask1) {
                    var reference = mask1.getReference();
                    if (reference === maskReference) {
                        return true;
                    }
                }) || null; ///
                return mask;
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
            value: function createFacets(hidden, marginOfError) {
                var childElements = this.getChildElements();
                hidden = hidden || this.hidden; ///
                childElements.forEach(function(childElement) {
                    return childElement.createFacets(hidden, marginOfError);
                });
                return hidden;
            }
        },
        {
            key: "amendFacets",
            value: function amendFacets(masks, marginOfError) {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.amendFacets(masks, marginOfError);
                });
                this.applyTransform(this.transform);
                this.applyMask(this.maskReference, masks, marginOfError);
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
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                var properties = this.getProperties(), childElements = this.getChildElements(), _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations;
                var _position = properties.position, position = _position === void 0 ? null : _position;
                if (position !== null) {
                    position = (0, _vector).scale3(position, magnification);
                }
                this.transform = (0, _transform).composeTransform(scale, rotations, position);
                childElements.forEach(function(childElement) {
                    return childElement.magnify(magnification);
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
                var _maskReference = properties.maskReference, maskReference = _maskReference === void 0 ? null : _maskReference, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, transform = null, facets = [], canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
                    Class,
                    properties,
                    maskReference,
                    transform,
                    facets,
                    hidden
                ].concat(_toConsumableArray(remainingArguments)));
                return canvasElement;
            }
        }
    ]);
    return CanvasElement;
}(_wrapNativeSuper(_element.default));
exports.default = CanvasElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hc2tSZWZlcmVuY2UgPSBtYXNrUmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0TWFza1JlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRkZW47XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFza1JlZmVyZW5jZSwgbWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBtYXNrID0gdGhpcy5maW5kTWFzayhtYXNrUmVmZXJlbmNlLCBtYXNrcyk7XG5cbiAgICBpZiAobWFzayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRNYXNrKG1hc2tSZWZlcmVuY2UsIG1hc2tzKSB7XG4gICAgY29uc3QgbWFzayA9IG1hc2tzLmZpbmQoKG1hc2spID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG1hc2suZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2UgPT09IG1hc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgaGlkZGVuID0gaGlkZGVuIHx8IHRoaXMuaGlkZGVuOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIGFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmFwcGx5TWFzayh0aGlzLm1hc2tSZWZlcmVuY2UsIG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICB7IHNjYWxlID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCB9ID0gcHJvcGVydGllcztcblxuICAgIGxldCB7IHBvc2l0aW9uID0gbnVsbCB9ID0gcHJvcGVydGllcztcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBzY2FsZTMocG9zaXRpb24sIG1hZ25pZmljYXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50Lm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG1hc2tSZWZlcmVuY2UgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBudWxsLCAvLy9cbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgbWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFZLENBQVosUUFBWTtBQUVULEdBQWlCLENBQWpCLE9BQWlCO0FBQ1AsR0FBd0IsQ0FBeEIsVUFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRHL0IsUUFBTztJQTFHWixhQUFhO2NBQWIsYUFBYTthQUFiLGFBQWEsQ0FDcEIsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTTs4QkFEakMsYUFBYTs7aUVBQWIsYUFBYTtjQUl6QixhQUFhLEdBQUcsYUFBYTtjQUM3QixTQUFTLEdBQUcsU0FBUztjQUNyQixNQUFNLEdBQUcsTUFBTTtjQUNmLE1BQU0sR0FBRyxNQUFNOzs7aUJBUEgsYUFBYTs7WUFVaEMsR0FBZ0IsR0FBaEIs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