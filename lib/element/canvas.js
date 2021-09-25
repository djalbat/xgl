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
var CanvasElement = /*#__PURE__*/ function(Element) {
    _inherits(CanvasElement, Element);
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
                var mask = masks.find(function(mask) {
                    var reference = mask.getReference();
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
            key: "prepare",
            value: function prepare() {
                var properties = this.getProperties(), childElements = this.getChildElements(), _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations;
                var _position = properties.position, position = _position === void 0 ? null : _position;
                this.transform = (0, _transform).composeTransform(scale, rotations, position);
                childElements.forEach(function(childElement) {
                    return childElement.prepare();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic2NhbGUzIiwiY29tcG9zZVRyYW5zZm9ybSIsIkNhbnZhc0VsZW1lbnQiLCJjb25zdHJ1Y3RvciIsIm1hc2tSZWZlcmVuY2UiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJoaWRkZW4iLCJnZXRNYXNrUmVmZXJlbmNlIiwiZ2V0VHJhbnNmb3JtIiwiZ2V0RmFjZXRzIiwiaXNIaWRkZW4iLCJzZXRGYWNldHMiLCJhcHBseU1hc2siLCJtYXNrcyIsIm1hcmdpbk9mRXJyb3IiLCJtYXNrIiwiZmluZE1hc2siLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJmaW5kIiwicmVmZXJlbmNlIiwiZ2V0UmVmZXJlbmNlIiwiYXBwbHlUcmFuc2Zvcm0iLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJmYWNldCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZUZhY2V0cyIsImFtZW5kRmFjZXRzIiwiYWRkRmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJwcmVwYXJlIiwicHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJzY2FsZSIsInJvdGF0aW9ucyIsInBvc2l0aW9uIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNhbnZhc0VsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBWSxDQUFaLFFBQVk7QUFFVCxHQUFpQixDQUFqQixPQUFpQjtBQUNQLEdBQXdCLENBQXhCLFVBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Ry9CLFFBQU87SUF0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TUFBMEcsb0JBQW5CLGtCQUFrQjtnQkFFL0gsTUFBTSxDQUFDLGFBQWE7WUFDdEIsQ0FBQzs7O1dBekdrQixhQUFhO21CQUxkLFFBQVk7a0JBS1gsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWFza1JlZmVyZW5jZSA9IG1hc2tSZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbjtcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrUmVmZXJlbmNlLCBtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2sgPSB0aGlzLmZpbmRNYXNrKG1hc2tSZWZlcmVuY2UsIG1hc2tzKTtcblxuICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmluZE1hc2sobWFza1JlZmVyZW5jZSwgbWFza3MpIHtcbiAgICBjb25zdCBtYXNrID0gbWFza3MuZmluZCgobWFzaykgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbWFza1JlZmVyZW5jZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBtYXNrO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTtcblxuICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMubWFza1JlZmVyZW5jZSwgbWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgeyBzY2FsZSA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBsZXQgeyBwb3NpdGlvbiA9IG51bGwgfSA9IHByb3BlcnRpZXM7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5wcmVwYXJlKCkpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG1hc2tSZWZlcmVuY2UgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBudWxsLCAvLy9cbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgbWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iXX0=