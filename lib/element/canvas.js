"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
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
            key: "getMask",
            value: function getMask() {
                return this.mask;
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
            value: function applyMask(maskReference, masks) {
                var mask = masks.find(function(mask1) {
                    var reference = mask1.getReference();
                    if (reference === maskReference) {
                        return true;
                    }
                }) || null; ///
                if (mask !== null) {
                    var element = this; ///
                    mask.maskElement(element);
                }
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
            value: function createFacets(hidden) {
                var childElements = this.getChildElements();
                hidden = hidden || this.hidden; ///
                childElements.forEach(function(childElement) {
                    return childElement.createFacets(hidden);
                });
                return hidden;
            }
        },
        {
            key: "amendFacets",
            value: function amendFacets(masks) {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.amendFacets(masks);
                });
                this.applyTransform(this.transform);
                this.applyMask(this.maskReference, masks);
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
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations, _position = properties.position, position = _position === void 0 ? null : _position, _maskReference = properties.maskReference, maskReference = _maskReference === void 0 ? null : _maskReference, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, transform = (0, _transform).composeTransform(scale, rotations, position), facets = [], canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hc2tSZWZlcmVuY2UgPSBtYXNrUmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrUmVmZXJlbmNlLCBtYXNrcykge1xuICAgIGNvbnN0IG1hc2sgPSBtYXNrcy5maW5kKChtYXNrKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBtYXNrLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlID09PSBtYXNrUmVmZXJlbmNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgaWYgKG1hc2sgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGhpZGRlbiA9IGhpZGRlbiB8fCB0aGlzLmhpZGRlbjsgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhoaWRkZW4pKTtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBhbWVuZEZhY2V0cyhtYXNrcykge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMobWFza3MpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrUmVmZXJlbmNlLCBtYXNrcyk7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBzY2FsZSA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgbWFza1JlZmVyZW5jZSA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pLFxuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgaGlkZGVuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVRLEdBQVksQ0FBWixRQUFZO0FBRUMsR0FBd0IsQ0FBeEIsVUFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1GL0IsUUFBTztJQWpGWixhQUFhO2NBQWIsYUFBYTthQUFiLGFBQWEsQ0FDcEIsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVB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